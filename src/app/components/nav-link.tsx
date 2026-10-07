import type { ReactNode } from "react";
import type { NavLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type NavLinkData = {
  ariaLabel: string;
  href: string;
  icon: ReactNode;
  label: string;
};
/** A navigation link. */
export default function NavLink({ d, cids, styles }: { d: NavLinkData; cids: string[]; styles: NavLinkStyles }) {
  return (
    <a data-cid={cids[0]} className="flex relative pt-4 flex-col justify-start items-center flex-1 cursor-pointer h-full max-md:pt-2 md:max-lg:pt-3.5" data-component="link" aria-label={d.ariaLabel} href={d.href}>
      <div data-cid={cids[1]} className={cn("border-8 border-solid flex z-10 rounded-full justify-center items-center md:max-lg:border-[6px]", styles.className)}>
        <svg data-cid={cids[2]} className={cn("block overflow-hidden align-middle max-md:w-4 max-md:h-4 focus:outline-foreground focus:[outline-style:auto] focus:outline-[5px]", styles.className2)} data-component="icon" aria-hidden="true" fill="none" height="24" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{d.icon}</svg>
      </div>
      <span data-cid={cids[3]} className={cn("h-[1.3125rem] block absolute bottom-3.5 min-w-0 text-sm font-bold leading-[1.3125rem] tracking-[0.7px] uppercase max-md:h-[10.5px] max-md:bottom-1.5 max-md:text-[0.4375rem] max-md:leading-[0.6875rem] max-md:tracking-[0.35px] md:max-lg:h-4.5 md:max-lg:bottom-3 md:max-lg:text-xs md:max-lg:leading-4.5 md:max-lg:tracking-[0.6px]", styles.className3)}>
        {d.label}
      </span>
    </a>
  );
}
