import { PageHero, SectionHead, Cta, CheckList } from "../../components/Blocks";
import { workflow } from "../../data/site";

export const metadata = { title: "Our Process — From Free Call to Launch", description: "A clear six-step process: discovery call, written quote, design, build, testing and launch with full handover.", alternates: { canonical: "/process" } };

export default function Process() {
  return (
    <>
      <PageHero crumbs={[{ name: "Process", href: "/process" }]} eyebrow="Process" title="A clear process, start to finish" text="No surprises. You always know what's being built, what it costs and when it will be ready." image="/images/stock/kanban.jpg" />
      <section className="sec">
        <div className="container narrow" style={{ maxWidth: 1000 }}>
          <ol className="steps-big" data-stagger>
            {workflow.map((p, i) => (
              <li key={p.title} className="step-big" data-reveal>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <div><span className="when">{p.when}</span><h3>{p.title}</h3></div>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="sec sec-mist">
        <div className="container split">
          <div data-reveal><SectionHead eyebrow="What you can expect" title="My promises to you" /></div>
          <div className="card" data-reveal><CheckList items={["A written quote with scope, price and date before work begins", "A private preview link so you see progress early", "Regular updates — you never have to chase me", "Mobile, speed and SEO checks before launch", "Every file, account and login handed over to you"]} /></div>
        </div>
      </section>
      <Cta />
    </>
  );
}
