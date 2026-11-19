"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button type="button" className={`totop ${show ? "show" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" tabIndex={show ? 0 : -1}>
      <Icon name="arrowUp" size={20} />
    </button>
  );
}
