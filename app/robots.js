const base = process.env.NEXT_PUBLIC_SITE_URL || "https://rajeshbehera.vercel.app";

export default function robots() {
  return { rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/thank-you"] }, sitemap: `${base}/sitemap.xml` };
}
