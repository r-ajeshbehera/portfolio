"use client";

import { useState } from "react";
import { ProjectCard } from "./Blocks";

export default function WorkGrid({ items }) {
  const cats = ["All", ...new Set(items.map((p) => p.label))];
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? items : items.filter((p) => p.label === cat);
  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects">
        {cats.map((c) => (
          <button key={c} type="button" className={c === cat ? "on" : ""} aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="grid-3 work-grid" key={cat}>
        {shown.map((p, i) => <div key={p.slug} className="pop" style={{ "--d": `${i * 70}ms` }}><ProjectCard p={p} priority={i < 3} /></div>)}
      </div>
    </>
  );
}
