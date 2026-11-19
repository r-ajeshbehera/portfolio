"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { nav, site } from "../data/site";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    const on = () => {
      setScrolled(window.scrollY > 10);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  const active = (href) => path === href || path.startsWith(href + "/");

  return (
    <header className={`hdr ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="hdr-bar container">
        <Link href="/" className="logo">
          <span className="logo-mark" aria-hidden="true">RB</span>
          <span className="logo-text">Rajesh Behera<small>Digital Studio</small></span>
        </Link>
        <nav className="hdr-nav" aria-label="Main">
          {nav.map((l) => (
            <Link key={l.href} href={l.href} className={active(l.href) ? "on" : ""} aria-current={active(l.href) ? "page" : undefined}>{l.label}</Link>
          ))}
        </nav>
        <Link href="/contact" className="btn btn-primary btn-sm hdr-cta">Get a free quote <Icon name="arrow" size={16} /></Link>
        <button className="hdr-toggle" aria-expanded={open} aria-controls="mnav" onClick={() => setOpen(!open)}>
          <span className="burger" aria-hidden="true"><i /><i /><i /></span>
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>
      <span className="hdr-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div id="mnav" className="mnav" aria-hidden={!open}>
        <nav className="container" aria-label="Mobile">
          {[{ href: "/", label: "Home" }, ...nav, { href: "/contact", label: "Contact" }].map((l, i) => (
            <Link key={l.href} href={l.href} style={{ "--i": i }} tabIndex={open ? 0 : -1} className={path === l.href ? "on" : ""}>{l.label}<Icon name="arrowUR" size={20} /></Link>
          ))}
          <Link href="/contact" className="btn btn-primary btn-lg" tabIndex={open ? 0 : -1}>Get a free quote</Link>
          <p className="mnav-mail"><a href={`mailto:${site.email}`} tabIndex={open ? 0 : -1}>{site.email}</a></p>
        </nav>
      </div>
    </header>
  );
}
