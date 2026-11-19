"use client";

import Image from "next/image";
import { useState } from "react";
import Icon from "../Icon";

const batches = [
  { t: "Class 10 Board Prep", d: "Maths, Science, English · Mon–Sat", fee: "₹1,500/mo", tag: "Filling fast" },
  { t: "Class 12 Science", d: "Physics, Chemistry, Maths/Bio", fee: "₹2,200/mo", tag: "New batch" },
  { t: "OJEE / JEE Foundation", d: "Weekend + online test series", fee: "₹2,800/mo", tag: "" },
];

export default function WebsiteDemo() {
  const [view, setView] = useState("desktop");
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="dv-toggle" role="group" aria-label="Preview size">
        {["desktop", "tablet", "mobile"].map((v) => <button key={v} type="button" className={view === v ? "on" : ""} aria-pressed={view === v} onClick={() => setView(v)}>{v[0].toUpperCase() + v.slice(1)}</button>)}
      </div>
      <div className={`browser bw-${view}`}>
        <div className="browser-bar"><i /><i /><i /><span>sunrisecoaching.in (sample)</span></div>
        <div className="site">
          <header className="site-nav">
            <b><span className="site-logo">S</span> Sunrise Coaching</b>
            <nav className={open ? "open" : ""}><a>Batches</a><a>Results</a><a>Fees</a><a>Contact</a></nav>
            <button type="button" className="site-burger" onClick={() => setOpen(!open)} aria-label="Menu"><Icon name={open ? "close" : "menu"} size={18} /></button>
            <a className="site-cta">Book free demo</a>
          </header>
          <section className="site-hero">
            <div>
              <p className="site-k">Patia, Bhubaneswar · Since 2015 (sample)</p>
              <h2>Small batches. Big results.</h2>
              <p>Class 10, 12 and entrance coaching with weekly tests and personal attention.</p>
              <div className="site-btns"><a className="site-cta">Book a free demo class</a><a className="site-ghost"><Icon name="chat" size={14} /> WhatsApp us</a></div>
            </div>
            <div className="site-hero-img"><Image src="/images/stock/students.jpg" alt="" fill sizes="400px" /></div>
          </section>
          <section className="site-sec">
            <h3>Current batches</h3>
            <div className="site-grid">{batches.map((b) => <div key={b.t} className="site-card">{b.tag && <span className="site-tag">{b.tag}</span>}<b>{b.t}</b><span>{b.d}</span><em>{b.fee}</em></div>)}</div>
          </section>
          <section className="site-sec site-stats"><div><b>25</b><span>students per batch</span></div><div><b>Weekly</b><span>tests &amp; reports</span></div><div><b>Free</b><span>demo class</span></div></section>
          <section className="site-sec">
            <h3>Book a free demo class</h3>
            {sent ? <p className="site-ok"><Icon name="check" size={16} /> Thanks! We'll call you within a day. (Demo — nothing was sent.)</p> : (
              <form className="site-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <input placeholder="Student name" required aria-label="Student name" />
                <input placeholder="Phone number" required aria-label="Phone number" />
                <select aria-label="Class"><option>Class 10</option><option>Class 12</option><option>OJEE / JEE</option></select>
                <button type="submit">Book demo</button>
              </form>
            )}
          </section>
          <footer className="site-foot">Sunrise Coaching (sample business) · Patia, Bhubaneswar · Mon–Sat 7 AM – 8 PM</footer>
        </div>
      </div>
    </div>
  );
}
