import CtaBand from "@/components/CtaBand";
import Partners from "@/components/Partners";
import AboutConference from "@/components/home/AboutConference";
import Contact from "@/components/home/Contact";
import Events from "@/components/home/Events";
import Hero from "@/components/home/Hero";
import ImageCardGrid from "@/components/home/ImageCardGrid";
import Minister from "@/components/home/Minister";
import Testimonials from "@/components/home/Testimonials";
import { conference, offer, services } from "@/content/home";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutConference />
      <ImageCardGrid id="offer" title={offer.title} cta={offer.cta} cards={offer.cards} />
      <CtaBand
        title={conference.band.title}
        text={conference.band.text}
        cta={conference.band.cta}
        href="#contact"
      />
      <ImageCardGrid
        id="services"
        title={services.title}
        cta={services.cta}
        cards={services.cards}
        className="bg-mist"
      />
      <Events />
      <Minister />
      <Testimonials />
      <Contact />
      <Partners />
    </>
  );
}
