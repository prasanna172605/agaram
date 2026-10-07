export default function Icon({ cid }: { cid?: string }) {
  return (
    <svg className="block absolute top-0 left-0 min-w-0 overflow-hidden align-middle pointer-events-none w-0 h-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="currentColor" data-cid={cid}>
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="goo" />
          <feBlend in2="goo" in="SourceGraphic" result="mix" />
        </filter>
      </defs>
    </svg>
  );
}
