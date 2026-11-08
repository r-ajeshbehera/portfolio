import Image from "next/image";
import Link from "next/link";
import ProjectArt from "./ProjectArt";

export default function ProjectCard({ project: p }) {
  return (
    <Link href={`/projects/${p.id}`} className="project" data-glow="" aria-label={`View project: ${p.title}`}>
      <div className="project-media">
        {p.image ? <Image src={p.image} alt="" width={960} height={540} sizes="(max-width: 700px) 100vw, 560px" /> : <ProjectArt kind={p.art} />}
      </div>
      <div className="project-body">
        <span className="project-status">{p.status}</span>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <p className="tools">{p.tools.join(", ")}</p>
      </div>
    </Link>
  );
}
