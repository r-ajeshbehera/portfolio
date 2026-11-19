import Link from "next/link";
import Image from "next/image";
import Icon from "../components/Icon";
import CaseSlider from "../components/CaseSlider";
import ShowreelVideo from "../components/ShowreelVideo";
import { site, services, projects, faqs } from "../data/agency";

export const metadata = { alternates: { canonical: "/" } };

// Honest numbers only — every value here is a fact, not a claim.
const stats = [
  { icon: "globe", n: "3", l: "Core services" },
  { icon: "language", n: "3", l: "Languages: EN · HI · OD" },
  { icon: "users", n: "1:1", l: "Founder-led, start to finish" },
  { icon: "file", n: "₹0", l: "First consultation" },
];

const serviceFacts = {
  "website-development": { n: "1–3 wks", l: "Typical delivery" },
  "business-automation": { n: "Pilot", l: "Starting small, honestly" },
  "sheets-and-trackers": { n: "Free", l: "Runs on Google Sheets" },
};

const steps = [
  { when: "Day 1", icon: "chat", title: "Free consultation", text: "A short call to understand your business and the one problem you want solved. No obligation." },
  { when: "Within days", icon: "file", title: "Written quote", text: "Scope, price and delivery date in writing, before any work starts." },
  { when: "1–3 weeks", icon: "code", title: "Build & review", text: "You see a preview early, give feedback, and get regular updates while it's built." },
  { when: "Launch day", icon: "check", title: "Launch & handover", text: "It goes live, and you receive every file and login with a walkthrough." },
];

const why = [
  { title: "Founder-led", text: "You talk to the person who builds your project." },
  { title: "Clear prices", text: "Free first call and a written quote, every time." },
  { title: "Your language", text: "Simple explanations in English, Hindi or Odia." },
  { title: "You own it", text: "All files and logins handed over at launch." },
];

function Arrow() {
  return <span className="arw" aria-hidden="true"><Icon name="arrow" size={14} /></span>;
}

