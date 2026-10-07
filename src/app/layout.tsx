import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Agaram Elite Wear | Men's Wear in Ariyalur",
  "description": "Agaram Elite Wear is a men's clothing store in Ariyalur offering contemporary styles, shirts, trousers, jeans, casual wear and formal wear.",
  "keywords": [
    "Agaram Elite Wear",
    "Agaram Mens Wear",
    "Agaram Men's Wear Ariyalur",
    "mens wear Ariyalur",
    "mens clothing Ariyalur",
    "mens fashion Ariyalur",
    "men's clothing store Ariyalur"
  ],
  "robots": "index, follow",
  "alternates": {
    "canonical": "/"
  },
  "icons": {
    "shortcut": [
      {
        "url": "/assets/agaram-favicon.png"
      }
    ],
    "icon": [
      {
        "url": "/assets/agaram-favicon.png",
        "type": "image/png",
        "sizes": "64x64"
      },
      {
        "url": "/assets/agaram-logo.png",
        "type": "image/png",
        "sizes": "512x512"
      }
    ],
    "apple": [
      {
        "url": "/assets/agaram-logo.png"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ClothingStore",
            "name": "Agaram Elite Wear",
            "alternateName": "Agaram Men's Wear",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "5, Sendurai Road, Near Khadi Craft Old Bus Stand, Kamarajar Nagar",
              "addressLocality": "Ariyalur",
              "addressRegion": "Tamil Nadu",
              "postalCode": "621704",
              "addressCountry": "IN"
            },
            "telephone": "+916383478850",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "56"
            },
            "areaServed": "Ariyalur"
          }) }}
        />
      </head>
      <body className="min-h-screen flex flex-col text-foreground [font-family:Inter,_'Inter_Fallback'] text-base font-normal not-italic leading-6 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background" data-cid="n0">
        {children}
      </body>
    </html>
  );
}
