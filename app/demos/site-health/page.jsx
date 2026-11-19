import Link from "next/link";
import Icon from "../../../components/Icon";
import { PageHero, DemoBanner, Cta } from "../../../components/Blocks";
import SiteHealth from "../../../components/demos/SiteHealth";
import { services } from "../../../data/site";

const svc = services.find((s) => s.slug === "website-care");
export const metadata = { title: "Website care report demo — Live Demo", description: "A sample monthly website care report with uptime, speed, backups and the changes made.", alternates: { canonical: "/demos/site-health" } };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Demos", href: "/demos" }, { name: "Website care report demo", href: "/demos/site-health" }]} eyebrow={`Demo · ${svc.title}`} title="Website care report demo" text="A sample monthly website care report with uptime, speed, backups and the changes made.">
        <div className="phero-actions"><Link href={`/services/${svc.slug}`} className="btn btn-ghost">About this service</Link><Link href={`/contact?service=${svc.slug}`} className="btn btn-primary">Get one for your business <Icon name="arrow" size={16} /></Link></div>
      </PageHero>
      <section className="sec demo-sec">
        <div className="container">
          <DemoBanner service="website-care" />
          <SiteHealth />
        </div>
      </section>
      <Cta />
    </>
  );
}
