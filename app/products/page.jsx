import { ContactBand, PageHead, ProductsGrid } from "../../components/Sections";
export const metadata = { title: "Digital Products", description: "Upcoming templates, planners and guides from Rajesh Behera Digital Studio." };
export default function Page() {
  return (
    <>
      <PageHead title="Digital products">Templates and guides are being prepared. Purchase links will appear here when each one is ready.</PageHead>
      <section className="section"><div className="container"><ProductsGrid /></div></section>
      <ContactBand />
    </>
  );
}
