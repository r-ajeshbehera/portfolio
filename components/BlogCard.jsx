import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";
import LikeDislike from "./LikeDislike";

export default function BlogCard({ blog }) {
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
    ? project.category || blog.category || "General"
    : blog.category || "General";
  const description = blog.description || "No description available";

  return (
    <div className="card blog-card">
      <div className="blog-card-image">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={150}
          className="blog-card-image"
        />
      </div>
      <div className="blog-card-content">
        <LikeDislike itemId={blog.id} itemType="Blog" />
        <h3>{title}</h3>
        <div className="blog-card-category">{category}</div>
        <div className="blog-card-meta">{date}</div>
        <p>{description}</p>
        <Link href={`/blog/${blog.id}`} className="btn-view-project">
          Read More
        </Link>
      </div>
    </div>
  );
}
