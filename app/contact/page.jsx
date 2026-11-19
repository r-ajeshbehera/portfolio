import Icon from "../../components/Icon";
import ContactForm from "../../components/ContactForm";
import { PageHero } from "../../components/Blocks";
import { site } from "../../data/site";

export const metadata = { title: "Contact — Get a Free Website Quote", description: "Tell me about your business and project. Get a free consultation and a written quote for your website, SEO or automation project.", alternates: { canonical: "/contact" } };

export default function Contact() {
  return (
    <>
      <PageHero tall crumbs={[{ name: "Contact", href: "/contact" }]} eyebrow="Contact" title="Let's talk about your project" text={`Share a few details and I'll reply ${site.responseTime || "soon"} with questions or a time for a free call.`} />
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container contact-grid">
          <ContactForm />
          <aside className="contact-side">
            <div className="card card-dark" data-reveal style={{ marginTop: 32 }}>
              <h2>Contact details</h2>
              <ul className="clist">
                <li><span className="ci"><Icon name="mail" size={20} /></span><div><b>Email</b><a href={`mailto:${site.email}`}>{site.email}</a></div></li>
                {site.phone && <li><span className="ci"><Icon name="phone" size={20} /></span><div><b>Phone</b><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></div></li>}
                {site.whatsapp && <li><span className="ci"><Icon name="chat" size={20} /></span><div><b>WhatsApp</b><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">Message on WhatsApp</a></div></li>}
                <li><span className="ci"><Icon name="pin" size={20} /></span><div><b>Location</b><span>{site.location}</span></div></li>
                <li><span className="ci"><Icon name="clock" size={20} /></span><div><b>Hours</b><span>{site.hours}</span></div></li>
              </ul>
            </div>
            <div className="card" data-reveal>
              <h2>What happens next?</h2>
              <ol className="next">
                <li>I read your message and reply by email.</li>
                <li>We have a free 20-minute call about your goals.</li>
                <li>You receive a written quote with scope, price and date.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
