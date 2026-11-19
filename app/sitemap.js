import { services, projects } from "../data/agency";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://rajeshbehera.vercel.app";

export default function sitemap() {
  const pages = ["", "/services", "/industries", "/work", "/about", "/process", "/pricing", "/faq", "/contact", "/privacy", "/terms", "/accessibility"];
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, lastModified: new Date(), priority: p === "" ? 1 : 0.7 })),
    ...services.filter((s) => s.status !== "coming").map((s) => ({ url: `${base}/services/${s.slug}`, lastModified: new Date(), priority: 0.8 })),
    ...projects.map((p) => ({ url: `${base}/work/${p.slug}`, lastModified: new Date(), priority: 0.6 })),
  ];
}
