// Top 20 Irish Port Projects, from the "Top 20 Port Projects" designer brief (21 October 2026).
//
// Per project:
// - `status`, `text` and `source` are published.
// - `editorNote` holds the brief's fact-checking instructions. These are not shown on the page;
//   clear each one once it has been checked.
// - `visualDirection` is the brief's artwork guidance; `moreSources` holds its image references.
// - `image` comes from the project owner's own page (see `credit`). A source link is not a licence
//   to reuse an image: get each owner's permission before launch, or remove the image. Label
//   renderings "Artist's impression", "Proposed" or "Subject to planning", and never present a
//   rendering as a photo of completed infrastructure.

export type Stage =
  | "Proposed"
  | "Consultation"
  | "In planning"
  | "Permission granted"
  | "Funded"
  | "Under construction"
  | "Planned"
  | "On hold";

export type SourceLink = { label: string; href: string };

export type Project = {
  number: number;
  slug: string;
  title: string;
  /** Small location label on the card. */
  location: string;
  category: string;
  /** Consistent stage tag shown on every card. */
  stage: Stage;
  /** Status line, as worded in the brief. */
  status: string;
  text: string;
  /** Main source, linked as "Project source". */
  source: SourceLink;
  /** Further official pages: image/CGI references and the brief's source index. */
  moreSources?: SourceLink[];
  editorNote?: string;
  visualDirection: string;
  image?: ProjectImage;
};

export type ProjectImage = {
  src: string;
  alt: string;
  /** Caption tag on the image, so renderings are never mistaken for completed work. */
  label?: "Artist’s impression" | "Proposed" | "Proposed concept" | "Subject to planning" | "Existing operations";
  /** Who the image belongs to, linked to the page it came from. */
  credit: SourceLink;
  /** "contain" for plans and labelled layouts that must not be cropped. */
  fit?: "cover" | "contain";
};

export type ProjectGroup = { id: string; title: string; numbers: [number, number] };

export const projectsPage = {
  hero: {
    kicker: "Projects & Investment",
    title: "Top 20 Irish Port Projects",
    text: "Significant port, freight, energy and harbour schemes across the island of Ireland.",
  },
  intro: [
    "This is an editorial shortlist of significant port, freight, energy and harbour schemes across the island, assembled from public project information available on 21 October 2026. It is not an official ranking.",
    "Several schemes are proposals, planning-stage projects or long-term masterplan elements, and each entry says which. Project statuses change, so follow the source link on each project for the latest position.",
  ],
  asOf: "Status information as of 21 October 2026",
  groupsLabel: "Projects are grouped by location",
  sourceLabel: "Project source",
  moreSourcesLabel: "More from the project owner",
  cta: {
    title: "Working on a port project?",
    text: "Tell us about it, or ask how Irish Ports can help you share your project with the port and maritime community.",
    button: { label: "Get in Touch", href: "/#contact" },
  },
};

export const projectGroups: ProjectGroup[] = [
  { id: "dublin", title: "Dublin", numbers: [1, 3] },
  { id: "cork", title: "Cork", numbers: [4, 6] },
  { id: "south-and-west", title: "South and West", numbers: [7, 10] },
  { id: "shannon-estuary", title: "Shannon Estuary", numbers: [11, 15] },
  { id: "belfast", title: "Belfast", numbers: [16, 19] },
  { id: "ros-an-mhil", title: "Ros an Mhíl", numbers: [20, 20] },
];

const belfastPlan = {
  label: "Belfast Harbour investment plan",
  href: "https://www.belfast-harbour.co.uk/news/belfast-harbour-announces-1-3bn-investment-to-secure-port-for-future-generations/",
};
const corkCef = {
  label: "Port of Cork CEF funding and berth scope",
  href: "https://www.portofcork.ie/port-of-cork-welcomes-cef-funding-of-e38-4-million-to-expand-ringaskiddy-facilities/",
};
const sfpcProjects = { label: "Shannon Foynes project portfolio", href: "https://sfpc.ie/projects/" };

