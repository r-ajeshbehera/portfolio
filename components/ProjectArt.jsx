const navy = "#9db0ff", blue = "#3d63ff", soft = "#3a4780", white = "#172048";

function Lines({ x, y, widths, fill = soft }) {
  return widths.map((w, i) => <rect key={i} x={x} y={y + i * 16} width={w} height="7" rx="3.5" fill={fill} />);
}

const arts = {
  chat: <><rect x="110" y="24" width="180" height="177" rx="16" fill={white} /><rect x="178" y="42" width="98" height="30" rx="10" fill={soft} /><rect x="124" y="82" width="124" height="44" rx="10" fill={blue} /><rect x="196" y="136" width="80" height="24" rx="10" fill={soft} /><rect x="124" y="170" width="96" height="20" rx="10" fill={blue} /></>,
  flow: <><path d="M72 112H328" stroke={blue} strokeWidth="3" strokeDasharray="6 6" />{[72, 157, 243, 328].map((x, i) => <g key={x}><circle cx={x} cy="112" r="28" fill={i === 1 ? blue : white} stroke={blue} strokeWidth="2" /><circle cx={x} cy="112" r="8" fill={i === 1 ? white : blue} /></g>)}</>,
  sheet: <><rect x="70" y="32" width="260" height="161" rx="8" fill={white} /><rect x="70" y="32" width="260" height="30" rx="8" fill={blue} />{[92, 122, 152].map((y) => <path key={y} d={`M70 ${y}H330`} stroke={soft} />)}{[135, 200, 265].map((x) => <path key={x} d={`M${x} 62V193`} stroke={soft} />)}<rect x="212" y="130" width="42" height="14" rx="3" fill={navy} /></>,
  chart: <><rect x="70" y="32" width="260" height="161" rx="10" fill={white} />{[[96, 90], [132, 60], [168, 110], [204, 80], [240, 124], [276, 104]].map(([x, h], i) => <rect key={x} x={x} y={174 - h} width="24" height={h} rx="4" fill={i === 4 ? blue : soft} />)}</>,
  browser: <><rect x="90" y="34" width="150" height="16" rx="5" fill={navy} /><Lines x={90} y={66} widths={[220, 190]} /><rect x="90" y="108" width="84" height="30" rx="15" fill={blue} /><rect x="90" y="156" width="66" height="44" rx="8" fill={white} /><rect x="167" y="156" width="66" height="44" rx="8" fill={white} /><rect x="244" y="156" width="66" height="44" rx="8" fill={white} /></>,
  template: <><rect x="150" y="24" width="130" height="176" rx="8" fill={soft} /><rect x="125" y="36" width="130" height="176" rx="8" fill={white} stroke={soft} /><rect x="143" y="56" width="70" height="12" rx="4" fill={blue} /><Lines x={143} y={82} widths={[94, 84, 94, 62, 84]} /></>,
  school: <><path d="M200 34l110 52H90z" fill={blue} /><rect x="108" y="90" width="184" height="96" fill={white} />{[126, 170, 214, 258].map((x) => <rect key={x} x={x} y="108" width="22" height="30" rx="2" fill={soft} />)}<rect x="184" y="146" width="32" height="40" fill={navy} /></>,
  exam: <><rect x="120" y="26" width="160" height="174" rx="10" fill={white} />{[50, 92, 134].map((y) => <g key={y}><circle cx="146" cy={y + 10} r="10" fill={y === 92 ? blue : soft} /><rect x="168" y={y + 5} width="92" height="10" rx="5" fill={soft} /></g>)}<rect x="136" y="170" width="70" height="18" rx="5" fill={navy} /></>,
  code: <><rect x="70" y="32" width="260" height="161" rx="10" fill={navy} /><Lines x={92} y={58} widths={[110, 170, 136, 80, 150, 96]} fill="#3d63ff" /></>,
  pdf: <><rect x="130" y="26" width="140" height="174" rx="8" fill={white} /><rect x="130" y="26" width="140" height="44" rx="8" fill={blue} /><Lines x={150} y={92} widths={[100, 86, 100, 70, 92]} /></>,
};

export default function ProjectArt({ kind }) {
  return (
    <svg viewBox="0 0 400 225" className="art" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="225" fill="#0b1130" />
      {arts[kind] || arts.browser}
    </svg>
  );
}
