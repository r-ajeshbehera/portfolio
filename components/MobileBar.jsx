"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { site } from "../data/site";

// Sticky quick-action bar on phones, shown after the visitor scrolls past the first screen.
export default function MobileBar() {
  const path = usePathname();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  if (path === "/contact" || path === "/thank-you") return null;
  const second = site.whatsapp
    ? <a href={`https://wa.me/${site.whatsapp}`} className="btn btn-ghost" target="_blank" rel="noopener noreferrer"><Icon name="chat" size={16} /> WhatsApp</a>
    : site.phone
      ? <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn btn-ghost"><Icon name="phone" size={16} /> Call</a>
      : <a href={`mailto:${site.email}`} className="btn btn-ghost"><Icon name="mail" size={16} /> Email</a>;
  return (
    <div className={`mbar ${show ? "show" : ""}`} aria-hidden={!show}>
      {second}
      <Link href="/contact" className="btn btn-primary" tabIndex={show ? 0 : -1}>Free quote <Icon name="arrow" size={16} /></Link>
    </div>
  );
}
