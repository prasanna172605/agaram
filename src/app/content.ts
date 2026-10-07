// Semantic page content extracted from recognized recipe sections.

export type ProductsItem = {
  text: string;
  title: string;
  description: string;
};
export const products: ProductsItem[] = [
    { text: "01", title: "Refined Fit", description: "Designed to complement the modern man's silhouette." },
    { text: "02", title: "Quality Fabrics", description: "Selected fabrics chosen for comfort, character and everyday wear." },
    { text: "03", title: "Contemporary Style", description: "Modern silhouettes that balance timeless style with current trends." },
    { text: "04", title: "Ariyalur", description: "A definitive men's fashion destination built for our community." }
];

export type Products2Item = {
  variant: string;
  title: string;
  description: string;
  stat: string;
};
export const products2: Products2Item[] = [
    { variant: "t-shirts", title: "T-SHIRTS", description: "OVERSIZED • ESSENTIAL • POLOS", stat: "01" },
    { variant: "shirts", title: "SHIRTS", description: "CASUAL • FORMAL • LINEN", stat: "02" },
    { variant: "trousers", title: "TROUSERS", description: "CARGO • RELAXED • CHINOS", stat: "03" },
    { variant: "footwear", title: "FOOTWEAR", description: "SNEAKERS • CASUAL • EVERYDAY", stat: "04" },
    { variant: "accessories", title: "ACCESSORIES", description: "BELTS • WALLETS • BAGS", stat: "05" }
];

export type LogoDataItem = {
  imgSrc: string;
};
export const logoData: LogoDataItem[] = [
    { imgSrc: "/assets/cloned/images/d9f8b7e74348.webp" },
    { imgSrc: "/assets/cloned/images/bdf30b575b75.webp" },
    { imgSrc: "/assets/cloned/images/84f6982aac43.webp" },
    { imgSrc: "/assets/cloned/images/f1c254066d09.webp" },
    { imgSrc: "/assets/cloned/images/7777726ceb03.webp" },
    { imgSrc: "/assets/cloned/images/ed65037bfbcc.webp" },
    { imgSrc: "/assets/cloned/images/7d268acba778.webp" },
    { imgSrc: "/assets/cloned/images/7249b029c792.webp" },
    { imgSrc: "/assets/cloned/images/65445e34380d.webp" },
    { imgSrc: "/assets/cloned/images/bf1d9031fcf4.webp" },
    { imgSrc: "/assets/cloned/images/7874c9308db9.webp" },
    { imgSrc: "/assets/cloned/images/27797ce0f5ed.webp" },
    { imgSrc: "/assets/cloned/images/9641480145be.webp" },
    { imgSrc: "/assets/cloned/images/a600c4ae61ae.webp" },
    { imgSrc: "/assets/cloned/images/123e975ec7c2.webp" },
    { imgSrc: "/assets/cloned/images/3088e325c9fd.webp" }
];

export type TextLinkDataItem = {
  href: string;
  label: string;
};
export const textLinkData: TextLinkDataItem[] = [
    { href: "/#about", label: "About" },
    { href: "/#collections", label: "Collections" },
    { href: "/#store", label: "Store" },
    { href: "/#contact", label: "Contact" }
];

export type TextLink2DataItem = {
  ariaLabel: string;
  href: string;
  label: string;
  rel?: string;
  target?: string;
};
export const textLink2Data: TextLink2DataItem[] = [
    { ariaLabel: "Call Agaram Elite Wear", href: "tel:+916383478850", label: "Phone" },
    { ariaLabel: "Chat with Agaram Elite Wear on WhatsApp", href: "https://wa.me/916383478850?text=Hi%20Agaram%20Elite%20Wear%2C%20I%27d%20like%20to%20know%20more%20about%20the%20latest%20men%27s%20fashion%20collections%20available%20at%20your%20Ariyalur%20store.", label: "WhatsApp" },
    { ariaLabel: "Visit Agaram Elite Wear Instagram profile", href: "https://instagram.com", rel: "noreferrer", target: "_blank", label: "Instagram" }
];
