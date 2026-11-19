import Link from "next/link";
import Accordion from "../../components/Accordion";
import { PageHero, SectionHead, Cta, CheckList, JsonLd } from "../../components/Blocks";
import { site, plans, services } from "../../data/site";

export const metadata = { title: "Pricing — Website Design & SEO Packages", description: "Transparent starting prices for business websites, SEO, automation and website care. Every project gets a written quote first.", alternates: { canonical: "/pricing" } };

const pfaq = [
  { q: "Are these fixed prices?", a: "They're starting prices for typical projects. After a free call you receive a written quote with the exact price for your scope." },
  { q: "How do payments work?", a: "Usually 50% to start and 50% at launch for smaller projects, or milestone payments for larger ones — always agreed in writing." },
  { q: "What's not included?", a: "Third-party costs such as your domain name, hosting, paid plugins or stock photos are listed separately in your quote." },
  { q: "Do you offer discounts for startups or NGOs?", a: "Ask me. I'm happy to discuss a scope that fits your budget." },
];

export default function Pricing() {
  const ld = { "@context": "https://schema.org", "@type": "OfferCatalog", name: `${site.brand} pricing`, itemListElement: plans.filter((p) => p.price.startsWith("₹")).map((p) => ({ "@type": "Offer", name: p.name, description: p.for, priceCurrency: "INR", price: p.price.replace(/[^\d]/g, "") })) };
  return (
    <>
      <JsonLd data={ld} />
      <PageHero crumbs={[{ name: "Pricing", href: "/pricing" }]} eyebrow="Pricing" title="Simple, transparent pricing" text="Clear starting prices, a written quote for every project, and no hidden costs." />
      <section className="sec">
        <div className="container">
          <div className="plans plans-light" data-stagger>
            {plans.map((p) => (
              <article key={p.name} className={`plan ${p.featured ? "plan-hot" : ""}`} data-reveal>
                {p.featured && <span className="plan-flag">Most popular</span>}
                <h3>{p.name}</h3>
                <p className="plan-for">{p.for}</p>
                <p className="plan-price"><b>{p.price}</b> <span>{p.unit}</span></p>
                <CheckList items={p.items} />
                <Link href="/contact" className={`btn btn-block ${p.featured ? "btn-primary" : "btn-outline-white"}`}>Get started</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="sec sec-mist">
        <div className="container">
          <SectionHead eyebrow="By service" title="Starting prices for each service" center />
          <div className="grid-3" data-stagger>
            {services.filter((s) => s.from).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card value" data-reveal style={{ color: "inherit" }}>
                <h3>{s.title}</h3><p style={{ margin: "6px 0 14px" }}>{s.short}</p><p className="svc-from" style={{ margin: 0 }}>From <b>{s.from}</b> · {s.timeline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="container narrow">
          <SectionHead eyebrow="Pricing FAQ" title="Questions about cost" center />
          <Accordion items={pfaq} />
        </div>
      </section>
      <Cta title="Get your custom quote" />
    </>
  );
}
