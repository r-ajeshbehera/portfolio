import Link from "next/link";
import Image from "next/image";
import Icon from "../../components/Icon";
import { PageHero, Cta } from "../../components/Blocks";
import { industries } from "../../data/site";

export const metadata = { title: "Industries — Websites for Schools, Clinics, Shops & Startups", description: "How websites, SEO and automation help education, healthcare, retail, professional services, startups and real estate businesses.", alternates: { canonical: "/industries" } };

export default function Industries() {
  return (
    <>
      <PageHero crumbs={[{ name: "Industries", href: "/industries" }]} eyebrow="Industries" title="Digital solutions for local businesses" text="Every industry has different customers and questions. Here's how I help businesses like yours." />
      {industries.map((x, i) => (
        <section key={x.title} className={`sec ${i % 2 ? "sec-mist" : ""}`}>
          <div className="container split">
            <div className="media" data-reveal style={{ order: i % 2 ? 2 : 0 }}><Image src={x.image} alt={`${x.title} business`} fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
            <div data-reveal>
              <span className="svc-ic" style={{ marginBottom: 18 }}><Icon name={x.icon} size={24} /></span>
              <h2>{x.title}</h2>
              <p className="lead">{x.text}</p>
              <Link href="/contact" className="link">Discuss your project <Icon name="arrow" size={16} /></Link>
            </div>
          </div>
        </section>
      ))}
      <Cta />
    </>
  );
}
