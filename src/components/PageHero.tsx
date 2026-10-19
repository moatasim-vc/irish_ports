import type { CSSProperties } from "react";
import BannerCredit from "@/components/BannerCredit";
import { banners, type BannerKey } from "@/content/banners";

export default function PageHero({
  kicker,
  title,
  text,
  banner,
  children,
}: {
  kicker?: string;
  title: string;
  text?: string;
  /** Which photo from content/banners.ts to show under the navy gradient. */
  banner: BannerKey;
  children?: React.ReactNode;
}) {
  const { image, credit } = banners[banner];
  const style = { "--hero-image": `url("${image}")` } as CSSProperties;

  return (
    <section className="hero-bg relative py-16 text-center sm:py-28" style={style}>
      <div className="wrap">
        {kicker && (
          <div className="mb-4 text-xs font-bold tracking-[0.2em] text-[#addbe5] uppercase">{kicker}</div>
        )}
        <div className="mx-auto mb-7 h-1 w-14 bg-gold" />
        <h1 className="text-[clamp(34px,5vw,64px)] leading-[1.05] font-bold tracking-[-0.03em] text-balance text-white [text-shadow:0_2px_18px_rgb(4_20_34/0.45)]">
          {title}
        </h1>
        {text && (
          <p className="mx-auto mt-5 max-w-[1000px] text-[clamp(16px,1.5vw,20px)] text-pretty text-hero-sub">
            {text}
          </p>
        )}
        {children}
      </div>
      <BannerCredit credit={credit} />
    </section>
  );
}
