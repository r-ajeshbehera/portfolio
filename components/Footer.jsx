import Link from "next/link";
import Icon from "./Icon";
import { site, services } from "../data/agency";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link href="/" className="brand brand-light">
            <span className="brand-mark">RB</span>
            <span className="brand-text">Rajesh Behera<small>Digital Studio</small></span>
          </Link>
          <p>{site.tagline} Based in {site.location}, working with clients in person and online.</p>
          <div className="social">
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={20} /></a>
            <a href={site.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" size={20} /></a>
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Icon name="youtube" size={20} /></a>
          </div>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/process">Our Process</Link></li>
            <li><Link href="/work">Our Work</Link></li>
            <li><Link href="/industries">Industries</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            {services.filter((s) => s.status !== "coming").map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>
            ))}
            <li><Link href="/pricing">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul className="contact-list">
            <li><Icon name="mail" size={18} /><a href={`mailto:${site.email}`}>{site.email}</a></li>
            {site.whatsapp && <li><Icon name="chat" size={18} /><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>}
            <li><Icon name="pin" size={18} /><span>{site.location}</span></li>
          </ul>
          <Link href="/contact" className="btn btn-primary btn-sm">Discuss Your Project</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {year} {site.brand}. All rights reserved.</span>
        <span className="legal">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/accessibility">Accessibility</Link>
        </span>
      </div>
    </footer>
  );
}
