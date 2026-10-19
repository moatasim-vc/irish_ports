// Banner photos (public/images/banners) and their credits. They are from Wikimedia Commons;
// the credit line must stay with each photo (CC licences).

export type BannerKey = keyof typeof banners;

export const banners = {
  "home": {
    "image": "/images/banners/home.jpg",
    "credit": {
      "author": "Rennett Stowe from USA",
      "license": "CC BY 2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Dublin_Harbor_(14691672159).jpg"
    }
  },
  "news": {
    "image": "/images/banners/news.jpg",
    "credit": {
      "author": "Giorgio Galeotti",
      "license": "CC BY 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Grand_Canal_Dock_-_Dublin,_Ireland_-_August_18,_2017_01.jpg"
    }
  },
  "events": {
    "image": "/images/banners/events.jpg",
    "credit": {
      "author": "William Murphy",
      "license": "CC BY-SA 2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Howth_Harbour_-Ireland-3Sept2008.jpg"
    }
  },
  "ports-directory": {
    "image": "/images/banners/ports-directory.jpg",
    "credit": {
      "author": "William Murphy",
      "license": "CC BY-SA 2.0",
      "source": "https://commons.wikimedia.org/wiki/File:THIS_LITTLE_HARBOUR_AT_BLACKROCK_VILLAGE_MAY_BE_NAMED_PIER_HEAD_OR_THE_PIER_(WHERE_CASTLE_ROAD_MEETS_BLACKROCK_ROAD)-144306.jpg"
    }
  },
  "media-pack": {
    "image": "/images/banners/media-pack.jpg",
    "credit": {
      "author": "Belfast Dissenter",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:New_Belfast_Liebherr_gantry_crane.jpg"
    }
  },
  "suppliers": {
    "image": "/images/banners/suppliers.jpg",
    "credit": {
      "author": "kees torn",
      "license": "CC BY-SA 2.0",
      "source": "https://commons.wikimedia.org/wiki/File:MAERSK_MC_KINNEY_M%C3%96LLER_%26_MARSEILLE_MAERSK_(48694054418).jpg"
    }
  },
  "membership": {
    "image": "/images/banners/membership.jpg",
    "credit": {
      "author": "瑞丽江的河水",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Howth_-_aerial_-_2025-08-02_12.jpg"
    }
  },
  "shipping-operators": {
    "image": "/images/banners/shipping-operators.jpg",
    "credit": {
      "author": "Cityswift - Ireland",
      "license": "CC BY 2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Here_is_the_shipping_forecaster_(50788758971).jpg"
    }
  },
  "service-providers": {
    "image": "/images/banners/service-providers.jpg",
    "credit": {
      "author": "瑞丽江的河水",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Rosslare_Europort_-_aerial_-_2024-08-31_08.jpg"
    }
  },
  "ship-registration": {
    "image": "/images/banners/ship-registration.jpg",
    "credit": {
      "author": "Muhammad Mahdi Karim",
      "license": "GFDL 1.2",
      "source": "https://commons.wikimedia.org/wiki/File:Container_Ship.jpg"
    }
  },
  "world-ports": {
    "image": "/images/banners/world-ports.jpg",
    "credit": {
      "author": "Niels Johannes",
      "license": "CC BY-SA 3.0",
      "source": "https://commons.wikimedia.org/wiki/File:DublinPort.jpg"
    }
  },
  "contact": {
    "image": "/images/banners/contact.jpg",
    "credit": {"author":"William Murphy from Dublin, Ireland","license":"CC BY-SA 2.0","source":"https://commons.wikimedia.org/wiki/File:THE_SAMUEL_BECKETT_BRIDGE_11_JANUARY_2018_(STILL_TRYING_FOR_A_UNIQUE_IMAGE_OF_THIS_BRIDGE)-135491_(39626174772).jpg"}
  }
} as const;
