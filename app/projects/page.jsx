import { ContactBand, PageHead, ProjectsGrid, SectionHead } from "../../components/Sections";

export const metadata = { title: "Projects", description: "Software projects and labelled demo projects by Rajesh Behera." };

export default function Page() {
  return (
    <>
      <PageHead title="Projects">Team, academic and personal software, plus demo projects that show what I am building next.</PageHead>
      <section className="section"><div className="container"><SectionHead title="Software I have worked on">None of these are client projects.</SectionHead><ProjectsGrid group="built" /></div></section>
      <section className="section mist"><div className="container"><SectionHead title="Demo projects">Concepts and prototypes. These are not completed client work.</SectionHead><ProjectsGrid group="demo" /></div></section>
      <ContactBand />
    </>
  );
}
