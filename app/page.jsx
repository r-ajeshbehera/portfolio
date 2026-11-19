import Link from "next/link";
import Image from "next/image";
import Icon from "../components/Icon";
import HeroVisual from "../components/HeroVisual";
import ProjectFinder from "../components/ProjectFinder";
import CaseSlider from "../components/CaseSlider";
import { SectionHead, ServiceCard, FaqList, CtaBand, Steps } from "../components/Blocks";
import { site, services, projects, reasons, process, industries, faqs } from "../data/agency";

export const metadata = { alternates: { canonical: "/" } };

// Honest numbers only — every value here is a fact, not a claim.
const stats = [
  { n: "3", l: "core services" },
  { n: "3", l: "languages: English, Hindi, Odia" },
  { n: "1:1", l: "you work with the founder" },
  { n: "₹0", l: "first consultation" },
];

const creds = [
  { t: "MCA", s: "Silicon University, Bhubaneswar" },
  { t: "Full Stack Java", s: "Summer Internship 2026" },
  { t: "Cybersecurity", s: "Google Foundations (Coursera)" },
  { t: "Placement Coordinator", s: "MCA batch, Silicon University" },
];

const trust = [
  { icon: "file", title: "Written quote first", text: "Scope, price and date agreed before work starts" },
  { icon: "users", title: "Direct with the founder", text: "You talk to the person building your project" },
  { icon: "language", title: "English, Hindi, Odia", text: "Clear communication in your language" },
  { icon: "github", title: "Open code samples", text: "Review my work publicly on GitHub" },
];

