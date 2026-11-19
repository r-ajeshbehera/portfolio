import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Icon from "../../../components/Icon";
import AutoVideo from "../../../components/AutoVideo";
import { PageHero, ProjectCard, Cta, CheckList, SectionHead, JsonLd } from "../../../components/Blocks";
import { site, projects } from "../../../data/site";

export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.title} — Case Study`, description: p.summary, alternates: { canonical: `/work/${p.slug}` }, openGraph: { title: p.title, description: p.summary, images: [p.image] } };
}

export default async function Case({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const more = projects.filter((x) => x.slug !== p.slug).slice(0, 3);
  const ld = { "@context": "https://schema.org", "@type": "CreativeWork", name: p.title, description: p.summary, image: `${site.url}${p.image}`, creator: { "@type": "Person", name: site.founder }, dateCreated: p.year, keywords: p.tools.join(", ") };
  return (
    <>
      <JsonLd data={ld} />
      <PageHero crumbs={[{ name: "Work", href: "/work" }, { name: p.title, href: `/work/${p.slug}` }]} eyebrow={`${p.label} · ${p.category}`} title={p.title} text={p.summary}>
        <div className="phero-actions">
          {p.links.live && <a className="btn btn-primary" href={p.links.live} target="_blank" rel="noopener noreferrer">Visit live site <Icon name="external" size={16} /></a>}
          {p.links.github && <a className="btn btn-ghost" href={p.links.github} target="_blank" rel="noopener noreferrer"><Icon name="github" size={16} /> View code</a>}
        </div>
      </PageHero>
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="case-hero-img anim-zoom">
            <Image src={p.poster || p.image} alt={`${p.title} preview`} fill priority sizes="100vw" />
            {p.video && <AutoVideo src={p.video} poster={p.poster} className="case-vid" label={`${p.title} demo video`} />}
            {p.video && <span className="hv-tag"><span className="live-dot" aria-hidden="true" /> Real demo recording</span>}
          </div>
          <dl className="case-facts" data-stagger>
            <div data-reveal><dt>Type</dt><dd>{p.label}</dd></div>
            <div data-reveal><dt>Category</dt><dd>{p.category}</dd></div>
            <div data-reveal><dt>Year</dt><dd>{p.year}</dd></div>
            <div data-reveal><dt>Stack</dt><dd>{p.tools.slice(0, 3).join(", ")}</dd></div>
          </dl>
          <div className="split split-top">
            <div data-reveal><p className="eyebrow"><span className="eyebrow-dot" />The challenge</p><h2>Problem</h2><p className="lead">{p.problem}</p></div>
            <div data-reveal><p className="eyebrow"><span className="eyebrow-dot" />The approach</p><h2>Solution</h2><p className="lead">{p.solution}</p></div>
          </div>
          <div className="block card" data-reveal style={{ marginTop: 64 }}>
            <h2>Highlights</h2>
            <CheckList items={p.results} />
          </div>
          {p.shots && (
            <div className="block" data-reveal>
              <h2>Screenshots</h2>
              <div className="shots">{p.shots.map((s) => <figure key={s.src}><div className="shot"><Image src={s.src} alt={s.caption} fill sizes="(max-width: 760px) 100vw, 33vw" /></div><figcaption>{s.caption}</figcaption></figure>)}</div>
            </div>
          )}
        </div>
      </section>
      <section className="sec sec-mist">
        <div className="container">
          <SectionHead eyebrow="More work" title="Other projects" action={<Link href="/work" className="btn btn-ghost">All work <Icon name="arrow" size={16} /></Link>} />
          <div className="grid-3" data-stagger>{more.map((x) => <div key={x.slug} data-reveal><ProjectCard p={x} /></div>)}</div>
        </div>
      </section>
      <Cta />
    </>
  );
}
