"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Icon from "./Icon";

// DUMMY rates — edit to match your real pricing.
const types = [
  { id: "landing", label: "Landing page", base: 7999, pages: 1 },
  { id: "business", label: "Business website", base: 14999, pages: 5 },
  { id: "store", label: "Catalogue / store", base: 29999, pages: 8 },
];
const extras = [
  { id: "seo", label: "SEO & Google Business setup", price: 4999 },
  { id: "blog", label: "Blog / updates section", price: 3999 },
  { id: "auto", label: "Enquiry automation", price: 6999 },
  { id: "sheet", label: "Sheets dashboard", price: 2999 },
  { id: "lang", label: "Second language (Hindi/Odia)", price: 3999 },
  { id: "copy", label: "Content writing help", price: 2499 },
];
const perPage = 1500;
const inr = (n) => "₹" + n.toLocaleString("en-IN");

export default function PriceCalculator() {
  const [type, setType] = useState("business");
  const [pages, setPages] = useState(5);
  const [sel, setSel] = useState(["seo"]);
  const [care, setCare] = useState(false);
  const t = types.find((x) => x.id === type);
  const total = useMemo(() => {
    const extraPages = Math.max(0, pages - t.pages) * perPage;
    return t.base + extraPages + extras.filter((e) => sel.includes(e.id)).reduce((a, e) => a + e.price, 0);
  }, [t, pages, sel]);
  const low = Math.round(total * 0.9 / 500) * 500, high = Math.round(total * 1.15 / 500) * 500;
  const toggle = (id) => setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  const summary = `${t.label}, ${pages} pages${sel.length ? ", " + extras.filter((e) => sel.includes(e.id)).map((e) => e.label).join(", ") : ""}${care ? ", monthly care" : ""}`;

  return (
    <div className="calc">
      <div className="calc-form">
        <fieldset>
          <legend>1. What do you need?</legend>
          <div className="calc-types">
            {types.map((x) => (
              <label key={x.id} className={`calc-type ${type === x.id ? "on" : ""}`}>
                <input type="radio" name="type" value={x.id} checked={type === x.id} onChange={() => { setType(x.id); setPages(Math.max(pages, x.pages)); }} />
                <b>{x.label}</b><span>from {inr(x.base)}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>2. Number of pages: <b>{pages}</b></legend>
          <input className="calc-range" type="range" min={1} max={20} value={pages} onChange={(e) => setPages(+e.target.value)} aria-label="Number of pages" style={{ "--v": `${((pages - 1) / 19) * 100}%` }} />
          <div className="calc-scale"><span>1</span><span>10</span><span>20</span></div>
        </fieldset>
        <fieldset>
          <legend>3. Extras</legend>
          <div className="calc-extras">
            {extras.map((e) => (
              <label key={e.id} className={`calc-x ${sel.includes(e.id) ? "on" : ""}`}>
                <input type="checkbox" checked={sel.includes(e.id)} onChange={() => toggle(e.id)} />
                <span className="calc-box" aria-hidden="true"><Icon name="check" size={13} stroke={2.6} /></span>
                <span>{e.label}</span><em>+{inr(e.price)}</em>
              </label>
            ))}
          </div>
          <label className={`calc-x calc-care ${care ? "on" : ""}`}>
            <input type="checkbox" checked={care} onChange={() => setCare(!care)} />
            <span className="calc-box" aria-hidden="true"><Icon name="check" size={13} stroke={2.6} /></span>
            <span>Monthly website care</span><em>+₹1,499/mo</em>
          </label>
        </fieldset>
      </div>
      <aside className="calc-out" aria-live="polite">
        <p className="calc-k">Estimated investment</p>
        <p className="calc-total"><span key={low}>{inr(low)}</span> – <span key={high}>{inr(high)}</span></p>
        {care && <p className="calc-care-note">+ ₹1,499 / month for care</p>}
        <ul className="calc-lines">
          <li><span>{t.label}</span><b>{inr(t.base)}</b></li>
          {pages > t.pages && <li><span>{pages - t.pages} extra page{pages - t.pages > 1 ? "s" : ""}</span><b>{inr((pages - t.pages) * perPage)}</b></li>}
          {extras.filter((e) => sel.includes(e.id)).map((e) => <li key={e.id}><span>{e.label}</span><b>{inr(e.price)}</b></li>)}
        </ul>
        <Link href={`/contact?service=website-development&budget=${encodeURIComponent(total < 10000 ? "Under ₹10,000" : total < 25000 ? "₹10,000 – ₹25,000" : total < 50000 ? "₹25,000 – ₹50,000" : "Above ₹50,000")}&note=${encodeURIComponent(summary)}`} className="btn btn-primary btn-block">Get an exact quote <Icon name="arrow" size={16} /></Link>
        <p className="calc-fine">A rough estimate to help you plan. Your exact price comes in a written quote after a free call.</p>
      </aside>
    </div>
  );
}
