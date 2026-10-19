// Events content: the event list (shared by the home page and the events pages)
// and the events page text.

export type EventItem = {
  slug: string;
  title: string;
  /** As shown, e.g. "08/10/2026 10:00", or "TBA". */
  date: string;
  /** As shown, e.g. "6 Places left". */
  places: string;
  image: string;
  alt: string;
  description?: string;
};

export const eventItems: EventItem[] = [
  {
    slug: "port-of-dublin",
    title: "Port of Dublin",
    date: "TBA",
    places: "6 Places left",
    image: "/images/event-port-of-dublin.jpg",
    alt: "Container terminal at the Port of Dublin",
    description: "Event held at Port Of Dublin",
  },
];

export const eventHref = (event: EventItem) => `/events/${event.slug}`;

export const tabs = ["Events", "Webinars", "Looking To Host Your Own Event/Webinar?"];

export const eventsPage = {
  hero: { kicker: "Events", title: "Our Latest Events"},
  intro:
    "The Irish Ports Port Meetings and Events initiative is a dedicated platform facilitating crucial gatherings within the maritime community. These events serve as focal points for professionals, stakeholders, and industry leaders to convene, fostering collaboration, knowledge-sharing, and networking. Covering a spectrum of topics including port management, technological advancements, regulatory updates, and sustainability practices, these meetings provide a dynamic forum for staying informed and engaged. Attendees can anticipate valuable insights, interactive discussions, and the opportunity to contribute to the evolution of Irish ports by addressing challenges and exploring innovative solutions.",
  webinars: {
    intro:
      "The Irish Ports Webinar Service is a comprehensive platform designed to provide valuable insights, updates, and knowledge sharing within the maritime and port industry in Ireland.",
    emptyTitle: "New webinars coming soon",
    emptyText: "Our 2026-27 webinar schedule will be announced shortly. Contact us to be notified first.",
  },
  host: {
    title: "Host an event or webinar with Irish Ports",
    text: "Reach ports, terminal operators and maritime suppliers across Ireland. Tell us about your idea and we'll help you plan it.",
    cta: "Enquire Now",
  },
  noEvents: "New events will be announced soon.",
};

export const eventDetail = {
  hero: { kicker: "Events", title: "Event Detail"},
  cta: "Register Now",
  back: "All events",
};
