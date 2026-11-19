import { PageHero, Steps, CtaBand } from "../../components/Blocks";
import { process } from "../../data/agency";

export const metadata = { title: "Our Process", description: "How a project runs, from free consultation to handover.", alternates: { canonical: "/process" } };

export default function Process() {
  return (
    <>
      <PageHero eyebrow="Our process" title="From first call to handover" text="A simple, transparent process so you always know what's happening, what it costs and what comes next." />
      <section className="section"><div className="container"><Steps items={process} /></div></section>
      <CtaBand title="Ready for step one?" text="The first consultation is free and there's no obligation." />
    </>
  );
}
