import Image from "next/image";
import Link from "next/link";
import Chevron from "@/components/Chevron";
import SectionTitle from "@/components/SectionTitle";
import Tabs from "@/components/Tabs";
import EmptyPanel from "@/components/events/EmptyPanel";
import { eventHref, eventItems, eventsPage, tabs } from "@/content/events";
import { events } from "@/content/home";

export default function Events() {
  const { webinars, host } = eventsPage;

  const eventsPanel = (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {eventItems.map((item) => (
        <Link key={item.slug} href={eventHref(item)} className="card group">
          <Image src={item.image} alt={item.alt} width={520} height={260} className="aspect-[2/1] w-full object-cover" />
          <div className="flex flex-1 flex-col gap-3 p-6">
            <h3 className="text-lg leading-[1.3] font-semibold text-navy group-hover:text-teal">{item.title}</h3>
            <div className="mt-auto flex justify-between gap-3 border-t border-line pt-3 text-[13.5px] text-muted">
              <span>{item.date}</span>
              <span className="font-semibold text-tick">{item.places}</span>
            </div>
          </div>
        </Link>
      ))}
      <article className="card justify-center border-navy bg-navy">
        <div className="flex flex-col gap-3 p-6">
          <h3 className="text-xl font-semibold text-white">{events.hostCard.title}</h3>
          <p className="text-on-navy">{events.hostCard.text}</p>
          <a className="btn btn-sm mt-2 self-start" href="#contact">
            {events.hostCard.cta} <Chevron />
          </a>
        </div>
      </article>
    </div>
  );

  return (
    <section id="events" className="section">
      <div className="wrap">
        <SectionTitle>{events.title}</SectionTitle>
        <p className="-mt-[18px] mb-7 max-w-[760px] text-muted">{events.subtitle}</p>

        <Tabs
          label="Event types"
          tabs={[
            { label: tabs[0], panel: eventsPanel },
            { label: tabs[1], panel: <EmptyPanel title={webinars.emptyTitle} text={webinars.emptyText} /> },
            {
              label: tabs[2],
              panel: (
                <EmptyPanel title={host.title} text={host.text}>
                  <a className="btn mt-[18px]" href="#contact">
                    {host.cta} <Chevron />
                  </a>
                </EmptyPanel>
              ),
            },
          ]}
        />

        <div className="mt-9 text-center">
          <Link className="btn" href="/events">
            {events.cta} <Chevron />
          </Link>
        </div>
      </div>
    </section>
  );
}
