import { PageHero, CtaBand } from "../../components/Blocks";
import { industries } from "../../data/agency";

export const metadata = { title: "Industries", description: "How websites, automation and spreadsheet systems can help different kinds of businesses.", alternates: { canonical: "/industries" } };

export default function Industries() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Where these services can help" text="These are the kinds of businesses my services suit. They describe possible uses, not past client work." />
      <section className="section">
        <div className="container grid-2">
          {industries.map((x, i) => (
            <article key={x.title} className={`card ind-light reveal d${i % 2}`}>
              <h2>{x.title}</h2>
              <p>{x.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="Don't see your industry?" text="Most small businesses share the same needs: be found online, answer enquiries fast and keep simple records. Tell me about yours." />
    </>
  );
}
