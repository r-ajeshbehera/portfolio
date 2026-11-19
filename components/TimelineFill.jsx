"use client";

import { useEffect, useRef } from "react";

// Fills the process line as the visitor scrolls through it.
export default function TimelineFill({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const on = () => {
      const r = el.getBoundingClientRect(), vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
      el.style.setProperty("--p", p.toFixed(3));
      el.querySelectorAll(".tl-step").forEach((s, i, all) => s.classList.toggle("done", p >= (i + 0.5) / all.length));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, []);
  return <div ref={ref} className="tl-wrap">{children}</div>;
}
