import Link from "next/link";
import Image from "next/image";
import Icon from "../../components/Icon";
import { PageHero, SectionHead, CtaBand } from "../../components/Blocks";
import { site } from "../../data/agency";

export const metadata = { title: "About", description: "About Rajesh Behera Digital Studio and its founder, Rajesh Behera, a developer based in Bhubaneswar.", alternates: { canonical: "/about" } };

const values = [
  { t: "Honesty", d: "Clear prices, clear labels, and no promises I can't keep." },
  { t: "Simplicity", d: "The simplest solution that solves the problem, not the most complicated one." },
  { t: "Respect", d: "For your time, your budget and your decisions." },
  { t: "Ownership", d: "Your project, your files, your accounts — always." },
];
const skills = ["Java", "SQL & MySQL", "Spring Boot (REST APIs)", "HTML, CSS & JavaScript", "Google Sheets", "n8n automation", "Git & GitHub"];

export default function About() {
  return (
    <>
      <PageHero eyebrow="About" title="A small studio focused on practical technology" text={`${site.brand} helps startups and small businesses get online and save time with simple, well-built digital tools.`} />
      <section className="section">
        <div className="container about-teaser">
          <div className="about-photo reveal"><Image src="/images/profile.jpg" alt={`${site.founder}`} width={420} height={520} priority /></div>
          <div className="reveal d1">
            <p className="eyebrow">Founder</p>
            <h2>Rajesh Behera</h2>
            <p className="lead">I'm a developer based in Bhubaneswar and an MCA student at Silicon University, with a B.Sc. (Hons.) in Computer Science. I work mainly with Java, SQL and web technologies, and use modern tools — including AI — to build faster.</p>
            <p>At university I'm the Class Representative and Placement Coordinator for my batch, and a member of the Students' Council. Those roles taught me to listen carefully, communicate clearly and follow through.</p>
            <div className="hero-ctas">
              <a className="btn btn-ghost" href={site.social.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" size={18} /> LinkedIn</a>
              <a className="btn btn-ghost" href={site.social.github} target="_blank" rel="noopener noreferrer"><Icon name="github" size={18} /> GitHub</a>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container split">
          <div className="reveal"><p className="eyebrow">Mission</p><h2>Make useful technology accessible to small businesses</h2><p>Many small businesses lose customers simply because they're hard to find online or slow to reply. My mission is to fix that with tools that are affordable, simple and genuinely used.</p></div>
          <div className="reveal d1"><p className="eyebrow">Vision</p><h2>A trusted technology partner for growing businesses</h2><p>To grow into a studio that businesses rely on for honest advice and dependable work — starting in Odisha and serving clients wherever they are.</p></div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Values" title="How I work" />
          <div className="grid-4">{values.map((v, i) => <div key={v.t} className={`card value reveal d${i % 4}`}><h3>{v.t}</h3><p>{v.d}</p></div>)}</div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container split">
          <div className="reveal"><SectionHead eyebrow="Capabilities" title="Technical skills" text="The tools I use most. I'm upfront about what I'm still learning." /></div>
          <ul className="tags lg reveal d1">{skills.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
      </section>
      <section className="section">
        <div className="container narrow reveal">
          <p className="eyebrow">Why this studio exists</p>
          <h2>Good technology shouldn't be complicated</h2>
          <p className="lead">Too many small businesses end up with websites they can't update and software they never use. This studio exists to do the opposite: understand the real problem, build the simplest thing that solves it, and make sure you can use it confidently.</p>
          <Link href="/process" className="link-arrow">See how I work <Icon name="arrow" size={16} /></Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
