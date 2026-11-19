import Link from "next/link";
import Icon from "./Icon";
import ProjectVisual from "./ProjectVisual";
import { statusLabel } from "../data/agency";

export function SectionHead({ eyebrow, title, text, center = false }) {
  return (
    <div className={`section-head reveal ${center ? "center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="lead">{text}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {text && <p className="lead">{text}</p>}
        {children}
      </div>
    </section>
  );
}

export function ServiceCard({ s, i = 0 }) {
  const coming = s.status === "coming";
  return (
    <article className={`card service-card reveal d${i % 3}`}>
      <div className="card-top">
        <span className="svc-num">{String(i + 1).padStart(2, "0")}</span>
        <span className="icon-box"><Icon name={s.icon} /></span>
        <span className={`badge badge-${s.status}`}>{statusLabel[s.status]}</span>
      </div>
      <h3>{s.title}</h3>
      <p>{s.short}</p>
      {!coming && (
        <Link href={`/services/${s.slug}`} className="link-arrow">Learn more <Icon name="arrow" size={16} /></Link>
      )}
    </article>
  );
}

export function ProjectCard({ p, i = 0, priority = false }) {
  return (
    <Link href={`/work/${p.slug}`} className={`card project-card reveal d${i % 3}`}>
      <ProjectVisual project={p} priority={priority} />
      <div className="project-body">
        <div className="project-meta">
          <span className={`label ${p.label === "Demo project" ? "label-demo" : ""}`}>{p.label}</span>
          <span className="muted">{p.category}</span>
        </div>
        <h3>{p.title}</h3>
        <p>{p.summary}</p>
        <ul className="tags">{p.tools.map((t) => <li key={t}>{t}</li>)}</ul>
      </div>
    </Link>
  );
}

export function FaqList({ items }) {
  return (
    <div className="faq-list">
      {items.map((f) => (
        <details key={f.q} className="faq reveal">
          <summary><span>{f.q}</span><span className="faq-icon"><Icon name="plus" size={18} /></span></summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({ title = "Have a project in mind?", text = "Tell me about your business and the problem you want solved. I'll reply with questions or a time for a free call." }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band reveal">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-light">Discuss Your Project</Link>
            <Link href="/services" className="btn btn-outline-light">Explore Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Steps({ items, compact = false }) {
  return (
    <ol className={`steps ${compact ? "steps-compact" : ""}`}>
      {items.map((s, i) => (
        <li key={s.title} className={`step reveal d${i % 4}`}>
          <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
          <h3>{s.title}</h3>
          {s.text && <p>{s.text}</p>}
        </li>
      ))}
    </ol>
  );
}
