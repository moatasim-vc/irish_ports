import Image from "next/image";
import { projectsPage, type Project, type SourceLink, type Stage } from "@/content/projects";

// One colour per stage, so the tag reads the same on every card.
const stageClass: Record<Stage, string> = {
  Proposed: "bg-[#f6eedd] text-gold-ink",
  Consultation: "bg-[#f6eedd] text-gold-ink",
  "In planning": "bg-ice text-teal",
  Planned: "bg-ice text-teal",
  "Permission granted": "bg-[#e1f3ea] text-irish-green-dark",
  Funded: "bg-[#e1f3ea] text-irish-green-dark",
  "Under construction": "bg-navy text-white",
  "On hold": "bg-[#fbe8e0] text-[#9a3f17]",
};

function ExternalLink({ link }: { link: SourceLink }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-teal underline decoration-teal/30 underline-offset-2 hover:decoration-teal"
    >
      {link.label}
      <span aria-hidden="true"> ↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const { sourceLabel, moreSourcesLabel } = projectsPage;
  const { image } = project;

  return (
    <article id={project.slug} className="card scroll-mt-28 hover:translate-y-0">
      {image && (
        <figure className="relative aspect-[16/9] bg-mist">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className={image.fit === "contain" ? "object-contain" : "object-cover"}
          />
          {image.label && (
            <span className="absolute top-3 left-3 rounded bg-navy/85 px-2 py-1 text-[11px] font-semibold tracking-[0.08em] text-white uppercase">
              {image.label}
            </span>
          )}
          <figcaption className="absolute right-0 bottom-0 max-w-full truncate rounded-tl bg-navy/70 px-2 py-0.5 text-[10.5px] text-white/85">
            Image:{" "}
            <a href={image.credit.href} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">
              {image.credit.label}
            </a>
          </figcaption>
        </figure>
      )}
      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="text-[32px] leading-none font-extrabold tracking-[-0.04em] text-gold">
            {String(project.number).padStart(2, "0")}
          </span>
          <span className={`rounded-full px-3 py-1 text-xs font-bold whitespace-nowrap ${stageClass[project.stage]}`}>
            {project.stage}
          </span>
        </div>

        <div>
          <p className="flex flex-wrap items-center gap-x-2 text-[13px] font-semibold text-muted">
            <span className="inline-flex items-center gap-1 text-ink">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-3.5" fill="none" stroke="currentColor" strokeWidth={2.2}>
                <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              {project.location}
            </span>
            <span aria-hidden="true">·</span>
            {project.category}
          </p>
          <h3 className="mt-2 text-xl leading-[1.25] font-bold tracking-[-0.01em] text-navy">{project.title}</h3>
        </div>

        <p className="rounded-lg border-l-[3px] border-gold bg-paper px-3.5 py-2.5 text-sm text-ink">
          <span className="font-bold">Status: </span>
          {project.status}
        </p>

        <p className="text-[15px] text-muted">{project.text}</p>

        <div className="mt-auto border-t border-line pt-4 text-sm">
          <p>
            <span className="mr-1 font-semibold text-ink">{sourceLabel}:</span>
            <ExternalLink link={project.source} />
          </p>
          {project.moreSources && (
            <div className="mt-2">
              <span className="font-semibold text-ink">{moreSourcesLabel}:</span>
              <ul className="mt-1 space-y-1">
                {project.moreSources.map((link) => (
                  <li key={link.href}>
                    <ExternalLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
