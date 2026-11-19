import Link from "next/link";
import Image from "next/image";
import Icon from "../components/Icon";
import Counter from "../components/Counter";
import Accordion from "../components/Accordion";
import AutoVideo from "../components/AutoVideo";
import TimelineFill from "../components/TimelineFill";
import ProjectQuiz from "../components/ProjectQuiz";
import PriceCalculator from "../components/PriceCalculator";
import { SectionHead, ServiceCard, ProjectCard, PostCard, Marquee, Testimonials, Cta, CheckList, JsonLd, Eyebrow, DemoCard } from "../components/Blocks";
import { site, services, projects, reasons, workflow, industries, faqs, stats, tools, plans, demos } from "../data/site";
import { posts } from "../data/posts";

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.slice(0, 6).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

  return (
    <>
      <JsonLd data={faqLd} />

      {/* ───────── HERO ───────── */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true"><span className="orb o1" /><span className="orb o2" /><span className="grid-lines" /></div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker anim-up"><span className="live-dot" aria-hidden="true" /> Now taking new projects · Bhubaneswar, Odisha</p>
            <h1 className="words">
              {"Websites that bring you".split(" ").map((w, i) => <span key={i}><span className="w"><span style={{ "--i": i }}>{w}</span></span>{" "}</span>)}
              <span className="w"><span className="hl" style={{ "--i": 4 }}>more customers,</span></span>{" "}
              {"not just visitors.".split(" ").map((w, i) => <span key={i}>{i > 0 && " "}<span className="w"><span style={{ "--i": 5 + i }}>{w}</span></span></span>)}
            </h1>
            <p className="lead anim-up a2">I design fast, SEO-friendly websites and simple automations for startups and small businesses — so you get found on Google, win more enquiries and spend less time on manual work.</p>
            <div className="hero-ctas anim-up a3">
              <Link href="/contact" className="btn btn-primary btn-lg">Get a free quote <Icon name="arrow" size={18} /></Link>
              <Link href="/work" className="btn btn-ghost btn-lg">See my work</Link>
            </div>
            <ul className="hero-trust anim-up a4">
              <li><Icon name="check" size={16} stroke={2.4} /> Free consultation</li>
              <li><Icon name="check" size={16} stroke={2.4} /> Written quote first</li>
              <li><Icon name="check" size={16} stroke={2.4} /> You own everything</li>
            </ul>
          </div>

          <div className="hero-visual anim-zoom a2">
            <div className="hv-main">
              <Image src="/media/projects/aashraynet-poster.jpg" alt="Showreel of real projects built by Rajesh Behera" fill priority sizes="(max-width: 900px) 100vw, 46vw" />
              <AutoVideo src="/media/projects/showreel.mp4" poster="/media/projects/aashraynet-poster.jpg" className="hv-vid" label="Showreel of real projects: AashrayNet, MilanSetu and JanSunwai" />
              <span className="hv-tag"><span className="live-dot" aria-hidden="true" /> Real project showreel</span>
            </div>
            <div className="hv-card hv-c1 float">
              <span className="hv-ic ok"><Icon name="mail" size={18} /></span>
              <div><b>New enquiry received</b><small>Auto-reply sent instantly</small></div>
            </div>
            <div className="hv-card hv-c2 float f2">
              <span className="hv-ic"><Icon name="search" size={18} /></span>
              <div><b>SEO-ready</b><small>Schema · Sitemap · Fast</small></div>
            </div>
            <div className="hv-founder float f3">
              <Image src="/images/profile.jpg" alt="" width={48} height={48} />
              <div><b>{site.founder}</b><small>Founder · Developer</small></div>
            </div>
          </div>
        </div>
        <div className="container"><Marquee items={tools} /></div>
      </section>

      {/* ───────── SERVICES ───────── */}
      <section className="sec" id="services">
        <div className="container">
          <SectionHead eyebrow="Services" title="Everything you need to grow online" text="From your first website to the systems behind it — practical digital services, priced clearly and built to last." action={<Link href="/services" className="btn btn-ghost">All services <Icon name="arrow" size={16} /></Link>} />
          <div className="grid-3" data-stagger>
            {services.map((s) => <div key={s.slug} data-reveal><ServiceCard s={s} /></div>)}
          </div>
        </div>
      </section>

      {/* ───────── QUIZ ───────── */}
      <section className="sec sec-quiz">
        <div className="container quiz-grid">
          <div data-reveal>
            <SectionHead eyebrow="Not sure where to start?" title="Find the right service in 30 seconds" text="Answer three quick questions and get a personal recommendation — no email needed." />
          </div>
          <div data-reveal><ProjectQuiz /></div>
        </div>
      </section>

      {/* ───────── WHY ───────── */}
      <section className="sec sec-mist">
        <div className="container why">
          <div className="why-media" data-reveal>
            <div className="why-img"><Image src="/images/stock/meeting.jpg" alt="Planning a website project around a table" fill sizes="(max-width: 900px) 100vw, 45vw" /></div>
            <div className="why-badge">
              <b>1:1</b>
              <span>You work directly with the founder</span>
            </div>
          </div>
          <div>
            <SectionHead eyebrow="Why choose us" title="A small studio with big standards" text="You get the attention of a freelancer and the process of an agency — clear scope, honest advice and work you can maintain." />
            <div className="reasons" data-stagger>
              {reasons.map((r) => (
                <div key={r.title} className="reason" data-reveal>
                  <span className="reason-ic"><Icon name={r.icon} size={20} /></span>
                  <div><h3>{r.title}</h3><p>{r.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── STATS ───────── */}
      <section className="stats-band">
        <div className="container stats" data-stagger>
          {stats.map((s) => (
            <div key={s.label} className="stat" data-reveal>
              <b><Counter value={s.value} prefix={s.prefix} suffix={s.suffix} /></b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── PROCESS ───────── */}
      <section className="sec">
        <div className="container">
          <SectionHead eyebrow="How it works" title="A clear process, from first call to launch" text="You always know what's being built, what it costs and when it will be ready." center />
          <TimelineFill><ol className="timeline" data-stagger>
            {workflow.map((p, i) => (
              <li key={p.title} className="tl-step" data-reveal>
                <span className="tl-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="tl-when">{p.when}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol></TimelineFill>
          <p className="center mt-sm" data-reveal><Link href="/process" className="link">See the full process <Icon name="arrow" size={16} /></Link></p>
        </div>
      </section>

      {/* ───────── WORK ───────── */}
      <section className="sec sec-mist">
        <div className="container">
          <SectionHead eyebrow="Selected work" title="Real projects, honestly labelled" text="Software I've built or worked on. Team projects say so, and demos are always marked as demos." action={<Link href="/work" className="btn btn-ghost">View all work <Icon name="arrow" size={16} /></Link>} />
          <div className="grid-3" data-stagger>
            {projects.slice(0, 3).map((p, i) => <div key={p.slug} data-reveal><ProjectCard p={p} priority={i === 0} /></div>)}
          </div>
        </div>
      </section>

      {/* ───────── DEMOS ───────── */}
      <section className="sec">
        <div className="container">
          <SectionHead eyebrow="Live demos" title="Try what I build — right now" text="Interactive demos for every service, built with sample data. Click around, they really work." action={<Link href="/demos" className="btn btn-ghost">All demos <Icon name="arrow" size={16} /></Link>} />
          <div className="grid-3" data-stagger>{demos.slice(0, 3).map((d) => <div key={d.slug} data-reveal><DemoCard d={d} /></div>)}</div>
        </div>
      </section>

      {/* ───────── INDUSTRIES ───────── */}
      <section className="sec sec-mist">
        <div className="container">
          <SectionHead eyebrow="Industries" title="Built for businesses like yours" text="Practical digital tools for local businesses that want to look professional and save time." center />
          <div className="inds" data-stagger>
            {industries.map((x) => (
              <Link key={x.title} href="/industries" className="ind" data-reveal>
                <Image src={x.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" />
                <div className="ind-body">
                  <span className="ind-ic"><Icon name={x.icon} size={20} /></span>
                  <h3>{x.title}</h3>
                  <p>{x.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* ───────── PRICING ───────── */}
      <section className="sec sec-mist">
        <div className="container">
          <SectionHead eyebrow="Pricing" title="Simple, transparent pricing" text="Starting prices for common projects. Every project gets a written quote before work begins." center />
          <div className="plans plans-light" data-stagger>
            {plans.map((p) => (
              <article key={p.name} className={`plan ${p.featured ? "plan-hot" : ""}`} data-reveal>
                {p.featured && <span className="plan-flag">Most popular</span>}
                <h3>{p.name}</h3>
                <p className="plan-for">{p.for}</p>
                <p className="plan-price"><b>{p.price}</b> <span>{p.unit}</span></p>
                <CheckList items={p.items} />
                <Link href="/contact" className={`btn btn-block ${p.featured ? "btn-primary" : "btn-outline-white"}`}>Get started</Link>
              </article>
            ))}
          </div>
          <p className="center plans-note" data-reveal>Prices exclude domain, hosting and third-party costs. <Link href="/pricing">Compare plans →</Link></p>
          <div className="calc-wrap" data-reveal>
            <SectionHead eyebrow="Price calculator" title="Estimate your website cost" center />
            <PriceCalculator />
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="sec">
        <div className="container faq-grid">
          <div data-reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2>Questions, answered</h2>
            <p className="lead">Can't find what you're looking for? Send a message and I'll reply personally.</p>
            <div className="faq-card">
              <Image src="/images/stock/talk.jpg" alt="" width={640} height={400} sizes="(max-width: 900px) 100vw, 400px" />
              <div>
                <b>Still have questions?</b>
                <p>Book a free 20-minute call.</p>
                <Link href="/contact" className="btn btn-primary btn-sm">Contact me <Icon name="arrow" size={16} /></Link>
              </div>
            </div>
          </div>
          <div data-reveal><Accordion items={faqs.slice(0, 6)} /></div>
        </div>
      </section>

      {/* ───────── INSIGHTS ───────── */}
      <section className="sec sec-mist">
        <div className="container">
          <SectionHead eyebrow="Insights" title="Practical guides for business owners" action={<Link href="/blog" className="btn btn-ghost">All articles <Icon name="arrow" size={16} /></Link>} />
          <div className="grid-3" data-stagger>
            {posts.map((p) => <div key={p.slug} data-reveal><PostCard post={p} /></div>)}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
