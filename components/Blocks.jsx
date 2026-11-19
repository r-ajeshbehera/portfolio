import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import AutoVideo from "./AutoVideo";
import { site, statusLabel, testimonials, SHOW_SAMPLES } from "../data/site";

export function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}><span className="eyebrow-dot" aria-hidden="true" />{children}</p>;
}

export function SectionHead({ eyebrow, title, text, center = false, light = false, action }) {
  return (
    <div className={`shead ${center ? "shead-center" : ""} ${action ? "shead-row" : ""}`} data-reveal>
      <div>
        {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
        <h2>{title}</h2>
        {text && <p className="lead">{text}</p>}
      </div>
      {action}
    </div>
  );
}

export function Breadcrumbs({ items }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  const ld = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${site.url}${c.href === "/" ? "" : c.href}` })),
  };
  return (
    <nav aria-label="Breadcrumb" className="crumbs">
      <JsonLd data={ld} />
      <ol>
        {all.map((c, i) => (
          <li key={c.href}>{i < all.length - 1 ? <Link href={c.href}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}</li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({ eyebrow, title, text, crumbs, image, tall = false, children }) {
  return (
    <section className={`phero ${image ? "phero-img" : ""} ${tall ? "phero-tall" : ""}`}>
      <div className="phero-bg" aria-hidden="true" />
      <div className="container phero-grid">
        <div className="phero-copy">
          {crumbs && <Breadcrumbs items={crumbs} />}
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="anim-up">{title}</h1>
          {text && <p className="lead anim-up a2">{text}</p>}
          {children && <div className="anim-up a3">{children}</div>}
        </div>
        {image && (
          <div className="phero-photo anim-zoom">
            <Image src={image} alt="" fill priority sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        )}
      </div>
    </section>
  );
}

export function ServiceCard({ s }) {
  const coming = s.status === "coming";
  const inner = (
    <>
      <div className="svc-top">
        <span className="svc-ic"><Icon name={s.icon} size={24} /></span>
        <span className={`badge badge-${s.status}`}>{statusLabel[s.status]}</span>
      </div>
      <h3>{s.title}</h3>
      <p>{s.short}</p>
      {!coming && (
        <div className="svc-foot">
          {s.from && <span className="svc-from">From <b>{s.from}</b></span>}
          <span className="svc-go" aria-hidden="true"><Icon name="arrowUR" size={18} /></span>
        </div>
      )}
    </>
  );
  return coming
    ? <article className="svc svc-coming">{inner}</article>
    : <Link href={`/services/${s.slug}`} className="svc" data-tilt aria-label={`${s.title} — learn more`}>{inner}<span className="spot" aria-hidden="true" /></Link>;
}

export function ProjectCard({ p, priority = false }) {
  return (
    <Link href={`/work/${p.slug}`} className="proj" data-tilt>
      <div className="proj-img">
        <Image src={p.image} alt={`${p.title} — ${p.category}`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" priority={priority} />
        {p.video && <AutoVideo src={p.video} poster={p.poster} className="proj-vid" label={`${p.title} demo video`} />}
        {p.video && <span className="proj-play" aria-hidden="true"><Icon name="youtube" size={14} /> Demo video</span>}
        <span className={`tag ${p.label === "Demo project" ? "tag-demo" : ""}`}>{p.label}</span>
      </div>
      <div className="proj-body">
        <p className="proj-cat">{p.category} · {p.year}</p>
        <h3>{p.title}</h3>
        <p>{p.summary}</p>
        <ul className="chips">{p.tools.slice(0, 4).map((t) => <li key={t}>{t}</li>)}</ul>
      </div>
    </Link>
  );
}

export function PostCard({ post }) {
  const d = new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  return (
    <Link href={`/blog/${post.slug}`} className="post">
      <div className="post-img"><Image src={post.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" /></div>
      <div className="post-body">
        <p className="post-meta"><span className="pill">{post.category}</span><time dateTime={post.date}>{d}</time> · {post.read}</p>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span className="link">Read article <Icon name="arrow" size={16} /></span>
      </div>
    </Link>
  );
}

export function DemoCard({ d }) {
  return (
    <Link href={`/demos/${d.slug}`} className="demo" data-tilt>
      <div className="demo-img"><Image src={d.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" /><span className="demo-live"><span className="live-dot" aria-hidden="true" /> Interactive demo</span></div>
      <div className="demo-body">
        <span className="svc-ic"><Icon name={d.icon} size={20} /></span>
        <h3>{d.title}</h3>
        <p>{d.text}</p>
        <span className="link">Try it now <Icon name="arrow" size={16} /></span>
      </div>
    </Link>
  );
}

export function DemoBanner({ service }) {
  return (
    <div className="demo-banner">
      <span><Icon name="sparkle" size={16} /> This is a demo built with sample data to show what I can build.</span>
      <Link href={service ? `/contact?service=${service}` : "/contact"}>Want one for your business? →</Link>
    </div>
  );
}

export function Marquee({ items }) {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-label="Tools and technologies I work with">
      <ul className="marquee-track">
        {row.map((t, i) => <li key={i} aria-hidden={i >= items.length}><Icon name="sparkle" size={14} />{t}</li>)}
      </ul>
    </div>
  );
}

export function Testimonials() {
  if (!SHOW_SAMPLES) return null;
  return (
    <section className="sec sec-mist">
      <div className="container">
        <SectionHead eyebrow="Client words" title="What clients say" text="Preview only: these are sample reviews and are hidden on the live site until real ones replace them." center />
        <div className="grid-3" data-stagger>
          {testimonials.map((t) => (
            <figure key={t.quote} className="quote" data-reveal>
              <div className="stars" aria-hidden="true">{[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={16} />)}</div>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption><span className="avatar" aria-hidden="true">{t.name[0]}</span><span><b>{t.name}</b><small>{t.role}</small></span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cta({ title = "Ready to grow your business online?", text = "Tell me about your business and goals. I'll reply with ideas and a free, no-obligation quote." }) {
  return (
    <section className="sec sec-cta">
      <div className="container">
        <div className="cta" data-reveal>
          <div className="cta-glow" aria-hidden="true" />
          <div className="cta-copy">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary btn-lg">Get a free quote <Icon name="arrow" size={18} /></Link>
            {site.whatsapp
              ? <a href={`https://wa.me/${site.whatsapp}`} className="btn btn-ghost btn-lg" target="_blank" rel="noopener noreferrer"><Icon name="chat" size={18} /> WhatsApp</a>
              : <a href={`mailto:${site.email}`} className="btn btn-ghost btn-lg"><Icon name="mail" size={18} /> Email me</a>}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CheckList({ items }) {
  return <ul className="checks">{items.map((x) => <li key={x}><span><Icon name="check" size={14} stroke={2.4} /></span>{x}</li>)}</ul>;
}
