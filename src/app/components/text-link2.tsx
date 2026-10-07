export type TextLink2Data = {
  ariaLabel: string;
  href: string;
  label: string;
  rel?: string;
  target?: string;
};
/** A text link. */
export default function TextLink2({ d, cids }: { d: TextLink2Data; cids: string[] }) {
  return (
    <a data-cid={cids[0]} className="block text-xs font-bold leading-4 tracking-[1.2px] uppercase cursor-pointer hover:text-color-010 hover:outline-color-010 hover:[text-decoration-color:var(--color-010)]" data-component="link" aria-label={d.ariaLabel} href={d.href} rel={d.rel} target={d.target}>
      {d.label}
    </a>
  );
}
