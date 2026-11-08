import { PageHead } from "../../components/Sections";
import { site } from "../../data/site";
export const metadata = { title: "Terms", description: "Terms for using this website." };
export default function Page() {
  return (
    <>
      <PageHead title="Terms">Draft terms. Review them before relying on them for business use.</PageHead>
      <section className="section article"><div className="container narrow">
        <h2>Website content</h2><p>Content on this site is for general information. Demo projects are examples and are not completed client work.</p>
        <h2>Services</h2><p>Scope, price and delivery for any service are agreed in writing before work starts.</p>
        <h2>Digital products</h2><p>Terms for each product will be shown before purchase when products become available.</p>
        <h2>Contact</h2><p>Questions? Email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </div></section>
    </>
  );
}