export default function Home() {
  const short = [process[0], process[2], process[4], process[7]];
  return (
    <>
      <section className="hero hero-center">
        <div className="container">
          <div className="hero-chips reveal" aria-hidden="true">
            <span className="chip-ic c1"><Icon name="globe" size={16} /></span>
            <span className="chip-ic c2"><Icon name="flow" size={16} /></span>
            <span className="chip-ic c3"><Icon name="sheet" size={16} /></span>
          </div>
          <p className="eyebrow reveal">Digital studio · Bhubaneswar, Odisha</p>
          <h1 className="reveal d1">
            Websites <span className="inline-ic ic-blue" aria-hidden="true"><Icon name="globe" size={22} /></span> and
            automation <span className="inline-ic ic-teal" aria-hidden="true"><Icon name="flow" size={22} /></span> that help
            your business <span className="hl">grow.</span>
          </h1>
          <p className="lead reveal d1">Fast business websites, simple workflow automation and Google Sheets systems for startups and small businesses — so you win more enquiries and spend less time on manual work.</p>
          <div className="hero-ctas center reveal d2">
            <Link href="/contact" className="btn btn-primary">Discuss Your Project <Icon name="arrow" size={18} /></Link>
            <Link href="/services" className="btn btn-ghost">Explore Services</Link>
          </div>
          <ProjectFinder />
          <p className="hero-note center"><Icon name="check" size={16} /> Free first consultation · No obligation · Written quote before any work</p>
          <dl className="hero-stats reveal d2">
            {stats.map((x) => <div key={x.l}><dt>{x.n}</dt><dd>{x.l}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className="creds" aria-label="Credentials">
        <div className="container creds-row">
          {creds.map((c) => (
            <div key={c.t} className="cred">
              <svg className="laurel" viewBox="0 0 24 40" aria-hidden="true"><path d="M20 38C8 32 3 22 5 8M7 30c-3 0-5-2-5-4 3 0 5 2 5 4Zm-2-7c-3-1-4-3-4-5 3 1 4 3 4 5Zm0-7c-2-1-3-4-2-6 2 2 2 4 2 6Zm1-7C5 7 5 4 7 2c1 3 0 5-1 7Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
              <div><b>{c.t}</b><span>{c.s}</span></div>
              <svg className="laurel r" viewBox="0 0 24 40" aria-hidden="true"><path d="M20 38C8 32 3 22 5 8M7 30c-3 0-5-2-5-4 3 0 5 2 5 4Zm-2-7c-3-1-4-3-4-5 3 1 4 3 4 5Zm0-7c-2-1-3-4-2-6 2 2 2 4 2 6Zm1-7C5 7 5 4 7 2c1 3 0 5-1 7Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-tight">
        <div className="container bento">
          <div className="bento-card bento-wide reveal">
            <div className="bento-copy">
              <p className="eyebrow">Automation preview</p>
              <h2>Every enquiry captured, replied and tracked</h2>
              <p>An example of the kind of simple system I build: forms feed a sheet, the customer gets an instant reply, and you see what needs follow-up.</p>
              <Link href="/services/business-automation" className="link-arrow">How automation works <Icon name="arrow" size={16} /></Link>
            </div>
            <HeroVisual />
          </div>
          {trust.map((t, i) => (
            <div key={t.title} className={`bento-card feature reveal d${i % 4}`}>
              <span className="feature-ic"><Icon name={t.icon} size={20} /></span>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Services" title="What I can build for you" text="Start with the problem. I'll recommend the simplest solution that works — nothing you don't need." />
          <div className="grid-3">
            {services.filter((s) => s.status !== "coming").map((s, i) => <ServiceCard key={s.slug} s={s} i={i} />)}
          </div>
          <p className="more-note reveal">Coming soon: digital design and ready-made templates. <Link href="/services">See all services</Link></p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead eyebrow="Why choose us" title="Built on clarity and trust" text="A small, focused studio means you get direct attention and honest advice." />
          <div className="grid-3">
            {reasons.map((r, i) => (
              <div key={r.title} className={`reason reveal d${i % 3}`}>
                <span className="reason-check"><Icon name="check" size={18} /></span>
                <div><h3>{r.title}</h3><p>{r.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head-row">
            <SectionHead eyebrow="Our work" title="Featured projects" text="Real software I've built or worked on, clearly labelled. Demo projects are always marked as demos." />
            <Link href="/work" className="link-arrow reveal">View all work <Icon name="arrow" size={16} /></Link>
          </div>
          <CaseSlider items={projects.filter((p) => p.label !== "Demo project")} />
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <SectionHead eyebrow="Industries" title="Who I can help" text="Practical digital tools for businesses that want to look professional and save time." />
          <div className="grid-3">
            {industries.map((x, i) => (
              <div key={x.title} className={`ind-card reveal d${i % 3}`}><h3>{x.title}</h3><p>{x.text}</p></div>
            ))}
          </div>
          <p className="more-note on-dark reveal"><Link href="/industries">How services apply to each industry →</Link></p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head-row">
            <SectionHead eyebrow="How it works" title="A clear process, start to finish" text="You always know what's being built, what it costs and when it will be ready." />
            <Link href="/process" className="link-arrow reveal">Full process <Icon name="arrow" size={16} /></Link>
          </div>
          <Steps items={short} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container about-teaser">
          <div className="about-photo reveal">
            <Image src="/images/profile.jpg" alt={`${site.founder}, founder of ${site.brand}`} width={420} height={520} />
          </div>
          <div className="reveal d1">
            <p className="eyebrow">About the founder</p>
            <h2>Hi, I'm Rajesh Behera.</h2>
            <p className="lead">I'm a developer and MCA student at Silicon University, Bhubaneswar, working mainly with Java, SQL and modern web tools. I started this studio to help local businesses use technology in a simple, practical way.</p>
            <p>At university I serve as Class Representative and Placement Coordinator — roles where people rely on me to communicate clearly and get things done. I bring the same approach to every project.</p>
            <Link href="/about" className="btn btn-ghost">More about me</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <SectionHead eyebrow="FAQ" title="Common questions" center />
          <FaqList items={faqs.slice(0, 5)} />
          <p className="more-note center reveal"><Link href="/faq">See all questions</Link></p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
