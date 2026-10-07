export type ProductCardData = {
  text: string;
  title: string;
  description: string;
};
/** A product card. */
export default function ProductCard({ d, cids }: { d: ProductCardData; cids: string[] }) {
  return (
    <div data-cid={cids[0]} className="border-t border-solid border-t-surface-4 flex relative pt-4 flex-col gap-3">
      <div data-cid={cids[1]} className="w-0 block absolute -top-px min-w-0 bg-color-002 h-px" aria-hidden="true" />
      <span data-cid={cids[2]} className="block text-color-002 text-[0.625rem] font-bold leading-[0.9375rem] tracking-[2px]">
        {d.text}
      </span>
      <h3 data-cid={cids[3]} className="block text-lg font-black leading-7 tracking-[-0.45px] uppercase max-md:text-sm max-md:leading-5 max-md:tracking-[-0.35px] md:max-lg:tracking-[-0.4px] md:max-lg:[font-size:inherit] md:max-lg:leading-[inherit]" data-component="heading">
        {d.title}
      </h3>
      <p data-cid={cids[4]} className="block text-sm font-medium leading-[1.4375rem] max-md:text-xs max-md:leading-[1.25rem]">
        {d.description}
      </p>
    </div>
  );
}
