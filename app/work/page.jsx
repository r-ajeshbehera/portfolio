import { PageHero, Cta } from "../../components/Blocks";
import WorkGrid from "../../components/WorkGrid";
import { projects } from "../../data/site";

export const metadata = {
  title: "Work & Case Studies",
  description: "Websites, web applications and automation projects by Rajesh Behera Digital Studio — every project honestly labelled as personal, team or demo work.",
  alternates: { canonical: "/work" },
};

export default function Work() {
  return (
    <>
      <PageHero crumbs={[{ name: "Work", href: "/work" }]} eyebrow="Work" title="Projects & case studies" text="Real software I've built or worked on. Team projects say so, and demo projects built with sample data are always marked as demos." />
      <section className="sec"><div className="container"><WorkGrid items={projects} /></div></section>
      <Cta title="Want something like this for your business?" />
    </>
  );
}
