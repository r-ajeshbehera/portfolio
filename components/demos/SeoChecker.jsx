"use client";

import { useState } from "react";
import Icon from "../Icon";

export default function SeoChecker() {
  const [title, setTitle] = useState("Physiotherapy Clinic in Bhubaneswar | Back & Sports Pain");
  const [desc, setDesc] = useState("Experienced physiotherapists in Patia, Bhubaneswar for back pain, sports injuries and post-surgery rehab. Book an appointment today.");
  const [url, setUrl] = useState("physiotherapy-bhubaneswar");
  const [kw, setKw] = useState("physiotherapy");
  const [city, setCity] = useState("Bhubaneswar");
  const tl = title.length, dl = desc.length;
  const k = kw.trim().toLowerCase(), c = city.trim().toLowerCase();
  const checks = [
    { ok: tl >= 30 && tl <= 60, t: `Title length ${tl}/60`, tip: "Aim for 30–60 characters so it isn't cut off." },
    { ok: dl >= 70 && dl <= 160, t: `Description length ${dl}/160`, tip: "Aim for 70–160 characters." },
    { ok: !!k && title.toLowerCase().includes(k), t: "Keyword in title", tip: "Put your main service in the title." },
    { ok: !!k && desc.toLowerCase().includes(k), t: "Keyword in description", tip: "Mention your main service in the description." },
    { ok: !!c && (title + " " + desc).toLowerCase().includes(c), t: "City mentioned", tip: "Local customers search with your city name." },
    { ok: /^[a-z0-9-]+$/.test(url) && url.length <= 60, t: "Clean URL", tip: "Use lowercase words separated by hyphens." },
    { ok: /(book|call|get|visit|contact|today|free)/i.test(desc), t: "Call to action", tip: "Tell searchers what to do next." },
  ];
  const score = Math.round((checks.filter((x) => x.ok).length / checks.length) * 100);
  const cut = (s, n) => (s.length > n ? s.slice(0, n - 1) + "…" : s);
  return (
    <div className="seo">
      <div className="seo-form">
        <div className="field"><label htmlFor="t">Page title</label><input id="t" value={title} onChange={(e) => setTitle(e.target.value)} /><div className="meter"><span style={{ width: `${Math.min(100, (tl / 60) * 100)}%` }} className={tl > 60 ? "over" : ""} /></div></div>
        <div className="field"><label htmlFor="d">Meta description</label><textarea id="d" rows={3} value={desc} onChange={(e) => setDesc(e.target.value)} /><div className="meter"><span style={{ width: `${Math.min(100, (dl / 160) * 100)}%` }} className={dl > 160 ? "over" : ""} /></div></div>
        <div className="form-row">
          <div className="field"><label htmlFor="u">URL slug</label><input id="u" value={url} onChange={(e) => setUrl(e.target.value)} /></div>
          <div className="field"><label htmlFor="k">Main keyword</label><input id="k" value={kw} onChange={(e) => setKw(e.target.value)} /></div>
        </div>
        <div className="field"><label htmlFor="c">Your city</label><input id="c" value={city} onChange={(e) => setCity(e.target.value)} /></div>
      </div>
      <div className="seo-out">
        <p className="calc-k">Google preview</p>
        <div className="serp">
          <div className="serp-site"><span className="serp-fav">S</span><div><b>Sample Clinic</b><small>https://sampleclinic.in › {url || "page"}</small></div></div>
          <p className="serp-title">{cut(title || "Your page title", 62)}</p>
          <p className="serp-desc">{cut(desc || "Your description appears here.", 160)}</p>
        </div>
        <div className="seo-score">
          <div className="ring" style={{ "--s": score }}><b>{score}</b><span>/100</span></div>
          <ul className="seo-checks">{checks.map((x) => <li key={x.t} className={x.ok ? "ok" : "no"}><span>{x.ok ? <Icon name="check" size={13} stroke={2.6} /> : "!"}</span><div><b>{x.t}</b>{!x.ok && <small>{x.tip}</small>}</div></li>)}</ul>
        </div>
      </div>
    </div>
  );
}
