import Icon from "../../components/Icon";
import ContactForm from "../../components/ContactForm";
import { PageHero } from "../../components/Blocks";
import { site } from "../../data/agency";

export const metadata = { title: "Contact", description: "Discuss your website, automation or spreadsheet project with Rajesh Behera Digital Studio.", alternates: { canonical: "/contact" } };

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's discuss your project" text="Tell me about your business and what you'd like to improve. I'll reply with questions or a time for a free call." />
      <section className="section">
        <div className="container contact-grid">
          <ContactForm />
          <aside className="contact-side">
            <div className="card">
              <h2>Other ways to reach me</h2>
              <ul className="contact-list dark">
                <li><Icon name="mail" size={20} /><div><b>Email</b><a href={`mailto:${site.email}`}>{site.email}</a></div></li>
                {site.whatsapp && <li><Icon name="chat" size={20} /><div><b>WhatsApp</b><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">Message on WhatsApp</a></div></li>}
                <li><Icon name="pin" size={20} /><div><b>Location</b><span>{site.location}</span></div></li>
                <li><Icon name="linkedin" size={20} /><div><b>LinkedIn</b><a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a></div></li>
              </ul>
              {site.responseTime && <p className="muted small">I usually reply {site.responseTime}.</p>}
            </div>
            <div className="card highlight">
              <h2>What happens next?</h2>
              <ol className="next-list">
                <li>I read your message and reply by email.</li>
                <li>We have a short free call to understand your needs.</li>
                <li>You receive a written quote with scope, price and date.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
