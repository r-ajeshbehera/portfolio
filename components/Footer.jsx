import Link from "next/link";
import { site, youtube } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{site.brand}</p>
          <p>{site.positioning}</p>
          <p className="footer-tag">{site.tagline}</p>
        </div>
        <nav aria-label="Explore">
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/products">Digital products</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <nav aria-label="Social">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={youtube.url} target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={`mailto:${site.email}`}>Email</a>
        </nav>
      </div>
      <div className="container footer-base">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms</Link></span>
      </div>
    </footer>
  );
}
