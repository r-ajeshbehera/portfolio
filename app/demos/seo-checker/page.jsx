import Link from "next/link";
import Icon from "../../../components/Icon";
import { PageHero, DemoBanner, Cta } from "../../../components/Blocks";
import SeoChecker from "../../../components/demos/SeoChecker";
import { services } from "../../../data/site";

const svc = services.find((s) => s.slug === "seo-local-search");
export const metadata = { title: "SEO snippet checker — Live Demo", description: "Type a page title and description to see your Google preview and get instant SEO checks.", alternates: { canonical: "/demos/seo-checker" } };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Demos", href: "/demos" }, { name: "SEO snippet checker", href: "/demos/seo-checker" }]} eyebrow={`Demo · ${svc.title}`} title="SEO snippet checker" text="Type a page title and description to see your Google preview and get instant SEO checks.">
        <div className="phero-actions"><Link href={`/services/${svc.slug}`} className="btn btn-ghost">About this service</Link><Link href={`/contact?service=${svc.slug}`} className="btn btn-primary">Get one for your business <Icon name="arrow" size={16} /></Link></div>
      </PageHero>
      <section className="sec demo-sec">
        <div className="container">
          <DemoBanner service="seo-local-search" />
          <SeoChecker />
        </div>
      </section>
      <Cta />
    </>
  );
}
