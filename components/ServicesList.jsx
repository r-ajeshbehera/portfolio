import Link from "next/link";
import Icon from "./Icon";
import { services, statusLabels } from "../data/site";

export default function ServicesList({ open = false }) {
  return (
    <div className={open ? "tiles tiles-open" : "tiles"}>
      {services.map((s) => (
        <article key={s.id} id={s.id} className="tile" data-glow="" data-reveal="">
          <div className="tile-top"><span className="tile-icon"><Icon name={s.icon} /></span><span className={`status status-${s.status}`}>{statusLabels[s.status]}</span></div>
          <h3>{s.title}</h3>
          <p>{s.summary}</p>
          {open && <ul className="tile-list">{s.items.map((x) => <li key={x}>{x}</li>)}</ul>}
          {s.status !== "coming" && <Link className="text-link" href={`/contact?service=${s.id}`} aria-label={`Discuss ${s.title}`}>Discuss this service</Link>}
        </article>
      ))}
    </div>
  );
}
