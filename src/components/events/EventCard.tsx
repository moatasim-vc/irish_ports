import Image from "next/image";
import Link from "next/link";
import { eventHref, type EventItem } from "@/content/events";

// Photo card with the title and details over a navy fade; opens the event's page.
export default function EventCard({ event }: { event: EventItem }) {
  return (
    <Link href={eventHref(event)} className="group relative block aspect-[3/2] overflow-hidden rounded-card bg-navy shadow-card">
      <Image
        src={event.image}
        alt={event.alt}
        fill
        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/65 to-navy/5" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <h3 className="text-[22px] leading-[1.2] font-bold tracking-[-0.02em] text-balance">{event.title}</h3>
        <div className="mt-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[14.5px] text-[#dceaf0]">
          <span className="font-semibold">{event.date}</span>
          <span aria-hidden="true" className="size-1 rounded-full bg-gold" />
          <span>{event.places}</span>
        </div>
      </div>
    </Link>
  );
}
