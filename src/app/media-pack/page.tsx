import type { Metadata } from "next";
import Chevron from "@/components/Chevron";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Partners from "@/components/Partners";
import SectionTitle from "@/components/SectionTitle";
import YearbookCover from "@/components/directory/YearbookCover";
import { mediaPack } from "@/content/mediaPack";

export const metadata: Metadata = {
  title: mediaPack.hero.title,
  description: "Advertising rates for the Irish Ports Quarterly Directory and Irish Ports membership packages.",
};

const mailto = (subject: string) => `mailto:${mediaPack.email}?subject=${encodeURIComponent(subject)}`;

function Mark({ included }: { included: boolean }) {
  return included ? (
    <span aria-hidden="true" className="grid size-5 shrink-0 place-items-center rounded-full bg-tick/12 text-[12px] font-extrabold text-tick">
      ✓
    </span>
  ) : (
    <span aria-hidden="true" className="grid size-5 shrink-0 place-items-center rounded-full bg-[#c2410c]/10 text-[11px] font-extrabold text-[#c2410c]">
      ✕
    </span>
  );
}

function Intro() {
  const { intro } = mediaPack;
  return (
    <section className="section">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <p className="kicker mb-3">{intro.kicker}</p>
          <SectionTitle className="mb-6">{intro.title}</SectionTitle>
          <div className="space-y-4 text-[17px] text-muted">
            {intro.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-3">
            {intro.stats.map((stat) => (
              <div key={stat.label} className="rounded-[10px] border border-line bg-white p-4 text-center shadow-card">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-[clamp(22px,2.4vw,30px)] leading-none font-bold tracking-[-0.02em] text-navy">{stat.value}</dd>
                <dd className="mt-1.5 text-[12.5px] leading-tight text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn" href="#rates">
              See advertising rates <Chevron />
            </a>
            <a className="btn btn-navy" href="#membership">
              Compare memberships
            </a>
          </div>
        </div>

        {/* Magazine on a tilted gold card, like a copy lying on a desk. */}
        <div className="relative mx-auto w-full max-w-[360px] py-6">
          <div className="absolute inset-x-6 inset-y-0 -rotate-6 rounded-xl bg-gold shadow-card" aria-hidden="true" />
          <div className="absolute inset-x-3 inset-y-3 rotate-3 rounded-xl bg-navy" aria-hidden="true" />
          <div className="relative rotate-[-1.5deg]">
            <YearbookCover {...intro.cover} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Rates() {
  const { rates } = mediaPack;
  return (
    <section id="rates" className="section scroll-mt-24 bg-mist">
      <div className="wrap">
        <p className="kicker mb-3 text-center">{rates.kicker}</p>
        <SectionTitle center>{rates.title}</SectionTitle>

        <div className="grid items-start gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="overflow-x-auto rounded-card border border-line bg-white shadow-card">
            <table className="w-full border-collapse text-center text-[13.5px] sm:text-[15px]">
              <thead>
                <tr className="bg-navy text-white">
                  {rates.columns.map((column) => (
                    <th key={column} scope="col" className="px-3 py-4 font-semibold first:pl-5 first:text-left sm:px-4">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rates.rows.map((row) => (
                  <tr key={row.position} className="border-t border-line transition-colors even:bg-mist/50 hover:bg-gold/10">
                    <th scope="row" className="py-3.5 pr-3 pl-5 text-left font-semibold text-ink sm:whitespace-nowrap">
                      {row.position}
                    </th>
                    <td className="px-3 py-3.5 text-muted">{row.price}</td>
                    <td className="px-3 py-3.5">
                      <span className="inline-flex justify-center">
                        <Mark included={row.firstRate} />
                      </span>
                      <span className="sr-only">{row.firstRate ? "Yes" : "No"}</span>
                    </td>
                    <td className="px-3 py-3.5 font-bold text-navy">{row.allFour}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-4">
            <h3 className="text-lg font-bold text-navy">{rates.extrasTitle}</h3>
            {rates.extras.map((extra) => (
              <div key={extra.label} className="card flex-row items-center gap-4 p-4 hover:translate-y-0">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ice text-teal">
                  <Icon name={extra.icon} />
                </span>
                <span className="flex-1 font-semibold text-ink">{extra.label}</span>
                <span className="text-lg font-bold text-navy">{extra.price}</span>
              </div>
            ))}
            <div className="mt-2 rounded-card bg-navy p-6 text-white">
              <p className="kicker text-gold">{rates.note}</p>
              <p className="mt-2 text-[15px] text-on-navy">Four editions a year. Reserve your page early to secure the best position.</p>
              <a className="btn mt-4" href={mailto("Irish Ports Directory advertising booking")}>
                {rates.cta} <Chevron />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Membership() {
  const { membership } = mediaPack;
  const { plans, features } = membership;

  return (
    <section id="membership" className="section scroll-mt-24">
      <div className="wrap">
        <p className="kicker mb-3 text-center">{membership.kicker}</p>
        <SectionTitle center>{membership.title}</SectionTitle>

        {/* Phones and tablets: one card per plan. */}
        <div className="grid gap-5 md:grid-cols-2 lg:hidden">
          {plans.map((plan, p) => (
            <article
              key={plan.name}
              className={`overflow-hidden rounded-card border bg-white shadow-card ${plan.popular ? "border-2 border-gold" : "border-line"}`}
            >
              <header className={`px-5 py-6 text-center ${plan.popular ? "bg-gold text-on-gold" : "bg-navy text-white"}`}>
                {plan.popular && <p className="kicker mb-2 text-navy">Most popular</p>}
                <h3 className="text-[17px] leading-snug font-bold text-balance">{plan.name}</h3>
                <p className="mt-3 text-3xl font-extrabold tracking-[-0.02em]">{plan.price}</p>
                <p className="text-sm opacity-80">{membership.term}</p>
              </header>
              <ul className="divide-y divide-line px-5 text-[14.5px]">
                {features.map((feature) => {
                  const value = feature.values[p];
                  return (
                    <li key={feature.label} className="flex gap-3 py-3">
                      <Mark included={value.included} />
                      <span>
                        <strong className="block font-semibold text-ink">{feature.label}</strong>
                        <span className={value.included ? "text-muted" : "text-muted/70"}>{value.text}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>

        {/* Desktop: side-by-side comparison, the popular plan highlighted. */}
        <div className="hidden overflow-hidden rounded-card border border-line bg-white shadow-card lg:block">
          <table className="w-full table-fixed border-collapse text-[14.5px]">
            <colgroup>
              <col className="w-[22%]" />
              {plans.map((plan) => (
                <col key={plan.name} className={plan.popular ? "bg-gold/[0.07]" : ""} />
              ))}
            </colgroup>
            <thead>
              <tr>
                <th scope="col" className="bg-mist px-6 py-6 text-left align-bottom text-sm font-semibold text-muted">
                  Compare packages
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    scope="col"
                    className={`relative px-5 pt-8 pb-6 text-center align-top ${plan.popular ? "bg-gold text-on-gold" : "bg-navy text-white"}`}
                  >
                    {plan.popular && (
                      <span className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-md bg-navy px-3 py-1 text-[11px] font-bold tracking-[0.12em] text-gold uppercase">
                        Most popular
                      </span>
                    )}
                    <span className="block text-[16px] leading-snug font-bold text-balance">{plan.name}</span>
                    <span className="mt-3 block text-[34px] leading-none font-extrabold tracking-[-0.02em]">{plan.price}</span>
                    <span className="mt-1 block text-sm font-normal opacity-80">{membership.term}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.label} className="border-t border-line">
                  <th scope="row" className="bg-mist/60 px-6 py-4 text-left align-top font-semibold text-ink">
                    {feature.label}
                  </th>
                  {feature.values.map((value, p) => (
                    <td key={plans[p].name} className="border-l border-line px-5 py-4 align-top">
                      <span className="flex gap-2.5">
                        <Mark included={value.included} />
                        <span className={value.included ? "text-muted" : "text-muted/70"}>
                          {!value.included && <span className="sr-only">Not included: </span>}
                          {value.text}
                        </span>
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-line">
                <td className="bg-mist/60" />
                {plans.map((plan) => (
                  <td key={plan.name} className="border-l border-line px-5 py-6 text-center">
                    <a
                      className={`btn btn-sm ${plan.popular ? "" : "btn-navy"}`}
                      href={mailto(`Membership enquiry: ${plan.name}`)}
                    >
                      Enquire <Chevron />
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center lg:hidden">
          <a className="btn btn-navy" href={mailto("Irish Ports membership enquiry")}>
            {membership.cta} <Chevron />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function MediaPackPage() {
  const { hero } = mediaPack;

  return (
    <>
      <PageHero kicker={hero.kicker} title={hero.title} banner="media-pack" />
      <Intro />
      <Rates />
      <Membership />
      <Partners />
    </>
  );
}
