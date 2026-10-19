import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Chevron from "@/components/Chevron";
import BannerCredit from "@/components/BannerCredit";
import { banners } from "@/content/banners";
import { hero } from "@/content/home";

export default function Hero() {
  return (
    <section
      className="hero-bg relative border-b border-white/10 py-14 sm:py-[84px]"
      style={{ "--hero-image": `url("${banners.home.image}")` } as CSSProperties}
    >
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <div className="mb-[26px] h-1 w-14 bg-gold" />
          <h1 className="text-[clamp(30px,3.6vw,48px)] leading-[1.12] font-bold tracking-[-0.03em] text-balance text-white">
            {hero.title}
          </h1>
          <p className="mt-[22px] mb-7 text-[17px] text-hero-sub">{hero.text}</p>
          <div className="flex flex-wrap gap-3">
            <Link className="btn" href="/membership">
              {hero.cta} <Chevron />
            </Link>
            <Link className="btn btn-ghost" href="/ports-directory">
              {hero.secondaryCta}
            </Link>
          </div>
          <ul aria-label="Sectors we support" className="mt-[30px] flex flex-wrap gap-2">
            {hero.sectors.map((sector) => (
              <li
                key={sector}
                className="rounded-full border border-white/20 px-3 py-[5px] text-[12.5px] font-semibold text-hero-sub"
              >
                {sector}
              </li>
            ))}
          </ul>
        </div>

        {/* Video placeholder: swap the play button for a player once the video is supplied. */}
        <div className="relative grid aspect-[16/10] place-items-center overflow-hidden rounded-card border border-white/20 bg-white/[0.07]">
          <Image
            src={hero.image}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-45% to-navy/70" />
          <span className="relative grid size-[76px] place-items-center rounded-full bg-gold shadow-[0_0_0_10px_#d4ad6340]">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-1 size-[30px] fill-on-gold">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="absolute bottom-3.5 left-[18px] text-xs font-semibold tracking-[0.12em] text-white uppercase">
            {hero.videoLabel}
          </span>
        </div>
      </div>
      <BannerCredit credit={banners.home.credit} />
    </section>
  );
}
