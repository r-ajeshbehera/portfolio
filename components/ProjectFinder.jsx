"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "./Icon";
import { services, industries } from "../data/agency";

export const budgets = ["Under ₹10,000", "₹10,000 – ₹25,000", "₹25,000 – ₹50,000", "Above ₹50,000"];

export default function ProjectFinder() {
  const router = useRouter();
  const [v, setV] = useState({ service: "", industry: "", budget: "" });
  const set = (e) => setV((x) => ({ ...x, [e.target.name]: e.target.value }));
  function go(e) {
    e.preventDefault();
    const q = new URLSearchParams();
    Object.entries(v).forEach(([k, val]) => val && q.set(k, val));
    router.push(`/contact${q.toString() ? `?${q}` : ""}`);
  }
  return (
    <form className="finder reveal d2" onSubmit={go} aria-label="Plan your project">
      <div className="finder-head">
        <span className="finder-icon"><Icon name="wrench" size={16} /></span>
        <div>
          <b>Plan your project</b>
          <span>Choose what you need — I'll reply with the simplest way to build it.</span>
        </div>
      </div>
      <div className="finder-row">
        <label className="finder-field">
          <span>Service</span>
          <select name="service" value={v.service} onChange={set}>
            <option value="">Any service</option>
            {services.filter((s) => s.status !== "coming").map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
          </select>
        </label>
        <label className="finder-field">
          <span>Business type</span>
          <select name="industry" value={v.industry} onChange={set}>
            <option value="">Any business</option>
            {industries.map((i) => <option key={i.title}>{i.title}</option>)}
          </select>
        </label>
        <label className="finder-field">
          <span>Budget</span>
          <select name="budget" value={v.budget} onChange={set}>
            <option value="">Not sure yet</option>
            {budgets.map((b) => <option key={b}>{b}</option>)}
          </select>
        </label>
        <button className="btn btn-primary finder-btn" type="submit">Get Started <Icon name="arrow" size={18} /></button>
      </div>
    </form>
  );
}
