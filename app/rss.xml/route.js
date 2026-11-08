import { blogs } from "../../data/blogs";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://rajeshbehera.vercel.app";

function escapeXml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Next.js Route Handler convention: a route.js file inside app/rss.xml/
// serves GET requests at /rss.xml. Generates a standard RSS 2.0 feed from
// the same blog data the site itself renders, so it stays in sync
// automatically -- no separate content source to maintain.
export async function GET() {
  const items = (blogs || [])
    .filter((b) => b && b.id)
    .map(
      (blog) => `
    <item>
      <title>${escapeXml(blog.title)}</title>
      <link>${siteUrl}/blog/${blog.id}</link>
      <guid>${siteUrl}/blog/${blog.id}</guid>
      <description>${escapeXml(blog.description)}</description>
      <author>${escapeXml(blog.author || "Rajesh Behera")}</author>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Rajesh Behera - Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Technical blog posts by Rajesh Behera, AI Automation and Digital Solutions.</description>
    <language>en</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
