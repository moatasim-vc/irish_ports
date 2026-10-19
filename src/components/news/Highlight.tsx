import PhotoSlider from "@/components/news/PhotoSlider";
import type { NewsHighlight } from "@/content/news";

function MetaIcon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

const icons = {
  date: "M3 5h18v16H3zM3 10h18M8 3v4M16 3v4",
  time: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
  location: "M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
};

// Event write-up: a photo with a coloured text card overlapping it on wide screens.
export default function Highlight({ item, flip = false }: { item: NewsHighlight; flip?: boolean }) {
  const navy = item.tone === "navy";
  const meta = [
    { icon: icons.date, text: item.date },
    { icon: icons.time, text: item.time },
    ...(item.location ? [{ icon: icons.location, text: item.location }] : []),
  ];

  return (
    <article className="grid items-center lg:grid-cols-12">
      <div className={`lg:col-span-6 lg:row-start-1 ${flip ? "lg:col-start-7" : "lg:col-start-1"}`}>
        <PhotoSlider images={item.images} label={`${item.title} photos`} />
      </div>
      <div
        className={`relative z-10 -mt-10 mx-4 rounded-card p-7 shadow-[0_22px_48px_rgb(8_41_67/0.22)] sm:p-8 lg:row-start-1 lg:mx-0 lg:mt-0 lg:col-span-6 ${
          flip ? "lg:col-start-1 lg:mt-16 lg:mr-[-8%]" : "lg:col-start-7 lg:mt-16 lg:ml-[-8%]"
        } ${navy ? "bg-navy text-on-navy" : "bg-gold text-on-gold"}`}
      >
        <h2 className={`text-[clamp(21px,2vw,26px)] leading-tight font-bold tracking-[-0.02em] ${navy ? "text-white" : "text-navy"}`}>
          {item.title}
        </h2>
        <ul className={`mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[13.5px] font-semibold ${navy ? "text-gold" : "text-navy"}`}>
          {meta.map((m) => (
            <li key={m.text} className="flex items-center gap-1.5">
              <MetaIcon d={m.icon} />
              {m.text}
            </li>
          ))}
        </ul>
        <div className={`mt-4 border-t pt-4 text-[15px] [&>p+p]:mt-3 ${navy ? "border-white/15" : "border-navy/15"}`}>
          {item.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
