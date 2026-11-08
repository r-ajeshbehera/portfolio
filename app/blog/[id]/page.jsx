import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LikeDislike from "../../../components/LikeDislike";
import { blogs } from "../../../data/blogs";

export function generateStaticParams() {
  return blogs.map((b) => ({ id: b.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const b = blogs.find((x) => x.id === id);
  return b ? { title: b.title, description: b.description } : { title: "Post not found" };
}

const Part = ({ title, items }) => items?.length ? <><h2>{title}</h2><ul className="prose-list">{items.map((x, i) => <li key={i}>{x}</li>)}</ul></> : null;

export default async function Page({ params }) {
  const { id } = await params;
  const i = blogs.findIndex((b) => b.id === id);
  if (i < 0) notFound();
  const b = blogs[i], prev = blogs[i - 1], next = blogs[i + 1];
  const jsonLd = { "@context": "https://schema.org", "@type": "BlogPosting", headline: b.title, description: b.description, author: { "@type": "Person", name: b.author } };
  return (
    <article className="section article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container narrow">
        <Link className="text-link" href="/blog">All posts</Link>
        <h1 className="post-title">{b.title}</h1>
        <p className="lead">{b.description}</p>
        <p className="tools">{(b.technologies || []).join(", ")}</p>
        <Part title="Why I started" items={b.story?.inspiration} />
        <Part title="The journey" items={b.story?.journey} />
        <Part title="Breakthroughs" items={b.story?.breakthroughs} />
        <Part title="Challenges" items={b.challengesFaced} />
        <Part title="What I learned" items={b.lessonsLearned} />
        <Part title="Takeaways" items={b.readerTakeaways} />
        {b.screenshots?.length > 0 && <div className="shots">{b.screenshots.map((s) => <figure key={s.src}><Image src={s.src} alt={s.caption} width={800} height={450} /><figcaption>{s.caption}</figcaption></figure>)}</div>}
        <LikeDislike itemId={b.id} itemType="Blog" />
        <nav className="pager" aria-label="More posts">
          {prev ? <Link href={`/blog/${prev.id}`}>Previous: {prev.title}</Link> : <span />}
          {next && <Link href={`/blog/${next.id}`}>Next: {next.title}</Link>}
        </nav>
      </div>
    </article>
  );
}
