import Image from "next/image";
import { ContactBand, SkillsGrid } from "../../components/Sections";
import { education, interests, site, training } from "../../data/site";

export const metadata = { title: "About", description: "About Rajesh Behera, an independent digital creator and aspiring technology entrepreneur." };

const List = ({ items }) => <ul className="plain-list">{items.map((x) => <li key={x.title}><strong>{x.href ? <a href={x.href} target="_blank" rel="noopener noreferrer">{x.title}</a> : x.title}</strong><span>{x.detail}</span></li>)}</ul>;

export default function Page() {
  return (
    <>
      <section className="section">
        <div className="container about-top">
          <Image className="about-photo" src="/images/profile.jpg" alt="Rajesh Behera" width={420} height={560} priority />
          <div>
            <h1>Hi, I&apos;m Rajesh</h1>
            <p className="lead">I am an independent digital creator and aspiring technology entrepreneur from Odisha, currently studying for my MCA in Bhubaneswar.</p>
            <p>{site.message} I work on my own, so you speak directly with the person doing the work. I speak English, Hindi and Odia.</p>
            <h2>What interests me</h2>
            <ul className="check-list">{interests.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="section mist"><div className="container"><h2>Skills and tools</h2><SkillsGrid /></div></section>
      <section className="section"><div className="container split"><div><h2>Education</h2><List items={education} /></div><div><h2>Training</h2><List items={training} /></div></div></section>
      <ContactBand />
    </>
  );
}
