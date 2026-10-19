import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import Partners from "@/components/Partners";
import SectionTitle from "@/components/SectionTitle";
import { contactPage } from "@/content/contact";
import { telHref } from "@/content/site";

export const metadata: Metadata = {
  title: contactPage.hero.title,
  description: "Contact Irish Ports about membership, events, the supplier list or advertising in the Irish Ports Directory.",
};

const icons = {
  address: "M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  email: "M3 5h18v14H3zM3 7l9 6 9-6",
  phone:
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z",
};

function DetailCard({
  icon,
  label,
  children,
}: {
  icon: keyof typeof icons;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card flex-row items-start gap-5 p-6 sm:p-7">
      <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-navy text-gold">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[22px]" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d={icons[icon]} />
        </svg>
      </span>
      <div>
        <h3 className="text-lg font-bold text-navy">{label}</h3>
        <div className="mt-1.5 text-muted">{children}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const { hero, details, form, map } = contactPage;

  return (
    <>
      <PageHero kicker={hero.kicker} title={hero.title} text={hero.text} banner="contact" />

      <section className="section">
        <div className="wrap">
          <SectionTitle center className="mb-5">
            {details.title}
          </SectionTitle>
          <div className="mx-auto mb-10 max-w-[820px] space-y-1 text-center font-semibold text-ink">
            {details.intro.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <DetailCard icon="address" label={details.address.label}>
              <a href={map.link} target="_blank" rel="noopener noreferrer" className="hover:text-teal">
                {details.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </a>
            </DetailCard>
            <DetailCard icon="email" label={details.email.label}>
              <a href={`mailto:${details.email.value}`} className="break-all hover:text-teal">
                {details.email.value}
              </a>
            </DetailCard>
            <DetailCard icon="phone" label={details.phone.label}>
              <a href={telHref(details.phone.value)} className="hover:text-teal">
                {details.phone.value}
              </a>
            </DetailCard>
          </div>
        </div>
      </section>

      {/* Map across the full width, with the form floating over it on wide screens. */}
      <section className="relative bg-mist">
        <iframe
          src={map.embed}
          title={`Map: ${map.label}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[360px] w-full border-0 lg:absolute lg:inset-0 lg:h-full"
        />
        <div className="wrap relative py-10 lg:pointer-events-none lg:flex lg:justify-end lg:py-20">
          <div className="lg:pointer-events-auto lg:w-[520px]">
            <div className="mb-4 rounded-card bg-navy px-6 py-5 text-white shadow-card lg:mb-0 lg:rounded-b-none">
              <p className="kicker text-gold">{form.kicker}</p>
              <h2 className="mt-1.5 text-2xl font-bold tracking-[-0.02em]">{form.title}</h2>
              <p className="mt-1 text-[15px] text-on-navy">{form.text}</p>
            </div>
            <div className="lg:[&>form]:rounded-t-none lg:[&>form]:shadow-[0_22px_48px_rgb(8_41_67/0.28)]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Partners />
    </>
  );
}
