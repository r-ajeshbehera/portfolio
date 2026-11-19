import { PageHero, ProjectCard, CtaBand } from "../../components/Blocks";
import { projects } from "../../data/agency";

export const metadata = { title: "Our Work", description: "Projects built or worked on by Rajesh Behera, with honest labels: personal, team and demo projects.", alternates: { canonical: "/work" } };

export default function Work() {
  return (
    <>
      <PageHero eyebrow="Our work" title="Projects, clearly labelled" text="Every project shows whether it was a personal, team or demo project. Client projects will appear here as they're completed, with permission." />
      <section className="section">
        <div className="container grid-3">
          {projects.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} priority={i === 0} />)}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
