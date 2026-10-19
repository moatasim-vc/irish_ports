import Image from "next/image";
import Link from "next/link";
import Chevron from "@/components/Chevron";
import Icon from "@/components/Icon";
import SectionTitle from "@/components/SectionTitle";
import type { ImageCard } from "@/content/home";

// Shared by "What We Offer" and "Additional Services": photo, icon badge, text and a button.
export default function ImageCardGrid({
  id,
  title,
  cta,
  cards,
  className = "",
}: {
  id: string;
  title: string;
  cta: string;
  cards: ImageCard[];
  className?: string;
}) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="wrap">
        <SectionTitle>{title}</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="card">
              <Image
                src={card.image}
                alt={card.alt}
                width={422}
                height={281}
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="relative -mt-[47px] grid size-[46px] place-items-center rounded-xl border-[3px] border-white bg-ice text-teal">
                  <Icon name={card.icon} />
                </span>
                <h3 className="text-[17px] leading-[1.3] font-semibold text-navy">{card.title}</h3>
                <p className="text-[14.5px] text-muted">{card.text}</p>
                <Link className="btn btn-sm mt-auto self-start" href={card.href ?? "#"}>
                  {cta} <Chevron />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
