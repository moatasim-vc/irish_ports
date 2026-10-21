// Home page content, from the "Irish Ports Homepage Copy" designer handover.

import type { BannerKey } from "@/content/banners";

/** A button label and where it goes. */
export type Cta = { label: string; href: string };

export type ImageCard = {
  title: string;
  text: string;
  image: string;
  alt: string;
  icon: IconName;
  cta: Cta;
};

export type IconName = "calendar" | "webinar" | "ship" | "mail" | "chart" | "book";

export const hero = {
  title: "Irish Ports: Open for Business",
  text: "The Irish Ports Organisation connects and supports the ports, operators and service providers that keep Ireland moving. Explore the people, projects and ideas shaping Ireland’s ports—from trade and logistics to marine services, renewables and lower-carbon technology.",
  cta: { label: "Explore the Ports Directory", href: "/ports-directory" },
  secondaryCta: { label: "Become a Member", href: "/membership" },
  sectors: ["Ports", "Marine", "Renewables", "Shipping", "Training", "Transport", "Hydrogen"],
  image: "/images/hero-port.jpg",
  videoLabel: "Irish Ports video",
};

export const about = {
  kicker: "About Us",
  title: "A Stronger Voice for Ireland’s Ports",
  lead: "The Irish Ports Organisation is a membership body representing ports and maritime businesses across the island of Ireland. We bring members together, share industry knowledge and support the people and organisations that keep ports connected to trade, communities and the wider economy.",
  paragraphs: ["Our members include ports, terminal operators, port service companies and port facilities."],
  image: "/images/about-marina.jpg",
  alt: "Two port professionals talking at a marina",
  cta: { label: "Discover the Organisation", href: "/membership" },
  // Only verified figures belong here. The "90% of Irish port cargo" claim stays out
  // until it has been confirmed and approved.
  stats: [
    { value: "ROI & NI", label: "Members across the island of Ireland" },
    { value: "4", label: "member types: ports, terminals, services, facilities" },
  ],
};

export const conference = {
  title: "Irish Ports Conference & Exhibition 2026",
  intro:
    "Meet the people shaping Ireland’s ports. The Irish Ports Conference & Exhibition brings together port leaders, operators, suppliers and industry partners to share ideas, build connections and explore what comes next.",
  posterKicker: "Coming soon",
  posterTitle: "Conference & Exhibition 2026",
  details: [
    { label: "Venue", value: "Shelbourne Hotel, Dublin" },
    { label: "Date", value: "To be announced" },
  ],
  stamp: "Stay tuned",
  cta: { label: "Register Your Interest", href: "/#contact" },
  band: {
    title: "Join Ireland’s Ports Community in 2026",
    text: "Make new connections, share your expertise and meet the organisations helping shape the future of Ireland’s ports.",
    cta: { label: "Register Your Interest", href: "/#contact" },
  },
};

export const offer = {
  title: "What We Offer",
  subtitle:
    "Information, connections and opportunities for the people and organisations working across Ireland’s port and maritime sector.",
  cards: [
    {
      title: "Events",
      text: "Meet the Irish Ports community at industry events designed to share insight, build relationships and showcase the work happening across the sector.",
      image: "/images/offer-events.jpg",
      alt: "Delegates networking at a maritime event",
      icon: "calendar",
      cta: { label: "Explore Events", href: "/events" },
    },
    {
      title: "Webinars",
      text: "Hear from people working across ports and maritime services. Our webinars bring practical knowledge, industry updates and fresh perspectives to the Irish Ports community.",
      image: "/images/offer-webinars.jpg",
      alt: "Person joining a webinar on a laptop",
      icon: "webinar",
      cta: { label: "Watch and Join Webinars", href: "/events" },
    },
    {
      title: "Ports Directory",
      text: "Find ports and port-related organisations across Ireland. Use the directory to explore the people, places and services that make up the Irish port network.",
      image: "/images/offer-ports-directory.jpg",
      alt: "Port workers in high-visibility clothing operating a drone",
      icon: "ship",
      cta: { label: "Explore the Directory", href: "/ports-directory" },
    },
  ] satisfies ImageCard[],
};

// Recommended new section from the handover. The button points at News until a
// dedicated Projects & Investment page exists.
export const projects = {
  kicker: "Projects & Investment",
  title: "Ireland’s Port Projects",
  text: "Explore 20 major port and maritime projects across Ireland. See what’s underway, what’s planned and how investment is shaping the next chapter for ports and coastal communities.",
  cta: { label: "View the Top 20 Projects", href: "/news" },
  /** Banner photo (with its CC credit) from content/banners.ts. */
  banner: "ports-directory" as BannerKey,
  alt: "Container ship being loaded by cranes at an Irish port",
};

