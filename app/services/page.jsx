import Link from "next/link";
import Image from "next/image";
import Icon from "../../components/Icon";
import ProjectQuiz from "../../components/ProjectQuiz";
import { PageHero, SectionHead, ServiceCard, Cta, CheckList } from "../../components/Blocks";
import { services, reasons } from "../../data/site";

export const metadata = {
  title: "Services — Website Design, SEO & Automation",
  description: "Website development, SEO & local search, business automation, Google Sheets dashboards and website care for small businesses in Bhubaneswar and across India.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  const live = services.filter((s) => s.status !== "coming");
  return (
    <>
      <PageHero crumbs={[{ name: "Services", href: "/services" }]} eyebrow="Services" title="Digital services that help small businesses grow" text="Start with the problem you want solved. I'll recommend the simplest solution that works — and quote it clearly before any work starts." image="/images/stock/collab.jpg">
        <div className="phero-actions"><Link href="/contact" className="btn btn-primary btn-lg">Get a free quote <Icon name="arrow" size={18} /></Link></div>
      </PageHero>

      <section className="sec">
        <div className="container">
          <div className="grid-3" data-stagger>{services.map((s) => <div key={s.slug} data-reveal><ServiceCard s={s} /></div>)}</div>
        </div>
      </section>

      <section className="sec sec-quiz">
        <div className="container quiz-grid">
          <div data-reveal><SectionHead eyebrow="Not sure?" title="Find the right service in 30 seconds" text="Three quick questions, one clear recommendation." /></div>
          <div data-reveal><ProjectQuiz /></div>
        </div>
      </section>

      {live.map((s, i) => (
        <section key={s.slug} className={`sec ${i % 2 === 0 ? "sec-mist" : ""}`} id={s.slug}>
          <div className="container split">
            <div className="media" data-reveal style={{ order: i % 2 ? 2 : 0 }}><Image src={s.image} alt={`${s.title} for small businesses`} fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
            <div data-reveal>
              <p className="eyebrow"><span className="eyebrow-dot" />{String(i + 1).padStart(2, "0")} · {s.timeline}</p>
              <h2>{s.title}</h2>
              <p className="lead">{s.intro}</p>
              <CheckList items={s.deliverables.slice(0, 4)} />
              <div className="phero-actions">
                <Link href={`/services/${s.slug}`} className="btn btn-primary">Explore {s.title.split(" ")[0]} <Icon name="arrow" size={16} /></Link>
                <span className="svc-from" style={{ alignSelf: "center" }}>From <b>{s.from}</b></span>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="sec">
        <div className="container">
          <SectionHead eyebrow="Included with every project" title="The standards I never skip" center />
          <div className="grid-3" data-stagger>
            {reasons.map((r) => (
              <div key={r.title} className="reason card" data-reveal><span className="reason-ic"><Icon name={r.icon} size={20} /></span><div><h3>{r.title}</h3><p>{r.text}</p></div></div>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
