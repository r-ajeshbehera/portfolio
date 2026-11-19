"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Fade/slide elements with [data-reveal] into view; children of [data-stagger] animate one after another.
export default function Reveal() {
  const path = usePathname();
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]:not(.in)");
    document.querySelectorAll("[data-stagger]").forEach((g) => {
      [...g.children].forEach((c, i) => c.style.setProperty("--d", `${Math.min(i, 8) * 80}ms`));
    });
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);
  return null;
}
