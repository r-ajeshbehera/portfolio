"use client";

import { useState } from "react";
import Icon from "../Icon";

const reports = {
  October: { uptime: 99.98, speed: 94, seo: 98, backups: 31, incidents: 1, down: [12], changes: ["Updated fees section with new batch prices", "Added 6 new gallery photos", "Fixed broken WhatsApp link on mobile", "Compressed images — homepage 38% lighter"] },
  November: { uptime: 100, speed: 97, seo: 100, backups: 30, incidents: 0, down: [], changes: ["Added Diwali holiday notice banner", "New 'Results 2026' page", "Security updates applied", "Google Business Profile photos refreshed"] },
};

function Gauge({ v, label }) {
  return <div className="gauge" style={{ "--v": v }}><div><b>{v}</b><span>{label}</span></div></div>;
}

export default function SiteHealth() {
  const [m, setM] = useState("November");
  const r = reports[m];
  return (
    <div className="health">
      <div className="health-top">
        <div><p className="calc-k">Website care report · sunrisecoaching.in (sample)</p><h3>{m} 2026</h3></div>
        <div className="dash-months" role="group" aria-label="Report month">{Object.keys(reports).map((k) => <button key={k} type="button" className={k === m ? "on" : ""} onClick={() => setM(k)}>{k}</button>)}</div>
      </div>
      <div className="health-grid">
        <div className="dash-card gauges" key={m}><Gauge v={r.speed} label="Speed" /><Gauge v={r.seo} label="SEO" /><Gauge v={Math.round(r.uptime)} label="Uptime %" /></div>
        <div className="dash-card">
          <p className="calc-k">Uptime — last 30 days · {r.uptime}%</p>
          <div className="uptime">{Array.from({ length: 30 }, (_, i) => <span key={i} className={r.down.includes(i) ? "bad" : ""} title={r.down.includes(i) ? "Short outage, fixed in 6 min" : "Online"} />)}</div>
          <ul className="hstats"><li><Icon name="shield" size={16} /> {r.backups} daily backups</li><li><Icon name="zap" size={16} /> {r.incidents} incident{r.incidents === 1 ? "" : "s"}</li><li><Icon name="check" size={16} /> All updates applied</li></ul>
        </div>
      </div>
      <div className="dash-card">
        <p className="calc-k">Changes made this month</p>
        <ul className="checks">{r.changes.map((c) => <li key={c}><span><Icon name="check" size={14} stroke={2.4} /></span>{c}</li>)}</ul>
      </div>
    </div>
  );
}
