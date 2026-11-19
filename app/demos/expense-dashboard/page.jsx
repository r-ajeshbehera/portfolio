import Link from "next/link";
import Icon from "../../../components/Icon";
import { PageHero, DemoBanner, Cta } from "../../../components/Blocks";
import ExpenseDashboard from "../../../components/demos/ExpenseDashboard";
import { services } from "../../../data/site";

const svc = services.find((s) => s.slug === "sheets-dashboards");
export const metadata = { title: "Expense dashboard demo — Live Demo", description: "Add income and expenses and watch the monthly dashboard and charts update instantly.", alternates: { canonical: "/demos/expense-dashboard" } };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Demos", href: "/demos" }, { name: "Expense dashboard demo", href: "/demos/expense-dashboard" }]} eyebrow={`Demo · ${svc.title}`} title="Expense dashboard demo" text="Add income and expenses and watch the monthly dashboard and charts update instantly.">
        <div className="phero-actions"><Link href={`/services/${svc.slug}`} className="btn btn-ghost">About this service</Link><Link href={`/contact?service=${svc.slug}`} className="btn btn-primary">Get one for your business <Icon name="arrow" size={16} /></Link></div>
      </PageHero>
      <section className="sec demo-sec">
        <div className="container">
          <DemoBanner service="sheets-dashboards" />
          <ExpenseDashboard />
        </div>
      </section>
      <Cta />
    </>
  );
}
