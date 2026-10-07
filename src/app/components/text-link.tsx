export type TextLinkData = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d, cids }: { d: TextLinkData; cids: string[] }) {
  return (
    <a data-cid={cids[0]} className="block text-xs font-bold leading-4 tracking-[1.2px] uppercase cursor-pointer hover:text-color-010 hover:outline-color-010 hover:[text-decoration-color:var(--color-010)]" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