export default function Home() {
  const live = services.filter((s) => s.status !== "coming");
  const real = projects.filter((p) => p.label !== "Demo project");
  const tiles = ["/images/p1s1.png", "/images/p2-banner.png", "/images/p1s6.png", "/images/p2s1.png", "/images/p1-banner.png", "/images/p2s3.png", "/images/p1s7.png", "/images/p2s2.png"];

  return (
    <>
      {/* HERO */}
      <section className="lw-hero">
        <div className="container lw-hero-grid">
          <div className="lw-hero-copy">
            <span className="pill pill-terra reveal">Digital studio · Bhubaneswar, Odisha</span>
            <h1 className="reveal d1">Websites and automation, built to grow your business.</h1>
            <p className="reveal d1">Fast business websites, simple workflow automation and Google Sheets systems for startups and small businesses — so you win more enquiries and spend less time on manual work.</p>
            <div className="lw-ctas reveal d2">
              <Link href="/contact" className="lbtn lbtn-terra">Free consultation <Arrow /></Link>
              <Link href="/services" className="lbtn lbtn-line">Our services <Arrow /></Link>
            </div>
          </div>
          <div className="lw-hero-photo reveal d2">
            <Image src="/images/profile.jpg" alt={`${site.founder}, founder of ${site.brand}`} width={842} height={1264} priority sizes="(max-width: 900px) 70vw, 420px" />
          </div>
        </div>
        <div className="lw-stats">
          <div className="container lw-stats-row">
            {stats.map((s) => (
              <div key={s.l} className="lw-stat">
                <span className="lw-stat-ic"><Icon name={s.icon} size={20} /></span>
                <div><b>{s.n}</b><span>{s.l}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + VIDEO */}
      <section className="lw-sec">
        <div className="container">
          <div className="lw-head">
            <div>
              <span className="pill pill-green reveal">About the studio</span>
              <h2 className="reveal d1">Built around your business.</h2>
            </div>
            <p className="reveal d1">One founder, a written quote before any work, and simple tools you can run yourself. Here's the kind of system I build: an enquiry comes in, gets an instant reply, and is saved for follow-up.</p>
          </div>
          <ShowreelVideo />
        </div>
      </section>

      {/* SERVICES */}
      <section className="lw-sec lw-cream">
        <div className="container">
          <div className="lw-head">
            <div>
              <span className="pill pill-terra reveal">Services</span>
              <h2 className="reveal d1">Focused services, one standard.</h2>
            </div>
            <div className="reveal d1">
              <p>Start with the problem. I'll recommend the simplest solution that works — nothing you don't need.</p>
              <Link href="/services" className="lbtn lbtn-outline">View all services <Arrow /></Link>
            </div>
          </div>
          <div className="lw-svc-row">
            {live.map((s, i) => {
              const f = serviceFacts[s.slug] || { n: "", l: "" };
              return (
                <Link key={s.slug} href={`/services/${s.slug}`} className={`lw-svc reveal d${i % 3}`}>
                  <span className="lw-svc-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="lw-svc-ic"><Icon name={s.icon} size={56} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <div className="lw-svc-foot">
                    <div><b>{f.n}</b><span>{f.l}</span></div>
                    <span className="lw-svc-link">Explore service <Icon name="arrow" size={14} /></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="lw-sec">
        <div className="container lw-steps-grid">
          <div className="lw-steps-intro">
            <span className="pill pill-terra reveal">How I work</span>
            <h2 className="reveal d1">Four steps, no surprises.</h2>
            <p className="reveal d1">You always know what's being built, what it costs and when it will be ready.</p>
            <Link href="/contact" className="lbtn lbtn-terra reveal d2">Start with a free call <Arrow /></Link>
          </div>
          <ol className="lw-steps">
            {steps.map((s, i) => (
              <li key={s.title} className={`lw-step reveal d${i % 4}`}>
                <span className="lw-step-ic"><Icon name={s.icon} size={34} /></span>
                <div className="lw-step-body">
                  <div className="lw-step-top"><span className="tag-terra">Step {String(i + 1).padStart(2, "0")}</span><span className="muted">{s.when}</span></div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY */}
      <section className="lw-why">
        <div className="container lw-why-grid">
          {why.slice(0, 2).map((w, i) => (
            <div key={w.title} className={`lw-why-card c${i + 1} reveal`}><span className="dot">{String(i + 1).padStart(2, "0")}</span><h3>{w.title}</h3><p>{w.text}</p></div>
          ))}
          <div className="lw-why-center reveal d1">
            <span className="pill pill-terra">Why work with me</span>
            <h2>Why clients choose a small studio.</h2>
            <p>Direct attention, honest advice and work you can maintain yourself.</p>
            <Link href="/about" className="lbtn lbtn-terra">About the founder <Arrow /></Link>
          </div>
          {why.slice(2).map((w, i) => (
            <div key={w.title} className={`lw-why-card c${i + 3} reveal d2`}><span className="dot">{String(i + 3).padStart(2, "0")}</span><h3>{w.title}</h3><p>{w.text}</p></div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section className="lw-sec">
        <div className="container">
          <div className="lw-head">
            <div>
              <span className="pill pill-green reveal">Our work</span>
              <h2 className="reveal d1">Real projects, clearly labelled.</h2>
            </div>
            <div className="reveal d1">
              <p>Software I've built or worked on. Team projects say so, and demo projects are always marked as demos.</p>
              <Link href="/work" className="lbtn lbtn-outline">All projects <Arrow /></Link>
            </div>
          </div>
          <CaseSlider items={real} />
        </div>
      </section>

      {/* FAQ */}
      <section className="lw-sec lw-cream">
        <div className="container lw-faq-grid">
          <div>
            <span className="pill pill-terra reveal">FAQ</span>
            <h2 className="reveal d1">Questions before you call.</h2>
            <div className="lw-ask reveal d2">
              <Image src="/images/profile.jpg" alt="" width={842} height={1264} sizes="320px" />
              <h3>Still have a question?</h3>
              <p>Write to me and I'll reply personally.</p>
              <Link href="/contact" className="lbtn lbtn-terra">Ask me <Arrow /></Link>
            </div>
          </div>
          <div className="lw-faq">
            {faqs.slice(0, 6).map((f, i) => (
              <details key={f.q} className="lw-q reveal" open={i === 0}>
                <summary><span>{f.q}</span><span className="lw-q-ic"><Icon name="plus" size={16} /></span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="lw-cta">
        <div className="lw-cta-tiles" aria-hidden="true">
          {[...tiles, ...tiles].map((t, i) => <span key={i} style={{ backgroundImage: `url(${t})` }} />)}
        </div>
        <div className="container lw-cta-copy">
          <h2>Not sure where to start?</h2>
          <p>Tell me about your business and the problem you want solved. I'll point you in the right direction — free.</p>
          <Link href="/contact" className="lbtn lbtn-terra">Book a free consultation <Arrow /></Link>
        </div>
      </section>
    </>
  );
}
