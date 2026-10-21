import Image from "next/image";
import Chevron from "@/components/Chevron";
import SectionTitle from "@/components/SectionTitle";
import { minister } from "@/content/home";

export default function Minister() {
  return (
    <section id="minister" className="section bg-mist">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-card border border-line bg-[linear-gradient(140deg,#eaf1f4,#d7e2e9)]">
          {minister.photo ? (
            <Image src={minister.photo} alt={minister.name} fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
          ) : (
            <>
              <span
                aria-hidden="true"
                className="grid size-[120px] place-items-center rounded-full bg-navy text-[40px] font-bold text-gold"
              >
                {minister.initials}
              </span>
              <span className="absolute bottom-3 left-4 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
                Photo placeholder
              </span>
            </>
          )}
        </div>
        <div className="text-muted">
          <SectionTitle className="mb-5">{minister.title}</SectionTitle>
          <p>{minister.text}</p>
          <a className="btn mt-7" href={minister.cta.href}>
            {minister.cta.label} <Chevron />
          </a>
        </div>
      </div>
    </section>
  );
}