export const services = {
  title: "Additional Services",
  subtitle: "Useful industry information and services to help members stay informed and connected.",
  cards: [
    {
      title: "Industry Updates",
      text: "Keep up with relevant developments across the port and maritime sector, including industry news, policy updates and emerging opportunities.",
      image: "/images/service-email.jpg",
      alt: "Business people checking updates on phones and a laptop",
      icon: "mail",
      cta: { label: "Ask About Member Updates", href: "/#contact" },
    },
    {
      title: "Marine Data",
      text: "Explore marine data and information to support planning, research and informed decision-making.",
      image: "/images/service-marine-data.jpg",
      alt: "Analyst working with marine data dashboards",
      icon: "chart",
      cta: { label: "Ask About Marine Data", href: "/#contact" },
    },
    {
      title: "Irish Ports Quarterly",
      text: "Read the Irish Ports Quarterly for news, views and updates from across the port and maritime community.",
      image: "/images/service-magazine.jpg",
      alt: "Person reading a maritime magazine",
      icon: "book",
      cta: { label: "Explore the Magazine", href: "/media-pack" },
    },
  ] satisfies ImageCard[],
};

// The event cards and the Webinars tab text come from content/events.ts.
export const events = {
  title: "Upcoming Events & Webinars",
  subtitle: "Find opportunities to meet, learn and share ideas with Ireland’s ports and maritime community.",
  tabs: ["Events", "Webinars", "Host an Event or Webinar"],
  host: {
    title: "Bring Your Event to the Irish Ports Community",
    text: "Give your event, product or service a place in front of people working across Ireland’s ports and maritime sector.",
    cta: { label: "Get in Touch", href: "/#contact" },
  },
  cta: { label: "Browse All Events & Webinars", href: "/events" },
};

// Confirm the minister's title and details before publication.
export const minister = {
  title: "Minister for Ports",
  name: "Seán Canney",
  initials: "SC",
  /** Add the photo path here once an approved portrait is supplied. */
  photo: "",
  text: "Seán Canney is Minister of State at the Department of Transport, with responsibility for International and Road Transport, Logistics, Rail and Ports.",
  cta: { label: "Email the Minister’s Office", href: "mailto:ministercanney@transport.gov.ie" },
};

export const testimonials = {
  title: "What Our Members Say",
  subtitle: "Hear from members about the value of being part of Ireland’s port and maritime community.",
  cta: { label: "Become a Member", href: "/membership" },
  // Placeholder reviews: replace with real, approved member quotes before launch.
  items: [
    {
      name: "Jack Fallon",
      quote:
        "I recently had the pleasure of experiencing the outstanding services provided by Irish Ports, and I am compelled to share my exceptional experience. From start to finish, the efficiency and professionalism demonstrated by the entire Irish Ports team surpassed my expectations. The first thing that struck me was the seamless communication throughout the entire process. They took the time to address my concerns and ensured I was well-informed about the entire port operation.",
    },
    {
      name: "Patrick O'Reilly",
      quote:
        "As a frequent user of port facilities, I can confidently attest to the excellence exhibited by the entire Irish Ports team. From the outset, the professionalism displayed by Irish Ports is noteworthy. The staff, led by knowledgeable and courteous individuals, ensured that my interactions were not just transactions but personalized experiences. Their dedication to customer service was evident in every step of the process, making me feel valued and well taken care of.",
    },
    {
      name: "Seamous Burns",
      quote:
        "I am thrilled to express my utmost satisfaction with Irish Ports, an organization that has not only met but exceeded my expectations in the realm of maritime services. My recent experiences with them have been nothing short of exceptional. The professionalism and friendliness of the entire team, led by knowledgeable experts, made navigating the complexities of port logistics a breeze. Their attention to detail left a lasting impression on me.",
    },
  ],
};

export const contactSection = {
  kicker: "Contact Us",
  title: "Let’s Talk About Ireland’s Ports",
  text: "Have a question about membership, events, the directory or working with the Irish Ports Organisation? Get in touch and we’ll point you in the right direction.",
  cta: { label: "Explore Membership", href: "/membership" },
  submit: "Send Enquiry",
};

export const partnersSection = {
  title: "Our Official Partners",
  subtitle: "Meet the organisations supporting the Irish Ports community.",
  cta: { label: "Browse Suppliers", href: "/suppliers" },
};
