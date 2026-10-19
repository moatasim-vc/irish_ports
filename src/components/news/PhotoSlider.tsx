"use client";

import Image from "next/image";
import { useState } from "react";

// One photo, or several with previous / next buttons.
export default function PhotoSlider({ images, label }: { images: { src: string; alt: string }[]; label: string }) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const go = (step: number) => setIndex((index + step + count) % count);

  return (
    <div
      role={count > 1 ? "region" : undefined}
      aria-roledescription={count > 1 ? "carousel" : undefined}
      aria-label={count > 1 ? label : undefined}
      className="relative aspect-[4/3] overflow-hidden rounded-card border border-line bg-navy shadow-card"
    >
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          aria-hidden={i !== index || undefined}
          className={`object-cover transition-opacity duration-500 ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {count > 1 && (
        <>
          {/* Both buttons sit top-right: on wide screens the text card covers one side of the photo. */}
          <div className="absolute top-3 right-3 flex gap-2">
            {[
              { step: -1, text: "Previous photo", arrow: "‹" },
              { step: 1, text: "Next photo", arrow: "›" },
            ].map((button) => (
              <button
                key={button.step}
                type="button"
                aria-label={button.text}
                onClick={() => go(button.step)}
                className="grid size-10 cursor-pointer place-items-center rounded-full bg-navy/80 pb-0.5 text-2xl leading-none text-white hover:bg-navy"
              >
                <span aria-hidden="true">{button.arrow}</span>
              </button>
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
            {images.map((image, i) => (
              <span
                key={image.src}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-5 bg-gold" : "w-1.5 bg-white/70"}`}
              />
            ))}
          </div>
          <p className="sr-only" aria-live="polite">
            Photo {index + 1} of {count}
          </p>
        </>
      )}
    </div>
  );
}
