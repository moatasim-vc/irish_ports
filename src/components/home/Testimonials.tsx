import Link from "next/link";
import Chevron from "@/components/Chevron";
import SectionTitle from "@/components/SectionTitle";
import { testimonials } from "@/content/home";

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

export default function Testimonials() {
  return (
    <section id="clients" className="section">
      <div className="wrap">
        <SectionTitle>{testimonials.title}</SectionTitle>
        <p className="-mt-[18px] mb-7 text-muted">{testimonials.subtitle}</p>
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.items.map((item) => (
            <figure key={item.name} className="card gap-5 p-7 hover:translate-y-0">
              <blockquote className="text-[15px] text-muted">{item.quote}</blockquote>
              <figcaption className="mt-auto flex items-center justify-between font-semibold">
                <span className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="grid size-9 place-items-center rounded-full bg-ice text-[13px] font-bold text-teal"
                  >
                    {initials(item.name)}
                  </span>
                  {item.name}
                </span>
                <span role="img" aria-label="5 out of 5 stars" className="tracking-[2px] text-gold">
                  ★★★★★
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-9 text-center">
          <Link className="btn" href={testimonials.cta.href}>
            {testimonials.cta.label} <Chevron />
          </Link>
        </div>
      </div>
    </section>
  );
}
