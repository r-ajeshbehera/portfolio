import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "../../../components/Icon";
import { PageHero, SectionHead, FaqList, CtaBand, ProjectCard, Steps } from "../../../components/Blocks";
import { services, projects } from "../../../data/agency";

const live = () => services.filter((s) => s.status !== "coming");
const related = { "website-development": ["automated-exam-portal", "sikshasadan"], "business-automation": ["coaching-enquiry-assistant", "jansunwai"], "sheets-and-trackers": ["business-expense-tracker"] };

export function generateStaticParams() { return live().map((s) => ({ slug: s.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = live().find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.title, description: s.short, alternates: { canonical: `/services/${s.slug}` } };
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const s = live().find((x) => x.slug === slug);
  if (!s) notFound();
  const rel = (related[s.slug] || []).map((id) => projects.find((p) => p.slug === id)).filter(Boolean);
  return (
    <>
      <PageHero eyebrow={s.status === "available" ? "Service · Available" : "Service · Pilot projects"} title={s.title} text={s.short}>
        <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span>{s.title}</span></nav>
        <div className="hero-ctas"><Link href={`/contact?service=${s.slug}`} className="btn btn-primary">Discuss Your Project <Icon name="arrow" size={18} /></Link></div>
      </PageHero>
      <section className="section">
        <div className="container split">
          <div className="reveal">
            <p className="eyebrow">The problem</p>
            <h2>Sound familiar?</h2>
            <ul className="problem-list">{s.problems.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
          <div className="card highlight reveal d1">
            <p className="eyebrow">The solution</p>
            <h2>How I help</h2>
            <p>{s.solution}</p>
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container split">
          <div className="reveal">
            <SectionHead eyebrow="Deliverables" title="What you get" />
            <ul className="check-list">{s.deliverables.map((d) => <li key={d}><Icon name="check" size={18} />{d}</li>)}</ul>
            <p className="muted small">Exact deliverables are confirmed in your written quote.</p>
          </div>
          <div className="reveal d1">
            <SectionHead eyebrow="Tools" title="Technologies used" />
            <ul className="tags lg">{s.tools.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Project stages" title="How the project runs" />
          <Steps items={s.stages.map((t) => ({ title: t }))} compact />
        </div>
      </section>
      {rel.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <SectionHead eyebrow="Related work" title="Examples" />
            <div className="grid-3">{rel.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}</div>
          </div>
        </section>
      )}
      <section className="section">
        <div className="container narrow">
          <SectionHead eyebrow="FAQ" title={`${s.title} questions`} center />
          <FaqList items={s.faqs} />
        </div>
      </section>
      <CtaBand title={`Interested in ${s.title.toLowerCase()}?`} />
    </>
  );
}
