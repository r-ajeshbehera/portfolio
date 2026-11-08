"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  ["/services", "Services"],
  ["/projects", "Projects"],
  ["/products", "Products"],
  ["/youtube", "YouTube"],
  ["/about", "About"],
  ["/blog", "Blog"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={scrolled || open ? "nav is-solid" : "nav"}>
      <div className="container nav-row">
        <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>Rajesh Behera</Link>
        <nav aria-label="Main" id="main-menu" className={open ? "nav-links open" : "nav-links"}>
          {links.map(([href, label]) => (
            <Link key={href} href={href} aria-current={path.startsWith(href) ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link href="/contact" className="btn btn-nav" onClick={() => setOpen(false)}>Contact Me</Link>
        </nav>
        <button type="button" className="nav-toggle" aria-expanded={open} aria-controls="main-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
