import Icon6 from "../svgs/svg-icon6";
export type ProductCard2Data = {
  variant: string;
  title: string;
  description: string;
  stat: string;
};
/** A product card. */
export default function ProductCard2({ d }: { d: ProductCard2Data }) {
  switch (d.variant) {
    case "t-shirts":
      return (
        <a className="border border-solid border-border block relative rounded-[18px] col-start-[span_2] col-end-[span_2] overflow-hidden bg-surface cursor-pointer h-[31.25rem] max-md:rounded-[14px] max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] max-md:h-[28.125rem] md:max-lg:col-start-[span_1] md:max-lg:col-end-[span_1] hover:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--border)_0px_0.457621px_1.37286px_0px,var(--border)_0px_0.457621px_0.915242px_-0.457621px] focus:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0.0393432px_0.11803px_0px,var(--clr-0)_0px_0.0393432px_0.0786864px_-0.0393432px]" style={{ backgroundImage: "linear-gradient(90deg, var(--color-012) 45%, var(--clr-13) 45%)" }} data-cid="n185" data-component="link" aria-label="Explore T-SHIRTS collection" href="/collections/tshirts">
          <div className="h-124.5 block absolute top-0 inset-x-0 z-0 pointer-events-none max-md:h-[192.3px]" data-cid="n186">
            <img className="w-94 block absolute -right-[3.6125rem] max-w-full overflow-clip object-cover object-[100%_50%] aspect-[auto_600/600] align-middle pointer-events-none h-full max-md:w-81 max-md:right-[-51.1px] md:max-lg:w-84.5 md:max-lg:-right-[2.1125rem] 2xl:w-[29.5625rem] 2xl:-right-[4.55rem]" data-cid="n187" data-component="image" alt="T-SHIRTS" height="600" src="/assets/cloned/images/577f94bec574.webp" width="600" />
          </div>
          <div className="h-124.5 block absolute top-0 right-[18.0625rem] left-0 z-5 pointer-events-none w-1/2 max-md:h-[192.3px] max-md:right-[4.2625rem] max-md:w-4/5 md:max-lg:right-[118.3px] md:max-lg:w-[65%] 2xl:right-91" style={{ backgroundImage: "linear-gradient(to right, var(--color-012) 0%, var(--clr-14) 50%, var(--clr-0) 100%)" }} data-cid="n188" />
          <div className="flex relative z-10 p-8 flex-col items-start text-left pointer-events-none h-full max-md:p-6" data-cid="n189">
            <div className="flex mb-4 items-center gap-3 pointer-events-none max-md:mb-3" data-cid="n190">
              <span className="block text-accent [font-family:Oswald,_'Oswald_Fallback'] text-2xl font-bold leading-8 tracking-[0.6px] pointer-events-none max-md:text-xl max-md:leading-7 max-md:tracking-[0.5px]" data-cid="n191">
                {d.stat}
              </span>
              <div className="block bg-color-006 pointer-events-none h-px w-10 max-md:w-8" data-cid="n192" aria-hidden="true" />
            </div>
            <h3 className="block mb-3 [font-family:Oswald,_'Oswald_Fallback'] text-[4.0625rem] font-bold leading-[3.4375rem] tracking-[-1.3px] uppercase [scale:1_1.25] pointer-events-none max-md:text-[2.8125rem] max-md:leading-[2.375rem] max-md:tracking-[-0.9px] md:max-lg:text-[3.4375rem] md:max-lg:leading-[2.9375rem] md:max-lg:tracking-[-1.1px]" data-cid="n193" data-component="heading">
              {d.title}
            </h3>
            <p className="block mt-4 text-color-005 text-[0.6875rem] font-bold leading-[1.0625rem] tracking-[2.2px] uppercase pointer-events-none max-md:text-[0.5625rem] max-md:leading-[0.875rem] max-md:tracking-[1.8px] md:max-lg:text-[0.625rem] md:max-lg:leading-[0.9375rem] md:max-lg:tracking-[2px]" data-cid="n194">
              {d.description}
            </p>
            <div className="block mt-65.5 pointer-events-none max-md:mt-0 md:max-lg:mt-68" data-cid="n195">
              <div className="inline-flex items-center gap-4 text-[0.6875rem] font-bold leading-[1.0625rem] tracking-[1.65px] uppercase max-md:text-[0.625rem] max-md:leading-[0.9375rem] max-md:tracking-[1.5px]" data-cid="n196">
                EXPLORE COLLECTION
                <span className="block text-accent" data-cid="n197">
                  <Icon6 cid={"n198"} />
                </span>
              </div>
            </div>
          </div>
        </a>
      );
    case "shirts":
      return (
        <a className="border border-solid border-surface-5 block relative rounded-[18px] col-start-[span_2] col-end-[span_2] overflow-hidden bg-foreground cursor-pointer h-[31.25rem] max-md:rounded-[14px] max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] max-md:h-[28.125rem] md:max-lg:col-start-[span_1] md:max-lg:col-end-[span_1] hover:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--border)_0px_0.54035px_1.62105px_0px,var(--border)_0px_0.54035px_1.0807px_-0.54035px] focus:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0.0773621px_0.232086px_0px,var(--clr-0)_0px_0.0773621px_0.154724px_-0.0773621px]" data-cid="n199" data-component="link" aria-label="Explore SHIRTS collection" href="/collections/shirts">
          <div className="h-124.5 block absolute top-0 inset-x-0 z-0 pointer-events-none max-md:h-[192.3px] md:max-lg:h-56.5" data-cid="n200">
            <img className="w-94 block absolute right-0 max-w-full overflow-clip object-cover object-[100%_50%] aspect-[auto_600/600] align-middle pointer-events-none h-full max-md:w-[19.1875rem] max-md:right-[-51.1px] md:max-lg:w-84.5 2xl:w-[29.5625rem]" data-cid="n201" data-component="image" alt="SHIRTS" height="600" src="/assets/cloned/images/bf8bf022cc21.webp" width="600" />
          </div>
          <div className="h-124.5 block absolute top-0 right-[18.0625rem] left-0 z-5 pointer-events-none w-1/2 max-md:h-[192.3px] max-md:right-[4.2625rem] max-md:w-4/5 md:max-lg:h-56.5 md:max-lg:right-[118.3px] md:max-lg:w-[65%] 2xl:right-91" style={{ backgroundImage: "linear-gradient(to right, var(--foreground) 0%, var(--clr-15) 50%, var(--clr-0) 100%)" }} data-cid="n202" />
          <div className="flex relative z-10 p-8 flex-col items-start text-left pointer-events-none h-full max-md:p-6" data-cid="n203">
            <div className="flex mb-4 items-center gap-3 pointer-events-none max-md:mb-3" data-cid="n204">
              <span className="block text-accent [font-family:Oswald,_'Oswald_Fallback'] text-2xl font-bold leading-8 tracking-[0.6px] pointer-events-none max-md:text-xl max-md:leading-7 max-md:tracking-[0.5px]" data-cid="n205">
                {d.stat}
              </span>
              <div className="block bg-clr-16 pointer-events-none h-px w-10 max-md:w-8" data-cid="n206" aria-hidden="true" />
            </div>
            <h3 className="block mb-3 text-surface [font-family:Oswald,_'Oswald_Fallback'] text-[4.0625rem] font-bold leading-[3.4375rem] tracking-[-1.3px] uppercase [scale:1_1.25] pointer-events-none max-md:text-[2.8125rem] max-md:leading-[2.375rem] max-md:tracking-[-0.9px] md:max-lg:text-[3.4375rem] md:max-lg:leading-[2.9375rem] md:max-lg:tracking-[-1.1px]" data-cid="n207" data-component="heading">
              {d.title}
            </h3>
            <p className="block mt-4 text-clr-17 text-[0.6875rem] font-bold leading-[1.0625rem] tracking-[2.2px] uppercase pointer-events-none max-md:text-[0.5625rem] max-md:leading-[0.875rem] max-md:tracking-[1.8px] md:max-lg:text-[0.625rem] md:max-lg:leading-[0.9375rem] md:max-lg:tracking-[2px]" data-cid="n208">
              {d.description}
            </p>
            <div className="block mt-65.5 pointer-events-none max-lg:mt-0" data-cid="n209">
              <div className="inline-flex items-center gap-4 text-surface text-[0.6875rem] font-bold leading-[1.0625rem] tracking-[1.65px] uppercase max-md:text-[0.625rem] max-md:leading-[0.9375rem] max-md:tracking-[1.5px]" data-cid="n210">
                EXPLORE COLLECTION
                <span className="block text-accent" data-cid="n211">
                  <Icon6 cid={"n212"} />
                </span>
              </div>
            </div>
          </div>
        </a>
      );
    case "trousers":
      return (
        <a className="border border-solid border-border block relative rounded-[18px] col-start-[span_2] col-end-[span_2] overflow-hidden bg-surface cursor-pointer h-[31.25rem] max-md:rounded-[14px] max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] max-md:h-[28.125rem] hover:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--border)_0px_0.457191px_1.37157px_0px,var(--border)_0px_0.457191px_0.914381px_-0.457191px] focus:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0.0597977px_0.179393px_0px,var(--clr-0)_0px_0.0597977px_0.119595px_-0.0597977px]" data-cid="n213" data-component="link" aria-label="Explore TROUSERS collection" href="/collections/trousers">
          <div className="h-59 block absolute top-0 inset-x-0 z-0 pointer-events-none max-md:h-[192.3px] md:max-lg:h-56.5" data-cid="n214">
            <img className="w-[21.6875rem] h-65 block absolute left-0 max-w-full overflow-clip object-cover object-[0%_100%] aspect-[auto_600/600] align-middle pointer-events-none max-md:w-[19.1875rem] max-md:h-48 max-md:left-[-51.1px] max-md:object-[0%_50%] md:max-lg:w-140.5 md:max-lg:h-56.5 md:max-lg:-left-[2.1875rem] 2xl:w-[27.3125rem]" data-cid="n215" data-component="image" alt="TROUSERS" height="600" src="/assets/cloned/images/03610eeb9ff3.webp" width="600" />
          </div>
          <div className="h-59 block absolute top-0 right-0 left-[18.0625rem] z-5 pointer-events-none w-1/2 max-md:h-[192.3px] max-md:left-[4.2625rem] max-md:w-4/5 md:max-lg:h-56.5 md:max-lg:left-[245.7px] md:max-lg:w-[65%] 2xl:left-91" style={{ backgroundImage: "linear-gradient(to left, var(--surface) 0%, var(--clr-18) 50%, var(--clr-0) 100%)" }} data-cid="n216" />
          <div className="flex relative z-10 ml-[144.5px] p-8 flex-col items-end text-right pointer-events-none h-full w-3/4 max-md:ml-[1.0625rem] max-md:p-6 max-md:w-[95%] md:max-lg:ml-[105.3px] md:max-lg:w-[85%] 2xl:ml-45.5" data-cid="n217">
            <div className="flex mb-4 flex-row-reverse items-center gap-3 pointer-events-none max-md:mb-3" data-cid="n218">
              <span className="block text-accent [font-family:Oswald,_'Oswald_Fallback'] text-2xl font-bold leading-8 tracking-[0.6px] pointer-events-none max-md:text-xl max-md:leading-7 max-md:tracking-[0.5px]" data-cid="n219">
                {d.stat}
              </span>
              <div className="block bg-color-006 pointer-events-none h-px w-10 max-md:w-8" data-cid="n220" aria-hidden="true" />
            </div>
            <h3 className="block mb-3 [font-family:Oswald,_'Oswald_Fallback'] text-[4.0625rem] font-bold leading-[3.4375rem] tracking-[-1.3px] uppercase [scale:1_1.25] pointer-events-none max-md:text-[2.8125rem] max-md:leading-[2.375rem] max-md:tracking-[-0.9px] md:max-lg:text-[3.4375rem] md:max-lg:leading-[2.9375rem] md:max-lg:tracking-[-1.1px]" data-cid="n221" data-component="heading">
              {d.title}
            </h3>
            <p className="block mt-4 text-color-005 text-[0.6875rem] font-bold leading-[1.0625rem] tracking-[2.2px] uppercase pointer-events-none max-md:text-[0.5625rem] max-md:leading-[0.875rem] max-md:tracking-[1.8px] md:max-lg:text-[0.625rem] md:max-lg:leading-[0.9375rem] md:max-lg:tracking-[2px]" data-cid="n222">
              {d.description}
            </p>
            <div className="block pointer-events-none" data-cid="n223">
              <div className="inline-flex items-center gap-4 text-[0.6875rem] font-bold leading-[1.0625rem] tracking-[1.65px] uppercase max-md:text-[0.625rem] max-md:leading-[0.9375rem] max-md:tracking-[1.5px]" data-cid="n224">
                EXPLORE COLLECTION
                <span className="block text-accent" data-cid="n225">
                  <Icon6 cid={"n226"} />
                </span>
              </div>
            </div>
          </div>
        </a>
      );
    case "footwear":
      return (
        <a className="border border-solid border-border block relative rounded-[18px] col-start-[span_2] col-end-[span_2] overflow-hidden bg-clr-13 cursor-pointer h-[31.25rem] max-md:rounded-[14px] max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] max-md:h-[28.125rem] md:max-lg:col-start-[span_1] md:max-lg:col-end-[span_1] hover:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--border)_0px_0.540247px_1.62074px_0px,var(--border)_0px_0.540247px_1.08049px_-0.540247px] focus:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--border)_0px_0.107573px_0.322719px_0px,var(--border)_0px_0.107573px_0.215146px_-0.107573px]" data-cid="n227" data-component="link" aria-label="Explore FOOTWEAR collection" href="/collections/shoes">
          <div className="h-134.5 block absolute top-0 inset-x-0 z-0 pointer-events-none max-md:h-[192.3px] md:max-lg:h-130.5" data-cid="n228">
            <img className="w-full h-134.5 block absolute bottom-0 max-w-full overflow-clip object-cover aspect-[auto_600/600] align-middle [scale:1.1] pointer-events-none max-md:h-48 max-lg:[scale:initial] md:max-lg:h-130.5 md:max-lg:-bottom-[1.625rem]" data-cid="n229" data-component="image" alt="FOOTWEAR" height="600" src="/assets/cloned/images/82244875adf9.webp" width="600" />
          </div>
          <div className="flex relative z-10 p-8 flex-col items-start text-left pointer-events-none h-full max-md:p-6" data-cid="n230">
            <div className="flex mb-4 items-center gap-3 pointer-events-none max-md:mb-3" data-cid="n231">
              <span className="block text-accent [font-family:Oswald,_'Oswald_Fallback'] text-2xl font-bold leading-8 tracking-[0.6px] pointer-events-none max-md:text-xl max-md:leading-7 max-md:tracking-[0.5px]" data-cid="n232">
                {d.stat}
              </span>
              <div className="block bg-color-006 pointer-events-none h-px w-10 max-md:w-8" data-cid="n233" aria-hidden="true" />
            </div>
            <h3 className="block mb-3 [font-family:Oswald,_'Oswald_Fallback'] text-[4.0625rem] font-bold leading-[3.4375rem] tracking-[-1.3px] uppercase [scale:1_1.25] pointer-events-none max-md:text-[2.8125rem] max-md:leading-[2.375rem] max-md:tracking-[-0.9px] md:max-lg:text-[3.4375rem] md:max-lg:leading-[2.9375rem] md:max-lg:tracking-[-1.1px]" data-cid="n234" data-component="heading">
              {d.title}
            </h3>
            <p className="block mt-4 text-color-005 text-[0.6875rem] font-bold leading-[1.0625rem] tracking-[2.2px] uppercase pointer-events-none max-md:text-[0.5625rem] max-md:leading-[0.875rem] max-md:tracking-[1.8px] md:max-lg:text-[0.625rem] md:max-lg:leading-[0.9375rem] md:max-lg:tracking-[2px]" data-cid="n235">
              {d.description}
            </p>
            <div className="block mt-75.5 pointer-events-none max-md:mt-0 md:max-lg:mt-74" data-cid="n236">
              <div className="inline-flex items-center gap-4 text-[0.6875rem] font-bold leading-[1.0625rem] tracking-[1.65px] uppercase max-md:text-[0.625rem] max-md:leading-[0.9375rem] max-md:tracking-[1.5px]" data-cid="n237">
                EXPLORE COLLECTION
                <span className="block text-accent" data-cid="n238">
                  <Icon6 cid={"n239"} />
                </span>
              </div>
            </div>
          </div>
        </a>
      );
    case "accessories":
      return (
        <div className="flex flex-col gap-10 col-start-[span_2] col-end-[span_2] h-full max-lg:gap-6 max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] md:max-lg:col-start-[span_1] md:max-lg:col-end-[span_1]" data-cid="n240">
          <a className="h-62.5 min-h-62.5 border border-solid border-border block relative rounded-[18px] flex-1 overflow-hidden bg-clr-13 cursor-pointer max-md:rounded-[14px] hover:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--border)_0px_0.54036px_1.62108px_0px,var(--border)_0px_0.54036px_1.08072px_-0.54036px] focus:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--border)_0px_0.107645px_0.322934px_0px,var(--border)_0px_0.107645px_0.215289px_-0.107645px]" data-cid="n241" data-component="link" aria-label="Explore ACCESSORIES collection" href="/collections/accessories">
            <div className="h-full block absolute top-0 inset-x-0 z-0 pointer-events-none" data-cid="n242">
              <img className="w-[25.3125rem] block absolute right-0 max-w-full overflow-clip object-cover object-[100%_50%] aspect-[auto_600/600] align-middle pointer-events-none h-full max-md:w-[19.1875rem] md:max-lg:w-76 2xl:w-127.5" data-cid="n243" data-component="image" alt="ACCESSORIES" height="600" src="/assets/cloned/images/d81def58f262.webp" width="600" />
            </div>
            <div className="h-full block absolute top-0 right-[86.7px] left-0 z-5 pointer-events-none w-[85%] max-md:right-[1.0625rem] max-md:w-[95%] md:max-lg:right-[2.1125rem] md:max-lg:w-[90%] 2xl:right-[6.825rem]" style={{ backgroundImage: "linear-gradient(to right, var(--surface) 0%, var(--clr-18) 50%, var(--clr-0) 100%)" }} data-cid="n244" />
            <div className="flex relative z-10 p-8 flex-col items-start text-left pointer-events-none h-full max-md:p-6" data-cid="n245">
              <div className="flex mb-4 items-center gap-3 pointer-events-none max-md:mb-3" data-cid="n246">
                <span className="block text-accent [font-family:Oswald,_'Oswald_Fallback'] text-2xl font-bold leading-8 tracking-[0.6px] pointer-events-none max-md:text-xl max-md:leading-7 max-md:tracking-[0.5px]" data-cid="n247">
                  05
                </span>
                <div className="block bg-color-006 pointer-events-none h-px w-10 max-md:w-8" data-cid="n248" aria-hidden="true" />
              </div>
              <h3 className="block mb-3 [font-family:Oswald,_'Oswald_Fallback'] text-[4.0625rem] font-bold leading-[3.4375rem] tracking-[-1.3px] uppercase [scale:1_1.25] pointer-events-none max-md:text-[2.8125rem] max-md:leading-[2.375rem] max-md:tracking-[-0.9px] md:max-lg:text-[3.4375rem] md:max-lg:leading-[2.9375rem] md:max-lg:tracking-[-1.1px]" data-cid="n249" data-component="heading">
                {d.title}
              </h3>
              <p className="block mt-4 text-color-005 text-[0.6875rem] font-bold leading-[1.0625rem] tracking-[2.2px] uppercase pointer-events-none max-md:text-[0.5625rem] max-md:leading-[0.875rem] max-md:tracking-[1.8px] md:max-lg:text-[0.625rem] md:max-lg:leading-[0.9375rem] md:max-lg:tracking-[2px]" data-cid="n250">
                STYLISH • MINIMAL • BOLD
              </p>
              <div className="block mt-3 pointer-events-none max-md:mt-14 md:max-lg:mt-5.5" data-cid="n251">
                <div className="inline-flex items-center gap-4 text-[0.6875rem] font-bold leading-[1.0625rem] tracking-[1.65px] uppercase max-md:text-[0.625rem] max-md:leading-[0.9375rem] max-md:tracking-[1.5px]" data-cid="n252">
                  EXPLORE COLLECTION
                  <span className="block text-accent" data-cid="n253">
                    <Icon6 cid={"n254"} />
                  </span>
                </div>
              </div>
            </div>
          </a>
          <a className="h-62.5 min-h-62.5 border border-solid border-border block relative rounded-[18px] flex-1 overflow-hidden bg-surface cursor-pointer max-md:rounded-[14px] hover:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--border)_0px_0.457159px_1.37148px_0px,var(--border)_0px_0.457159px_0.914318px_-0.457159px] focus:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0.0393679px_0.118104px_0px,var(--clr-0)_0px_0.0393679px_0.0787357px_-0.0393679px]" data-cid="n255" data-component="link" aria-label="Explore BAGS collection" href="/collections/bags">
            <div className="h-full block absolute top-0 inset-x-0 z-0 pointer-events-none" data-cid="n256">
              <img className="w-[25.3125rem] block absolute right-0 max-w-full overflow-clip object-cover object-[100%_50%] aspect-[auto_600/600] align-middle pointer-events-none h-full max-md:w-[19.1875rem] md:max-lg:w-76 2xl:w-127.5" data-cid="n257" data-component="image" alt="BAGS" height="600" src="/assets/cloned/images/75a23bb75105.webp" width="600" />
            </div>
            <div className="h-full block absolute top-0 right-[18.0625rem] left-0 z-5 pointer-events-none w-1/2 max-md:right-[4.2625rem] max-md:w-4/5 md:max-lg:right-[118.3px] md:max-lg:w-[65%] 2xl:right-91" style={{ backgroundImage: "linear-gradient(to right, var(--surface) 0%, var(--clr-18) 50%, var(--clr-0) 100%)" }} data-cid="n258" />
            <div className="flex relative z-10 p-8 flex-col items-start text-left pointer-events-none h-full max-md:p-6" data-cid="n259">
              <div className="flex mb-4 items-center gap-3 pointer-events-none max-md:mb-3" data-cid="n260">
                <span className="block text-accent [font-family:Oswald,_'Oswald_Fallback'] text-2xl font-bold leading-8 tracking-[0.6px] pointer-events-none max-md:text-xl max-md:leading-7 max-md:tracking-[0.5px]" data-cid="n261">
                  {d.stat}
                </span>
                <div className="block bg-color-006 pointer-events-none h-px w-10 max-md:w-8" data-cid="n262" aria-hidden="true" />
              </div>
              <h3 className="block mb-3 [font-family:Oswald,_'Oswald_Fallback'] text-[4.0625rem] font-bold leading-[3.4375rem] tracking-[-1.3px] uppercase [scale:1_1.25] pointer-events-none max-md:text-[2.8125rem] max-md:leading-[2.375rem] max-md:tracking-[-0.9px] md:max-lg:text-[3.4375rem] md:max-lg:leading-[2.9375rem] md:max-lg:tracking-[-1.1px]" data-cid="n263" data-component="heading">
                BAGS
              </h3>
              <p className="block mt-4 text-color-005 text-[0.6875rem] font-bold leading-[1.0625rem] tracking-[2.2px] uppercase pointer-events-none max-md:text-[0.5625rem] max-md:leading-[0.875rem] max-md:tracking-[1.8px] md:max-lg:text-[0.625rem] md:max-lg:leading-[0.9375rem] md:max-lg:tracking-[2px]" data-cid="n264">
                {d.description}
              </p>
              <div className="block mt-3 pointer-events-none max-md:mt-14 md:max-lg:mt-5.5" data-cid="n265">
                <div className="inline-flex items-center gap-4 text-[0.6875rem] font-bold leading-[1.0625rem] tracking-[1.65px] uppercase max-md:text-[0.625rem] max-md:leading-[0.9375rem] max-md:tracking-[1.5px]" data-cid="n266">
                  EXPLORE COLLECTION
                  <span className="block text-accent" data-cid="n267">
                    <Icon6 cid={"n268"} />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    default:
      return null;
  }
}
