import RichText from "@/components/ports/RichText";
import type { AccordionGroup } from "@/content/ports";

// Built on <details>, so it opens and closes without JavaScript and works with the keyboard.
// The first item in each group starts open, as on the live site.
export default function Accordion({ group }: { group: AccordionGroup }) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="text-[clamp(20px,2vw,24px)] leading-tight font-bold tracking-[-0.02em] text-navy">{group.title}</h2>
      {group.subtitle && <p className="kicker mt-3 text-[13px] text-gold-ink">{group.subtitle}</p>}

      <div className="mt-5 space-y-2.5">
        {group.items.map((item, i) => (
          <details
            key={item.title}
            open={i === 0}
            className="group overflow-hidden rounded-[10px] border border-line bg-white shadow-card open:border-navy"
          >
            <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-3.5 font-semibold text-navy transition-colors select-none group-open:bg-navy group-open:text-white hover:bg-mist group-open:hover:bg-navy [&::-webkit-details-marker]:hidden">
              <span
                aria-hidden="true"
                className="relative grid size-5 shrink-0 place-items-center rounded-full bg-gold text-on-gold before:absolute before:h-0.5 before:w-2.5 before:rounded before:bg-current after:absolute after:h-2.5 after:w-0.5 after:rounded after:bg-current after:transition-transform group-open:after:scale-y-0"
              />
              {item.title}
            </summary>
            <div className="px-5 py-5 sm:px-6">
              {item.paragraphs ? (
                <RichText paragraphs={item.paragraphs} />
              ) : (
                <p className="text-muted">More information on {item.title} is coming soon.</p>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
