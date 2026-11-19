import Link from "next/link";
import Icon from "../../../components/Icon";
import { PageHero, DemoBanner, Cta } from "../../../components/Blocks";
import EnquiryAssistant from "../../../components/demos/EnquiryAssistant";
import { services } from "../../../data/site";

const svc = services.find((s) => s.slug === "business-automation");
export const metadata = { title: "Enquiry assistant demo — Live Demo", description: "Chat with a sample coaching-centre assistant and watch every enquiry land in a live sheet.", alternates: { canonical: "/demos/enquiry-assistant" } };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Demos", href: "/demos" }, { name: "Enquiry assistant demo", href: "/demos/enquiry-assistant" }]} eyebrow={`Demo · ${svc.title}`} title="Enquiry assistant demo" text="Chat with a sample coaching-centre assistant and watch every enquiry land in a live sheet.">
        <div className="phero-actions"><Link href={`/services/${svc.slug}`} className="btn btn-ghost">About this service</Link><Link href={`/contact?service=${svc.slug}`} className="btn btn-primary">Get one for your business <Icon name="arrow" size={16} /></Link></div>
      </PageHero>
      <section className="sec demo-sec">
        <div className="container">
          <DemoBanner service="business-automation" />
          <EnquiryAssistant />
        </div>
      </section>
      <Cta />
    </>
  );
}
