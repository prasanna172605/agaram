export default function Icon2({ cid }: { cid?: string }) {
  return (
    <svg className="w-full block absolute overflow-hidden align-middle pointer-events-none h-full" aria-hidden="true" viewBox="0 0 390 844" preserveAspectRatio="xMaxYMid slice" fill="currentColor" data-cid={cid}>
      <polygon points="\n                240,385\n                390,198\n                390,278\n                272,425\n                350,523\n                350,603\n                240,465\n                140,590\n                140,510\n                208,425\n              " fill="#FF2400" opacity="0.95" style={{ mixBlendMode: "multiply" }} />
      <g stroke="#FF2400" strokeWidth="1" fill="none" opacity="0.4" vectorEffect="non-scaling-stroke">
        <polygon points="240,385 208,425 140,340 140,260" />
        <line x1="140" y1="260" x2="350" y2="523" />
        <line x1="140" y1="340" x2="350" y2="603" />
        <line x1="140" y1="510" x2="390" y2="198" />
        <line x1="140" y1="590" x2="390" y2="278" />
        <line x1="0" y1="425" x2="390" y2="425" strokeDasharray="4 4" opacity="0.15" />
        <line x1="240" y1="0" x2="240" y2="844" strokeDasharray="4 4" opacity="0.15" />
      </g>
    </svg>
  );
}
