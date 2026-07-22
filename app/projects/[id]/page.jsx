import Image from "next/image";
import Link from "next/link";
import { projects } from "../../../data/projects";
import { notFound } from "next/navigation";
import LikeDislike from "../../../components/LikeDislike";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) {
    return { title: "Project Not Found - Rajesh Behera" };
  }
  return {
    title: `${project.title} - Rajesh Behera`,
    description:
      project.overview?.problem?.[0] || `Details about ${project.title}.`,
  };
}

export default async function ProjectDetail({ params }) {
  const { id } = await params;
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];
  const nextProject = projects[projectIndex + 1];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;

  if (!project || !project.id) {
    notFound();
  }

  const imageSrc = project.image || "/images/logo.jpg";
  const title = project.title || "Untitled Project";
  const date = project.date || "Unknown Date";
  const author = project.author || "Rajesh Behera";
  const category = project.category || "Uncategorized";
  const showLiveDemo = !!project.liveDemo;
  const showGitHub = !!project.github;
  const showSeparator = showLiveDemo && showGitHub;

  // schema.org structured data so Google can show rich results for this
  // project instead of treating it as a plain page.
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description: project.overview?.problem?.[0] || undefined,
    author: { "@type": "Person", name: author },
    dateCreated: date !== "Unknown Date" ? date : undefined,
    image: imageSrc,
    keywords: project.technologies?.join(", ") || undefined,
  };

  return (
    <main style={{ paddingTop: "5rem" }}>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <section className="section project-detail">
        <div className="container">
          <div className="card project-detail-card">
            <Link
              href="/projects"
              className="btn-back"
              style={{
                padding: "0.5rem 0.75rem",
                width: 100, // Reduced width
                fontSize: "0.9rem",
                fontWeight: "500",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              ← Back
            </Link>
            <div className="project-detail-image">
              <Image
                src={imageSrc}
                alt={title}
                width={800}
                height={750}
                className="project-image"
              />
            </div>
            <div className="project-details">
              <LikeDislike itemId={project.id} itemType="Project" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ display: "block" }}>
                  <p>
                    <strong>Live Date:</strong> {date}
                  </p>
                  <p>
                    <strong>By:</strong> {author}
                  </p>
                </div>
                <div
                  className="category-right"
                  style={{ paddingRight: "1rem" }}
                >
                  <p>
                    <strong>Category:</strong> {category}
                  </p>
                </div>
              </div>
            </div>
            <h2 className="project-detail-title">{title}</h2>
            <div className="project-detail-content">
              <h3>Problem Statement :</h3>
              <ul>
                {project.overview?.problem?.map((item, index) => (
                  <li key={index} style={{ whiteSpace: "pre-line" }}>
                    {item}
                  </li>
                )) || <li>No problem statement available</li>}
              </ul>
              <h3>Solution :</h3>
              <ul>
                {project.overview?.solution?.map((item, index) => (
                  <li key={index} style={{ whiteSpace: "pre-line" }}>
                    {item}
                  </li>
                )) || <li>No solution provided</li>}
              </ul>
              <h3>Impact :</h3>
              <ul>
                {project.overview?.impact?.map((item, index) => (
                  <li key={index} style={{ whiteSpace: "pre-line" }}>
                    {item}
                  </li>
                )) || <li>No impact provided</li>}
              </ul>
              <h3>Tech Stack Used :</h3>
              <ul>
                {project.technologies?.length > 0 ? (
                  project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))
                ) : (
                  <li>N/A</li>
                )}
              </ul>
              <h3>Key Components :</h3>
              <ul>
                {project.technicalDetails?.keyComponents?.map(
                  (component, index) => (
                    <li key={index} style={{ whiteSpace: "pre-line" }}>
                      {component}
                    </li>
                  )
                ) || <li>No components listed</li>}
              </ul>
              <h3>Technical Implementation :</h3>
              <ul>
                {project.technicalDetails?.implementation?.map(
                  (item, index) => (
                    <li key={index} style={{ whiteSpace: "pre-line" }}>
                      {item}
                    </li>
                  )
                ) || <li>No implementation details provided</li>}
              </ul>
              <h3>Challenges Overcome :</h3>
              {project.challengesOvercome?.length > 0 ? (
                <ul>
                  {project.challengesOvercome.map((challenge, index) => (
                    <li key={index}>
                      <strong>{challenge.challenge}:</strong>{" "}
                      {challenge.solution}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No challenges listed</p>
              )}
              <h3>Skills Demonstrated :</h3>
              <ul>
                {project.skillsDemonstrated?.length > 0 ? (
                  project.skillsDemonstrated.map((skill, index) => (
                    <li key={index} style={{ whiteSpace: "pre-line" }}>
                      {skill}
                    </li>
                  ))
                ) : (
                  <li>No skills listed</li>
                )}
              </ul>
              <h3>Demo and Source Code :</h3>
              <div className="project-card-links">
                <p
                  className="demo-notice"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    textAlign: "center",
                    marginBottom: "1.1rem",
                  }}
                >
                  {project.LiveDemoNotice || "(Notice: N/A)"}
                </p>
                <div
                  className="link-group"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.5rem",
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  {showLiveDemo && (
                    <Link
                      href={project.liveDemo}
                      className="btn-live-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: "1",
                        maxWidth: "150px",
                        padding: "0.5rem 1rem",
                        fontSize: "0.8rem",
                      }}
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
                      style={{
                        flex: "1",
                        maxWidth: "150px",
                        padding: "0.5rem 1rem",
                        fontSize: "0.8rem",
                      }}
                    >
                      Source Code
                    </Link>
                  )}
                  {!showLiveDemo && !showGitHub && <span>Not available</span>}
                </div>
              </div>
              {project.screenshots?.length > 0 && (
                <>
                  <h3>Screenshots :</h3>
                  <div className="screenshot-wrapper">
                    {project.screenshots.map((screenshot, index) => (
                      <div key={index}>
                        <Image
                          src={screenshot.src}
                          alt={`Screenshot ${index + 1}`}
                          width={800}
                          height={500}
                          className="screenshot"
                        />
                        <p className="screenshot-caption">
                          {screenshot.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}
              <h3>Future Scope :</h3>
              <ul>
                {project.futureScope?.map((item, index) => (
                  <li key={index} style={{ whiteSpace: "pre-line" }}>
                    {item}
                  </li>
                )) || <li>No future scope provided</li>}
              </ul>
              <h3>Metrics :</h3>
              <ul>
                {project.metrics?.map((item, index) => (
                  <li key={index} style={{ whiteSpace: "pre-line" }}>
                    {item}
                  </li>
                )) || <li>No metrics provided</li>}
              </ul>
              <div className="flex justify-end gap-1">
                {prevProject && (
                  <Link
                    href={`/projects/${prevProject.id}`}
                    className="btn-primary next-project-btn"
                    style={{
                      padding: "0.75rem 1.75rem", // Reverted to original
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      borderRadius: "9999px",
                      textDecoration: "none",
                    }}
                  >
                    ← Prev
                  </Link>
                )}
                {project.blogId && (
                  <Link
                    href={`/blog/${project.blogId}`}
                    className="btn-primary next-project-btn"
                    style={{
                      padding: "0.75rem 1.75rem", // Reverted to original
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      borderRadius: "9999px",
                      textDecoration: "none",
                    }}
                  >
                    Project Blog
                  </Link>
                )}
                {nextProject && (
                  <Link
                    href={`/projects/${nextProject.id}`}
                    className="btn-primary next-project-btn"
                    style={{
                      padding: "0.75rem 1.75rem", // Reverted to original
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      borderRadius: "9999px",
                      textDecoration: "none",
                    }}
                  >
                    Nxt →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
