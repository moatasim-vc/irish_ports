// Ports Directory page content.

export type FormField = { name: string; label: string; type: string };

export const directory = {
  hero: {
    title: "Ports Directory",
    text: "The Irish Ports Quarterly Directory serves as a vital compendium for the maritime industry, offering a comprehensive overview of the diverse and dynamic landscape of ports in Ireland. Released on a quarterly basis, this directory provides detailed information on port facilities, services, and key contacts. The directory offers a strategic platform for networking, collaboration, and business development within the port sector, making it an essential reference for those seeking to stay informed and engaged in the ever-evolving landscape of Irish ports.",
  },
  quarterly: {
    title: "Irish Ports Leading Quarterly Directory",
    paragraphs: [
      "Going out to 15000 Ports and Marine Companies, with online receivership of 200,000 subscribers online every Quarter. Directory at all major shows. and events in 2024 globally to 143 Countries.",
      "All the latest Ports, Marine information, with Tenders & Projects announcements included with 1000's of Irish Ports Suppliers Contacts with Irish Ports Regional events information inside.",
      "Advertise to the busy Irish Ports, Marine & Offshore Sectors in the Irish Ports QUARTERLY Directory, Irish Ports App or Irish Ports Suppliers Lists 2026.",
      "Attend one of the Meet the Buyer Events in Aberdeen, Dublin , Liverpool, Newcastle or London",
    ],
    image: "/images/directory/quarterly-port-night.jpg",
    imageAlt: "Container terminal lit up at night",
  },
  // The photo is a stand-in until the Yearbook 2024 photo is supplied.
  access: {
    title: "Direct Access to the most Reliable and Trusted Irish Ports Suppliers.",
    contactName: "Contact William Anderson on",
    phone: "00353 1853 7800",
    email: "bill.anderson@irishports.ie",
    paragraphs: [
      "Irish Ports Magazine and Directory is the Irish leading Ports Magazine and the only National published, printed and distributed Directory that is circulated, posted and well-received by tens of thousands of subscribers.",
      "From Port Managers to Marine and Offshore Executives to Senior Engineering Operations and Buying Staff Nationally in the UK European Ports & USA it is the 'go to' Magazine for those looking to Buy and Sell Ports & Marine Equipment and Services.",
      "Contact us to receive a complimentary copy.",
    ],
    includeText: "For your company details to be included, please email us",
    image: "/images/service-magazine.jpg",
    imageAlt: "Person reading the Irish Ports directory",
  },
  browse: {
    title: "Browse Our Irish Ports Directory",
    status: "Coming Soon",
    cover: {
      title: "Irish Ports Yearbook 2026",
      image: "/images/directory/yearbook-cover-ship.jpg",
      alt: "Container ship arriving at port, on the cover of the Irish Ports Yearbook 2026",
    },
  },
  interest: {
    kicker: "Are you interested?",
    title: "Please Fill Out The Form",
    text: "If you have any questions or require further information, please get in touch, we'd love to hear from you.",
    cta: "Join The Irish Ports",
    submit: "Submit",
    fields: [
      { name: "firstName", label: "First Name", type: "text" },
      { name: "lastName", label: "Last Name", type: "text" },
      { name: "email", label: "Email Address", type: "email" },
      { name: "street", label: "Street Address", type: "text" },
      { name: "city", label: "City", type: "text" },
      { name: "postcode", label: "Postal Code", type: "text" },
    ] satisfies FormField[],
  },
};
