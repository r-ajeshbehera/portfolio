import Link from "next/link";
import Image from "next/image";
import Icon from "../../components/Icon";
import { PageHero, SectionHead, Cta, JsonLd } from "../../components/Blocks";
import { site, stats } from "../../data/site";
import Counter from "../../components/Counter";

export const metadata = {
  title: "About — Founder-led Digital Studio in Bhubaneswar",
  description: "Meet Rajesh Behera, founder of Rajesh Behera Digital Studio — a developer in Bhubaneswar building websites, SEO and automation for small businesses.",
  alternates: { canonical: "/about" },
};

const values = [
  { t: "Honesty", d: "Clear prices, clear labels, and no promises I can't keep." },
  { t: "Simplicity", d: "The simplest solution that solves the problem — never the most complicated." },
  { t: "Respect", d: "For your time, your budget and your decisions." },
  { t: "Ownership", d: "Your project, your files, your accounts — always." },
];

export default function About() {
  const ld = { "@context": "https://schema.org", "@type": "Person", name: site.founder, jobTitle: "Founder & Developer", worksFor: { "@id": `${site.url}/#business` }, url: `${site.url}/about`, image: `${site.url}/images/profile.jpg`, sameAs: Object.values(site.social), alumniOf: "Silicon University, Bhubaneswar", knowsLanguage: ["English", "Hindi", "Odia"] };
  return (
    <>
      <JsonLd data={ld} />
      <PageHero crumbs={[{ name: "About", href: "/about" }]} eyebrow="About the studio" title="A small studio focused on practical technology" text={`${site.brand} helps startups and small businesses get online, get found and save time — with simple, well-built digital tools.`} image="/images/stock/office.jpg" />

      <section className="sec">
        <div className="container founder">
          <div className="founder-photo" data-reveal><Image src="/images/profile.jpg" alt={`${site.founder}, founder of ${site.brand}`} fill sizes="(max-width: 900px) 90vw, 40vw" /></div>
          <div data-reveal>
            <p className="eyebrow"><span className="eyebrow-dot" />Meet the founder</p>
            <h2>Hi, I'm Rajesh Behera.</h2>
            <p className="lead">I'm a developer based in Bhubaneswar and an MCA student at Silicon University, with a B.Sc. (Hons.) in Computer Science. I build websites and backend systems with Java, SQL and modern web tools.</p>
            <p>At university I serve as Class Representative, Placement Coordinator and a member of the Students' Council. Those roles taught me to listen carefully, communicate clearly and follow through — the same way I work with every client.</p>
            <div className="facts">
              <div><b>MCA</b><span>Silicon University, Bhubaneswar</span></div>
              <div><b>Full Stack Java</b><span>Summer Internship 2026</span></div>
              <div><b>Cybersecurity</b><span>Google Foundations (Coursera)</span></div>
              <div><b>3 languages</b><span>English · Hindi · Odia</span></div>
            </div>
            <div className="phero-actions" style={{ marginTop: 0 }}>
              <Link href="/contact" className="btn btn-primary">Work with me <Icon name="arrow" size={16} /></Link>
              <a className="btn btn-ghost" href={site.social.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" size={16} /> LinkedIn</a>
              <a className="btn btn-ghost" href={site.social.github} target="_blank" rel="noopener noreferrer"><Icon name="github" size={16} /> GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats" data-stagger>
          {stats.map((s) => <div key={s.label} className="stat" data-reveal><b><Counter value={s.value} prefix={s.prefix} suffix={s.suffix} /></b><span>{s.label}</span></div>)}
        </div>
      </section>

      <section className="sec">
        <div className="container split split-top">
          <div data-reveal><p className="eyebrow"><span className="eyebrow-dot" />Mission</p><h2>Make useful technology accessible to small businesses</h2><p className="lead">Many small businesses lose customers simply because they're hard to find online or slow to reply. My mission is to fix that with tools that are affordable, simple and actually used.</p></div>
          <div data-reveal><p className="eyebrow"><span className="eyebrow-dot" />Vision</p><h2>A trusted technology partner for growing businesses</h2><p className="lead">To grow into a studio businesses rely on for honest advice and dependable work — starting in Odisha and serving clients wherever they are.</p></div>
        </div>
      </section>

      <section className="sec sec-mist">
        <div className="container">
          <SectionHead eyebrow="Values" title="What I stand for" center />
          <div className="values" data-stagger>{values.map((v, i) => <div key={v.t} className="value" data-reveal><span className="num">0{i + 1}</span><h3>{v.t}</h3><p>{v.d}</p></div>)}</div>
        </div>
      </section>
      <Cta />
    </>
  );
}
