import { PageHead } from "../../components/Sections";
import { site } from "../../data/site";
export const metadata = { title: "Privacy Policy", description: "How this website handles your information." };
export default function Page() {
  return (
    <>
      <PageHead title="Privacy policy">Draft policy. Review it before relying on it for business use.</PageHead>
      <section className="section article"><div className="container narrow">
        <h2>What is collected</h2><p>If you use the contact form, I receive your name, email address, the service you choose and your project details.</p>
        <h2>How it is used</h2><p>I use this information only to reply to your enquiry. I do not sell it.</p>
        <h2>Service providers</h2><p>The site is hosted on Vercel. Form messages may be stored with Supabase or delivered by an email provider. Analytics may be used to understand site visits.</p>
        <h2>Your choices</h2><p>To see or delete your information, email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </div></section>
    </>
  );
}
