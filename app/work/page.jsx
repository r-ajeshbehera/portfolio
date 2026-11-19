import Link from "next/link";
import { PageHero, Cta, DemoCard, SectionHead } from "../../components/Blocks";
import WorkGrid from "../../components/WorkGrid";
import { projects, demos } from "../../data/site";

export const metadata = {
  title: "Work & Case Studies",
  description: "Websites, web applications and automation projects by Rajesh Behera Digital Studio — every project honestly labelled as personal, team or demo work.",
  alternates: { canonical: "/work" },
};

export default function Work() {
  return (
    <>
      <PageHero crumbs={[{ name: "Work", href: "/work" }]} eyebrow="Work" title="Projects & case studies" text="Real software I've built — with recorded demo videos. Team projects say so, and every claim can be checked on GitHub." />
      <section className="sec"><div className="container"><WorkGrid items={projects} /></div></section>
      <section className="sec sec-mist">
        <div className="container">
          <SectionHead eyebrow="Service demos" title="Interactive demos for each service" text="Built with sample data so you can try them yourself." action={<Link href="/demos" className="btn btn-ghost">All demos</Link>} />
          <div className="grid-3" data-stagger>{demos.slice(0, 3).map((d) => <div key={d.slug} data-reveal><DemoCard d={d} /></div>)}</div>
        </div>
      </section>
      <Cta title="Want something like this for your business?" />
    </>
  );
}
