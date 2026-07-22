"use client";

import Link from "next/link";
import ProjectCard from "../../../components/ProjectCard";
import { projects } from "../../../data/projects";
import { getPagedItems } from "../../../hooks/usePaginatedList";

export default function AllProjects({ searchParams }) {
  const showAll = searchParams.show === "all";
  const validProjects = (projects || []).filter((p) => p && p.id);
  const { displayedItems: displayedProjects, hasMore } = getPagedItems(
    validProjects,
    { showAll }
  );

  return (
    <main style={{ paddingTop: "2.5rem" }}>
      <section className="section">
        <div className="container">
          <h2>All Projects</h2>
          <div className="grid-1-2-3">
            {displayedProjects.length > 0 ? (
              displayedProjects.map((project) => (
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
          <div
            className="view-more-container"
            style={{ display: "flex", gap: "1rem" }}
          >
            {hasMore && (
              <Link
                href="/projects/all?show=all"
                className="view-more"
                scroll={false}
              >
                View More
              </Link>
            )}
            {showAll && (
              <Link
                href="/projects?from=all"
                className="view-more"
                scroll={false}
              >
                View Less
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
