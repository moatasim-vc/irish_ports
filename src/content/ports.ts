// Content for the pages under the "Ports" menu.

import type { BannerKey } from "@/content/banners";

/** Plain text, or a link shown inline within the paragraph. */
export type Segment = string | { text: string; href: string };
export type Paragraph = Segment[];

export type AccordionItem = {
  title: string;
  /** Left out until the text is supplied; the page then shows a short "coming soon" note. */
  paragraphs?: Paragraph[];
};

export type AccordionGroup = {
  title: string;
  /** Smaller heading under the title, e.g. "Ro/Ro Services". */
  subtitle?: string;
  items: AccordionItem[];
};

export type PortsPage = {
  title: string;
  banner: BannerKey;
  description: string;
  intro: Paragraph[];
  groups?: AccordionGroup[];
  sections?: { title: string; paragraphs: Paragraph[] }[];
};

const visit = (href: string): Segment => ({ text: "please visit this website.", href });

export const shippingOperators: PortsPage = {
  title: "Shipping Operators",
  banner: "shipping-operators",
  description: "Ro/Ro shipping operators serving the Republic of Ireland and Northern Ireland.",
  intro: [
    [
      "Irish shipping operators connect Ireland to an international market place and allow for the day to day functioning of trade and travel of people to and from the island of Ireland.",
    ],
    [
      "Due to the heavy reliance on maritime logistic connections in and out of Ireland, an efficient, effective maritime network is vital to the national economy.",
    ],
    [
      "Irish shipping operators offer frequent and reliable maritime supply chain solutions across all industry sectors. A list of Ro/Ro operators in the Republic of Ireland and Northern Ireland are available below:",
    ],
  ],
  groups: [
    {
      title: "Republic Of Ireland Shipping Operators:",
      subtitle: "Ro/Ro Services",
      items: [
        {
          title: "Brittany Ferries",
          paragraphs: [
            [
              "Brittany Ferries operate a seasonal passenger service from Cork to Roscoff between the months of April and November. The crossing to and from continental Europe takes 14 hours and there are departures every Saturday for arrival in France on Sunday morning.",
            ],
            ["For more information on Brittany Ferries, ", visit("https://www.brittanyferries.com")],
          ],
        },
        { title: "CLdN" },
        { title: "Irish Continental Group / Irish Ferries" },
        { title: "P&O Ferries" },
        { title: "Seatruck" },
        { title: "Stena Line" },
      ],
    },
    {
      title: "Northern Ireland Shipping Operators:",
      subtitle: "Ro/Ro Services",
      items: [
        {
          title: "Seatruck Ferries",
          paragraphs: [
            [
              "Seatruck Ferries offer Ro/Ro freight services between Warrenpoint and Heysham. For more information on Seatruck Ferries, ",
              visit("https://www.seatruckferries.com"),
            ],
          ],
        },
        { title: "Stena Line" },
        { title: "P&O Ferries" },
      ],
    },
  ],
};

export const serviceProviders: PortsPage = {
  title: "Service Providers",
  banner: "service-providers",
  description: "Port companies in the Republic of Ireland and Northern Ireland.",
  intro: [
    [
      "Irish port traffic accounts for over 90% of imports and exports moved in and out of Ireland and facilitate an annual average of 4.5 million foot and car passengers. Due to the heavy reliance on maritime routes in and out of Ireland, an efficient national port infrastructure plays a vital and important role in the day to day functioning of trade and travel for people and commodities in and out of the island of Ireland.",
    ],
    [
      "Irish ports offer transport services, facilities and maritime supply chain solutions to a number of industry sectors. A list of ports both in the Republic of Ireland and Northern Ireland are available below:",
    ],
  ],
  groups: [
    {
      title: "Republic Of Ireland Port Companies:",
      items: [
        {
          title: "Bantry Bay Port",
          paragraphs: [
            [
              "Bantry Bay is the country's dedicated transhipment port. Bantry Bay as a port facility offers fuel processing services, Tanker and Cruise ship anchorage and marine leisure services. For more information on Bantry Bay Port Company visit ",
              { text: "www.bantrybayport.com", href: "https://www.bantrybayport.com" },
            ],
          ],
        },
        { title: "Drogheda Port" },
        { title: "Dublin Port Company" },
        { title: "Dun Laoghaire Port Company" },
        { title: "Dundalk Port Company" },
        { title: "Greenore Port" },
        { title: "New Ross Port" },
        { title: "Shannon Foynes Port Company" },
        { title: "Port of Cork" },
        { title: "Port of Galway" },
        { title: "Port Of Waterford" },
        { title: "Rosslare Europort" },
        { title: "Wicklow Harbour" },
      ],
    },
    {
      title: "Northern Ireland Port Companies:",
      items: [
        {
          title: "Belfast Harbour Company",
          paragraphs: [
            [
              "Belfast Harbour is Northern Ireland's principal maritime gateway and logistics hub, Belfast Harbour is Northern Ireland's leading dry bulk maritime terminal and the port has made significant capital investment in purpose built storage accommodation for major break bulk commodities. Break bulk goods handled by the port include printing paper, timber and steel products. For more information on Belfast Harbour Company visit ",
              { text: "www.belfast-harbour.co.uk", href: "https://www.belfast-harbour.co.uk" },
            ],
          ],
        },
        { title: "Port of Larne" },
        { title: "Warrenpoint Harbour Authority" },
      ],
    },
  ],
};

export const shipRegistration: PortsPage = {
  title: "Ship Registration",
  banner: "ship-registration",
  description: "How ship registration works in Ireland, plus recreational boating and inland waterways.",
  intro: [
    [
      "The ",
      { text: "Marine Survey Office (MSO)", href: "https://www.gov.ie/en/organisation/department-of-transport/" },
      " is responsible for flag state regulatory control in Ireland, which is part of the Department of Transport, Tourism & Sport. The MSO is responsible for the implementation of all national and international legislation in relation to safety of shipping and the prevention of pollution of the marine environment from ship-based sources. The General Register of Ships is maintained by the Mercantile Marine Office, part of the MSO. The Irish flag is white listed on the Paris MoU.",
    ],
    [
      "Exceptions may occur, however, as a general guideline in order to register a commercial ship in Ireland the owner or majority owner must be a national of an EU Member State or a body corporate established under and subject to the law of an EU Member State and having its principal place of business in an EU Member State. The registration of the vessel is also subject to meeting a number of prescribed standards and conditions. The registration of vessels in Ireland is subject to the Mercantile Marine Act 1955, as amended.",
    ],
  ],
  sections: [
    {
      title: "Recreational boating and watersports",
      paragraphs: [
        [
          "The ",
          { text: "Irish Sailing Association (ISA)", href: "https://www.sailing.ie" },
          " is the national governing body representing sailing, windsurfing, power boating and personal watercraft in Ireland. It advises on all aspects of boating safety and has a network of teaching establishments that offer training for leisure craft.",
        ],
      ],
    },
    {
      title: "Inland waterways",
      paragraphs: [
        [
          { text: "Waterways Ireland", href: "https://www.waterwaysireland.org" },
          " is the agency responsible for the maintenance and development of inland navigable waterways in Ireland, mainly for recreational purposes. It is also responsible for the enforcement of the navigational rules or bye-laws applying to the waterways under its remit.",
        ],
      ],
    },
  ],
};
