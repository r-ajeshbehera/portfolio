import Link from "next/link";
import Icon from "../../../components/Icon";
import { PageHero, DemoBanner, Cta } from "../../../components/Blocks";
import WebsiteDemo from "../../../components/demos/WebsiteDemo";
import { services } from "../../../data/site";

const svc = services.find((s) => s.slug === "website-development");
export const metadata = { title: "Business website demo — Live Demo", description: "A complete one-page website for a sample coaching centre. Switch between desktop, tablet and mobile to see it adapt.", alternates: { canonical: "/demos/business-website" } };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Demos", href: "/demos" }, { name: "Business website demo", href: "/demos/business-website" }]} eyebrow={`Demo · ${svc.title}`} title="Business website demo" text="A complete one-page website for a sample coaching centre. Switch between desktop, tablet and mobile to see it adapt.">
        <div className="phero-actions"><Link href={`/services/${svc.slug}`} className="btn btn-ghost">About this service</Link><Link href={`/contact?service=${svc.slug}`} className="btn btn-primary">Get one for your business <Icon name="arrow" size={16} /></Link></div>
      </PageHero>
      <section className="sec demo-sec">
        <div className="container">
          <DemoBanner service="website-development" />
          <WebsiteDemo />
        </div>
      </section>
      <Cta />
    </>
  );
}
