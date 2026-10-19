// Site-wide content: menus, contact details and partner logos.

export type NavItem = {
  label: string;
  href: string;
  /** Set to true once the page is built, so the link stops pointing at "#". */
  ready?: boolean;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/", ready: true },
  { label: "News", href: "/news", ready: true },
  { label: "Events & Webinars", href: "/events", ready: true },
  { label: "Ports Directory", href: "/ports-directory", ready: true },
  { label: "Media Pack", href: "/media-pack", ready: true },
  { label: "Suppliers", href: "/suppliers", ready: true },
  { label: "Membership", href: "/membership", ready: true },
  {
    label: "Ports",
    href: "/ports",
    // Same URLs as the live site. Set `ready: true` on each once its page is built.
    children: [
      { label: "Service Providers", href: "/service-providers", ready: true },
      { label: "Shipping Operators", href: "/shipping-operators", ready: true },
      { label: "Ship Registration", href: "/ship-registration", ready: true },
      { label: "World Ports", href: "/world-ports", ready: true },
    ],
  },
  { label: "Contact", href: "/contact", ready: true },
];

export const footerPages: NavItem[] = [
  { label: "Home", href: "/", ready: true },
  { label: "Ports Directory", href: "/ports-directory", ready: true },
  { label: "Membership", href: "/membership", ready: true },
  { label: "Contact", href: "/contact", ready: true },
  { label: "Terms & Conditions", href: "/terms" },
];

export const footerEvents: NavItem[] = [
  { label: "Ports Directory", href: "/ports-directory", ready: true },
  { label: "Suppliers List", href: "/suppliers", ready: true },
  { label: "World Ports", href: "/world-ports", ready: true },
];

/** Pages that aren't built yet link to "#" so they don't 404. */
export const linkHref = (item: NavItem) => (item.ready ? item.href : "#");

export const contact = {
  callLine: "For membership or upcoming port meetings, call us on",
  phone: "0731 228 556",
  email: "faria@irishports.com",
  website: "www.irishports.com",
  company: "Irish Ports Organisation Ltd",
  footerText: "Direct Access to the Most Reliable and Trusted Irish Ports Suppliers.",
};

export const telHref = (number: string) => `tel:${number.replace(/[^\d+]/g, "")}`;

export type Partner = {
  name: string;
  /** Logo image path. Without one, the name is shown as text. */
  logo?: string;
  /** Empty slot that holds space for a partner still to be confirmed. */
  placeholder?: boolean;
};

export const partners: Partner[] = [
  { name: "Kärcher", logo: "/images/partners/karcher.png" },
  { name: "Partner logo", placeholder: true },
  { name: "Partner logo", placeholder: true },
  { name: "Partner logo", placeholder: true },
];
