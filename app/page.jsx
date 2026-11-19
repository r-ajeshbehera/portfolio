import Link from "next/link";
import Image from "next/image";
import Icon from "../components/Icon";
import Counter from "../components/Counter";
import Accordion from "../components/Accordion";
import { SectionHead, ServiceCard, ProjectCard, PostCard, Marquee, Testimonials, Cta, CheckList, JsonLd, Eyebrow } from "../components/Blocks";
import { site, services, projects, reasons, workflow, industries, faqs, stats, tools, plans } from "../data/site";
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
            <h1 className="anim-up a1">Websites that bring you <span className="hl">more customers</span>, not just visitors.</h1>
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
              <Image src="/images/stock/hero-team.jpg" alt="A small team planning a business website together on laptops" fill priority sizes="(max-width: 900px) 100vw, 46vw" />
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
          <ol className="timeline" data-stagger>
            {workflow.map((p, i) => (
              <li key={p.title} className="tl-step" data-reveal>
                <span className="tl-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="tl-when">{p.when}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
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

      {/* ───────── INDUSTRIES ───────── */}
      <section className="sec">
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
