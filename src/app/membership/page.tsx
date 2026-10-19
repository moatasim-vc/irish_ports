import type { Metadata } from "next";
import Chevron from "@/components/Chevron";
import PageHero from "@/components/PageHero";
import Partners from "@/components/Partners";
import SectionTitle from "@/components/SectionTitle";
import Tabs from "@/components/Tabs";
import EmptyPanel from "@/components/events/EmptyPanel";
import PlanCard from "@/components/membership/PlanCard";
import { membership } from "@/content/membership";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Membership",
  description: `${membership.hero.title}. ${membership.hero.text}`,
};

export default function MembershipPage() {
  const { hero, intro, pricing } = membership;
  const { corporate, individual } = pricing;

  return (
    <>
      <PageHero kicker={hero.kicker} title={hero.title} text={hero.text} banner="membership" />

      <section className="section">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-[540px]">
            <SectionTitle className="mb-6">{intro.title}</SectionTitle>
            <p className="text-muted">{intro.text}</p>
            <a className="btn btn-navy mt-8" href="#pricing">
              {intro.cta} <Chevron />
            </a>
          </div>

          <dl className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6">
            {intro.stats.map((stat) => (
              <div
                key={stat.label}
                className={`card flex-col-reverse items-center px-6 py-9 text-center hover:translate-y-0 lg:w-[62%] ${
                  stat.highlight ? "border-gold bg-gold lg:w-[70%] lg:py-12" : "lg:ml-auto"
                }`}
              >
                <dt className={stat.highlight ? "text-on-gold" : "text-muted"}>{stat.label}</dt>
                <dd className="text-[clamp(40px,5vw,64px)] leading-none font-bold tracking-[-0.03em] text-navy">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="pricing" className="section scroll-mt-24 bg-mist">
        <div className="wrap">
          <SectionTitle center>{pricing.title}</SectionTitle>
          <Tabs
            label="Membership type"
            className="mb-12 justify-center"
            tabs={[
              {
                label: corporate.label,
                panel: (
                  <div className="mx-auto grid max-w-[1120px] items-start gap-6 lg:grid-cols-3">
                    {corporate.plans.map((plan) => (
                      <PlanCard key={plan.name} plan={plan} term={pricing.term} cta={pricing.cta} />
                    ))}
                  </div>
                ),
              },
              {
                label: individual.label,
                panel: (
                  <div className="mx-auto max-w-[760px]">
                    <EmptyPanel title={individual.title} text={individual.text}>
                      <a
                        className="btn mt-[18px]"
                        href={`mailto:${contact.email}?subject=${encodeURIComponent("Individual membership enquiry")}`}
                      >
                        {individual.cta} <Chevron />
                      </a>
                    </EmptyPanel>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>

      <Partners />
    </>
  );
}
