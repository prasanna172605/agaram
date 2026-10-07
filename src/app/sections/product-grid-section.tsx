import ProductCard from "../components/product-card";
import Tile, { type TileData } from "../components/tile";
import { ProductCard_cids, Tile_cids } from "../_cids";
import { Tile_styles } from "../_styles";
import { products as productsContent } from "../content";
const Tile_data: TileData[] = [
    { text: "STREETWEAR ENERGY FOR EVERYDAY STYLE" },
    { text: "PREMIUM FOOTWEAR, CURATED FOR MODERN MEN" },
    { text: "ESSENTIALS CHOSEN WITH INTENTION" },
    { text: "GLOBAL STYLE, LOCALLY CURATED" },
    { text: "ACCESSORIES THAT COMPLETE THE LOOK" }
];
/** Product Grid section. */
export default function ProductGridSection({ products = productsContent, tileData = Tile_data } = {}) {
  return (
    <section className="block relative pt-28 text-background bg-foreground w-full max-md:pt-20" data-cid="n97" aria-labelledby="about-heading" id="about">
      <div className="flex max-w-400 px-12 flex-col items-center mx-auto w-full max-md:px-4 md:max-lg:px-8" data-cid="n98">
        <div className="max-w-325 flex relative mb-24 w-full max-md:mb-16 max-md:flex-col" data-cid="n99">
          <div className="h-full border border-solid border-surface-2 block absolute top-0 inset-x-0 min-w-0 rounded-[48px] overflow-hidden bg-background shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-8)_0px_25px_50px_-12px] max-lg:rounded-4xl" data-cid="n100">
            <div className="h-[42.4375rem] block absolute right-[650.1px] left-0 z-0 bg-clr-9 pointer-events-none max-md:h-80 max-md:right-0 md:max-lg:h-[596.1px] md:max-lg:right-[386.1px] 2xl:h-[44.475rem] 2xl:right-[44.625rem]" data-cid="n101" />
          </div>
          <div className="h-[42.5625rem] block absolute right-[615.7px] left-0 z-10 min-w-0 pointer-events-none max-md:h-105 max-md:right-0 md:max-lg:h-[598.1px] md:max-lg:right-88 2xl:h-[44.6rem] 2xl:right-169" data-cid="n102">
            <div className="block relative pointer-events-none w-full h-full" data-cid="n103">
              <img className="w-142 h-[42.5625rem] block absolute max-w-full overflow-clip object-contain object-[100%_100%] align-middle text-clr-0 [translate:12px_40px] [scale:1.05] pointer-events-none max-md:w-[21.4375rem] max-md:h-105 max-md:object-[50%_100%] max-md:[translate:initial] md:max-lg:w-88 md:max-lg:h-149.5 md:max-lg:[translate:-24px_32px] md:max-lg:[scale:1.15] 2xl:w-156 2xl:h-178.5" data-cid="n104" data-component="image" alt="Agaram Elite Wear menswear model wearing contemporary fashion in Ariyalur" sizes="(max-width: 768px) 100vw, 50vw" src="/agaram/assets/cloned/images/1a81c74096c7.jpg" srcSet="/agaram/assets/cloned/images/7b92db2eaa4f.avif 384w, /agaram/assets/cloned/images/cfcda47f1d7a.avif 640w, /agaram/assets/cloned/images/99812c37e681.avif 750w, /agaram/assets/cloned/images/5f36dda3a1a8.avif 828w, /agaram/assets/cloned/images/d764f8bfc53e.avif 1080w, /agaram/assets/cloned/images/316845d1126d.jpg 1200w, /agaram/assets/cloned/images/1a81c74096c7.jpg 1920w" />
            </div>
          </div>
          <div className="flex relative z-20 w-full max-md:flex-col" data-cid="n105">
            <div className="w-[45%] block shrink-0 h-auto max-md:w-full max-md:h-80" data-cid="n106" />
            <div className="w-full flex p-20 flex-col justify-center max-md:pt-28 max-md:pb-12 max-md:px-6 md:max-lg:py-16 md:max-lg:px-10" data-cid="n107">
              <div className="flex mb-3 items-center gap-4" data-cid="n108">
                <span className="block text-primary text-sm font-black leading-5 tracking-[2.8px] max-md:text-xs max-md:leading-4 max-md:tracking-[2.4px]" data-cid="n109">
                  01
                </span>
                <span className="block w-12 h-px max-md:w-8" style={{ backgroundImage: "linear-gradient(to right, var(--primary) 0%, var(--clr-4) 100%)" }} data-cid="n110" aria-hidden="true" />
                <h2 className="block text-foreground text-sm font-bold leading-5 tracking-[2.8px] uppercase max-md:text-[0.625rem] max-md:leading-[0.9375rem] max-md:tracking-[2px] md:max-lg:text-xs md:max-lg:leading-4 md:max-lg:tracking-[2.4px]" data-cid="n111" data-component="heading" id="about-heading">
                  Why Agaram Elite Wear
                </h2>
              </div>
              <div className="block mb-8 text-foreground text-xs font-bold leading-4 tracking-[2.4px] uppercase max-md:text-[0.625rem] max-md:leading-[0.9375rem] max-md:tracking-[2px]" data-cid="n112">
                Ariyalur, TN
              </div>
              <p className="w-full max-w-104 block mb-12 text-foreground text-lg font-medium leading-[1.8125rem] max-md:mb-10 max-md:leading-[1.625rem] max-md:[font-size:inherit]" data-cid="n113">
                Located in Ariyalur, Agaram Elite Wear brings together contemporary men&apos;s fashion with refined everyday style. We curate premium shirts, trousers, denim, casual wear, and accessories for men who dress with confidence and distinct character.
              </p>
              <div className="block mb-2 text-foreground text-[5.1875rem] font-black leading-[4.4375rem] tracking-[-2.5px] uppercase [overflow-wrap:break-word] max-lg:text-[3.25rem] max-lg:leading-[2.75rem] max-lg:tracking-[-1.56px] 2xl:text-8xl 2xl:leading-[5.125rem] 2xl:tracking-[-2.88px]" data-cid="n114">
                BUILT
                <br className="inline" data-cid="n115" />
                FOR THE
                <br className="inline" data-cid="n116" />
                ELITE
                <span className="inline text-primary" data-cid="n117">
                  .
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-325 grid mb-20 gap-y-10 gap-x-12 w-full max-md:mb-16 max-md:gap-x-6 grid-cols-2 lg:grid-cols-4" data-cid="n118">
          {products.map((d, i) => <ProductCard key={i} d={d} cids={ProductCard_cids[i]} />)}
        </div>
      </div>
      <section className="flex py-8 overflow-hidden bg-clr-10 w-full max-md:py-6" data-cid="n139" id="brand-hooks">
        <div className="w-[234.1125rem] h-7 flex items-center whitespace-nowrap text-nowrap [animation-name:marquee] [animation-duration:40s] [animation-timing-function:linear] [animation-iteration-count:infinite] max-md:w-[178.75rem] max-md:h-5 md:max-lg:w-[212.4375rem] md:max-lg:h-6" data-cid="n140">
          {tileData.map((d, i) => <Tile key={i} d={d} cids={Tile_cids[i]} styles={Tile_styles[i]} />)}
        </div>
        <div className="w-[234.1125rem] h-7 flex items-center whitespace-nowrap text-nowrap [animation-name:marquee] [animation-duration:40s] [animation-timing-function:linear] [animation-iteration-count:infinite] max-md:w-[178.75rem] max-md:h-5 md:max-lg:w-[212.4375rem] md:max-lg:h-6" data-cid="n156" aria-hidden="true">
          <div className="flex items-center" data-cid="n157">
            <span className="block mx-12 text-foreground text-lg font-bold leading-7 tracking-[2.7px] uppercase max-md:mx-8 max-md:text-sm max-md:leading-5 max-md:tracking-[2.1px] md:max-lg:tracking-[2.4px] md:max-lg:[font-size:inherit] md:max-lg:leading-[inherit]" data-cid="n158">
              CONTEMPORARY MENSWEAR, ROOTED IN ARIYALUR
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}
