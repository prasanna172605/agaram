import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  text: string;
};
/** A content tile. */
export default function Tile({ d, cids, styles }: { d: TileData; cids: string[]; styles: TileStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("flex items-center", styles.className)}>
      <span data-cid={cids[1]} className={cn("block mx-12 text-foreground text-lg font-bold leading-7 tracking-[2.7px] uppercase max-md:mx-8 max-md:text-sm max-md:leading-5 max-md:tracking-[2.1px] md:max-lg:tracking-[2.4px] md:max-lg:[font-size:inherit] md:max-lg:leading-[inherit]", styles.className2)}>
        {d.text}
      </span>
      <span data-cid={cids[2]} className="w-2 h-2 block bg-primary [rotate:45deg]" aria-hidden="true" />
    </div>
  );
}
