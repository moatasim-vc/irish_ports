import type { Metadata } from "next";
import Link from "next/link";
import Chevron from "@/components/Chevron";
import PageHero from "@/components/PageHero";
import Partners from "@/components/Partners";
import Tabs from "@/components/Tabs";
import EmptyPanel from "@/components/events/EmptyPanel";
import EventCard from "@/components/events/EventCard";
import { eventItems, eventsPage, tabs } from "@/content/events";

export const metadata: Metadata = {
  title: "Events & Webinars",
  description: eventsPage.webinars.intro,
};

export default function EventsPage() {
  const { hero, webinars, host } = eventsPage;

  const eventsPanel = (
    <>
      <p className="text-muted">{eventsPage.intro}</p>
      {eventItems.length ? (
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {eventItems.map((event) => (
            <div key={event.slug} className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-12 text-center text-muted">{eventsPage.noEvents}</p>
      )}
    </>
  );

  return (
    <>
      <PageHero kicker={hero.kicker} title={hero.title} banner="events" />
      <section className="section">
        <div className="wrap mx-auto max-w-[1160px]">
          <Tabs
            label="Event types"
            className="mb-10 justify-center"
            tabs={[
              { label: tabs[0], panel: eventsPanel },
              {
                label: tabs[1],
                panel: (
                  <>
                    <p className="text-muted">{webinars.intro}</p>
                    <div className="mt-12">
                      <EmptyPanel title={webinars.emptyTitle} text={webinars.emptyText} />
                    </div>
                  </>
                ),
              },
              {
                label: tabs[2],
                panel: (
                  <EmptyPanel title={host.title} text={host.text}>
                    {/* Points at the home page form until the contact page is built. */}
                    <Link className="btn mt-[18px]" href="/contact">
                      {host.cta} <Chevron />
                    </Link>
                  </EmptyPanel>
                ),
              },
            ]}
          />
        </div>
      </section>
      <Partners />
    </>
  );
}
