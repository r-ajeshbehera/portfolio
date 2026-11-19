"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "./Icon";
import { services } from "../data/site";

const qs = [
  { q: "What's your biggest challenge right now?", a: [
    { t: "We don't have a website, or it looks outdated", s: { "website-development": 3 } },
    { t: "People can't find us on Google", s: { "seo-local-search": 3, "website-development": 1 } },
    { t: "We miss enquiries or forget to follow up", s: { "business-automation": 3 } },
    { t: "We don't know our real sales and expenses", s: { "sheets-dashboards": 3 } },
  ] },
  { q: "Do you already have a website?", a: [
    { t: "No", s: { "website-development": 2 } },
    { t: "Yes, but it needs a redesign", s: { "website-development": 2, "seo-local-search": 1 } },
    { t: "Yes, and it works fine", s: { "seo-local-search": 1, "website-care": 2 } },
  ] },
  { q: "Where do most customers contact you?", a: [
    { t: "WhatsApp / phone", s: { "business-automation": 2 } },
    { t: "Walk-ins and word of mouth", s: { "seo-local-search": 2, "website-development": 1 } },
    { t: "Website or email", s: { "business-automation": 1, "website-care": 1 } },
    { t: "Not sure yet", s: { "website-development": 1 } },
  ] },
];

export default function ProjectQuiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState({});
  const pick = (s) => {
    const next = { ...score };
    Object.entries(s).forEach(([k, v]) => { next[k] = (next[k] || 0) + v; });
    setScore(next);
    setStep(step + 1);
  };
  const done = step >= qs.length;
  const ranked = Object.entries(score).sort((a, b) => b[1] - a[1]).map(([k]) => services.find((s) => s.slug === k)).filter(Boolean);
  const best = ranked[0], second = ranked[1];

  return (
    <div className="quiz">
      <div className="quiz-bar" aria-hidden="true"><span style={{ width: `${(Math.min(step, qs.length) / qs.length) * 100}%` }} /></div>
      {!done ? (
        <div className="quiz-step" key={step}>
          <p className="quiz-n">Question {step + 1} of {qs.length}</p>
          <h3>{qs[step].q}</h3>
          <div className="quiz-opts">
            {qs[step].a.map((o) => <button type="button" key={o.t} onClick={() => pick(o.s)}>{o.t}<Icon name="arrow" size={16} /></button>)}
          </div>
          {step > 0 && <button type="button" className="quiz-back" onClick={() => { setStep(0); setScore({}); }}>Start again</button>}
        </div>
      ) : (
        <div className="quiz-step quiz-result" key="r">
          <p className="quiz-n">Your recommendation</p>
          <h3>Start with <span className="hl">{best.title}</span></h3>
          <p>{best.short}</p>
          {second && <p className="muted">Then consider: <Link href={`/services/${second.slug}`}>{second.title}</Link></p>}
          <div className="phero-actions" style={{ marginTop: 18 }}>
            <Link href={`/contact?service=${best.slug}`} className="btn btn-primary">Get a free quote <Icon name="arrow" size={16} /></Link>
            <Link href={`/services/${best.slug}`} className="btn btn-ghost">Learn more</Link>
          </div>
          <button type="button" className="quiz-back" onClick={() => { setStep(0); setScore({}); }}>Take the quiz again</button>
        </div>
      )}
    </div>
  );
}
