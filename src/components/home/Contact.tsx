import Link from "next/link";
import Chevron from "@/components/Chevron";
import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";
import { contactSection } from "@/content/home";

export default function Contact() {
  return (
    <section id="contact" className="section bg-mist">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <ContactForm />
        <aside className="text-center">
          <p className="kicker mb-2.5 text-ink">{contactSection.kicker}</p>
          <SectionTitle center className="mb-4">
            {contactSection.title}
          </SectionTitle>
          <p className="text-muted">{contactSection.text}</p>
          <p className="my-5 text-muted">— or —</p>
          <Link className="btn" href="/membership">
            {contactSection.cta} <Chevron />
          </Link>
        </aside>
      </div>
    </section>
  );
}
