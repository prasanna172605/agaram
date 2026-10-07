import NavLink, { type NavLinkData } from "../components/nav-link";
import { NavLink_cids } from "../_cids";
import { NavLink_styles } from "../_styles";
const NavLink_data: NavLinkData[] = [
    { ariaLabel: "Home", href: "/#hero", icon: <>
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </>, label: "Home" },
    { ariaLabel: "Collect", href: "/#collections", icon: <>
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M3 15h18" />
          <path d="M9 3v18" />
          <path d="M15 3v18" />
          </>, label: "Collect" },
    { ariaLabel: "WhatsApp", href: "https://wa.me/916383478850?text=Hi%20Agaram%20Elite%20Wear%2C%20I%27d%20like%20to%20know%20more%20about%20the%20latest%20men%27s%20fashion%20collections%20available%20at%20your%20Ariyalur%20store.", icon: <>
          <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
          </>, label: "WhatsApp" },
    { ariaLabel: "Store", href: "/#store", icon: <>
          <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" />
          <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244" />
          <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" />
          </>, label: "Store" },
    { ariaLabel: "Contact", href: "/#contact", icon: <>
          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
          </>, label: "Contact" }
];
/** Navbar2 section. */
export default function Navbar2({ navLinkData = NavLink_data } = {}) {
  return (
    <nav className="border border-solid border-color-007 flex fixed -right-50 bottom-10 left-[clamp(187.5px,_50%,_calc(100%_-_187.5px))] z-110 min-w-0 max-w-210 px-12 rounded-[52px] justify-between items-center bg-clr-1 shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--color-009)_0px_8px_32px_0px] [backdrop-filter:blur(24px)] [translate:-50%] w-[90%] h-[6.5rem] max-md:right-[-132.5px] max-md:bottom-4 max-md:max-w-80 max-md:px-2 max-md:rounded-[28px] max-md:h-14 md:max-lg:-right-[19.2rem] md:max-lg:bottom-8 md:max-lg:max-w-175 md:max-lg:px-8 md:max-lg:rounded-[45px] md:max-lg:h-[5.625rem] lg:hidden" data-cid="n29" data-component="nav" aria-label="Mobile Navigation">
      {navLinkData.map((d, i) => <NavLink key={i} d={d} cids={NavLink_cids[i]} styles={NavLink_styles[i]} />)}
    </nav>
  );
}
