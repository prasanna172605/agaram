import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d, cids, styles }: { d: LogoData; cids: string[]; styles: LogoStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("box-content w-64 h-64 block absolute max-lg:hidden", styles.className)}>
      <img data-cid={cids[1]} className="box-content w-64 h-64 inline overflow-clip max-lg:hidden" data-component="image" alt="" role="presentation" src={d.imgSrc} />
    </div>
  );
}
