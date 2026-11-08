import { AvailabilityNote, ContactBand, PageHead, ServicesGrid } from "../../components/Sections";

export const metadata = { title: "Services", description: "AI automation, websites, spreadsheet solutions, digital design and digital products by Rajesh Behera." };

export default function Page() {
  return (
    <>
      <PageHead title="Services">Practical help with automation, websites and everyday business systems.</PageHead>
      <section className="section"><div className="container"><ServicesGrid detailed /><AvailabilityNote /></div></section>
      <ContactBand />
    </>
  );
}
