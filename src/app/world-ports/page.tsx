import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Partners from "@/components/Partners";
import { worldPorts, worldPortsPage, type WorldPort } from "@/content/worldPorts";

export const metadata: Metadata = {
  title: worldPortsPage.title,
  description: "Key facts on ports and harbours around Ireland, from Dublin Port to the Port of Youghal.",
};

function Anchor() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-[3px] size-[18px] shrink-0 text-tick" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v14M8 11h8M5 14a7 7 0 0 0 14 0" />
    </svg>
  );
}

// Photo on one side, details on the other; the side swaps each row on wide screens.
function PortCard({ port, flip, priority }: { port: WorldPort; flip: boolean; priority: boolean }) {
  return (
    <article
      id={port.slug}
      className="grid scroll-mt-28 overflow-hidden rounded-card border border-line bg-white shadow-card lg:grid-cols-2"
    >
      <div className={`relative aspect-[4/3] bg-navy lg:aspect-auto lg:min-h-[420px] ${flip ? "lg:order-2" : ""}`}>
        <Image
          src={port.image}
          alt={port.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-cover"
        />
        {port.credit && (
          <a
            href={port.credit.source}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-0 bottom-0 max-w-full truncate rounded-tl-md bg-navy/70 px-2 py-1 text-[11px] text-white/85 hover:text-white"
          >
            Photo: {port.credit.author} · {port.credit.license}
          </a>
        )}
      </div>
      <div className="p-6 sm:p-9">
        <h2 className="text-[clamp(22px,2.4vw,30px)] leading-tight font-bold tracking-[-0.02em] text-navy">{port.name}</h2>
        <p className="mt-2 flex items-start gap-1.5 text-[15px] font-semibold text-gold-ink">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-[3px] size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
          </svg>
          {port.address}
        </p>
        <p className="mt-4 text-muted">{port.description}</p>
        <ul className="mt-5 space-y-2.5 border-t border-line pt-5 text-[15px]">
          {port.points.map((point) => (
            <li key={point} className="flex gap-3 text-ink">
              <Anchor />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function WorldPortsPage() {
  return (
    <>
      <PageHero kicker={worldPortsPage.kicker} title={worldPortsPage.title} banner="world-ports" />

      <section className="section">
        <div className="wrap mx-auto max-w-[1160px]">
          <nav aria-label="Jump to a port" className="mb-12 rounded-card border border-line bg-mist p-5 sm:p-6">
            <p className="mb-3.5 text-sm font-semibold text-navy">{worldPortsPage.intro}</p>
            <ul className="flex flex-wrap gap-2">
              {worldPorts.map((port) => (
                <li key={port.slug}>
                  <a
                    href={`#${port.slug}`}
                    className="block rounded-full border border-line bg-white px-3.5 py-1.5 text-[13.5px] font-semibold text-navy transition-colors hover:border-gold hover:bg-gold hover:text-on-gold"
                  >
                    {port.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="grid gap-8">
            {worldPorts.map((port, i) => (
              <PortCard key={port.slug} port={port} flip={i % 2 === 1} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <Partners />
    </>
  );
}
