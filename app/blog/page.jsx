import { PageHero, PostCard, Cta } from "../../components/Blocks";
import { posts } from "../../data/posts";

export const metadata = { title: "Insights — Website, SEO & Automation Guides", description: "Practical guides for small business owners on websites, local SEO and automation.", alternates: { canonical: "/blog" } };

export default function Blog() {
  return (
    <>
      <PageHero crumbs={[{ name: "Insights", href: "/blog" }]} eyebrow="Insights" title="Practical guides for business owners" text="Plain-English advice on websites, local SEO and automation — no jargon." />
      <section className="sec"><div className="container"><div className="grid-3" data-stagger>{posts.map((p) => <div key={p.slug} data-reveal><PostCard post={p} /></div>)}</div></div></section>
      <Cta />
    </>
  );
}
