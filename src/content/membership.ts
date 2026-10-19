// Membership page content.

import { contact } from "@/content/site";

export type PlanFeature = {
  /** Bold heading, e.g. "Listing:". */
  label: string;
  /** One or more lines under the heading. */
  lines: string[];
  included: boolean;
};

export type Plan = {
  name: string;
  price: string;
  popular?: boolean;
  features: PlanFeature[];
};

/** "Become a Member" opens an email to the membership team, naming the plan. */
export const planEnquiryHref = (plan: Plan) =>
  `mailto:${contact.email}?subject=${encodeURIComponent(`Membership enquiry: ${plan.name}`)}`;

const included = (label: string, ...lines: string[]): PlanFeature => ({ label, lines, included: true });
const excluded = (label: string, ...lines: string[]): PlanFeature => ({ label, lines, included: false });

const listing = included(
  "Listing:",
  "Access to Irish & UK market intelligence & Input on policy",
  "Speaking and presentational opportunities at Conference, Exhibitions & Seminars",
  "Networking with Irish Ports officials, Local Authority buyers & Major Irish Companies",
  "Company branding and message send to 15,000 potential clients",
  "Website revolving Banner: 3 Official Category Listings",
);
const directoryFeature = included(
  "Directory:",
  "Company Featuring in Irish Port Yearbook & Quarterly magazine (4 Editions Page)",
);
const distribution = included("Distribution:", "4 Copies a year");
const media = included("Media:", "Welcome Post & Discount on Email alert & database Promotions and Campaigns");

export const membership = {
  hero: {
    kicker: "Membership",
    title: "Become an Irish Ports Member",
    text: "Boost your share of the Irish Ports market.",
  },
  intro: {
    title: "Gain exposure to the Global and Irish Ports Industry",
    text: "Irish Ports Awards Sponsorship provides an unrivalled and unique opportunity to be highly visible to influential decision makers within the Ports Community align your Brand with the excellence in the Industry, influence Industry Leaders, and generate new business by being intrinsically associated with the established Leading Industry Awards Evening. Sign up now to also benefit from the intensive widespread Pre-Awards Marketing Campaign.",
    cta: "Become A Member",
    stats: [
      { value: "50k", label: "Eminent Ports Members", highlight: false },
      { value: "200k+", label: "Directory Subscribers", highlight: true },
      { value: "150k+", label: "Online Members", highlight: false },
    ],
  },
  pricing: {
    title: "Our Best Pricing",
    term: "/ 12 months Plus VAT",
    cta: "Become a Member",
    corporate: {
      label: "Corporate Memberships",
      plans: [
        {
          name: "Associate of the Irish Ports Organisation (for SME Companies)",
          price: "€995",
          features: [
            listing,
            directoryFeature,
            distribution,
            media,
            included("Events:", "5 Ticket to all Events (Regional Buyer – National Supplier Award & Irish Ports Conference)"),
            included("Port Authority Introduction:", "Included"),
            included("Personal Meeting Facilitator:", "Included"),
            excluded("Tender List Introduction:", "Not Included"),
            excluded("Webinar / Seminar:", "2 Per Year not included"),
            excluded("Product Newsletter:", "Not Included"),
            excluded("Membership Account Manager:", "Not Included"),
          ],
        },
        {
          name: "Full Membership of the Irish Ports Trade Organisation",
          price: "€1995",
          popular: true,
          features: [
            listing,
            directoryFeature,
            distribution,
            media,
            included("Events:", "5 Ticket to all Events (Regional Buyer – National Supplier Award & Irish Ports Conference)"),
            included("Port Authority Introduction:", "Included"),
            included("Personal Meeting Facilitator:", "Included"),
            excluded("Tender List Introduction:", "Not Included"),
            included("Webinar / Seminar:", "2 Per Year"),
            excluded("Product Newsletter:", "Not Included"),
            included("Membership Account Manager:", "Included"),
          ],
        },
        {
          name: "Partner Member of the Irish Ports Organisation",
          price: "€3995",
          features: [
            included(
              "Key Sponsor All Events:",
              "Logo & sales information at venue & trailed in pre event publicity",
              "Logo on event publicity and brochures",
              "Website Banner on irishports.com homepage",
              "Key sponsor logo on all over a million sales letters, email campaigns, directory & magazines",
            ),
            included("Full Page Directory:", "4 Editions Page Advert & Editorial Overview of Operations and Contacts"),
            distribution,
            media,
            included("Events:", "10 Tickets to events including (Regional Buyer – National Supplier Award)"),
            included("Port Authority Introduction:", "Included"),
            included("Personal Meeting Facilitator:", "Included"),
            included("Tender List Introduction:", "Included"),
            included("Webinar / Seminar:", "2 Per Year"),
            included("Product Newsletter:", "Included"),
            included("Membership Account Manager:", "Included"),
          ],
        },
      ] satisfies Plan[],
    },
    // The individual plans aren't confirmed yet, so this tab invites an enquiry.
    individual: {
      label: "Individual Memberships",
      title: "Individual memberships",
      text: "Details of Irish Ports individual memberships will be published soon. Get in touch and we'll send you the options.",
      cta: "Ask About Individual Membership",
    },
  },
};
