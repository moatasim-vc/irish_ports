// Home page content.

export type ImageCard = {
  title: string;
  text: string;
  image: string;
  alt: string;
  icon: IconName;
  /** Where "Read More" goes; "#" until the page exists. */
  href?: string;
};

export type IconName = "calendar" | "webinar" | "ship" | "mail" | "chart" | "book";

export const hero = {
  title: "Irish Ports Are Open For Business Now!",
  text: "Irish Ports are a Leading Trade Organisation supporting Irish Ports Freeports, Marine, Renewables, Shipping, Training, Transport, Research and promoting sustainable Technology including Hydrogen.",
  cta: "Join The Irish Ports",
  secondaryCta: "Explore the Ports Directory",
  sectors: ["Freeports", "Marine", "Renewables", "Shipping", "Training", "Transport", "Hydrogen"],
  image: "/images/hero-port.jpg",
  videoLabel: "Irish Ports video",
};

export const about = {
  title: "About Us",
  lead: "The Irish Ports Organisation is the countrywide membership body for ports in Ireland.",
  paragraphs: [
    "We represent & support the operators that deal with 90% of all Irish Ports cargo, ships & sea freight to the Republic & Northern Ireland.",
    "Irish Ports membership comprises of many ports, terminal operators, ports services companies and ports facilities.",
  ],
  image: "/images/about-marina.jpg",
  alt: "Two port professionals talking at a marina",
  cta: "Read More",
  stats: [
    { value: "90%", label: "of Irish port cargo handled by operators we represent" },
    { value: "ROI & NI", label: "Republic & Northern Ireland coverage" },
    { value: "4", label: "member types: ports, terminals, services, facilities" },
  ],
};

export const conference = {
  title: "Irish Ports Conference and Exhibition 2026",
  intro:
    "Join ports, operators, suppliers and decision-makers from across Ireland for the flagship Irish Ports gathering of the year.",
  posterKicker: "Coming soon",
  posterTitle: "Conference & Exhibition 2026",
  details: [
    { label: "Date", value: "TBA" },
    { label: "Time", value: "TBA" },
    { label: "Venue", value: "Shelbourne Hotel, Dublin" },
  ],
  stamp: "Stay tuned",
  band: {
    title: "Irish Ports Conference & Exhibition 2026",
    text: "Shelbourne Hotel, Dublin · Date to be announced",
    cta: "Register your interest",
  },
};

export const offer = {
  title: "What We Offer",
  cta: "Read More",
  cards: [
    {
      title: "Events",
      text: "The Irish Ports Meetings and Events initiative is a dedicated platform facilitating crucial gatherings within the maritime community.",
      image: "/images/offer-events.jpg",
      alt: "Delegates networking at a maritime event",
      icon: "calendar",
      href: "/events",
    },
    {
      title: "Webinars",
      text: "The Irish Ports Webinar Service is a comprehensive platform designed to provide valuable insights, updates, and knowledge sharing within the maritime and port industry in Ireland.",
      image: "/images/offer-webinars.jpg",
      alt: "Person joining a webinar on a laptop",
      icon: "webinar",
      href: "/events",
    },
    {
      title: "Ports Directory",
      text: "The Irish Ports Quarterly Directory serves as a vital compendium for the maritime sector, offering a comprehensive overview of the diverse and dynamic landscape of ports in Ireland.",
      image: "/images/offer-ports-directory.jpg",
      alt: "Port workers in high-visibility clothing operating a drone",
      icon: "ship",
      href: "/ports-directory",
    },
  ] satisfies ImageCard[],
};

export const services = {
  title: "Additional Services",
  cta: "Read More",
  cards: [
    {
      title: "Monitored Email Activity",
      text: "This service delivers timely and relevant updates directly to members' inboxes via Irish Ports email, ensuring they stay abreast of critical information such as industry regulations, operational changes, and emerging trends.",
      image: "/images/service-email.jpg",
      alt: "Business people checking updates on phones and a laptop",
      icon: "mail",
    },
    {
      title: "Focused Marine Data",
      text: "Irish Ports offers a specialized service that empowers its members with the capability to access and utilize focused marine data for strategic decision-making.",
      image: "/images/service-marine-data.jpg",
      alt: "Analyst working with marine data dashboards",
      icon: "chart",
    },
    {
      title: "Quarterly Magazine for Non-members",
      text: "Accessing the Irish Ports Quarterly Directory is your gateway to a wealth of information.",
      image: "/images/service-magazine.jpg",
      alt: "Person reading a maritime magazine",
      icon: "book",
    },
  ] satisfies ImageCard[],
};

// The event cards and tab panels come from content/events.ts.
export const events = {
  title: "Upcoming Events & Webinars",
  subtitle:
    "Meet, Engage & Showcase Your Products & Services With The Irish Ports In 2026-27 #NETZERO2050",
  hostCard: {
    title: "Looking to host your own event?",
    text: "Showcase your port, products or services to the Irish Ports community.",
    cta: "Get In Touch",
  },
  cta: "Browse All Events & Webinars",
};

export const minister = {
  kicker: "Our Ports Minister",
  name: "Minister Seán Canney",
  initials: "SC",
  /** Add the photo path here once an approved portrait is supplied. */
  photo: "",
  paragraphs: [
    "Seán Canney is Minister of State at the Department of Transport with responsibility for International and Road Transport, Logistics, Rail and Ports.",
    "He was appointed to this role in January 2025.",
  ],
  email: "ministercanney@transport.gov.ie",
};

export const testimonials = {
  title: "What Our Clients Say",
  subtitle: "Reviews from some of our clients",
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
  kicker: "Have any question?",
  title: "Contact Us",
  text: "If you have any questions or require further information, please get in touch, we'd love to hear from you.",
  cta: "Join The Irish Ports",
  submit: "Send Message",
};

export const partnersSection = {
  title: "Irish Ports Official Partners",
  cta: "Browse All Suppliers",
};
