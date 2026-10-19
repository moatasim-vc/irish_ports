import PageHero from "@/components/PageHero";
import Partners from "@/components/Partners";
import Accordion from "@/components/ports/Accordion";
import RichText from "@/components/ports/RichText";
import type { PortsPage } from "@/content/ports";

// Shared layout for the pages under the "Ports" menu: intro text, then accordions or headed sections.
export default function PortsInfoPage({ page }: { page: PortsPage }) {
  return (
    <>
      <PageHero kicker="Ports" title={page.title} banner={page.banner} />
      <section className="section">
        <div className="wrap mx-auto max-w-[1000px]">
          <RichText paragraphs={page.intro} />

          {page.groups && (
            <div className="mt-12">
              {page.groups.map((group) => (
                <Accordion key={group.title} group={group} />
              ))}
            </div>
          )}

          {page.sections?.map((section) => (
            <section key={section.title} className="mt-10">
              <h2 className="mb-4 text-[clamp(20px,2vw,24px)] leading-tight font-bold tracking-[-0.02em] text-navy">
                {section.title}
              </h2>
              <RichText paragraphs={section.paragraphs} />
            </section>
          ))}
        </div>
      </section>
      <Partners />
    </>
  );
}
