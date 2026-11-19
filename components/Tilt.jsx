"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Gentle 3D tilt + light spot on cards marked [data-tilt]. Desktop pointers only.
export default function Tilt() {
  const path = usePathname();
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = [...document.querySelectorAll("[data-tilt]")];
    const move = (e) => {
      const el = e.currentTarget, r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.setProperty("--rx", `${(0.5 - y) * 6}deg`);
      el.style.setProperty("--ry", `${(x - 0.5) * 8}deg`);
      el.style.setProperty("--mx", `${x * 100}%`);
      el.style.setProperty("--my", `${y * 100}%`);
    };
    const leave = (e) => { e.currentTarget.style.setProperty("--rx", "0deg"); e.currentTarget.style.setProperty("--ry", "0deg"); };
    els.forEach((el) => { el.addEventListener("mousemove", move); el.addEventListener("mouseleave", leave); });
    return () => els.forEach((el) => { el.removeEventListener("mousemove", move); el.removeEventListener("mouseleave", leave); });
  }, [path]);
  return null;
}
