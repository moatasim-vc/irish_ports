import Image from "next/image";
import Link from "next/link";
import Chevron from "@/components/Chevron";
import SectionTitle from "@/components/SectionTitle";
import { partnersSection } from "@/content/home";
import { partners } from "@/content/site";

export default function Partners() {
  return (
    <section id="partners" className="section">
      <div className="wrap text-center">
        <SectionTitle center className="mb-4">
          {partnersSection.title}
        </SectionTitle>
        <p className="mx-auto mb-8 max-w-[640px] text-muted">{partnersSection.subtitle}</p>
        <ul className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {partners.map((partner, i) => (
            <li key={i}>
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={232}
                  height={70}
                  className="h-16 w-auto min-w-[170px] rounded-lg border border-line bg-white object-contain px-5 py-3"
                />
              ) : (
                <span className="grid h-16 min-w-[170px] place-items-center rounded-lg border border-line bg-white px-[22px] text-lg font-bold text-navy">
                  {partner.name}
                </span>
              )}
            </li>
          ))}
        </ul>
        <Link className="btn btn-navy" href={partnersSection.cta.href}>
          {partnersSection.cta.label} <Chevron />
        </Link>
      </div>
    </section>
  );
}
