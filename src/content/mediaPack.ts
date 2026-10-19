// Media Pack page content: the media package intro, directory advertising rates and
// the membership comparison (transcribed from the four Media Pack slides on the live site).

export type RateRow = {
  position: string;
  price: string;
  /** Whether the "First 25% Rate" column shows a tick. */
  firstRate: boolean;
  allFour: string;
};

export type PlanColumn = { name: string; price: string; popular?: boolean };

/** One feature row: a value per plan, in the same order as `plans`. */
export type FeatureRow = {
  label: string;
  values: { text: string; included: boolean }[];
};

const yes = (text: string) => ({ text, included: true });
const no = (text = "Not included") => ({ text, included: false });

export const mediaPack = {
  hero: {
    kicker: "Boost your share of the Irish Ports market.",
    title: "Media Pack",
  },
  intro: {
    kicker: "Irish Ports Quarterly Directory",
    title: "Media Package",
    paragraphs: [
      "Irish Ports is Ireland's leading trade organisation, with the only nationally published, printed and distributed directory, circulated, posted and well received by tens of thousands of members.",
      "From Port Managers to Marine and Offshore Executives, Senior Engineering Operations and Buying Staff nationally across Irish Ports and the USA, it is the 'go to' magazine for those looking to buy and sell ports and marine equipment and services.",
    ],
    stats: [
      { value: "15,000", label: "Ports & marine companies" },
      { value: "200k", label: "Online subscribers" },
      { value: "143", label: "Countries reached" },
    ],
    cover: {
      title: "Irish Ports Organisation",
      image: "/images/directory/yearbook-cover-ship.jpg",
      alt: "Irish Ports Organisation magazine cover with a container ship arriving at port",
    },
  },
  rates: {
    kicker: "Advertise",
    title: "Directory Advertising Rates",
    columns: ["Directory", "Price Per Edition", "First 25% Rate", "Discount for all 4 editions"],
    rows: [
      { position: "Front Cover", price: "€3,995", firstRate: true, allFour: "€11,000" },
      { position: "Inside Front Cover", price: "€2,995", firstRate: true, allFour: "€8,000" },
      { position: "Back Cover", price: "€3,495", firstRate: true, allFour: "€10,000" },
      { position: "Inside Back Cover", price: "€2,795", firstRate: true, allFour: "€7,500" },
      { position: "Double Page Spread", price: "€5,000", firstRate: true, allFour: "€15,000" },
      { position: "Full Page", price: "€2,495", firstRate: true, allFour: "€7,000" },
      { position: "Half Page", price: "€1,795", firstRate: true, allFour: "€5,000" },
      { position: "Quarter Page", price: "€1,295", firstRate: true, allFour: "€4,000" },
    ] satisfies RateRow[],
    extrasTitle: "Digital extras",
    extras: [
      { label: "Email Alerts", price: "€5,000", icon: "mail" },
      { label: "Day Online Webinar", price: "€3,495", icon: "webinar" },
      { label: "Social Media Post", price: "€2,995", icon: "chart" },
    ] as const,
    note: "Limited space",
    cta: "Book Your Edition Now!",
  },
  membership: {
    kicker: "Join",
    title: "Membership Packages",
    /** Small print after each price. */
    term: "/12 months Plus VAT",
    plans: [
      { name: "Associate of the Irish Ports Trade Organisation", price: "€1,995" },
      { name: "Full Membership of the Irish Ports Trade Organisation", price: "€6,995", popular: true },
      { name: "Partnership Membership of the Irish Ports Trade Association", price: "€11,995" },
    ] satisfies PlanColumn[],
    features: [
      {
        label: "Listing",
        values: [
          yes("Website Banner: 3 Category Listings"),
          yes("Website Banner: 3 Category Listings"),
          yes("Partner at all events listing · Website Banner: 3 Category Listings"),
        ],
      },
      {
        label: "Directory",
        values: [
          yes("4 Editions Basic Overview of Operations and Contacts"),
          yes("4 Editions Page Advert Overview of Operations and Contacts"),
          yes("4 Editions Page Advert & Editorial Overview of Operations and Contacts"),
        ],
      },
      { label: "Distribution", values: [yes("4 Copies a year"), yes("4 Copies a year"), yes("4 Copies a year")] },
      {
        label: "Media",
        values: [
          yes("1 Welcome Post & Discount on Email Alert & Database Promotions and Campaigns"),
          yes("1 Welcome Post & Discount on Email Alert & Database Promotions and Campaigns"),
          yes("1 Welcome Post & Discount on Email Alert & Database Promotions and Campaigns"),
        ],
      },
      {
        label: "Events",
        values: [
          yes("1 Ticket to Event of Choice (Regional Buyer – National Supplier Award)"),
          yes("5 Tickets to all Events (Regional Buyer – National Supplier Award)"),
          yes("10 Tickets to events including (Regional Buyer – National Supplier Award)"),
        ],
      },
      { label: "Port Authority Introduction", values: [yes("Included"), yes("Included"), yes("Included")] },
      { label: "Personal Meeting Facilitator", values: [no(), yes("Included"), yes("Included")] },
      { label: "Tender List Introduction", values: [no(), no(), yes("Included")] },
      { label: "Webinar / Seminar", values: [no(), yes("2 per year"), yes("2 per year")] },
      { label: "Product Newsletter", values: [no(), no(), yes("Included")] },
      { label: "Membership Account Manager", values: [no(), yes("Included"), yes("Included")] },
    ] satisfies FeatureRow[],
    cta: "Enquire About Membership",
  },
  /** Bookings and enquiries go to the directory sales contact. */
  email: "bill.anderson@irishports.ie",
};
