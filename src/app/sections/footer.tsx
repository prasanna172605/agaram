import TextLink from "../components/text-link";
import TextLink2 from "../components/text-link2";
import { TextLink_cids, TextLink2_cids } from "../_cids";
import { textLinkData as textLinkDataContent, textLink2Data as textLink2DataContent } from "../content";
/** Site footer. */
export default function Footer({ textLinkData = textLinkDataContent, textLink2Data = textLink2DataContent } = {}) {
  return (
    <footer className="border-t border-solid border-t-surface-2 block pt-16 pb-8 px-12 text-background bg-foreground max-md:px-6" data-cid="n555" id="footer">
      <div className="flex max-w-400 justify-between gap-24 mx-auto max-md:flex-col max-md:gap-12" data-cid="n556">
        <div className="flex flex-col gap-6 max-w-sm" data-cid="n557">
          <a className="flex items-center gap-3 cursor-pointer" data-cid="n558" data-component="link" aria-label="Agaram Elite Wear Home" href="/">
            <img className="w-12 h-12 block max-w-full rounded-lg object-contain aspect-square align-middle text-clr-0 shadow-sm" data-cid="n559" data-component="image" alt="Agaram Elite Wear" height="48" src="/assets/agaram-logo.png" width="48" />
            <div className="flex flex-col justify-center leading-tight">
              <span className="font-black text-white tracking-widest text-lg uppercase font-sans">
                AGARAM
              </span>
              <span className="font-bold text-primary tracking-[0.25em] text-[0.6875rem] uppercase">
                ELITE WEAR
              </span>
            </div>
          </a>
          <p className="block text-clr-22 text-sm font-semibold leading-[1.4375rem]" data-cid="n560">
            Contemporary men&apos;s fashion, shirts, trousers, denim, and everyday essentials curated for style and confidence in Ariyalur.
          </p>
        </div>
        <div className="flex gap-24 max-md:flex-col max-md:gap-12" data-cid="n561">
          <div className="flex flex-col gap-4" data-cid="n562">
            <span className="block mb-2 text-clr-23 text-[0.625rem] font-bold leading-[0.9375rem] tracking-[1px] uppercase" data-cid="n563">
              Navigation
            </span>
            {textLinkData.map((d, i) => <TextLink key={i} d={d} cids={TextLink_cids[i]} />)}
          </div>
          <div className="flex flex-col gap-4" data-cid="n568">
            <span className="block mb-2 text-clr-23 text-[0.625rem] font-bold leading-[0.9375rem] tracking-[1px] uppercase" data-cid="n569">
              Connect
            </span>
            {textLink2Data.map((d, i) => <TextLink2 key={i} d={d} cids={TextLink2_cids[i]} />)}
          </div>
        </div>
      </div>
      <div className="border-t border-solid border-t-surface-2 flex max-w-400 mt-16 pt-8 justify-between items-center gap-4 text-color-011 text-[0.625rem] font-bold leading-[0.9375rem] tracking-[1px] uppercase mx-auto max-md:flex-col" data-cid="n573">
        <p className="block" data-cid="n574">
          © 2026 Agaram Elite Wear. All rights reserved.
        </p>
        <p className="block" data-cid="n575">
          Ariyalur, Tamil Nadu
        </p>
      </div>
    </footer>
  );
}
