import { PageHero, FaqList, CtaBand } from "../../components/Blocks";
import { faqs } from "../../data/agency";

export const metadata = { title: "FAQ", description: "Answers to common questions about services, pricing, timelines and support.", alternates: { canonical: "/faq" } };

export default function Faq() {
  const ld = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PageHero eyebrow="FAQ" title="Frequently asked questions" text="Clear answers about how I work. Can't find yours? Just ask." />
      <section className="section"><div className="container narrow"><FaqList items={faqs} /></div></section>
      <CtaBand title="Still have a question?" />
    </>
  );
}
