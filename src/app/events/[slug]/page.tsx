import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Partners from "@/components/Partners";
import { eventDetail, eventItems } from "@/content/events";

export function generateStaticParams() {
  return eventItems.map((event) => ({ slug: event.slug }));
}

const findEvent = (slug: string) => eventItems.find((item) => item.slug === slug);

export async function generateMetadata({ params }: PageProps<"/events/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const event = findEvent(slug);
  return { title: event?.title, description: event?.description };
}

export default async function EventDetailPage({ params }: PageProps<"/events/[slug]">) {
  const { slug } = await params;
  const event = findEvent(slug);
  if (!event) notFound();

  return (
    <>
      <PageHero kicker={eventDetail.hero.kicker} title={eventDetail.hero.title} banner="events" />
      <section className="section">
        <div className="wrap grid items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <Link href="/events" className="mb-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline">
              <span aria-hidden="true">‹</span> {eventDetail.back}
            </Link>
            <h2 className="text-[clamp(26px,2.8vw,36px)] leading-[1.1] font-bold tracking-[-0.03em] text-navy">
              {event.title}
            </h2>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 text-muted">
              <span>{event.date}</span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
                </svg>
                {event.places}
              </span>
            </div>
            {event.description && <p className="mt-5 text-muted">{event.description}</p>}
            <button type="button" className="btn btn-navy mt-7">
              {eventDetail.cta}
            </button>
          </div>
          <Image
            src={event.image}
            alt={event.alt}
            width={520}
            height={347}
            priority
            className="aspect-[16/10] w-full rounded-card border border-line object-cover shadow-[0_16px_40px_rgb(8_41_67/0.14)]"
          />
        </div>
      </section>
      <Partners />
    </>
  );
}
