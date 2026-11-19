import { PageHero } from "../../components/Blocks";
import { site } from "../../data/agency";

export const metadata = { title: "Terms and Conditions", alternates: { canonical: "/terms" } };

export default function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms and Conditions" text="Last updated: November 2026" />
      <section className="section">
        <div className="container narrow prose">
          <p className="note">These are general website terms in plain language. They have not been reviewed by a lawyer. Each project is governed by its own written quote.</p>
          <h2>Using this website</h2>
          <p>The content on this website is for general information about the services offered by {site.brand}. We try to keep it accurate and up to date, but it may change without notice.</p>
          <h2>Projects and quotes</h2>
          <p>All work is agreed in a written quote that sets out the scope, price, payment milestones, revisions, delivery date and any support. If anything on this website differs from your quote, the quote applies.</p>
          <h2>Ownership</h2>
          <p>Unless agreed otherwise in the quote, once full payment is made you own the final deliverables created for your project. Third-party tools, themes, fonts or services remain subject to their own licences.</p>
          <h2>Project examples</h2>
          <p>Projects shown on this website are labelled as personal, team or demo projects. Demo projects use sample data and are not client engagements.</p>
          <h2>Liability</h2>
          <p>We take care to deliver reliable work, but we are not responsible for losses caused by third-party services (such as hosting, email or messaging providers) outside our control.</p>
          <h2>Contact</h2>
          <p>Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
