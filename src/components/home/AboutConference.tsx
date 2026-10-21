import Image from "next/image";
import Link from "next/link";
import Chevron from "@/components/Chevron";
import SectionTitle from "@/components/SectionTitle";
import { about, conference } from "@/content/home";

export default function AboutConference() {
  return (
    <section id="about" className="section bg-mist">
      <div className="wrap grid lg:grid-cols-2">
        <div className="lg:pr-11">
          <p className="kicker mb-2.5">{about.kicker}</p>
          <SectionTitle>{about.title}</SectionTitle>
          <div className="grid items-start gap-7 sm:grid-cols-2">
            <div className="text-[15.5px] text-muted [&>p+p]:mt-3.5">
              <p className="font-semibold text-ink">{about.lead}</p>
              {about.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            <div>
              <Image
                src={about.image}
                alt={about.alt}
                width={422}
                height={270}
                className="w-full rounded-card border border-line"
              />
              <Link className="btn mt-[18px] px-4 py-3 text-sm" href={about.cta.href}>
                {about.cta.label} <Chevron />
              </Link>
            </div>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {about.stats.map((stat) => (
              <li key={stat.value} className="rounded-[10px] border border-line bg-white p-3.5">
                <b className="block text-2xl leading-[1.1] tracking-[-0.02em] text-navy">{stat.value}</b>
                <span className="text-[12.5px] text-muted">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 lg:mt-0 lg:border-l lg:border-line lg:pl-11">
          <SectionTitle>{conference.title}</SectionTitle>
          <div className="grid items-start gap-7 sm:grid-cols-2">
            <div>
              <p className="text-[15.5px] text-muted">{conference.intro}</p>
              <Link className="btn mt-[18px] px-4 py-3 text-sm" href={conference.cta.href}>
                {conference.cta.label} <Chevron />
              </Link>
            </div>

            <div className="relative h-full overflow-hidden rounded-card border border-navy-mid bg-[radial-gradient(ellipse_at_80%_0%,#d4ad6340,transparent_55%),linear-gradient(160deg,#0b4664,#082943_70%)] px-[26px] pt-16 pb-[30px] text-white">
              <span className="absolute top-5 -right-[30px] rotate-[8deg] bg-gold py-2 pr-10 pl-[18px] text-xs font-extrabold tracking-[0.14em] text-on-gold uppercase">
                {conference.stamp}
              </span>
              <p className="kicker text-gold">{conference.posterKicker}</p>
              <h3 className="mt-2.5 mb-[18px] text-2xl leading-[1.15] font-bold tracking-[-0.02em]">
                {conference.posterTitle}
              </h3>
              <dl className="grid grid-cols-[auto_1fr] gap-x-3.5 gap-y-2 text-sm">
                {conference.details.map((d) => (
                  <div key={d.label} className="contents">
                    <dt className="font-semibold text-[#9fc3d1]">{d.label}</dt>
                    <dd>{d.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
