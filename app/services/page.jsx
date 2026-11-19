import Link from "next/link";
import Icon from "../../components/Icon";
import { PageHero, SectionHead, ServiceCard, CtaBand } from "../../components/Blocks";
import { services } from "../../data/agency";

export const metadata = {
  title: "Services",
  description: "Website development, business automation and Google Sheets systems for startups and small businesses.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  const active = services.filter((s) => s.status !== "coming");
  const coming = services.filter((s) => s.status === "coming");
  return (
    <>
      <PageHero eyebrow="Services" title="Services built around real business problems" text="Each service starts with a free call and a written quote. Pick what helps your business most right now." />
      <section className="section">
        <div className="container">
          <div className="service-rows">
            {active.map((s, i) => (
              <article key={s.slug} className="card service-row reveal">
                <div className="service-row-head">
                  <span className="icon-box"><Icon name={s.icon} /></span>
                  <div>
                    <span className={`badge badge-${s.status}`}>{s.status === "available" ? "Available" : "Pilot projects"}</span>
                    <h2>{s.title}</h2>
                    <p>{s.short}</p>
                  </div>
                </div>
                <ul className="check-list">{s.deliverables.slice(0, 4).map((d) => <li key={d}><Icon name="check" size={18} />{d}</li>)}</ul>
                <div className="service-row-actions">
                  <Link href={`/services/${s.slug}`} className="btn btn-ghost">View details</Link>
                  <Link href={`/contact?service=${s.slug}`} className="btn btn-primary">Enquire about this</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <SectionHead eyebrow="Coming soon" title="Services in preparation" text="These are not available yet. They'll be listed as available only when I can deliver them well." />
          <div className="grid-2">{coming.map((s, i) => <ServiceCard key={s.slug} s={s} i={i} />)}</div>
        </div>
      </section>
      <CtaBand title="Not sure which service you need?" text="Describe the problem in a few lines. I'll suggest the simplest option — even if it's not something I sell." />
    </>
  );
}
