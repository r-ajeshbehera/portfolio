import Accordion from "../../components/Accordion";
import { PageHero, Cta, JsonLd } from "../../components/Blocks";
import { faqs } from "../../data/site";

export const metadata = { title: "FAQ — Website, SEO & Automation Questions", description: "Answers to common questions about website cost, timelines, SEO, maintenance and working with Rajesh Behera Digital Studio.", alternates: { canonical: "/faq" } };

export default function Faq() {
  const ld = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <>
      <JsonLd data={ld} />
      <PageHero crumbs={[{ name: "FAQ", href: "/faq" }]} eyebrow="FAQ" title="Frequently asked questions" text="Everything you need to know before we start. Can't find your answer? Just ask." />
      <section className="sec"><div className="container narrow" data-reveal><Accordion items={faqs} /></div></section>
      <Cta />
    </>
  );
}
