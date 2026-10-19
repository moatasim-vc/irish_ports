import Link from "next/link";

export default function CtaBand({
  title,
  text,
  cta,
  href = "#",
}: {
  title: string;
  text?: string;
  cta: string;
  href?: string;
}) {
  return (
    <section className="bg-navy py-[34px]">
      <div className="wrap flex flex-wrap items-center justify-between gap-6">
        <div>
          <h2 className="text-[clamp(22px,2.4vw,30px)] leading-tight font-bold tracking-[-0.03em] text-white">
            {title}
          </h2>
          {text && <p className="mt-1 text-[15px] text-on-navy">{text}</p>}
        </div>
        <Link className="btn uppercase" href={href}>
          {cta}
        </Link>
      </div>
    </section>
  );
}
