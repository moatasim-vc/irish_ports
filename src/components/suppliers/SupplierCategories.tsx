"use client";

import { useState } from "react";

type SearchText = { placeholder: string; button: string; empty: string };

/**
 * The supplier categories, with a search box that narrows them down as you type.
 * Searches category names for now; supplier names join in once supplier data exists.
 */
export default function SupplierCategories({ categories, search }: { categories: string[]; search: SearchText }) {
  const [query, setQuery] = useState("");
  const term = query.trim().toLowerCase();
  const shown = term ? categories.filter((category) => category.toLowerCase().includes(term)) : categories;

  return (
    <>
      <form role="search" onSubmit={(event) => event.preventDefault()} className="mb-9 flex gap-2 sm:ml-auto sm:max-w-[460px]">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={search.placeholder}
          aria-label={search.placeholder}
          className="min-w-0 flex-1 rounded-md border border-line bg-white px-3.5 py-3 text-ink placeholder:text-muted focus:border-teal focus:outline-2 focus:outline-offset-1 focus:outline-teal"
        />
        <button type="submit" className="btn btn-navy">
          {search.button}
        </button>
      </form>

      <p className="sr-only" aria-live="polite">
        {term ? `${shown.length} categories found` : ""}
      </p>

      {shown.length === 0 ? (
        <p className="py-10 text-center text-muted">{search.empty}</p>
      ) : (
        <ul className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3">
          {shown.map((category) => (
            <li key={category}>
              {/* Category pages aren't built yet, so the tiles don't link anywhere. */}
              <a
                href="#"
                className="flex h-full min-h-[88px] items-center justify-center rounded-[10px] rounded-tr-[32px] rounded-bl-[32px] bg-[linear-gradient(135deg,#0d6f91_0%,#0b4664_45%,#082943_100%)] px-3 py-3 text-center text-[13px] leading-snug font-semibold text-balance text-white transition-[filter,transform] hover:-translate-y-0.5 hover:brightness-125 sm:min-h-[104px] sm:rounded-[14px] sm:rounded-tr-[52px] sm:rounded-bl-[52px] sm:px-8 sm:py-5 sm:text-[15px]"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
