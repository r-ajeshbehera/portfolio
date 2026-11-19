"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { site } from "../data/agency";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const active = (href) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""} ${path === "/" ? "nav-home" : ""}`}>
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label={`${site.brand} home`}>
          <span className="brand-mark">RB</span>
          <span className="brand-text">Rajesh Behera<small>Digital Studio</small></span>
        </Link>
        <nav aria-label="Main" className="nav-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={active(l.href) ? "active" : ""} aria-current={active(l.href) ? "page" : undefined}>{l.label}</Link>
          ))}
        </nav>
        <Link href="/contact" className="btn btn-primary btn-sm nav-cta">Book a call <span className="arw" aria-hidden="true"><Icon name="arrow" size={13} /></span></Link>
        <button className="nav-toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          <Icon name={open ? "close" : "menu"} />
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`} hidden={!open}>
        <div className="container">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={active(l.href) ? "active" : ""}>{l.label}</Link>
          ))}
          <Link href="/contact" className="btn btn-primary">Discuss Your Project</Link>
        </div>
      </div>
    </header>
  );
}
