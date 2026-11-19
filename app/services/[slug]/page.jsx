import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "../../../components/Icon";
import Accordion from "../../../components/Accordion";
import { PageHero, ServiceCard, Cta, CheckList, JsonLd, SectionHead } from "../../../components/Blocks";
import { site, services } from "../../../data/site";

const live = services.filter((s) => s.status !== "coming");
export function generateStaticParams() { return live.map((s) => ({ slug: s.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = live.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.title} in Bhubaneswar`,
    description: `${s.short} Starting from ${s.from}. Free consultation and a written quote from ${site.brand}.`,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: `${s.title} | ${site.short}`, description: s.short, images: [s.image] },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = live.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = live.filter((x) => x.slug !== s.slug).slice(0, 3);
  const ld = [
    { "@context": "https://schema.org", "@type": "Service", name: s.title, description: s.intro, serviceType: s.title, url: `${site.url}/services/${s.slug}`, image: `${site.url}${s.image}`, provider: { "@id": `${site.url}/#business` }, areaServed: "IN" },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];
  return (
    <>
      <JsonLd data={ld} />
      <PageHero crumbs={[{ name: "Services", href: "/services" }, { name: s.title, href: `/services/${s.slug}` }]} eyebrow={s.status === "pilot" ? "Service · Pilot" : "Service"} title={s.title} text={s.intro} image={s.image}>
        <div className="phero-meta"><span><Icon name="calendar" size={16} /> {s.timeline}</span><span><Icon name="file" size={16} /> From {s.from}</span><span><Icon name="check" size={16} /> Written quote first</span></div>
        <div className="phero-actions"><Link href={`/contact?service=${s.slug}`} className="btn btn-primary btn-lg">Get a free quote <Icon name="arrow" size={18} /></Link></div>
      </PageHero>

      <section className="sec">
        <div className="container svc-layout">
          <div>
            <div className="block" data-reveal>
              <p className="eyebrow"><span className="eyebrow-dot" />The problem</p>
              <h2>Sound familiar?</h2>
              <ul className="problems">{s.problems.map((p) => <li key={p}><span className="x">!</span><span>{p}</span></li>)}</ul>
            </div>
            <div className="block" data-reveal>
              <p className="eyebrow"><span className="eyebrow-dot" />What you get</p>
              <h2>Deliverables</h2>
              <CheckList items={s.deliverables} />
            </div>
            <div className="block" data-reveal>
              <p className="eyebrow"><span className="eyebrow-dot" />How it works</p>
              <h2>Project stages</h2>
              <ol className="stages">{s.stages.map((x) => <li key={x}>{x}</li>)}</ol>
            </div>
            <div className="block" data-reveal>
              <p className="eyebrow"><span className="eyebrow-dot" />Tools</p>
              <h2>What I use</h2>
              <ul className="toollist">{s.tools.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
            <div className="block" data-reveal>
              <p className="eyebrow"><span className="eyebrow-dot" />FAQ</p>
              <h2>Common questions</h2>
              <Accordion items={s.faqs} />
            </div>
          </div>
          <aside className="price-box" data-reveal>
            <p className="from">Starting from</p>
            <p className="amt">{s.from}</p>
            <p className="muted" style={{ fontSize: ".9rem" }}>Final price depends on scope and is confirmed in a written quote.</p>
            <hr />
            <dl>
              <div><dt>Typical timeline</dt><dd>{s.timeline}</dd></div>
              <div><dt>Consultation</dt><dd>Free</dd></div>
              <div><dt>Ownership</dt><dd>100% yours</dd></div>
              <div><dt>Languages</dt><dd>EN · HI · OD</dd></div>
            </dl>
            <Link href={`/contact?service=${s.slug}`} className="btn btn-primary btn-block">Request a quote <Icon name="arrow" size={16} /></Link>
          </aside>
        </div>
      </section>

      <section className="sec sec-mist">
        <div className="container">
          <SectionHead eyebrow="Related" title="Other services" />
          <div className="grid-3" data-stagger>{others.map((x) => <div key={x.slug} data-reveal><ServiceCard s={x} /></div>)}</div>
        </div>
      </section>
      <Cta title={`Let's talk about your ${s.title.toLowerCase()} project`} />
    </>
  );
}
