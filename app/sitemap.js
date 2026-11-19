import { site, services, projects } from "../data/site";
import { posts } from "../data/posts";

export default function sitemap() {
  const now = new Date();
  const pages = [["", 1, "weekly"], ["/services", 0.9, "monthly"], ["/work", 0.8, "monthly"], ["/pricing", 0.8, "monthly"], ["/about", 0.7, "monthly"], ["/process", 0.6, "monthly"], ["/industries", 0.6, "monthly"], ["/blog", 0.7, "weekly"], ["/faq", 0.6, "monthly"], ["/contact", 0.8, "yearly"], ["/privacy", 0.2, "yearly"], ["/terms", 0.2, "yearly"], ["/accessibility", 0.2, "yearly"]];
  return [
    ...pages.map(([p, priority, changeFrequency]) => ({ url: `${site.url}${p}`, lastModified: now, changeFrequency, priority })),
    ...services.filter((s) => s.status !== "coming").map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.9 })),
    ...projects.map((p) => ({ url: `${site.url}/work/${p.slug}`, lastModified: now, changeFrequency: "yearly", priority: 0.6 })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: "yearly", priority: 0.6 })),
  ];
}
