import { site } from "../data/site";
export default function robots() {
  return { rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/thank-you"] }, sitemap: `${site.url}/sitemap.xml`, host: site.url };
}
