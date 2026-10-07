export default function Icon3({ cid }: { cid?: string }) {
  return (
    <svg className="block min-w-0 overflow-hidden align-middle w-3.5 h-3.5" aria-hidden="true" fill="none" height="24" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-cid={cid}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
