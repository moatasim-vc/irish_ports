"use client";

import { useId, useRef, useState } from "react";

// Accessible tabs (WAI-ARIA pattern): click or use the arrow keys to switch panels.
export default function Tabs({
  tabs,
  label,
  className = "",
}: {
  tabs: { label: string; panel: React.ReactNode }[];
  /** Names the tab list for screen readers. */
  label: string;
  /** Extra classes for the tab list, e.g. "justify-center". */
  className?: string;
}) {
  const id = useId();
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (i: number) => {
    setActive(i);
    refs.current[i]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    if (e.key === "ArrowRight") select((i + 1) % tabs.length);
    if (e.key === "ArrowLeft") select((i - 1 + tabs.length) % tabs.length);
  };

  return (
    <>
      <div role="tablist" aria-label={label} className={`mb-7 flex flex-wrap gap-1.5 text-[15px] font-semibold ${className}`}>
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${id}-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`${id}-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={`cursor-pointer rounded-md px-[18px] py-2.5 ${
              active === i ? "bg-gold text-on-gold" : "text-muted hover:text-navy"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`${id}-panel-${active}`} aria-labelledby={`${id}-tab-${active}`}>
        {tabs[active].panel}
      </div>
    </>
  );
}
