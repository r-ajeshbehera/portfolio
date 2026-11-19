import { PageHero } from "../../components/Blocks";
import { site } from "../../data/agency";

export const metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" text="Last updated: November 2026" />
      <section className="section">
        <div className="container narrow prose">
          <p className="note">This policy describes how this website handles your information. It is a plain-language policy and has not been reviewed by a lawyer.</p>
          <h2>Who we are</h2>
          <p>{site.brand} is run by {site.founder}, based in {site.location}. Contact: <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
          <h2>What we collect</h2>
          <p>When you send an enquiry, we collect the details you enter: your name, email, company name (optional), the service you're interested in, an optional budget range and your project description.</p>
          <p>If website analytics is enabled, anonymous usage information (such as pages visited and device type) may be collected to understand how the website is used.</p>
          <h2>How we use it</h2>
          <p>Your enquiry details are used only to reply to you and to prepare a quote. We do not sell or rent your information, and we do not send marketing emails without your permission.</p>
          <h2>Where it is stored</h2>
          <p>Enquiries are stored securely with our database provider and may be forwarded to our business email so we can reply.</p>
          <h2>How long we keep it</h2>
          <p>We keep enquiry details only as long as needed to respond and, if you become a client, to deliver and support your project.</p>
          <h2>Your choices</h2>
          <p>You can ask us to see, correct or delete your information at any time by emailing <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
          <h2>Changes</h2>
          <p>If this policy changes, the updated version will be posted on this page with a new date.</p>
        </div>
      </section>
    </>
  );
}
