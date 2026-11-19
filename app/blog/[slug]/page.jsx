import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Icon from "../../../components/Icon";
import { PageHero, PostCard, Cta, JsonLd, SectionHead } from "../../../components/Blocks";
import { site } from "../../../data/site";
import { posts } from "../../../data/posts";

export function generateStaticParams() { return posts.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.title, description: p.excerpt, alternates: { canonical: `/blog/${p.slug}` }, openGraph: { type: "article", title: p.title, description: p.excerpt, publishedTime: p.date, authors: [site.founder], images: [p.image] } };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();
  const more = posts.filter((x) => x.slug !== p.slug);
  const d = new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  const ld = { "@context": "https://schema.org", "@type": "BlogPosting", headline: p.title, description: p.excerpt, image: `${site.url}${p.image}`, datePublished: p.date, dateModified: p.date, author: { "@type": "Person", name: site.founder, url: `${site.url}/about` }, publisher: { "@id": `${site.url}/#business` }, mainEntityOfPage: `${site.url}/blog/${p.slug}` };
  return (
    <>
      <JsonLd data={ld} />
      <PageHero crumbs={[{ name: "Insights", href: "/blog" }, { name: p.category, href: `/blog/${p.slug}` }]} eyebrow={p.category} title={p.title}>
        <div className="phero-meta"><span><Icon name="calendar" size={16} /> <time dateTime={p.date}>{d}</time></span><span><Icon name="clock" size={16} /> {p.read}</span><span>By {site.founder}</span></div>
      </PageHero>
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container narrow">
          <div className="article-cover anim-zoom"><Image src={p.image} alt="" fill priority sizes="(max-width: 800px) 100vw, 780px" /></div>
          <article className="article">
            {p.body.map((b, i) => b.h ? <h2 key={i}>{b.h}</h2> : b.ul ? <ul key={i}>{b.ul.map((x) => <li key={x}>{x}</li>)}</ul> : <p key={i}>{b.p}</p>)}
          </article>
          <div className="author">
            <Image src="/images/profile.jpg" alt="" width={56} height={56} />
            <div><b>{site.founder}</b><span>Founder of {site.brand}. I build websites, SEO and automation for small businesses. <Link href="/contact">Get in touch</Link>.</span></div>
          </div>
        </div>
      </section>
      <section className="sec sec-mist">
        <div className="container">
          <SectionHead eyebrow="Keep reading" title="More insights" />
          <div className="grid-3" data-stagger>{more.map((x) => <div key={x.slug} data-reveal><PostCard post={x} /></div>)}</div>
        </div>
      </section>
      <Cta />
    </>
  );
}
