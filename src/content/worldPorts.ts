// World Ports page content: Irish ports and harbours, in the order shown on the page.
// Text is as published on the live site. Photos with a `credit` are from Wikimedia Commons
// and must keep their credit line (CC licences); the rest are taken from the live site.

export type WorldPort = {
  slug: string;
  name: string;
  address: string;
  description: string;
  points: string[];
  image: string;
  credit?: { author: string; license: string; source: string };
};

export const worldPortsPage = {
  title: "World Ports",
  kicker: "Ports",
  intro: "Key facts on ports and harbours around Ireland. Jump to a port below.",
};

export const worldPorts: WorldPort[] = [
  {
    "slug": "dublin-port",
    "name": "Dublin Port",
    "address": "North Dock, Dublin, Ireland",
    "description": "Dublin Port is the largest port in the country. In over 7 years the port has the highest growth rate for almost 36.1% of total cargo volumes.",
    "points": [
      "TEU: 220,000",
      "The largest and busiest port in Ireland",
      "Around seventeen thousand vessels movements each year",
      "Classified as tier 1/tier 2 ports by the national port policy",
      "Categories as a center and broad port in EU’s TENT-T network",
      "Manage more or less fifty percent of all trade in Ireland",
      "Has big share of volumes in ro-ro and lo-lo modes"
    ],
    "image": "/images/world-ports/dublin-port.jpg",
    "credit": {
      "author": "Niels Johannes",
      "license": "CC BY-SA 3.0",
      "source": "https://commons.wikimedia.org/wiki/File:DublinPort.jpg"
    }
  },
  {
    "slug": "port-of-cork",
    "name": "Port of Cork",
    "address": "Custom House St, Centre, Cork, Ireland",
    "description": "Port of Cork is the principal port serving south Ireland and in the city of Cork.",
    "points": [
      "TEU: 450,000 annually",
      "Offers shipping modes; lift on-off, roll-on-off, liquid bulk, dry bulk, breakbulk, and cruise",
      "Providing all arriving vessels in the quay with pilotage and towage facilities",
      "Has berth facilities",
      "Quays are mainly used for transporting oil and grain"
    ],
    "image": "/images/world-ports/port-of-cork.jpg",
    "credit": {
      "author": "William Murphy",
      "license": "CC BY-SA 2.0",
      "source": "https://commons.wikimedia.org/wiki/File:THIS_LITTLE_HARBOUR_AT_BLACKROCK_VILLAGE_MAY_BE_NAMED_PIER_HEAD_OR_THE_PIER_(WHERE_CASTLE_ROAD_MEETS_BLACKROCK_ROAD)-144306.jpg"
    }
  },
  {
    "slug": "port-of-foynes",
    "name": "Port of Foynes",
    "address": "Harbour Office Foynes, County Limerick Ireland",
    "description": "The Port of Foynes has situated on the River Shannon on the southwest coast of Ireland. It is the second-largest port operator and largest bulk port company in Ireland.",
    "points": [
      "TEU: N/A",
      "Supervise the maritime activities on Shannon Estuary",
      "Port contains six facilities; Dock, Airport Jetty, Marine Terminal, Island Jetty, and Moneypoint Marine Terminal.",
      "Handles largest vessels ranging 180,000DWT",
      "Principally imports; timbers, fuels, and general cargo",
      "Main exports; meat, sugar, and hydrate",
      "Handled cargo each year is about 7.6 million tons"
    ],
    "image": "/images/world-ports/port-of-foynes.jpg",
    "credit": {
      "author": "Sean an Scuab",
      "license": "CC BY-SA 3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Calafort_Faing1.JPG"
    }
  },
  {
    "slug": "port-of-galway",
    "name": "Port of Galway",
    "address": "Harbour Office, New Docks, Galway, Ireland",
    "description": "Port of Galway is positioned on the river Corrib at the deepest eastern end of Galway Bay, on the west coast of Ireland.",
    "points": [
      "TEU: N/A",
      "Has 1,044-meter total length in quay",
      "Can accommodate 9 vessels in the inner dock once",
      "Mainly imports: petroleum products, fish, dry bulk chemicals, manufactured steel, etc",
      "Principal exports: scrap metal and a small amount of aggregate",
      "Handled yearly around one million tons off cargo and three hundred eighty vessels",
      "Largest vessel accommodated: length of turning area 146.3m, depth of water 8.5 and 7.3m, the width of the entrance 20m",
      "The high water level is secured by dock gates"
    ],
    "image": "/images/world-ports/port-of-galway.jpg",
    "credit": {
      "author": "JoachimKohler-HB",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:MS_Celtic_Explorer_and_MS_Galway_Fisher_at_Galway_harbour_(2014).jpg"
    }
  },
  {
    "slug": "sligo-harbour",
    "name": "Sligo Harbour",
    "address": "Harbour Office Ballast Quay Sligo, Sligo Ireland",
    "description": "The Sligo Harbour is a commercial port located on the southeast bank river Garovogue that proceed Lough Gill.",
    "points": [
      "TEU: N/A",
      "The large and sheltered harbor",
      "Reachable through Sligo Bay to the south of Raughley point",
      "Has 2 working jetties",
      "Main exports are forestry products",
      "Imports: coal, timber, salt, and fertilizers",
      "Cargo handled each year is about 32,000 tons",
      "Around twenty-five vessels visit the port",
      "Max vessel size; LOA 100 meters, 3,500DWT, draught 5,2m, no beam limit"
    ],
    "image": "/images/world-ports/sligo-harbour.jpg",
    "credit": {
      "author": "Alain Rouiller",
      "license": "CC BY-SA 2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Rosses_Point_-_Sligo_(14.06.16)_12.jpg"
    }
  },
  {
    "slug": "bantry-bay-harbour",
    "name": "Bantry Bay Harbour",
    "address": "Wolfe Tone Square Bantry, Co Cork Ireland",
    "description": "Bantry Bay Harbour occupies 35 kilometers long in southwest Ireland and is approximately ten kilometers wide.",
    "points": [
      "TEU: N/A",
      "Main productions: export of stone, transshipment of oil, tourism, and aquaculture",
      "Known for having great beaches, fishing, and harvesting mussels",
      "Population ranging 3,000 in the town of Bantry and 12,500 within sixteen kilometers of the town"
    ],
    "image": "/images/world-ports/bantry-bay-harbour.jpg",
    "credit": {
      "author": "Dzjamkokarlis",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Bantry_From_above.jpg"
    }
  },
  {
    "slug": "aughinish-alumina-jetty",
    "name": "Aughinish Alumina Jetty",
    "address": "Harbour Office Foynes, County Limerick Ireland",
    "description": "Aughinish Alumina Jetty is a deep-water jetty in the Shannon, where the clean imports bauxite from Guinea and brazil, and the exports alumina filtered into aluminum metal.",
    "points": [
      "TEU: N/A",
      "Handles an alumina production plant",
      "About 75,000 DWT bauxite vessels handled",
      "Inside berths used tankers for fuel oil and caustic",
      "Max size: (inside jetty) LOA 180m, draught 11.0m, 40,000DWT ( outside jetty) LOA 225m, draught 12.5m"
    ],
    "image": "/images/world-ports/aughinish-alumina-jetty.jpg"
  },
  {
    "slug": "drogheda-port",
    "name": "Drogheda Port",
    "address": "Maritime House The Mall Drogheda, Co Louth Ireland",
    "description": "The Drogheda Port is located on the River Boyne, around 4.5 miles from the sea. It is a commercial multi-model port of international that assists Dublin port.",
    "points": [
      "TEU: 15,400",
      "Principally imports/exports: containers, hydrocarbons, steel, paper, general cargo, etc",
      "Yearly handled: around five hundred vessels and one million thirty-five thousand tons of cargo",
      "Max vessel size: LOA 120meters, 7,000DWT",
      "Draught depends on tidal predictions ranging 4.2m on neaps and 6.5m on spring"
    ],
    "image": "/images/world-ports/drogheda-port.jpg",
    "credit": {
      "author": "MercuryMeerkat",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Hebble_Sand.jpg"
    }
  },
  {
    "slug": "dun-laoghaire-port",
    "name": "Dun Laoghaire Port",
    "address": "Harbour Lodge Crofton Road Dun Laoghaire, Co Dublin Ireland",
    "description": "Dun Laoghaire Port is a busy and spacious port that is the major center for yachting in Ireland. It is located on the east coast of Ireland in the southern end of Dublin Bay.",
    "points": [
      "TEU: N/A",
      "Main ferry terminal and yachting center",
      "Occupies an area of about 95 hectares",
      "Provide shelter from all conditions",
      "Have two breakwaters located on the west side of the harbor",
      "Around 1,700 standard ferries and catamaran arrivals per year"
    ],
    "image": "/images/world-ports/dun-laoghaire-port.jpg",
    "credit": {
      "author": "瑞丽江的河水",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:D%C3%BAn_Laoghaire_-_aerial_-_2025-11-16_05.jpg"
    }
  },
  {
    "slug": "port-of-dundalk",
    "name": "Port of Dundalk",
    "address": "Harbour Office Quay St Dundalk, Co Louth Ireland",
    "description": "The Dundalk Port is the fastest-growing port in Ireland. It is administered by the Dundalk Port Co.",
    "points": [
      "TEU: N/A",
      "Services: managing general cargo, pilotage custom, etc",
      "Cargo imports: plasterboard, feedstuff, oil, coal, timber, and steel",
      "Exports metal scrap and turf",
      "Provide obligatory pilotage service that leads ship 8 kilometers from the sea",
      "Can handle ships around 3,500dwt and 106 meters length"
    ],
    "image": "/images/world-ports/port-of-dundalk.jpg"
  },
  {
    "slug": "greenore-port",
    "name": "Greenore Port",
    "address": "The Harbour, Greenore Port, Greenore, Co. Louth, Ireland",
    "description": "Greenore Port is privately owned by the Doyle Shipping Group. It is a deepwater port strategically located twenty kilometers east of Dundalk.",
    "points": [
      "TEU: 20,000",
      "The most reachable port on the east coast of Ireland",
      "Contain single quay, sheltered by a separated breakwater",
      "Handle containers and bulk",
      "Mainly imports: animal feed, fuel oil, steel, fruit, etc",
      "Principal exports: fish cages, milk powder, frozen meat, etc",
      "Yearly handled: 700,000 tons of cargo and 193 vessels",
      "Max size: LOA 185m, beam 32m, arrival draught 6.5m, 42,000DWT"
    ],
    "image": "/images/world-ports/greenore-port.jpg"
  },
  {
    "slug": "new-ross-port",
    "name": "New Ross Port",
    "address": "E30, New Ross, Co. Wexford, Ireland",
    "description": "The New Ross Port is the only inland port in the country. It is situated on the river barrow nine-kilometer above its junction with the River Suir and 18 kilometers from the sea in the southeast corner of Ireland.",
    "points": [
      "TEU: N/A",
      "Has facilities for containers, Ro-Ro, and bulk cargoes",
      "Mainly exports: agricultural produce, fertilizers, grain, livestock, and timber",
      "Imports: acids, cement, petroleum products, coal, salt, etc",
      "Around 1 million tons of cargo annually handled"
    ],
    "image": "/images/world-ports/new-ross-port.jpg",
    "credit": {
      "author": "瑞丽江的河水",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:New_Ross_-_aerial_-_2026-04-18_04.jpg"
    }
  },
  {
    "slug": "port-of-waterford",
    "name": "Port of Waterford",
    "address": "Gorteens, Waterford, Co. Kilkenny, X91 W0XW, Ireland",
    "description": "Port Of Waterford is one of the busiest ports in Ireland. It is the closest Irish lift-on/off and bulk port to mainland Europe.",
    "points": [
      "TEU: 186,000",
      "Controlled by national rail link",
      "Open 24 hours a day over seven days",
      "Exports: agricultural produce, manufactured goods, foodstuffs",
      "Imports: grain, fertilizers, chemicals, timber, paper, etc",
      "Recently engage new trade including frozen meat, bananas, limestone, and peat moss",
      "Yearly handled: 2.5 million tons of cargo, 10,000 passengers, and around 810 vessels"
    ],
    "image": "/images/world-ports/port-of-waterford.jpg",
    "credit": {
      "author": "Waterford City",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Tall-ships-waterford.jpg"
    }
  },
  {
    "slug": "rosslare-europort",
    "name": "Rosslare Europort",
    "address": "Terminal Building Rosslare Europort County Wexford Ireland",
    "description": "The Rosslare Europort is a modern seaport and one of the largest and busiest ports in Ireland. It is situated in Rosslare Harbour in County Wexford, Ireland, near the southeasternmost end of the island of Ireland.",
    "points": [
      "TEU: N/A",
      "Outstanding road, rail, and sea connectivity",
      "Expert in handling roll-on/off freight, passengers, agricultural and trade vehicles, bulk cargo, etc"
    ],
    "image": "/images/world-ports/rosslare-europort.jpg",
    "credit": {
      "author": "瑞丽江的河水",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Rosslare_Europort_-_aerial_-_2024-08-31_08.jpg"
    }
  },
  {
    "slug": "wicklow-harbour",
    "name": "Wicklow Harbour",
    "address": "Wicklow Port, North Quay, Wicklow Town, Wicklow, A67 ED91, Ireland",
    "description": "Wicklow Port is located at the mouth of the Leitrim River. It is established by the branch of 2 breakwaters the east and west piers.",
    "points": [
      "TEU: N/A",
      "Good transportation access includes modern port access road to the port area",
      "Small commercial and fishing harbor",
      "Commercial vessels can make use of the port facilities for cargo",
      "Provides complete sheltered",
      "Secure access at all times"
    ],
    "image": "/images/world-ports/wicklow-harbour.jpg",
    "credit": {
      "author": "瑞丽江的河水",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Wicklow_-_aerial_-_2026-01-01_03.jpg"
    }
  },
  {
    "slug": "port-of-arklow",
    "name": "Port of Arklow",
    "address": "Harbour Office South Quay Arklow, Co Wicklow Ireland",
    "description": "The Port of Arklow is a commercial and fishing port. It is positioned on Ireland’s east coast about halfway between Dublin and carnsore point.",
    "points": [
      "TEU: N/A",
      "Provide quays for small marina and abundant fishing",
      "Offer excellent protection all the time",
      "Mainly imports: sulfate of ammonia, animal feed, coal, and fuel",
      "Principal exports: fertilizers, grain with timber, nitric acid, and machinery"
    ],
    "image": "/images/world-ports/port-of-arklow.jpg",
    "credit": {
      "author": "Sarah777 at English Wikipedia",
      "license": "Public domain",
      "source": "https://commons.wikimedia.org/wiki/File:ArklowHarbour1568.jpg"
    }
  },
  {
    "slug": "port-of-baltimore",
    "name": "Port of Baltimore",
    "address": "Baltimore, Co Cork Ireland",
    "description": "Port of Baltimore is conveniently and strategically situated on the Helen Delich Bentley. It is ranked the 16th busiest port in the nation.",
    "points": [
      "TEU: 657,059 containers (2019)",
      "One of the three U.S east coast ports that can handle the largest ship in the world",
      "Has a large-scale system of highways, railways, and airport"
    ],
    "image": "/images/world-ports/port-of-baltimore.jpg",
    "credit": {
      "author": "Masha Dunaeva EN:User:Dunaevam",
      "license": "Public domain",
      "source": "https://commons.wikimedia.org/wiki/File:Baltimore_view,_2005.JPG"
    }
  },
  {
    "slug": "bunbeg-harbor",
    "name": "Bunbeg Harbor",
    "address": "The Crossroads, Magheraclogher, Bunbeg, Co. Donegal, F92 NX07, Ireland",
    "description": "The Bunbeg Harbor is located on the uttermost northwest coast of Ireland, around 30 miles west of Letterkenny.",
    "points": [
      "TEU: N/A",
      "Harbour quay and some safe anchorage",
      "Small alluring fishing village",
      "Positioned in a scenic environment",
      "Protected and has an excellent shelter"
    ],
    "image": "/images/world-ports/bunbeg-harbor.jpg",
    "credit": {
      "author": "MaxPride",
      "license": "CC BY-SA 3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Anbunbeag2.jpg"
    }
  },
  {
    "slug": "burtonport-harbour",
    "name": "Burtonport Harbour",
    "address": "Burtonport Ireland",
    "description": "Burtonport Harbour is a small fishing village on the west coast and is the ferry port for Inishfree Island, Aranmore Island, and Rutland Island.",
    "points": [
      "TEU: N/A",
      "Has very good shelter",
      "The minimum depth is two meters (6.56feet)"
    ],
    "image": "/images/world-ports/burtonport-harbour.jpg"
  },
  {
    "slug": "port-of-cahirsiveen",
    "name": "Port of Cahirsiveen",
    "address": "Council Office Cahirsiveen, Co Kerry Ireland",
    "description": "Port of Cahirsiveen or Cahersiveen Marina is located in the Skellig Kerry Region at 51.94782° / -10.23141°.",
    "points": [
      "TEU: N/A",
      "Available with 93 moorings",
      "Maximum draught – 2.50m, length – 20.00m",
      "16 Radio channel"
    ],
    "image": "/images/world-ports/port-of-cahirsiveen.jpg"
  },
  {
    "slug": "carlingford-harbor",
    "name": "Carlingford Harbor",
    "address": "Liberties of Carlingford, Co. Louth, Ireland",
    "description": "Carlingford Harbor is located in between Slieve Foy, Carlingford Lough, and the Mourne mountains.",
    "points": [
      "TEU: N/A",
      "Tidal harbor suitable for vessels",
      "Popular anchorage with good depths",
      "Offer good protection",
      "Compromise deepwater shipping channels"
    ],
    "image": "/images/world-ports/carlingford-harbor.jpg",
    "credit": {
      "author": "Keith Ruffles",
      "license": "CC BY 3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Carlingford_Lough_-_panoramio.jpg"
    }
  },
  {
    "slug": "castletownbere-harbor",
    "name": "Castletownbere Harbor",
    "address": "Cametringane, Co. Cork, Ireland",
    "description": "Castletownbere Harbor is situated on the Beara Peninsula, in West Cork (southwest of Ireland). It is divided into the inner harbor and outer harbor.",
    "points": [
      "TEU: N/A",
      "A regional important fishing port",
      "Serves as a commercial and retail hub",
      "Has a local fleet of 60 fishing boats"
    ],
    "image": "/images/world-ports/castletownbere-harbor.jpg",
    "credit": {
      "author": "Neville Goodman",
      "license": "CC BY-SA 2.0",
      "source": "https://commons.wikimedia.org/wiki/File:The_Bere_Island_ferry_(geograph_6250317).jpg"
    }
  },
  {
    "slug": "cobh-harbor",
    "name": "Cobh Harbor",
    "address": "Cobh Ireland",
    "description": "Cobh Harbor is located in the southern part of Ireland. They are the 2nd-largest natural harbor throughout the world.",
    "points": [
      "TEU: N/A",
      "Operate as a seaport and naval station",
      "Capable of accommodating large vessels afloat"
    ],
    "image": "/images/world-ports/cobh-harbor.jpg",
    "credit": {
      "author": "Monster4711",
      "license": "CC BY-SA 3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Cobh_seeseite.jpg"
    }
  },
  {
    "slug": "dun-laoghaire-harbour",
    "name": "Dun Laoghaire Harbour",
    "address": "Harbour Lodge Crofton Road Dun Laoghaire, Co Dublin Ireland",
    "description": "Dun Laoghaire Harbour is located in the Southern part of Dublin Bay, ranked as 2nd-port in Dublin.",
    "points": [
      "TEU: N/A",
      "Dun Laoghaire Rathdown County Council operate the port"
    ],
    "image": "/images/world-ports/dun-laoghaire-harbour.jpg",
    "credit": {
      "author": "Mrspaceman at English Wikipedia",
      "license": "Public domain",
      "source": "https://commons.wikimedia.org/wiki/File:Dunlaoghaire_eastpier.JPG"
    }
  },
  {
    "slug": "port-of-dungarvan",
    "name": "Port of Dungarvan",
    "address": "Civic Offices Dungarvan, Co Waterford Ireland",
    "description": "Port of Dungarvan is administered by Dungarvan Urban District Council. It is strategically located in County Waterford, in the Southeast part of Ireland.",
    "points": [
      "TEU: N/A",
      "Port Type: Harbor",
      "Latitude: 52º 5' 39” N",
      "Longitude: -7º -36' -4” W"
    ],
    "image": "/images/world-ports/port-of-dungarvan.jpg",
    "credit": {
      "author": "User:Dungarvan",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Dungarvan_Harbour2023.jpg"
    }
  },
  {
    "slug": "port-of-dunmore-east",
    "name": "Port of Dunmore East",
    "address": "Department of Marine Leeson Lane Dunmore East Ireland",
    "description": "Port of Dunmore East or An Dún Mór Thoir is situated in the western part of Waterford County in Ireland.",
    "points": [
      "TEU: N/A",
      "Unlimited LOA and draught",
      "City Docks: LOA 165m, draught 7.0m",
      "Accommodate vessels up to 14,000DWT",
      "Busy fishing port; offer good shelter"
    ],
    "image": "/images/world-ports/port-of-dunmore-east.jpg",
    "credit": {
      "author": "Jerryaquav",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:DunmoreEastLBS.jpg"
    }
  },
  {
    "slug": "fenit-harbour",
    "name": "Fenit Harbour",
    "address": "Harbour Offices Fenit Ireland",
    "description": "Fenit Harbour is strategically situated in Co. Kerry, on the western part of Ireland.",
    "points": [
      "TEU: N/A",
      "Commercial port offering marina",
      "Anchor adjacent to the harbor area",
      "Tralee and Fenit Pier and Harbour Commissioners is the port authority",
      "Regularly accommodate 15,000-tonne ship",
      "Multi-purpose port with commercial, fishing, and marina ships"
    ],
    "image": "/images/world-ports/fenit-harbour.jpg",
    "credit": {
      "author": "godo godaj",
      "license": "CC BY 2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Fenit_harbour_ireland.jpg"
    }
  },
  {
    "slug": "howth-harbour",
    "name": "Howth Harbour",
    "address": "Harbour Office West Pier Howth, Co Dublin Ireland",
    "description": "Howth Harbour is authorized by the Howth Harbour Department of Marine. It is located on the NW part of the Howth tip.",
    "points": [
      "TEU: N/A",
      "Location: 53°23’N., 6°04’W"
    ],
    "image": "/images/world-ports/howth-harbour.jpg",
    "credit": {
      "author": "William Murphy",
      "license": "CC BY-SA 2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Howth_Harbour_-Ireland-3Sept2008.jpg"
    }
  },
  {
    "slug": "killybegs-harbor",
    "name": "Killybegs Harbor",
    "address": "Glebe, Co. Donegal, Ireland",
    "description": "Killybegs Harbor is among the largest fishing port in Ireland, situated in Co Donegal.",
    "points": [
      "TEU: N/A",
      "Boast modern companies and fishing vessels",
      "Operating as a general cargo facility in 2004"
    ],
    "image": "/images/world-ports/killybegs-harbor.jpg",
    "credit": {
      "author": "Andreas F. Borchert",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Killybegs_Harbour_Fishing_Trawler_SO_716_Sheanne_2007_08_21.jpg"
    }
  },
  {
    "slug": "port-of-kinsale",
    "name": "Port of Kinsale",
    "address": "Old-Fort, Co. Cork, Ireland",
    "description": "Port of Kinsale, the oldest commercial port in Ireland. It is managed and operated by Kinsale Harbour Commissioners. The port has two fully-serviced Marinas and a fishing fleet.",
    "points": [
      "TEU: N/A",
      "Landlocked natural harbor",
      "Has good shelter and anchorage",
      "Caters around 100 vessels day by day",
      "Major import: bulk animal foods",
      "Top exports: timber (ship to the UK)"
    ],
    "image": "/images/world-ports/port-of-kinsale.jpg",
    "credit": {
      "author": "Christopher Michel",
      "license": "CC BY 2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Kinsale_(4693044621).jpg"
    }
  },
  {
    "slug": "knightstown-harbor",
    "name": "Knightstown Harbor",
    "address": "Knightstown Ireland",
    "description": "Knightstown Harbor, a fishing port that provides visiting yachts.",
    "points": [
      "TEU: N/A",
      "Compromise sheltered anchorage and moorings",
      "Location: 51° 55' 33.97”, -10° 17' 11.04”"
    ],
    "image": "/images/world-ports/knightstown-harbor.jpg",
    "credit": {
      "author": "Jibi44",
      "license": "CC BY-SA 2.5",
      "source": "https://commons.wikimedia.org/wiki/File:046Valencia_Knightstown.JPG"
    }
  },
  {
    "slug": "moneypoint-jetty",
    "name": "Moneypoint Jetty",
    "address": "Carrowdotia South, Co. Clare, Ireland",
    "description": "Moneypoint Jetty is managed by Shannon Foynes Port Company. The jetty is designed to cater to around 250,000-tonne ships.",
    "points": [
      "TEU: N/A",
      "A coal import terminal",
      "Consists of 380m long berth",
      "Serves vessels up to 200,000t DWT"
    ],
    "image": "/images/world-ports/moneypoint-jetty.jpg",
    "credit": {
      "author": "JoachimKohlerBremen",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Tarbert_Lighthouse_20120831_IMG_5285.jpg"
    }
  },
  {
    "slug": "port-of-ringaskiddy",
    "name": "Port of Ringaskiddy",
    "address": "Ringaskiddy Ireland",
    "description": "Port of Ringaskiddy is a port situated in Ireland with geographical coordinates of 51.833445° / -8.3226585°.",
    "points": [
      "Accommodate vessels ranges: 5,500 – 6,000 TEU",
      "Has deep-water quay structure",
      "Welcome ships to shore gantry cranes",
      "Introduce Ro-Ro berth"
    ],
    "image": "/images/world-ports/port-of-ringaskiddy.jpg",
    "credit": {
      "author": "acediscovery",
      "license": "CC BY 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Aerial_photograph,_Cork_Harbour.jpg"
    }
  },
  {
    "slug": "westport-harbour",
    "name": "Westport Harbour",
    "address": "The Quay Westport, Co Mayo Ireland",
    "description": "Port of Whitegate is owned and managed by the ConocoPhillips Whitegate Refinery Ltd.",
    "points": [
      "TEU: N/A",
      "Coordinates: 51.8361N, 8.25W",
      "A subport of Cork"
    ],
    "image": "/images/world-ports/westport-harbour.jpg",
    "credit": {
      "author": "Brendanconway",
      "license": "Public domain",
      "source": "https://commons.wikimedia.org/wiki/File:Clew_Bay_with_Clare_Island.JPG"
    }
  },
  {
    "slug": "port-of-youghal",
    "name": "Port of Youghal",
    "address": "Town Hall Youghal, Co Cork Ireland",
    "description": "The Port of Youghal is strategically located in the Southern part of Ireland, at the top of Youghal Bay, in the waterway of the Blackwater River. This port is administered by the Youghal Urban District Council.",
    "points": [
      "TEU: N/A",
      "Annual total cargo traffic of 70,000 tonnes",
      "Mainly a recreational and fishing port",
      "Top exports: grain; Imports: fertilizer, coal, timber, and steel"
    ],
    "image": "/images/world-ports/port-of-youghal.jpg",
    "credit": {
      "author": "Will McGoldrick",
      "license": "CC BY-SA 3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Collegiate_Church_from_gardens.jpg"
    }
  }
];
