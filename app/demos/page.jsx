import { PageHero, DemoCard, Cta } from "../../components/Blocks";
import { demos } from "../../data/site";

export const metadata = { title: "Live Demos — Try Websites, SEO Tools & Automation", description: "Interactive demos of a business website, an SEO snippet checker, an enquiry assistant, an expense dashboard and a website care report.", alternates: { canonical: "/demos" } };

export default function Demos() {
  return (
    <>
      <PageHero crumbs={[{ name: "Demos", href: "/demos" }]} eyebrow="Live demos" title="Try what I build — before you hire me" text="One interactive demo for every service. They use sample data, but everything you click really works." />
      <section className="sec"><div className="container"><div className="grid-3" data-stagger>{demos.map((d) => <div key={d.slug} data-reveal><DemoCard d={d} /></div>)}</div></div></section>
      <Cta title="Like a demo? Let's build the real one for you." />
    </>
  );
}
