"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { services, site, budgets as budgetOptions } from "../data/site";
import Icon from "./Icon";

const empty = { name: "", email: "", phone: "", org: "", service: "", budget: "", details: "", company: "" };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Please enter a valid email, like name@business.com.";
  if (!v.service) e.service = "Please choose the service you need.";
  if (v.details.trim().length < 20) e.details = "Please describe your project in at least 20 characters.";
  return e;
}

export default function ContactForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("idle");
  const startedAt = useRef(Date.now());
  const form = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const match = services.find((s) => s.slug === q.get("service"));
    const budget = q.get("budget");
    const industry = q.get("industry");
    setValues((v) => ({
      ...v,
      service: match ? match.title : v.service,
      budget: budget && budgetOptions.includes(budget) ? budget : v.budget,
      details: industry && !v.details ? `Business type: ${industry}\n` : v.details,
    }));
  }, []);

  const change = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((x) => ({ ...x, [name]: undefined }));
  };

  async function submit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) { form.current.elements[first].focus(); return; }
    setState("sending");
    const extra = [values.phone && `Phone/WhatsApp: ${values.phone}`, values.org && `Company: ${values.org}`, values.budget && `Budget: ${values.budget}`].filter(Boolean).join("\n");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name, email: values.email, service: values.service,
          details: extra ? `${extra}\n\n${values.details}` : values.details,
          company: values.company, startedAt: startedAt.current,
        }),
      });
      if (!res.ok) throw new Error("failed");
      router.push("/thank-you");
    } catch {
      setState("failed");
    }
  }

  const field = (name) => ({
    id: name, name, value: values[name], onChange: change,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });
  const err = (name) => errors[name] && <p className="field-error" id={`${name}-error`}>{errors[name]}</p>;

  return (
    <form ref={form} className="form" onSubmit={submit} noValidate>
      <div className="form-row">
        <div className="field"><label htmlFor="name">Full name <span aria-hidden="true">*</span></label><input {...field("name")} autoComplete="name" required />{err("name")}</div>
        <div className="field"><label htmlFor="email">Business email <span aria-hidden="true">*</span></label><input {...field("email")} type="email" autoComplete="email" required />{err("email")}</div>
      </div>
      <div className="form-row">
        <div className="field"><label htmlFor="phone">Phone / WhatsApp <span className="opt">(optional)</span></label><input {...field("phone")} type="tel" autoComplete="tel" inputMode="tel" placeholder="+91" /></div>
        <div className="field">
          <label htmlFor="service">Service required <span aria-hidden="true">*</span></label>
          <select {...field("service")} required>
            <option value="">Choose a service</option>
            {services.filter((s) => s.status !== "coming").map((s) => <option key={s.slug}>{s.title}</option>)}
            <option>Not sure yet</option>
          </select>
          {err("service")}
        </div>
      </div>
      <div className="form-row">
      <div className="field"><label htmlFor="org">Company name <span className="opt">(optional)</span></label><input {...field("org")} autoComplete="organization" /></div>
      <div className="field">
        <label htmlFor="budget">Estimated budget <span className="opt">(optional)</span></label>
        <select {...field("budget")}>
          <option value="">Prefer not to say</option>
          {budgetOptions.map((b) => <option key={b}>{b}</option>)}
        </select>
      </div>
      </div>
      <div className="field"><label htmlFor="details">Project description <span aria-hidden="true">*</span></label><textarea {...field("details")} rows={5} placeholder="What does your business do, and what would you like to improve?" required />{err("details")}</div>
      <div className="hp" aria-hidden="true"><label htmlFor="company">Leave empty</label><input id="company" name="company" tabIndex={-1} autoComplete="off" value={values.company} onChange={change} /></div>
      <button className="btn btn-primary btn-lg btn-block" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : <>Send enquiry <Icon name="arrow" size={18} /></>}</button>
      <div role="status" aria-live="polite" className="form-status">
        {state === "failed" && (
          <p className="form-fallback">Sorry, the form couldn't send right now — your details are safe. <a href={`mailto:${site.email}?subject=${encodeURIComponent("Project enquiry: " + (values.service || "Website"))}&body=${encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nCompany: ${values.org}\nBudget: ${values.budget}\n\n${values.details}`)}`}>Click here to send it by email instead</a>.</p>
        )}
      </div>
      <p className="form-note">Your details are used only to reply to your enquiry. See the <a href="/privacy">Privacy Policy</a>.</p>
    </form>
  );
}
