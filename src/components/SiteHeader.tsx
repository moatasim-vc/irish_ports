"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";
import { linkHref, mainNav, type NavItem } from "@/content/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Label of the desktop dropdown that is showing, if any.
  const [dropdown, setDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close the dropdown on a click outside the nav or on Escape.
  useEffect(() => {
    if (!dropdown) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setDropdown(null);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdown(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [dropdown]);

  // A built page is active on its own URL and on any URL below it (e.g. /events/port-of-dublin).
  const isActive = (item: NavItem) =>
    !!item.ready && (pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`)));

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-navy">
      <div className="wrap flex h-[76px] items-center justify-between gap-7 sm:h-[92px]">
        <Link href="/" aria-label="Irish Ports home" className="flex shrink-0 items-center gap-3">
          <Logo className="size-[54px] sm:size-[70px]" />
          <span className="text-base leading-[1.05] font-extrabold tracking-[0.04em] text-white sm:text-[19px]">
            IRISH PORTS
            <small className="mt-[5px] block text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">
              Organisation
            </small>
          </span>
        </Link>

        <button
          type="button"
          className="cursor-pointer rounded-md border border-white/60 px-4 py-2 text-sm font-semibold text-white xl:hidden"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>

        <nav
          id="main-nav"
          ref={navRef}
          aria-label="Main"
          className={`${
            open ? "flex" : "hidden"
          } absolute inset-x-0 top-full flex-col items-start gap-0.5 border-b border-white/10 bg-navy px-6 pt-3 pb-5 text-base font-medium text-[#dceaf0] xl:static xl:flex xl:flex-row xl:items-center xl:gap-1 xl:border-0 xl:bg-transparent xl:p-0 xl:text-[14.5px]`}
        >
          {mainNav.map((item) => {
            const childActive = item.children?.some(isActive) ?? false;
            const active = isActive(item) || childActive;
            const itemClass = `rounded-md px-[11px] py-[9px] whitespace-nowrap ${
              active ? "bg-gold font-bold text-on-gold" : "hover:text-white"
            }`;

            if (!item.children) {
              return (
                <Link
                  key={item.label}
                  href={linkHref(item)}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={itemClass}
                >
                  {item.label}
                </Link>
              );
            }

            // Dropdown on desktop (mouse hover, or click/keyboard to toggle); indented list in the mobile menu.
            // The parent only opens the list, as "Ports" has no page of its own.
            const shown = dropdown === item.label;
            return (
              <div
                key={item.label}
                className="xl:relative"
                onPointerEnter={(e) => e.pointerType === "mouse" && setDropdown(item.label)}
                onPointerLeave={(e) => e.pointerType === "mouse" && setDropdown(null)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) setDropdown(null);
                }}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={shown}
                  onClick={() => setDropdown(shown ? null : item.label)}
                  className={`flex cursor-pointer items-center ${itemClass}`}
                >
                  {item.label}
                  <svg
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                    className={`ml-1.5 size-2.5 ${shown ? "transition-transform duration-200 xl:rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 4l4 4 4-4" />
                  </svg>
                </button>
                {/* The outer box starts flush under the button so the pointer never leaves the hover area. */}
                <div
                  // Fades in on open; closes instantly so it never lingers.
                  className={`xl:absolute xl:top-full xl:right-0 xl:w-[260px] xl:pt-3 ${
                    shown
                      ? "xl:visible xl:translate-y-0 xl:opacity-100 xl:transition-[opacity,transform] xl:duration-200"
                      : "xl:invisible xl:translate-y-1 xl:opacity-0"
                  }`}
                >
                  <ul className="relative pl-4 xl:overflow-visible xl:rounded-xl xl:border xl:border-t-[3px] xl:border-line xl:border-t-gold xl:bg-white xl:p-2 xl:text-ink xl:shadow-[0_22px_48px_rgb(8_41_67/0.28)]">
                    {item.children.map((child) => {
                      const current = isActive(child);
                      return (
                        <li key={child.label}>
                          <Link
                            href={linkHref(child)}
                            aria-current={current ? "page" : undefined}
                            onClick={() => {
                              setOpen(false);
                              setDropdown(null);
                            }}
                            className={`group/item flex items-center justify-between gap-4 rounded-lg px-[11px] py-2 whitespace-nowrap hover:text-white xl:px-3.5 xl:py-3 xl:text-[15px] xl:font-semibold xl:hover:bg-mist xl:hover:text-navy ${
                              current ? "text-gold xl:bg-mist xl:text-navy" : ""
                            }`}
                          >
                            <span className="flex items-center gap-3">
                              <span
                                className={`hidden size-1.5 rounded-full xl:block ${current ? "bg-navy" : "bg-gold"}`}
                              />
                              {child.label}
                            </span>
                            <span
                              aria-hidden="true"
                              className="hidden text-lg leading-none text-gold-ink opacity-0 transition-[opacity,transform] group-hover/item:translate-x-0.5 group-hover/item:opacity-100 xl:block"
                            >
                              ›
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
