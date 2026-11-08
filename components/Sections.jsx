import Link from "next/link";
import Icon from "./Icon";
import ProjectCard from "./ProjectCard";
import ServicesList from "./ServicesList";
import Words from "./Words";
import { products, skillLevels, skills, youtube } from "../data/site";
import { visibleProjects } from "../data/showcase";

export function PageHead({ title, children }) {
  return (
    <div className="page-head">
      <div className="container"><Words as="h1" text={title} />{children && <p data-hero-rise="">{children}</p>}</div>
    </div>
  );
}

export function SectionHead({ title, children }) {
  return <div className="section-head"><Words text={title} scroll />{children && <p data-reveal="">{children}</p>}</div>;
}

export function ServicesGrid({ detailed }) {
  return <ServicesList open={detailed} />;
}

export function AvailabilityNote() {
  return <p className="note">Available means I can take the work now. Pilot projects are early projects where I am building experience, so scope and price are agreed carefully first.</p>;
}

export function ProjectsGrid({ group }) {
  const list = visibleProjects.filter((p) => p.group === group);
  return <div className="grid-projects">{list.map((p) => <div key={p.id} data-reveal=""><ProjectCard project={p} /></div>)}</div>;
}

export function SkillsGrid() {
  return (
    <ul className="skills">
      {skills.map((s) => (
        <li key={s.name} data-reveal="">
          <span>{s.name}</span>
          <span className="skill-level"><span className="dots" aria-hidden="true">{[1, 2, 3].map((n) => <i key={n} className={n <= s.level ? "on" : ""} />)}</span>{skillLevels[s.level]}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProductsGrid() {
  return (
    <div className="products">
      {products.map((p) => (
        <article className="product" key={p.title} data-reveal="">
          <span className="icon"><Icon name={p.icon} /></span>
          <div><h3>{p.title}</h3><p>{p.description}</p></div>
          {p.paymentUrl ? <a className="btn btn-blue" href={p.paymentUrl} target="_blank" rel="noopener noreferrer">Buy now</a> : <span className="status status-coming">Coming Soon</span>}
        </article>
      ))}
    </div>
  );
}

export function YouTubeBlock({ as = "h2", compact = false }) {
  const subscribe = `${youtube.url}?sub_confirmation=1`;
  return (
    <div className={compact ? "yt yt-compact" : "yt"}>
      <div>
        <Words as={as} text={youtube.name} scroll={as === "h2"} className="yt-title" />
        <p data-reveal="">{youtube.description}</p>
        <div className="actions" data-reveal="">
          <a className="btn btn-blue" href={subscribe} target="_blank" rel="noopener noreferrer">Subscribe</a>
          <a className="btn btn-line" href={youtube.url} target="_blank" rel="noopener noreferrer">Visit channel</a>
        </div>
      </div>
      {(!compact || youtube.videos.length > 0) && (
        <div data-reveal="">
          <h3>Latest videos</h3>
          {youtube.videos.length === 0 ? <p className="yt-empty">New videos will appear here once they are published.</p> : (
            <div className="yt-videos">{youtube.videos.slice(0, 3).map((v) => (
              <a key={v.id} href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer"><img src={`https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`} alt="" width="320" height="180" loading="lazy" /><span>{v.title}</span></a>
            ))}</div>
          )}
        </div>
      )}
    </div>
  );
}

export function ContactBand() {
  return (
    <section className="final">
      <div className="container final-inner">
        <Words text="Tell me which task is taking too much of your time." scroll />
        <div data-reveal=""><Link className="btn btn-white" href="/contact">Contact Me</Link></div>
      </div>
    </section>
  );
}
