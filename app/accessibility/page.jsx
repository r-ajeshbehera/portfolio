import { PageHero } from "../../components/Blocks";
import { site } from "../../data/agency";

export const metadata = { title: "Accessibility Statement", alternates: { canonical: "/accessibility" } };

export default function Accessibility() {
  return (
    <>
      <PageHero eyebrow="Accessibility" title="Accessibility Statement" text="Last updated: November 2026" />
      <section className="section">
        <div className="container narrow prose">
          <p>We want this website to be usable by everyone. It is designed to follow WCAG 2.2 AA practices, including:</p>
          <ul>
            <li>Readable text with strong colour contrast</li>
            <li>Full keyboard navigation with visible focus outlines</li>
            <li>Labelled form fields with clear error messages</li>
            <li>Meaningful headings and descriptive image text</li>
            <li>Reduced motion for visitors who prefer it</li>
          </ul>
          <p>If you find anything difficult to use, please email <a href={`mailto:${site.email}`}>{site.email}</a> and we'll fix it.</p>
        </div>
      </section>
    </>
  );
}
