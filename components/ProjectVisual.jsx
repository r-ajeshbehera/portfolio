import Image from "next/image";

function Art({ type }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  const art = {
    school: <g {...common}><path d="M30 46 80 24l50 22-50 22-50-22Z" /><path d="M48 55v18c0 6 14 12 32 12s32-6 32-12V55" /><path d="M130 46v22" /></g>,
    chat: <g {...common}><rect x="28" y="22" width="70" height="40" rx="10" /><path d="M44 62l-8 14 20-14" /><rect x="70" y="44" width="62" height="34" rx="10" /><circle cx="90" cy="61" r="2.5" fill="currentColor" /><circle cx="101" cy="61" r="2.5" fill="currentColor" /><circle cx="112" cy="61" r="2.5" fill="currentColor" /></g>,
    sheet: <g {...common}><rect x="34" y="18" width="92" height="70" rx="6" /><path d="M34 36h92M34 54h92M34 72h92M64 18v70M96 18v70" /></g>,
    chart: <g {...common}><path d="M30 86h100" /><rect x="40" y="58" width="14" height="28" rx="2" /><rect x="64" y="40" width="14" height="46" rx="2" /><rect x="88" y="50" width="14" height="36" rx="2" /><rect x="112" y="26" width="14" height="60" rx="2" /></g>,
    flow: <g {...common}><rect x="26" y="22" width="34" height="26" rx="5" /><rect x="100" y="22" width="34" height="26" rx="5" /><rect x="63" y="64" width="34" height="26" rx="5" /><path d="M60 35h40M43 48v29h20M117 48v29H97" /></g>,
  };
  return <svg viewBox="0 0 160 108" className="art-svg" aria-hidden="true">{art[type] || art.flow}</svg>;
}

export default function ProjectVisual({ project, priority = false }) {
  if (project.image) {
    return (
      <div className="pv pv-img">
        <Image src={project.image} alt={`${project.title} screenshot`} fill sizes="(max-width: 900px) 100vw, 50vw" priority={priority} />
      </div>
    );
  }
  return <div className="pv pv-art"><Art type={project.art} /></div>;
}
