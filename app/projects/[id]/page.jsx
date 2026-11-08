import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectArt from "../../../components/ProjectArt";
import { ContactBand } from "../../../components/Sections";
import { showcase } from "../../../data/showcase";

export function generateStaticParams() {
  return showcase.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const p = showcase.find((x) => x.id === id);
  return p ? { title: p.title, description: p.description } : { title: "Project not found" };
}

export default async function Page({ params }) {
  const { id } = await params;
  const p = showcase.find((x) => x.id === id);
  if (!p) notFound();
  return (
    <>
      <section className="section article">
        <div className="container narrow">
          <Link className="text-link" href="/projects">All projects</Link>
          <div className="detail-title"><span className="status status-pilot">{p.status}</span><h1>{p.title}</h1></div>
          <div className="detail-media">{p.image ? <Image src={p.image} alt="" width={960} height={540} priority /> : <ProjectArt kind={p.art} />}</div>
          <p className="lead">{p.description}</p>
          {p.group === "demo" && <p className="note">This is a demonstration concept, not completed client work. No live version is available yet.</p>}
          <h2>Tools used</h2>
          <p>{p.tools.join(", ")}</p>
          {p.points && <><h2>What it does</h2><ul className="check-list">{p.points.map((x) => <li key={x}>{x}</li>)}</ul></>}
          {(p.live || p.github) && <div className="actions">{p.live && <a className="btn btn-blue" href={p.live} target="_blank" rel="noopener noreferrer">Open live site</a>}{p.github && <a className="btn btn-line" href={p.github} target="_blank" rel="noopener noreferrer">View code on GitHub</a>}</div>}
          {p.screenshots && <><h2>Screenshots</h2><div className="shots">{p.screenshots.map((s) => <figure key={s.src}><Image src={s.src} alt={s.caption} width={800} height={450} /><figcaption>{s.caption}</figcaption></figure>)}</div></>}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
