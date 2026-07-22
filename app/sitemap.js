import { blogs } from "../data/blogs";
import { projects } from "../data/projects";

// Next.js App Router convention: this file automatically generates
// /sitemap.xml. Falls back to the deployed Vercel URL if NEXT_PUBLIC_SITE_URL
// isn't set -- override it in .env if you're deploying elsewhere.
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://rajeshbehera.vercel.app";

export default function sitemap() {
  const staticRoutes = [
    { url: `${baseUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projects`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/projects/all`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/blog/all`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.7 },
  ].map((entry) => ({ ...entry, lastModified: new Date() }));

  const projectRoutes = (projects || [])
    .filter((p) => p && p.id)
    .map((project) => ({
      url: `${baseUrl}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  const blogRoutes = (blogs || [])
    .filter((b) => b && b.id)
    .map((blog) => ({
      url: `${baseUrl}/blog/${blog.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
