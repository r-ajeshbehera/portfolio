import Image from "next/image";
import Link from "next/link";
import LikeDislike from "./LikeDislike";

export default function ProjectCard({ project, isSearchResult = false }) {
  const formatDate = (date) => {
    try {
      const parsedDate = new Date(date);
      if (isNaN(parsedDate.getTime())) {
        return "Date not available";
      }
      return parsedDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "Date not available";
    }
  };

  const imageSrc = project.image || "/images/logo.jpg";
  const imagePosition = project.imagePosition || "center";
  const showLiveDemo = !!project.liveDemo;
  const showGitHub = !!project.github;
  const showSeparator = showLiveDemo && showGitHub;

  return (
    <div className="card project-card">
      <div className="project-card-image">
        <Image
          src={imageSrc}
          alt={project.title}
          width={400}
          height={200}
          className="project-image"
          data-image-position={imagePosition}
        />
        <div className="project-card-overlay"></div>
      </div>
      <div className="project-card-content">
        <LikeDislike itemId={project.id} itemType="Project" />
        <h3>{project.title}</h3>
        <div
          className={
            isSearchResult
              ? "project-card-category"
              : "project-card-category-no-label"
          }
        >
          <p>Category: {project.category}</p>
        </div>
        <div
          className={
            isSearchResult ? "project-card-meta" : "project-card-meta-no-label"
          }
        >
          <p>Live Date: {formatDate(project.date)}</p>
        </div>
        <p>{project.description}</p>
        <div className="project-card-links">
          <div className="link-group">
            {showLiveDemo && (
              <Link
                href={project.liveDemo}
                className="btn-live-demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Link>
            )}
            {showSeparator && <span className="separator">|</span>}
            {showGitHub && (
              <Link
                href={project.github}
                className="btn-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </Link>
            )}
          </div>
          <Link href={`/projects/${project.id}`} className="btn-view-project">
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
}
