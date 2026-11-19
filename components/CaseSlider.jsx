"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "./Icon";
import ProjectVisual from "./ProjectVisual";

/* Lawency-style featured case slider with 01 / 0N counter. Shows real projects only. */
export default function CaseSlider({ items }) {
  const [i, setI] = useState(0);
  const n = items.length;
  const p = items[i];
  const pad = (x) => String(x).padStart(2, "0");
  const go = (d) => setI((i + d + n) % n);
  return (
    <div className="case-slider reveal">
      <div className="case-media"><ProjectVisual project={p} /></div>
      <div className="case-body" aria-live="polite">
        <div className="case-top">
          <span className={`label ${p.label === "Demo project" ? "label-demo" : ""}`}>{p.label}</span>
          <span className="case-count"><b>{pad(i + 1)}</b> / {pad(n)}</span>
        </div>
        <h3>{p.title}</h3>
        <dl className="case-ps">
          <div><dt>Problem</dt><dd>{p.problem}</dd></div>
          <div><dt>What was built</dt><dd>{p.solution}</dd></div>
        </dl>
        <ul className="tags">{p.tools.map((t) => <li key={t}>{t}</li>)}</ul>
        <div className="case-actions">
          <Link href={`/work/${p.slug}`} className="link-arrow">Read the case <Icon name="arrow" size={16} /></Link>
          <div className="case-nav">
            <button type="button" onClick={() => go(-1)} aria-label="Previous project"><Icon name="arrow" size={18} className="flip" /></button>
            <button type="button" onClick={() => go(1)} aria-label="Next project"><Icon name="arrow" size={18} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
