"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function Accordion({ items, first = true }) {
  const [open, setOpen] = useState(first ? 0 : -1);
  return (
    <div className="acc">
      {items.map((f, i) => {
        const on = open === i;
        return (
          <div key={f.q} className={`acc-item ${on ? "on" : ""}`}>
            <h3>
              <button type="button" aria-expanded={on} aria-controls={`acc-${i}`} id={`acc-b-${i}`} onClick={() => setOpen(on ? -1 : i)}>
                <span>{f.q}</span><span className="acc-ic"><Icon name="plus" size={18} /></span>
              </button>
            </h3>
            <div className="acc-panel" id={`acc-${i}`} role="region" aria-labelledby={`acc-b-${i}`}>
              <div><p>{f.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
