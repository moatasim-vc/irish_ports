// News page content.

export type NewsItem = {
  title: string;
  image: string;
  alt: string;
  /** Article that "Read More" opens; empty until one is set. */
  link: string;
};

export type NewsHighlight = {
  title: string;
  date: string;
  time: string;
  location?: string;
  paragraphs: string[];
  /** More than one image turns the photo into a slider. */
  images: { src: string; alt: string }[];
  tone: "navy" | "gold";
};

export const hero = {
  title: "News",
};

// Event write-ups shown above the news grid, alternating photo left / right.
// The photos are stand-ins until the event photos are supplied.
export const highlights: NewsHighlight[] = [
  {
    title: "Port of Bristol Event",
    date: "8th August 2024",
    time: "10.00am to 1.30pm",
    paragraphs: [
      "We had another successful event at Port of Bristol on the 8th of August 2024.",
      "The day highlighted the port's advanced facilities and operational excellence, providing valuable insights into its capabilities and future projects.",
    ],
    images: [{ src: "/images/news/event-bristol.jpg", alt: "Delegates networking at the Port of Bristol event" }],
    tone: "navy",
  },
  {
    title: "Sustainability Awards",
    date: "18th July 2024",
    time: "4.00pm to 9.00pm",
    location: "Hilton Hotel, Newcastle",
    paragraphs: [
      "Sustainability Awards Ceremony at the Hilton Hotel in Gateshead, Newcastle, was a resounding success.",
      "The event celebrated outstanding achievements in sustainability across the port industry, highlighting innovative practices and commitment to environmental stewardship.",
      "Attendees enjoyed a memorable evening recognizing the pivotal role of ports in advancing sustainability, with awards acknowledging exceptional efforts and contributions to greener, more sustainable operations.",
    ],
    images: [
      { src: "/images/news/event-awards-1.jpg", alt: "Audience at the Sustainability Awards presentation" },
      { src: "/images/news/event-awards-2.jpg", alt: "Guests shaking hands at the Sustainability Awards" },
    ],
    tone: "gold",
  },
];

// Order matters: stories fill the grid row by row. Rows 1 and 3 have the large
// card on the left (1st and 7th stories); row 2 has it on the right (6th story).
// Shoreham, Dover and "border check chaos" use stand-in photos for now.
export const stories: NewsItem[] = [
  {
    title:
      "UK ports will receive £10.5m from government to prepare for enhanced EU border checks that will scan travellers' fingerprints and take their photos",
    image: "/images/news/border-checks-queue.jpg",
    alt: "Vehicles queuing at a ferry port check-in",
    link: "",
  },
  {
    title: "Shoreham Port announces new marine biodiversity project",
    image: "/images/news/shoreham.jpg",
    alt: "Container ship guided by tugs into port",
    link: "",
  },
  {
    title: "UK's first drone mail service extended in Orkney",
    image: "/images/news/drone-mail-orkney.jpg",
    alt: "Delivery drone flying over the coast",
    link: "",
  },
  {
    title: "Ground-breaking carbon capture facility near Ellesmere Port set for green light",
    image: "/images/news/carbon-capture.jpg",
    alt: "Industrial facility under a cloudy sky",
    link: "",
  },
  {
    title: "UK ports to receive new funding ahead of tougher EU border checks",
    image: "/images/news/new-funding.jpg",
    alt: "Hands exchanging banknotes",
    link: "",
  },
  {
    title:
      "Port of Dover, Eurotunnel at Folkestone and St Pancras International to get more than £10.5 million to prevent EES border delays",
    image: "/images/news/dover.jpg",
    alt: "Container terminal lit up at night",
    link: "",
  },
  {
    title: "UK sets to spend £10.5 million on new EU border checks; “queue times kept to a minimum”",
    image: "/images/news/queue-times.jpg",
    alt: "Traffic queuing at a border crossing",
    link: "",
  },
  {
    title: "UK to avoid border check chaos with £10.5m plan to boost British ports",
    image: "/images/news/border-chaos.jpg",
    alt: "Container port seen from above",
    link: "",
  },
  {
    title: "UK to spend £10.5 million to prepare ports for new EU border checks",
    image: "/images/news/eu-border-checks.jpg",
    alt: "Patrol vessel at sea",
    link: "",
  },
];

export const readMore = "Read More";
