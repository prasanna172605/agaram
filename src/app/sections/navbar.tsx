/** Top navigation bar. */
export default function Navbar() {
  return (
    <nav
      className="h-28 flex fixed inset-x-0 top-0 z-100 min-w-0 py-4 px-12 justify-between items-center bg-background border-b border-surface-2/40 shadow-sm max-md:h-20 max-md:py-3 max-md:px-4 md:max-lg:h-24 md:max-lg:px-6"
      data-cid="n2"
      data-component="nav"
    >
      <a className="h-full flex items-center shrink-0 gap-3.5 cursor-pointer" data-cid="n3" data-component="link" aria-label="Agaram Elite Wear Home" href="/">
        <img className="block max-w-full shrink-0 overflow-clip object-contain rounded-xl aspect-square align-middle text-clr-0 w-14 h-14 max-md:w-11 max-md:h-11 shadow-sm" data-cid="n4" data-component="image" alt="Agaram Elite Wear Logo" height="80" src="/agaram/assets/agaram-logo.png" width="80" />
        <div className="flex flex-col justify-center leading-tight">
          <span className="font-black text-foreground tracking-widest text-xl uppercase max-md:text-base font-sans">
            AGARAM
          </span>
          <span className="font-bold text-primary tracking-[0.25em] text-xs uppercase max-md:text-[0.625rem]">
            ELITE WEAR
          </span>
        </div>
      </a>
      <div className="hidden min-w-0 shrink-0 gap-10 text-[0.9375rem] font-bold leading-[1.4375rem] tracking-[1.5px] uppercase whitespace-nowrap text-nowrap lg:flex 2xl:gap-14 2xl:text-base" data-cid="n9">
        <a className="inline relative py-1 cursor-pointer hover:text-primary transition-colors" data-cid="n10" aria-label="Navigate to Home section" href="/#hero">
          Home
          <span className="w-full block absolute bottom-0 left-0 bg-primary h-0.5" data-cid="n11" aria-hidden="true" />
        </a>
        <a className="inline relative py-1 cursor-pointer hover:text-primary transition-colors" data-cid="n12" aria-label="Navigate to About section" href="/#about">
          About
          <span className="w-full block absolute bottom-0 left-0 bg-primary [scale:0_1] hover:[scale:1_1] transition-transform h-0.5" data-cid="n13" aria-hidden="true" />
        </a>
        <a className="inline relative py-1 cursor-pointer hover:text-primary transition-colors" data-cid="n14" aria-label="Navigate to Collections section" href="/#collections">
          Collections
          <span className="w-full block absolute bottom-0 left-0 bg-primary [scale:0_1] hover:[scale:1_1] transition-transform h-0.5" data-cid="n15" aria-hidden="true" />
        </a>
        <a className="inline relative py-1 cursor-pointer hover:text-primary transition-colors" data-cid="n16" aria-label="Navigate to Store section" href="/#store">
          Store
          <span className="w-full block absolute bottom-0 left-0 bg-primary [scale:0_1] hover:[scale:1_1] transition-transform h-0.5" data-cid="n17" aria-hidden="true" />
        </a>
        <a className="inline relative py-1 cursor-pointer hover:text-primary transition-colors" data-cid="n18" aria-label="Navigate to Contact section" href="/#contact">
          Contact
          <span className="w-full block absolute bottom-0 left-0 bg-primary [scale:0_1] hover:[scale:1_1] transition-transform h-0.5" data-cid="n19" aria-hidden="true" />
        </a>
      </div>
      <div className="hidden min-w-0 shrink-0 lg:block" data-cid="n20">
        <a className="inline-block relative z-1 isolate py-2.5 px-7 rounded-[11.2px] text-white bg-primary text-xs font-bold leading-5 tracking-[1.3px] uppercase whitespace-nowrap text-nowrap cursor-pointer hover:opacity-90 shadow-md transition-all" data-cid="n21" aria-label="Contact Agaram Elite Wear on WhatsApp" href="https://wa.me/916383478850?text=Hi%20Agaram%20Elite%20Wear%2C%20I%27d%20like%20to%20know%20more%20about%20the%20latest%20men%27s%20fashion%20collections%20available%20at%20your%20Ariyalur%20store.">
          <span className="inline relative z-10" data-cid="n22">
            WhatsApp
          </span>
        </a>
      </div>
    </nav>
  );
}
