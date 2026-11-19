import Link from "next/link";
import Icon from "../../components/Icon";
import { PageHero, SectionHead, CtaBand } from "../../components/Blocks";

export const metadata = { title: "Pricing", description: "How pricing works: every project gets a written, custom quote.", alternates: { canonical: "/pricing" } };

const tiers = [
  { name: "Starter", for: "A simple landing page, one tracker, or one small automation.", items: ["Clear, fixed scope", "One round of revisions", "Handover walkthrough"] },
  { name: "Business", for: "A multi-page business website or a connected set of tools.", items: ["Planned page structure", "Two rounds of revisions", "Basic SEO setup", "Handover walkthrough"], featured: true },
  { name: "Custom", for: "Web applications or larger automation projects.", items: ["Requirements workshop", "Milestone-based delivery", "Revisions per milestone", "Support terms agreed in writing"] },
];

export default function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Transparent, custom quotes" text="Every business is different, so I don't publish fixed prices. You get a written quote with the exact price before any work starts." />
      <section className="section">
        <div className="container grid-3">
          {tiers.map((t, i) => (
            <article key={t.name} className={`card tier reveal d${i} ${t.featured ? "tier-featured" : ""}`}>
              <h2>{t.name}</h2>
              <p className="muted">{t.for}</p>
              <p className="price">Custom quote</p>
              <ul className="check-list">{t.items.map((x) => <li key={x}><Icon name="check" size={18} />{x}</li>)}</ul>
              <Link href="/contact" className={`btn ${t.featured ? "btn-primary" : "btn-ghost"} btn-block`}>Request a quote</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-alt">
        <div className="container split">
          <div className="reveal">
            <SectionHead eyebrow="What's in every quote" title="No surprises" />
            <ul className="check-list">
              <li><Icon name="check" size={18} />What's included — and what isn't</li>
              <li><Icon name="check" size={18} />Total price and payment milestones</li>
              <li><Icon name="check" size={18} />Number of revision rounds</li>
              <li><Icon name="check" size={18} />Delivery date</li>
              <li><Icon name="check" size={18} />Support after launch, if included</li>
            </ul>
          </div>
          <div className="card highlight reveal d1">
            <p className="eyebrow">Payments</p>
            <h2>Milestone-based</h2>
            <p>Payment milestones are agreed in writing in your quote, so you pay as visible progress is made. Third-party costs such as domain or hosting are listed separately.</p>
          </div>
        </div>
      </section>
      <CtaBand title="Get your custom quote" />
    </>
  );
}
