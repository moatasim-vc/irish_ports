import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Partners from "@/components/Partners";
import ProjectCard from "@/components/projects/ProjectCard";
import { projectGroups, projects, projectsPage } from "@/content/projects";

export const metadata: Metadata = {
  title: projectsPage.hero.title,
  description: projectsPage.intro[0],
};

const range = ([from, to]: [number, number]) => (from === to ? `${from}` : `${from}–${to}`);

export default function ProjectsPage() {
  const { hero, intro, asOf, groupsLabel, cta } = projectsPage;

  return (
    <>
      <PageHero kicker={hero.kicker} title={hero.title} text={hero.text} banner="ports-directory" />

      <section className="section pb-0 sm:pb-0">
        <div className="wrap max-w-[1160px]">
          <div className="max-w-[820px] text-muted [&>p+p]:mt-3.5">
            {intro.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <p className="text-sm font-semibold text-ink">{asOf}</p>
          </div>

          <nav aria-label={groupsLabel} className="mt-8">
            <p className="kicker mb-3">{groupsLabel}</p>
            <ul className="flex flex-wrap gap-2">
              {projectGroups.map((group) => (
                <li key={group.id}>
                  <a
                    href={`#${group.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy hover:border-teal hover:text-teal"
                  >
                    {group.title}
                    <span className="text-xs font-medium text-muted">{range(group.numbers)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section className="section">
        <div className="wrap max-w-[1160px] space-y-16">
          {projectGroups.map((group) => {
            const [from, to] = group.numbers;
            const items = projects.filter((p) => p.number >= from && p.number <= to);
            return (
              <div key={group.id} id={group.id} className="scroll-mt-28">
                <h2 className="mb-6 flex items-baseline gap-3 text-[clamp(24px,2.4vw,30px)] leading-tight font-bold tracking-[-0.02em] text-navy before:block before:h-[3px] before:w-8 before:self-center before:bg-gold">
                  {group.title}
                  <span className="text-sm font-semibold tracking-normal text-muted">Projects {range(group.numbers)}</span>
                </h2>
                <div className="grid gap-6 lg:grid-cols-2">
                  {items.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand title={cta.title} text={cta.text} cta={cta.button.label} href={cta.button.href} />
      <Partners />
    </>
  );
}
