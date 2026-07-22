"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";
import { useScrollToHeaderOnReturn } from "../../hooks/usePaginatedList";

export default function Projects() {
  const searchParams = useSearchParams();
  const fromAll = searchParams.get("from") === "all";

  useScrollToHeaderOnReturn(fromAll);

  const latestProjects = (projects || []).filter((p) => p && p.id).slice(0, 6);

  return (
    <main style={{ paddingTop: "2.5rem" }}>
      <section className="section">
        <div className="container">
          <h2>All Projects</h2>
          <div className="grid-1-2-3">
            {latestProjects.length > 0 ? (
              latestProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isSearchResult={false}
                />
              ))
            ) : (
              <p>No projects available.</p>
            )}
          </div>
          {projects.length > 6 && (
            <div className="view-more-container">
              <Link href="/projects/all" className="view-more">
                View More
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
