import Link from "next/link";
import { PageHead } from "../../components/Sections";
import { blogs } from "../../data/blogs";
export const metadata = { title: "Blog", description: "Notes on software projects, programming and what I am learning." };
export default function Page() {
  return (
    <>
      <PageHead title="Blog">Notes on projects, programming and what I am learning.</PageHead>
      <section className="section"><div className="container narrow blog-list">
        {blogs.map((b) => <article key={b.id}><h2><Link href={`/blog/${b.id}`}>{b.title}</Link></h2><p>{b.description}</p><p className="tools">{(b.technologies || []).join(", ")}</p></article>)}
      </div></section>
    </>
  );
}
