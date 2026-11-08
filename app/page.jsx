import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { ContactBand, SectionHead } from "../components/Sections";
import ServicesList from "../components/ServicesList";
import Showreel from "../components/Showreel";
import { visibleProjects } from "../data/showcase";
import { youtube } from "../data/site";

const promises = [
  ["You work directly with me", "One person, from first call to handover."],
  ["Written quote first", "Scope, price and date before work starts."],
  ["English, Hindi and Odia", "Talk in the language you prefer."],
  ["Honest about limits", "If I cannot do it well, I will tell you."],
];
const steps = [["Free call", "You describe the task."], ["Written quote", "You get the scope, price and date."], ["Build and test", "You try it and ask for changes."], ["Handover", "You get the logins and support."]];
const featured = ["1", "sikshasadan", "coaching-assistant"].map((id) => visibleProjects.find((p) => p.id === id));

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="aurora" aria-hidden="true"><i /><i /></div>
        <div className="container hero-inner">
          <h1 data-hero-rise="">Building Smarter Digital Solutions with AI &amp; Technology.</h1>
          <p className="hero-text" data-hero-rise="">I help individuals and businesses simplify their work through websites, AI automation and practical digital solutions.</p>
          <div className="actions center" data-hero-rise="">
            <Link className="btn btn-white" href="/services">Explore My Services</Link>
            <Link className="btn btn-clear" href="/projects">View My Projects</Link>
            <Link className="btn btn-clear" href="/contact">Contact Me</Link>
          </div>
        </div>
        <div className="container reel-wrap" data-hero-rise=""><Showreel /></div>
      </section>

      <section className="promises-section">
        <div className="container"><ul className="promises">{promises.map(([t, d]) => <li key={t} data-reveal=""><strong>{t}</strong><span>{d}</span></li>)}</ul></div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="What I can do for you">Start with the problem. I will suggest the simplest solution that works.</SectionHead>
          <ServicesList />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="Selected work">Real software I have worked on, plus clearly labelled demos.</SectionHead>
          <div className="grid-featured">{featured.map((p) => <div key={p.id} data-reveal=""><ProjectCard project={p} /></div>)}</div>
          <p className="section-more" data-reveal=""><Link className="text-link" href="/projects">See all projects</Link></p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="How we work together" />
          <ol className="steps">{steps.map(([t, d]) => <li key={t} data-reveal=""><strong>{t}</strong><span>{d}</span></li>)}</ol>
        </div>
      </section>

      <section className="section">
        <div className="container trio">
          <Link href="/about" className="tile tile-about" data-glow="" data-reveal="">
            <Image src="/images/profile.jpg" alt="Rajesh Behera" width={160} height={160} />
            <div><h3>Hi, I&apos;m Rajesh</h3><p>An independent digital creator and aspiring technology entrepreneur, studying for my MCA in Bhubaneswar.</p></div>
          </Link>
          <a href={youtube.url} target="_blank" rel="noopener noreferrer" className="tile" data-glow="" data-reveal=""><h3>{youtube.name}</h3><p>Learn AI, explore automation and follow my journey.</p></a>
          <Link href="/products" className="tile" data-glow="" data-reveal=""><h3>Digital products</h3><p>Templates and guides are coming soon.</p></Link>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
