import ContactForm from "../../components/ContactForm";
import { site, youtube } from "../../data/site";

export const metadata = { title: "Contact", description: "Contact Rajesh Behera about automation, websites and digital solutions." };

export default function Page() {
  return (
    <section className="section contact-page">
      <div className="container split">
        <div>
          <h1 className="h1-sm">Tell me what you need</h1>
          <p className="lead">Share a few details about your work. I will reply by email within two working days.</p>
          <ul className="plain-list">
            <li><strong>Email</strong><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><strong>LinkedIn</strong><a href={site.linkedin} target="_blank" rel="noopener noreferrer">Rajesh Behera</a></li>
            <li><strong>YouTube</strong><a href={youtube.url} target="_blank" rel="noopener noreferrer">{youtube.name}</a></li>
            <li><strong>Location</strong><span>{site.location}</span></li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
