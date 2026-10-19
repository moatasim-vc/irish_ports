"use client";

import { useState } from "react";
import CaptchaPlaceholder from "@/components/CaptchaPlaceholder";
import { contactSection } from "@/content/home";

const fieldClass =
  "mt-[7px] block w-full rounded-md border border-line bg-paper px-3.5 py-3 font-normal text-ink focus:border-teal focus:outline-2 focus:outline-offset-1 focus:outline-teal";

// Not connected to a backend yet: submitting only shows a confirmation note.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-x-6 gap-y-[18px] rounded-card border border-line bg-white p-[22px] shadow-card sm:grid-cols-2 sm:p-8"
    >
      {[
        { label: "Name", type: "text", autoComplete: "name" },
        { label: "Email", type: "email", autoComplete: "email" },
        { label: "Telephone", type: "tel", autoComplete: "tel" },
        { label: "Company", type: "text", autoComplete: "organization" },
      ].map((field) => (
        <label key={field.label} className="block text-sm font-semibold text-ink">
          {field.label} <span className="text-[#d2232a]">*</span>
          <input name={field.label.toLowerCase()} type={field.type} autoComplete={field.autoComplete} required className={fieldClass} />
        </label>
      ))}
      <label className="block text-sm font-semibold text-ink sm:col-span-2">
        Message
        <textarea name="message" rows={6} className={fieldClass} />
      </label>
      <CaptchaPlaceholder className="sm:col-span-2" />
      <button type="submit" className="btn justify-self-start">
        {contactSection.submit}
      </button>
      <p role="status" className="text-sm font-semibold text-tick sm:col-span-2">
        {sent && "Thanks — we'll be in touch soon."}
      </p>
    </form>
  );
}