export const projects: Project[] = [
  // Dublin (1–3)
  {
    number: 1,
    slug: "dublin-port-3fm",
    image: {
      src: "/images/projects/dublin-port-3fm.jpg",
      alt: "CGI of the proposed 3FM Liffey bridge, port lands and public waterfront on the Poolbeg Peninsula",
      label: "Artist’s impression",
      credit: {
        label: "Dublin Port Company",
        href: "https://www.dublinport.ie/dublin-port-company-lodges-planning-application-for-3fm-project-to-transform-port-lands-focused-on-the-poolbeg-peninsula/",
      },
    },
    title: "Dublin Port 3FM",
    location: "Dublin",
    category: "Major port capacity",
    stage: "In planning",
    status: "Planning application under consideration",
    text: "Dublin Port’s proposed third and final Masterplan 2040 project would add major container and Ro-Ro capacity on the Poolbeg Peninsula, linked by a Southern Port Access Route and new Liffey crossing. The application was lodged in 2024; An Coimisiún Pleanála was still considering it in 2026.",
    source: {
      label: "Planning application and project description",
      href: "https://www.dublinport.ie/dublin-port-company-lodges-planning-application-for-3fm-project-to-transform-port-lands-focused-on-the-poolbeg-peninsula/",
    },
    moreSources: [
      { label: "Dublin Port 3FM project site", href: "https://dublinport3fm.ie/" },
      {
        label: "Official project drawings and visual material",
        href: "https://dublinport3fm.ie/drawings/general-arrangements/overall-general-arrangements/",
      },
    ],
    editorNote: "Describe all facilities as proposed.",
    visualDirection:
      "Use the official overall scheme plan or CGI of the Liffey bridge, port terminals and public waterfront. Lead with a wide aerial view; add a smaller bridge detail if available.",
  },
  {
    number: 2,
    slug: "dublin-port-mp2",
    image: {
      src: "/images/projects/dublin-port-mp2.jpg",
      alt: "Aerial view of MP2 construction at Berths 52 and 53, looking south towards Poolbeg",
      credit: { label: "Dublin Port Company", href: "https://www.dublinport.ie/masterplan/mp2/" },
    },
    title: "Dublin Port MP2",
    location: "Dublin",
    category: "Port redevelopment",
    stage: "Under construction",
    status: "Construction and phased delivery",
    text: "MP2 is the second major capital development in Dublin Port’s Masterplan 2040. The phased works improve existing port lands in the north-east of the estate, including new marine and landside capacity. Dublin Port reported progress on Berths 52 and 53 as part of the programme.",
    source: { label: "Dublin Port MP2 project page", href: "https://www.dublinport.ie/masterplan/mp2/" },
    moreSources: [
      {
        label: "MP2 construction update and Berth 53 detail",
        href: "https://www.dublinport.ie/significant-progress-made-at-irelands-largest-marine-construction-project-mp2-update/",
      },
    ],
    visualDirection:
      "Choose a current construction photograph of the Berth 53 jetty or a clean plan showing the berth, marine platforms and yard. Avoid generic container-ship imagery if project photography is available.",
  },
  {
    number: 3,
    slug: "alexandra-basin-redevelopment-2",
    image: {
      src: "/images/projects/alexandra-basin-redevelopment-2.jpg",
      alt: "Aerial view of Dublin Port and Alexandra Basin today",
      label: "Existing operations",
      credit: {
        label: "Dublin Port Company",
        href: "https://www.dublinport.ie/dublin-port-company-launches-public-consultation-on-alexandra-basin-redevelopment-2-abr2/",
      },
    },
    title: "Alexandra Basin Redevelopment 2",
    location: "Dublin",
    category: "Port capacity and quay works",
    stage: "Consultation",
    status: "Consultation and planning preparation",
    text: "Dublin Port launched public consultation in March 2026 on ABR2, a proposed new planning application to complete essential works at Alexandra Basin and Berths 52 and 53.",
    source: {
      label: "Dublin Port ABR2 consultation notice",
      href: "https://www.dublinport.ie/dublin-port-company-launches-public-consultation-on-alexandra-basin-redevelopment-2-abr2/",
    },
    editorNote:
      "This is a planning-stage project: present the consultation, surveys and proposed works as the current story, not as construction underway.",
    visualDirection:
      "Use a site plan or marked aerial showing Alexandra Basin and Berths 52–53, paired with a current harbour photograph. A simple “consultation / planning” status label will help distinguish it from MP2.",
  },

  // Cork (4–6)
  {
    number: 4,
    slug: "core1-ringaskiddy-energy-berth",
    title: "CORE1 Ringaskiddy Energy Berth",
    location: "Cork",
    category: "Offshore renewable energy",
    stage: "Under construction",
    status: "Delivery update reported for 2025",
    text: "CORE1 is a €100 million multipurpose deepwater berth at Ringaskiddy designed to support offshore renewable energy alongside cargo activity. Port of Cork described continued delivery in its 2025 performance update and said the facility would provide dedicated quayside infrastructure for the offshore renewable energy sector.",
    source: {
      label: "Port of Cork 2025 infrastructure update",
      href: "https://www.portofcork.ie/port-of-cork-delivers-strong-2025-performance-while-accelerating-major-infrastructure-and-energy-investments-2/",
    },
    moreSources: [
      {
        label: "Port of Cork energy hub context",
        href: "https://www.portofcork.ie/the-port-of-cork-energy-hub-momentum-on-display-during-taoiseach-tour-of-offshore-renewable-energy-infrastructure/",
      },
    ],
    editorNote: "Reconfirm the latest status and completion position before publication.",
    visualDirection:
      "Use Port of Cork’s CORE1 construction or aerial photography, ideally showing the berth, heavy-lift quay and surrounding harbour. Use a restrained offshore-wind overlay only if it does not imply turbines are already being assembled there.",
  },
  {
    number: 5,
    slug: "ringaskiddy-east-berth-extension",
    image: {
      src: "/images/projects/ringaskiddy-east-berth-extension.jpg",
      alt: "Cranes and piling works on the berth extension at Ringaskiddy, Cork Harbour",
      credit: {
        label: "European Commission (CINEA)",
        href: "https://cinea.ec.europa.eu/featured-projects/cef-transport-expanding-capacity-port-cork_en",
      },
    },
    title: "Ringaskiddy East berth extension",
    location: "Cork",
    category: "Container terminal capacity",
    stage: "Funded",
    status: "Funded port-capacity works",
    text: "The Ringaskiddy East element is an extension to the existing Cork Container Terminal berth. Port of Cork’s €38.4 million EU funding announcement described quay extension, dredging, utilities and onshore power supply as part of a wider two-berth capacity programme.",
    source: corkCef,
    moreSources: [
      {
        label: "EU CINEA project overview",
        href: "https://cinea.ec.europa.eu/featured-projects/cef-transport-expanding-capacity-port-cork_en",
      },
    ],
    visualDirection:
      "Use a construction or engineering image of the container berth extension. A small locator map of Cork Harbour and Ringaskiddy would help readers understand the site.",
  },
  {
    number: 6,
    slug: "ringaskiddy-west-deepwater-berth-extension",
    title: "Ringaskiddy West deepwater berth extension",
    location: "Cork",
    category: "Deepwater port capacity",
    stage: "Funded",
    status: "Part of the funded Ringaskiddy programme",
    text: "The Ringaskiddy West element is an 182-metre extension to the existing deepwater berth, with dredging, quay works and utilities described in the Port of Cork project announcement. It forms part of the same coordinated investment programme as the East berth extension, as a separate work package.",
    source: { ...corkCef, label: "Port of Cork berth-extension announcement" },
    editorNote:
      "Present it alongside the East berth extension as one coordinated investment programme, while keeping the two work packages distinct.",
    visualDirection:
      "Use a clear quay-side view or engineering plan that makes the deepwater extension legible. If using a single image for both Ringaskiddy entries, label each berth on a simple site diagram.",
  },

  // South and West (7–10)
  {
    number: 7,
    slug: "rosslare-offshore-renewable-energy-hub",
    image: {
      src: "/images/projects/rosslare-offshore-renewable-energy-hub.jpg",
      alt: "Proposed layout of the Rosslare ORE Hub showing two ORE berths, storage areas and the small-boat harbour",
      label: "Proposed",
      fit: "contain",
      credit: {
        label: "Iarnród Éireann",
        href: "https://www.irishrail.ie/en-ie/about-us/iarnrod-eireann-projects-and-investments/rosslare-europort-ore",
      },
    },
    title: "Rosslare Offshore Renewable Energy Hub",
    location: "Wexford",
    category: "Offshore wind",
    stage: "In planning",
    status: "Planning application submitted; subject to planning and funding",
    text: "Iarnród Éireann’s proposed €220 million hub would expand Rosslare Europort with two heavy-lift berths, storage and assembly areas, access roads and a small-boat harbour. The 80-hectare plan is intended to support offshore wind projects in the Irish and Celtic Seas. The stated early-2027 construction start and early-2029 delivery target are conditional.",
    source: {
      label: "Iarnród Éireann project page and proposed layout",
      href: "https://www.irishrail.ie/en-ie/about-us/iarnrod-eireann-projects-and-investments/rosslare-europort-ore",
    },
    moreSources: [
      {
        label: "Rosslare Europort project announcement",
        href: "https://www.rosslareeuroport.ie/en-ie/news/2025/rosslare-europort-to-submit-planning-application-for-ore-hub/",
      },
    ],
    visualDirection:
      "Prioritise the official proposed layout showing the two ORE berths, reclaimed land and small-boat harbour. Pair with a real current port image only if clearly captioned as existing operations.",
  },
  {
    number: 8,
    slug: "belview-offshore-renewable-energy-terminal",
    title: "Belview Offshore Renewable Energy terminal",
    location: "Waterford",
    category: "Offshore wind",
    stage: "In planning",
    status: "Planning application announced in 2025",
    text: "Port of Waterford’s proposal includes a 250-metre wharf extension, land reclamation, workshops, warehouses, operator offices and berthing pontoons. The design also includes a replacement substation, rooftop solar and a biodiversity area. The port says the facility is intended to support offshore wind projects, including proposed developments in the Celtic Sea.",
    source: {
      label: "Port of Waterford application and scope",
      href: "https://www.portofwaterford.com/2025/09/09/landmark-application-for-offshore-renewable-energy-terminal/",
    },
    moreSources: [{ label: "Planning documents for the 250m berth", href: "https://250berth.portofwaterford.com/" }],
    visualDirection:
      "Use the Port of Waterford proposal image or an aerial of Belview with the extension marked. Include an inset for the planned solar roof and biodiversity area only if approved project graphics show them.",
  },
  {
    number: 9,
    slug: "new-port-of-galway",
    image: {
      src: "/images/projects/new-port-of-galway.jpg",
      alt: "Aerial view of the existing Galway Harbour docks",
      label: "Existing operations",
      credit: {
        label: "Galway City Council",
        href: "https://www.galwaycity.ie/news/2026/galway-city-council-welcomes-the-decision-of-an-coimisiun-pleanala-to-grant-approval-for",
      },
    },
    title: "New Port of Galway",
    location: "Galway",
    category: "Commercial port expansion",
    stage: "Permission granted",
    status: "Planning permission granted April 2026; next phase is design, procurement and finance",
    text: "An Coimisiún Pleanála granted permission for the proposed Port of Galway extension in April 2026. The multi-stage scheme includes new quay areas, dredging, port back-up land and related marine facilities. Galway City Council said detailed design, procurement and financing are the next steps.",
    source: { label: "Port of Galway redevelopment overview", href: "https://theportofgalway.ie/port-of-galway-redevelopment/" },
    moreSources: [
      {
        label: "Galway City Council planning decision update",
        href: "https://www.galwaycity.ie/news/2026/galway-city-council-welcomes-the-decision-of-an-coimisiun-pleanala-to-grant-approval-for",
      },
    ],
    visualDirection:
      "Use the Port of Galway official redevelopment visualisation or stage plan. A simple “permission granted / next: design and procurement” graphic can communicate the current stage.",
  },
  {
    number: 10,
    slug: "bremore-ireland-port",
    image: {
      src: "/images/projects/bremore-ireland-port.jpg",
      alt: "Concept rendering of the proposed Bremore deepwater port and breakwaters",
      label: "Proposed concept",
      credit: {
        label: "Bremore Ireland Port",
        href: "https://bremoreirelandport.ie/plan-unveiled-for-irelands-first-new-major-deep-water-port-development-since-foundation-of-state/",
      },
    },
    title: "Bremore Ireland Port",
    location: "County Meath",
    category: "Proposed deepwater port",
    stage: "Proposed",
    status: "Proposed; planning application expected in 2026–27",
    text: "Bremore is a proposed new deepwater, multimodal port being developed by a joint venture involving Drogheda Port Company and Ronan Group. The project vision includes offshore wind and bulk cargo infrastructure, with green hydrogen among the intended energy themes. Its promoters describe a planning application as a future step.",
    source: {
      label: "Bremore project vision and stated planning timeline",
      href: "https://bremoreirelandport.ie/plan-unveiled-for-irelands-first-new-major-deep-water-port-development-since-foundation-of-state/",
    },
    moreSources: [
      { label: "Drogheda Port Company project overview", href: "https://www.droghedaport.ie/group-companies/bremore-ireland-port/" },
    ],
    editorNote: "Do not imply consent or construction.",
    visualDirection:
      "Use the promoter’s concept masterplan or coastal site map, clearly marked “proposed concept”. Avoid visuals that make the port appear built or approved.",
  },

  // Shannon Estuary (11–15)
  {
    number: 11,
    slug: "foynes-jetty-extension-and-logistics-investment",
    title: "Foynes jetty extension and logistics investment",
    location: "Limerick",
    category: "Freight and port infrastructure",
    stage: "Funded",
    status: "€32 million investment announced in 2024",
    text: "Shannon Foynes Port Company announced a €32 million jetty extension and logistics park investment at Foynes, co-funded by the port and the EU Connecting Europe Facility. It forms part of Vision 2041 and is intended to strengthen freight logistics and support the estuary’s longer-term offshore energy opportunity.",
    source: {
      label: "Shannon Foynes €32m investment announcement",
      href: "https://sfpc.ie/shannon-foynes-ports-record-inv-estment-to-enhance-shannon-estuary/",
    },
    moreSources: [{ ...sfpcProjects, label: "SFPC project portfolio and visual references" }],
    editorNote: "Check current delivery milestones.",
    visualDirection:
      "Use SFPC’s jetty-extension photograph or aerial of Foynes with the logistics park shown. A two-part image—marine works plus serviced port land—would explain the combined investment.",
  },
  {
    number: 12,
    slug: "foynes-island-deepwater-development",
    title: "Foynes Island Deepwater Development",
    location: "Limerick",
    category: "Deepwater port and floating wind",
    stage: "In planning",
    status: "Maritime Area Consent granted 20 July 2026; further planning and design steps remain",
    text: "The proposed Foynes Island development would add deepwater port infrastructure, including a berth and a road bridge linking the island with the existing port estate. MARA determined the Maritime Area Consent in July 2026. Shannon Foynes has described the project as a critical enabler for future offshore renewable energy and freight capacity.",
    source: {
      label: "MARA consent determination and application record",
      href: "https://www.maritimeregulator.ie/application/mac20230024/",
    },
    moreSources: [sfpcProjects],
    visualDirection:
      "Use an official estuary map or site investigation / concept image showing Foynes Island and the bridge connection. Mark the image “proposed development” and use a deepwater vessel or floating-wind component only as contextual artwork.",
  },
  {
    number: 13,
    slug: "foynes-serviced-port-lands-and-warehousing",
    title: "Foynes serviced port lands and warehousing",
    location: "Limerick",
    category: "Logistics and storage",
    stage: "Permission granted",
    status: "Planning consent obtained for serviced land and warehouse provision",
    text: "Shannon Foynes says planning consent provides for 34 hectares of serviced industrial land for open and covered storage, including port-centric activity, and 12,000 square metres of warehouse space. The development is intended to provide short- to medium-term capacity as cargo volumes grow.",
    source: { label: "Shannon Foynes land and warehouse project details", href: "https://sfpc.ie/lands-at-foynes/" },
    visualDirection:
      "Use the official Foynes site plan or aerial with the serviced land boundary and warehouse area marked. Keep the treatment grounded in the actual consented layout.",
  },
  {
    number: 14,
    slug: "limerick-to-foynes-rail-freight-line",
    image: {
      src: "/images/projects/limerick-to-foynes-rail-freight-line.jpg",
      alt: "Crews lifting a renewed bridge span into place on the Limerick to Foynes line",
      credit: {
        label: "Iarnród Éireann",
        href: "https://www.irishrail.ie/en-ie/about-us/iarnrod-eireann-projects-and-investments/limerick-to-foynes-freight-line",
      },
    },
    title: "Limerick to Foynes rail freight line",
    location: "Limerick to Foynes",
    category: "Rail freight",
    stage: "Under construction",
    status: "Reinstatement works underway; commissioning stated for the second half of 2026",
    text: "The 42-kilometre rail line is being reinstated to reconnect Foynes Port with the national rail network. Iarnród Éireann says construction began in early 2023 and that freight commissioning is planned for the second half of 2026.",
    source: {
      label: "Iarnród Éireann project status and route",
      href: "https://www.irishrail.ie/en-ie/about-us/iarnrod-eireann-projects-and-investments/limerick-to-foynes-freight-line",
    },
    moreSources: [
      { label: "Shannon Foynes rail-reinstatement page", href: "https://sfpc.ie/limerick-to-foynes-rail-reinstatement/" },
    ],
    editorNote: "Recheck the opening date before using this as a live status.",
    visualDirection:
      "Use a current track-renewal or level-crossing photograph, plus a simple route map between Limerick and Foynes. Do not use passenger-train imagery as the line is being restored for freight.",
  },
  {
    number: 15,
    slug: "foynes-to-limerick-road-and-adare-bypass",
    title: "Foynes to Limerick Road and Adare Bypass",
    location: "Limerick",
    category: "Port access and freight connectivity",
    stage: "Permission granted",
    status: "Planning approved",
    text: "The scheme is designed to connect Foynes Port to the motorway network and includes the Adare Bypass. Limerick City and County Council describes a 35-kilometre route; the project has planning approval, with enabling bridge works and further delivery steps reported.",
    source: {
      label: "Limerick City and County Council scheme page",
      href: "https://www.limerick.ie/council/services/roads-and-travel/road-improvements-major-schemes/foynes-to-limerick-road-including",
    },
    moreSources: [{ label: "Project route and public information", href: "https://www.foyneslimerick.ie/" }],
    editorNote:
      "Brief status: “Planning approved; delivery programme and current construction status to verify.” Confirm the current contract and construction position before publication.",
    visualDirection:
      "Use the official route map with Foynes, Rathkeale, Adare and the motorway connection clearly labelled. An aerial road image alone will not explain the port-access benefit.",
  },

  // Belfast (16–19)
  {
    number: 16,
    slug: "belfast-harbour-d3-deepwater-quay",
    title: "Belfast Harbour D3 deepwater quay",
    location: "Belfast",
    category: "Cruise and offshore wind",
    stage: "Under construction",
    status: "Under construction; new cruise home planned from 2028",
    text: "The £90 million D3 project is a dual-purpose deepwater quay intended to accommodate large cruise vessels and support offshore wind turbine assembly and installation. Belfast Harbour reported that construction had begun, with the new cruise home planned from 2028.",
    source: {
      label: "Belfast Harbour project status and D3 imagery",
      href: "https://www.belfast-harbour.co.uk/masterplan/our-horizons/",
    },
    moreSources: [belfastPlan],
    visualDirection:
      "Use current construction photography or the harbour’s D3 visualisation. Show the quay at water level with scale cues such as a cruise ship or turbine component, clearly captioned as proposed capacity.",
  },
  {
    number: 17,
    slug: "belfast-west-bank-freight-terminal",
    title: "Belfast West Bank freight terminal",
    location: "Belfast",
    category: "Freight capacity",
    stage: "Planned",
    status: "Planned within Belfast Harbour’s 25-year investment programme",
    text: "Belfast Harbour’s long-term investment plan includes land reclamation at West Bank Road to create a new freight terminal. The project is intended to add capacity for port operations. It forms part of the wider masterplan, with timing and delivery subject to further development.",
    source: { ...belfastPlan, label: "Belfast Harbour 2026 investment plan" },
    visualDirection:
      "Use the harbour estate map with the West Bank Road site highlighted, then a concept plan if the harbour makes one available. Label any rendering as a proposal.",
  },
  {
    number: 18,
    slug: "belfast-harbour-stormont-wharf-redevelopment",
    title: "Belfast Harbour Stormont Wharf redevelopment",
    location: "Belfast",
    category: "Deepwater berth and port capacity",
    stage: "Planned",
    status: "Planned in the Belfast Harbour masterplan",
    text: "The Belfast Harbour plan identifies redevelopment of Stormont Wharf, described as the island’s longest deepwater quay, alongside an extension to the container terminal berth for next-generation vessels. Together these works are intended to support future cargo and port capacity.",
    source: { ...belfastPlan, label: "Belfast Harbour investment plan and project list" },
    visualDirection:
      "Use a current aerial or quay-side photograph of Stormont Wharf. If a future layout is shown, pair it with a clear “planned redevelopment” label.",
  },
  {
    number: 19,
    slug: "belfast-harbour-shore-power-and-clean-energy-hub",
    title: "Belfast Harbour shore power and clean energy hub",
    location: "Belfast",
    category: "Decarbonisation and port energy",
    stage: "Planned",
    status: "Planned within Belfast Harbour’s long-term investment programme",
    text: "Belfast Harbour’s investment plan includes shore power for docked vessels and a clean energy hub. These are planned elements of a wider programme intended to support port decarbonisation and future energy requirements.",
    source: { ...belfastPlan, label: "Belfast Harbour investment plan and clean-energy proposals" },
    editorNote: "Avoid implying that shore power is already available across the harbour.",
    visualDirection:
      "Use a vessel connected to shore power as a clearly illustrative concept, alongside a harbour energy-infrastructure image. Label the visual “planned” and avoid showing a specific berth unless confirmed.",
  },

  // Ros an Mhíl (20)
  {
    number: 20,
    slug: "ros-an-mhil-deep-water-quay",
    title: "Ros an Mhíl Deep Water Quay",
    location: "Galway",
    category: "Fishery harbour and marine infrastructure",
    stage: "On hold",
    status: "Major quay works halted in 2024; substitute-consent process is active",
    text: "The proposed 200-metre deepwater quay at Ros an Mhíl is a major fishery-harbour project. Works began in 2023 but were halted in 2024; the project now has a substitute-consent process before An Coimisiún Pleanála. It is included here because of its scale and relevance; its status remains unresolved.",
    source: {
      label: "An Coimisiún Pleanála substitute-consent case documents",
      href: "https://www.pleanala.ie/publicaccess/SubstituteConsent/323895/",
    },
    moreSources: [
      {
        label: "Government funding and original project context",
        href: "https://www.gov.ie/en/department-of-agriculture-food-and-the-marine/press-releases/minister-mcconalogue-announces-investment-of-297-million-in-the-fishery-harbour-centres/",
      },
    ],
    editorNote: "Its status must be presented clearly as unresolved.",
    visualDirection:
      "Use a current site photograph showing the incomplete works, if available, or the formal project documents’ site plan. Avoid polished “future port” renderings that hide the project’s current status.",
  },
];
