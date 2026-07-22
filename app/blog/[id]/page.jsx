import Image from "next/image";
import Link from "next/link";
import { blogs } from "../../../data/blogs";
import { projects } from "../../../data/projects";
import { notFound } from "next/navigation";
import LikeDislike from "../../../components/LikeDislike";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === id);
  if (!blog) {
    return { title: "Blog Post Not Found - Rajesh Behera" };
  }
  return {
    title: `${blog.title} - Rajesh Behera`,
    description: blog.description || `Read ${blog.title} on Rajesh Behera's blog.`,
  };
}

export default async function BlogDetail({ params }) {
  const { id } = await params;
  const blogIndex = blogs.findIndex((b) => b.id === id);
  const blog = blogs[blogIndex];
  const nextBlog = blogs[blogIndex + 1];
  const prevBlog = blogIndex > 0 ? blogs[blogIndex - 1] : null;

  if (!blog || !blog.id) {
    notFound();
  }

  const project = blog.projectId
    ? projects.find((p) => p.id === blog.projectId)
    : null;
  const title = blog.title || "Untitled Blog";
  const imageSrc = project
    ? project.image || "/images/logo.jpg"
    : blog.image || "/images/logo.jpg";
  const date = project
    ? project.date || blog.date || "Unknown Date"
    : blog.date || "Unknown Date";
  const category = project
    ? project.category || blog.category || "Uncategorized"
    : blog.category || "Uncategorized";
  const author = blog.author || "Rajesh Behera";
  const liveDemoNotice = project
    ? project.LiveDemoNotice || "(Notice: N/A)"
    : blog.liveDemoNotice || "(Notice: N/A)";
  const showLiveDemo = project ? !!project.liveDemo : !!blog.liveDemo;
  const showGitHub = project ? !!project.github : !!blog.github;
  const showSeparator = showLiveDemo && showGitHub;

  // schema.org structured data so Google can show rich results (headline,
  // author, date) for this post instead of treating it as a plain page.
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: blog.description || undefined,
    author: { "@type": "Person", name: author },
    datePublished: date !== "Unknown Date" ? date : undefined,
    image: imageSrc,
  };

  return (
    <main style={{ paddingTop: "5rem" }}>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <section className="section">
        <div className="container">
          <div className="card blog-detail-card">
            <Link
              href="/blog"
              className="btn-back"
              style={{
                padding: "0.5rem 0.75rem",
                width:100,// Reduced width
                fontSize: "0.9rem",
                fontWeight: "500",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              ← Back
            </Link>
            <div className="blog-detail-image">
              <Image
                src={imageSrc}
                alt={title}
                width={800}
                height={750}
                className="blog-image"
              />
            </div>
            <div className="blog-detail-meta">
              <LikeDislike itemId={blog.id} itemType="Blog" />
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
                    <strong>Published Date:</strong> {date}
                  </p>
                  <p>
                    <strong>Published By:</strong> {author}
                  </p>
                </div>
                <div
                  className="category-right"
                  style={{ paddingRight: "2rem", paddingLeft: "2rem" }}
                >
                  <p>
                    <strong>Category:</strong> {category}
                  </p>
                </div>
              </div>
            </div>
            <h2 className="blog-detail-title">{title}</h2>
            <div className="blog-detail-content">
              <h3>Inspiration :</h3>
              <ul>
                {blog.story?.inspiration?.map((item, index) => (
                  <li key={index} style={{ whiteSpace: "pre-line" }}>
                    {item}
                  </li>
                )) || <li>No inspiration provided</li>}
              </ul>
              <h3>Development Journey :</h3>
              <ul>
                {blog.story?.journey?.map((item, index) => (
                  <li key={index} style={{ whiteSpace: "pre-line" }}>
                    {item}
                  </li>
                )) || <li>No journey details provided</li>}
              </ul>
              <h3>Breakthroughs :</h3>
              <ul>
                {blog.story?.breakthroughs?.map((item, index) => (
                  <li key={index} style={{ whiteSpace: "pre-line" }}>
                    {item}
                  </li>
                )) || <li>No breakthroughs provided</li>}
              </ul>
              <h3>Tech Stack Used :</h3>
              <ul>
                {blog.technologies?.length > 0 ? (
                  blog.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))
                ) : (
                  <li>N/A</li>
                )}
              </ul>
              <h3>Challenges Faced :</h3>
              <ul>
                {blog.challengesFaced?.map((item, index) => (
                  <li key={index} style={{ whiteSpace: "pre-line" }}>
                    {item}
                  </li>
                )) || <li>No challenges listed</li>}
              </ul>
              <h3>Lessons Learned :</h3>
              <ul>
                {blog.lessonsLearned?.map((item, index) => (
                  <li key={index} style={{ whiteSpace: "pre-line" }}>
                    {item}
                  </li>
                )) || <li>No lessons learned provided</li>}
              </ul>
              <h3>Reader Takeaways :</h3>
              <ul>
                {blog.readerTakeaways?.map((item, index) => (
                  <li key={index} style={{ whiteSpace: "pre-line" }}>
                    {item}
                  </li>
                )) || <li>No takeaways provided</li>}
              </ul>
              <h3>Demo and Source Code :</h3>
              <div className="blog-detail-links">
                <p
                  className="demo-notice"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    textAlign: "center",
                    marginBottom: "1.1rem",
                  }}
                >
                  {liveDemoNotice}
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
                      href={project ? project.liveDemo : blog.liveDemo}
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
                      href={project ? project.github : blog.github}
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
                  {!showLiveDemo && !showGitHub && (
                    <span style={{ textAlign: "center", width: "100%" }}>
                      Not available
                    </span>
                  )}
                </div>
              </div>
              {blog.screenshots?.length > 0 && (
                <>
                  <h3>Screenshots :</h3>
                  <div className="screenshot-wrapper">
                    {blog.screenshots.map((screenshot, index) => (
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
              <h3>Call to Action :</h3>
              <ul>
                {blog.callToAction?.map((item, index) => (
                  <li key={index} style={{ whiteSpace: "pre-line" }}>
                    {item}
                  </li>
                )) || <li>No call to action provided</li>}
              </ul>
              <div
                className="blog-detail-footer"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "1rem",
                }}
              >
                {prevBlog && (
                  <Link
                    href={`/blog/${prevBlog.id}`}
                    className="btn-primary next-blog-btn"
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
                {blog.projectId && (
                  <Link
                    href={`/projects/${blog.projectId}`}
                    className="btn-primary next-blog-btn"
                    style={{
                      padding: "0.75rem 1.75rem", // Reverted to original
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      borderRadius: "9999px",
                      textDecoration: "none",
                    }}
                  >
                    View Project
                  </Link>
                )}
                {nextBlog && (
                  <Link
                    href={`/blog/${nextBlog.id}`}
                    className="btn-primary next-blog-btn"
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
