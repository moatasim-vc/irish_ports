import Image from "next/image";
import Link from "next/link";
import BannerCredit from "@/components/BannerCredit";
import Chevron from "@/components/Chevron";
import SectionTitle from "@/components/SectionTitle";
import { banners } from "@/content/banners";
import { projects } from "@/content/home";

export default function Projects() {
  const photo = banners[projects.banner];

  return (
    <section id="projects" className="section bg-mist">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <div>
          <p className="kicker mb-2.5">{projects.kicker}</p>
          <SectionTitle className="mb-5">{projects.title}</SectionTitle>
          <p className="text-muted">{projects.text}</p>
          <Link className="btn mt-7" href={projects.cta.href}>
            {projects.cta.label} <Chevron />
          </Link>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-card border border-line">
          <Image
            src={photo.image}
            alt={projects.alt}
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover"
          />
          <BannerCredit credit={photo.credit} />
        </div>
      </div>
    </section>
  );
}
