"use client";

import { useEffect, useRef, useState } from "react";
import { services, site } from "../data/site";

const empty = { name: "", email: "", service: "", details: "", company: "" };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Enter a valid email address, like name@example.com.";
  if (!v.service) e.service = "Choose the service you need.";
  if (v.details.trim().length < 10) e.details = "Describe your project in at least 10 characters.";
  return e;
}

export default function ContactForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("idle");
  const startedAt = useRef(Date.now());
  const form = useRef(null);

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("service");
    const match = services.find((s) => s.id === id);
    if (match) setValues((v) => ({ ...v, service: match.title }));
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
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, startedAt: startedAt.current }),
      });
      if (!res.ok) throw new Error("failed");
      setValues(empty);
      setState("sent");
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
    <form ref={form} className="card form" onSubmit={submit} noValidate>
      <div className="field"><label htmlFor="name">Name</label><input {...field("name")} autoComplete="name" />{err("name")}</div>
      <div className="field"><label htmlFor="email">Email</label><input {...field("email")} type="email" autoComplete="email" />{err("email")}</div>
      <div className="field">
        <label htmlFor="service">Service required</label>
        <select {...field("service")}>
          <option value="">Choose a service</option>
          {services.map((s) => <option key={s.id}>{s.title}</option>)}
          <option>Something else</option>
        </select>
        {err("service")}
      </div>
      <div className="field"><label htmlFor="details">Project details</label><textarea {...field("details")} rows={5} />{err("details")}</div>
      <div className="hp" aria-hidden="true"><label htmlFor="company">Company</label><input id="company" name="company" tabIndex={-1} autoComplete="off" value={values.company} onChange={change} /></div>
      <button className="btn btn-primary" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending your message..." : "Send message"}</button>
      <div role="status" className="form-status">
        {state === "sent" && <p className="ok">Message sent. I will reply by email within two working days.</p>}
        {state === "failed" && <p className="field-error">Your message could not be sent. Email me at <a href={`mailto:${site.email}`}>{site.email}</a> instead.</p>}
      </div>
    </form>
  );
}
