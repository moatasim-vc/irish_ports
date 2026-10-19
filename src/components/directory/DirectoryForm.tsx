"use client";

import { useState } from "react";
import CaptchaPlaceholder from "@/components/CaptchaPlaceholder";
import type { FormField } from "@/content/directory";

// Not connected to a backend yet: submitting only shows a confirmation note.
export default function DirectoryForm({ fields, submit }: { fields: FormField[]; submit: string }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="card gap-[18px] border-2 border-gold p-7 text-sm font-semibold hover:translate-y-0 sm:p-9"
    >
      {fields.map((field) => (
        <label key={field.name}>
          {field.label} <span className="text-[#d2232a]">*</span>
          <input
            name={field.name}
            type={field.type}
            required
            className="mt-[7px] block w-full rounded-md border border-line bg-paper px-3.5 py-3 font-normal text-ink focus:border-teal focus:outline-2 focus:outline-offset-1 focus:outline-teal"
          />
        </label>
      ))}
      <CaptchaPlaceholder />
      <button type="submit" className="btn self-start">
        {submit}
      </button>
      <p role="status" className="text-tick">
        {sent && "Thanks — we'll be in touch soon."}
      </p>
    </form>
  );
}
