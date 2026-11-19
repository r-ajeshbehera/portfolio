import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Icon from "../../../components/Icon";
import ProjectVisual from "../../../components/ProjectVisual";
import { CtaBand } from "../../../components/Blocks";
import { projects } from "../../../data/agency";

export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.title, description: p.summary, alternates: { canonical: `/work/${p.slug}` } };
}

export default async function Project({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/work">Our Work</Link> / <span>{p.title}</span></nav>
          <div className="project-meta"><span className={`label ${p.label === "Demo project" ? "label-demo" : ""}`}>{p.label}</span><span className="muted">{p.category}</span></div>
          <h1>{p.title}</h1>
          <p className="lead">{p.summary}</p>
          <div className="hero-ctas">
            {p.links.live && <a className="btn btn-primary" href={p.links.live} target="_blank" rel="noopener noreferrer">Visit live site <Icon name="arrow" size={18} /></a>}
            {p.links.github && <a className="btn btn-ghost" href={p.links.github} target="_blank" rel="noopener noreferrer"><Icon name="github" size={18} /> View code</a>}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="detail-visual reveal"><ProjectVisual project={p} priority /></div>
          <div className="split mt">
            <div className="reveal"><p className="eyebrow">Problem</p><h2>The challenge</h2><p>{p.problem}</p></div>
            <div className="reveal d1"><p className="eyebrow">Solution</p><h2>What was built</h2><p>{p.solution}</p></div>
          </div>
          <div className="reveal mt"><p className="eyebrow">Technologies</p><ul className="tags lg">{p.tools.map((t) => <li key={t}>{t}</li>)}</ul></div>
          {p.shots && (
            <div className="shots mt">
              {p.shots.map((s) => (
                <figure key={s.src} className="card shot reveal">
                  <div className="shot-img"><Image src={s.src} alt={s.caption} fill sizes="(max-width: 900px) 100vw, 33vw" /></div>
                  <figcaption>{s.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
          {p.label === "Demo project" && <p className="note mt">This is a demonstration project built with sample data. It is not a client engagement.</p>}
        </div>
      </section>
      <CtaBand title="Want something similar for your business?" />
    </>
  );
}
