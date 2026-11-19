import Link from "next/link";
import Icon from "./Icon";
import BackToTop from "./BackToTop";
import { site, services } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ftr">
      <div className="container ftr-top">
        <div className="ftr-brand">
          <Link href="/" className="logo logo-light"><span className="logo-mark">RB</span><span className="logo-text">Rajesh Behera<small>Digital Studio</small></span></Link>
          <p>{site.tagline} Based in {site.location}, working with businesses across India.</p>
          <div className="ftr-social">
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
            <a href={site.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" size={18} /></a>
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Icon name="youtube" size={18} /></a>
          </div>
        </div>
        <div>
          <h2>Services</h2>
          <ul>{services.filter((s) => s.status !== "coming").map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <h2>Studio</h2>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/process">Process</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/industries">Industries</Link></li>
            <li><Link href="/blog">Insights</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul className="ftr-contact">
            <li><Icon name="mail" size={18} /><a href={`mailto:${site.email}`}>{site.email}</a></li>
            {site.phone && <li><Icon name="phone" size={18} /><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></li>}
            <li><Icon name="pin" size={18} /><span>{site.location}</span></li>
            <li><Icon name="clock" size={18} /><span>{site.hours}</span></li>
          </ul>
          <Link href="/contact" className="btn btn-primary btn-sm">Start a project <Icon name="arrow" size={16} /></Link>
        </div>
      </div>
      <div className="container ftr-big" aria-hidden="true">Let's build.</div>
      <div className="container ftr-bottom">
        <span>© {year} {site.brand}. All rights reserved.</span>
        <span className="ftr-legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/accessibility">Accessibility</Link>
          <a href="/sitemap.xml">Sitemap</a>
        </span>
      </div>
      <BackToTop />
    </footer>
  );
}
