import Chevron from "@/components/Chevron";
import { planEnquiryHref, type Plan } from "@/content/membership";

export default function PlanCard({ plan, term, cta }: { plan: Plan; term: string; cta: string }) {
  return (
    <article
      className={`card relative hover:translate-y-0 ${
        plan.popular ? "border-2 border-gold shadow-[0_18px_44px_rgb(8_41_67/0.14)] lg:-mt-4" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden px-6 py-9 text-center ${
          plan.popular ? "bg-gold pt-12 text-on-gold" : "bg-mist text-navy"
        }`}
      >
        {plan.popular && (
          <span className="absolute top-[22px] -right-[42px] w-[150px] rotate-45 bg-navy py-1 text-center text-[11px] font-bold tracking-[0.12em] text-white uppercase">
            Popular
          </span>
        )}
        <h3 className="mx-auto max-w-[320px] text-[21px] leading-[1.2] font-bold tracking-[-0.02em] text-balance">
          {plan.name}
        </h3>
        <div className="mt-4 text-[clamp(40px,4.4vw,56px)] leading-none font-extrabold tracking-[-0.03em]">
          {plan.price}
        </div>
        <div className="mt-1 text-sm">{term}</div>
      </div>

      <ul className="px-7 py-4 text-[15px]">
        {plan.features.map((feature) => (
          <li key={feature.label} className="relative border-t border-line py-4 pl-8 first:border-t-0">
            <span
              aria-hidden="true"
              className={`absolute left-0 font-extrabold ${feature.included ? "text-tick" : "text-[#c2410c]"}`}
            >
              {feature.included ? "✓" : "✕"}
            </span>
            {!feature.included && <span className="sr-only">Not included: </span>}
            <span className="mb-1 block font-bold text-ink">{feature.label}</span>
            <span className="block space-y-2 text-muted">
              {feature.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </span>
          </li>
        ))}
      </ul>

      <div className={`mt-auto px-7 py-6 text-center ${plan.popular ? "bg-gold" : "bg-mist"}`}>
        <a className={`btn ${plan.popular ? "btn-navy" : ""}`} href={planEnquiryHref(plan)}>
          {cta} <Chevron />
        </a>
      </div>
    </article>
  );
}
