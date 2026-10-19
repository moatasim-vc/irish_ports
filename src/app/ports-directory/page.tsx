import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Chevron from "@/components/Chevron";
import PageHero from "@/components/PageHero";
import Partners from "@/components/Partners";
import SectionTitle from "@/components/SectionTitle";
import DirectoryForm from "@/components/directory/DirectoryForm";
import YearbookCover from "@/components/directory/YearbookCover";
import { directory } from "@/content/directory";
import { telHref } from "@/content/site";

export const metadata: Metadata = {
  title: directory.hero.title,
  description: directory.hero.text,
};

export default function PortsDirectoryPage() {
  const { access, browse, hero, interest, quarterly } = directory;

  return (
    <>
      <PageHero title={hero.title} text={hero.text} banner="ports-directory" />

      <section className="section">
        <div className="wrap mx-auto grid max-w-[1160px] items-center gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionTitle className="mb-6">{quarterly.title}</SectionTitle>
            <div className="space-y-4 text-muted">
              {quarterly.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>
          <Image
            src={quarterly.image}
            alt={quarterly.imageAlt}
            width={552}
            height={434}
            className="w-full rounded-card border border-line shadow-[0_16px_40px_rgb(8_41_67/0.18)]"
          />
        </div>

        <div className="wrap mx-auto mt-16 grid max-w-[1160px] items-center gap-x-14 gap-y-10 lg:grid-cols-[1fr_1.5fr]">
          <Image
            src={access.image}
            alt={access.imageAlt}
            width={417}
            height={250}
            className="aspect-[4/5] w-full rounded-card border border-line object-cover shadow-[0_16px_40px_rgb(8_41_67/0.18)] lg:max-w-[420px]"
          />
          <div>
            <h2 className="text-[clamp(20px,2vw,24px)] leading-tight font-bold tracking-[-0.02em] text-navy">
              {access.title}
            </h2>
            <p className="mt-4 font-semibold">
              {access.contactName}
              <br />
              <a href={telHref(access.phone)} className="hover:text-teal">
                {access.phone}
              </a>
              <br />
              Email:{" "}
              <a href={`mailto:${access.email}`} className="hover:text-teal">
                {access.email}
              </a>
            </p>
            <div className="mt-4 space-y-4 text-muted">
              {access.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
              <p>
                {access.includeText}{" "}
                <a href={`mailto:${access.email}`} className="font-semibold text-teal hover:underline">
                  {access.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap text-center">
          <SectionTitle center>{browse.title}</SectionTitle>
          <p className="kicker -mt-3 mb-7 text-lg tracking-[0.12em] text-gold-ink">{browse.status}</p>
          <YearbookCover {...browse.cover} />
        </div>
      </section>

      <section className="section">
        <div className="wrap mx-auto grid max-w-[1160px] items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="text-center">
            <p className="kicker mb-2.5 text-ink">{interest.kicker}</p>
            <SectionTitle center className="mb-4">
              {interest.title}
            </SectionTitle>
            <p className="mx-auto max-w-[520px] text-muted">{interest.text}</p>
            <p className="my-5 text-muted">— or —</p>
            <Link className="btn" href="/membership">
              {interest.cta} <Chevron />
            </Link>
          </div>
          <DirectoryForm fields={interest.fields} submit={interest.submit} />
        </div>
      </section>

      <Partners />
    </>
  );
}
