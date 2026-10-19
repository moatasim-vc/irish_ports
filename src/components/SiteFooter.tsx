import Link from "next/link";
import Logo from "@/components/Logo";
import { contact, footerEvents, footerPages, linkHref, telHref, type NavItem } from "@/content/site";

function LinkColumn({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <div>
      <h4 className="mb-3.5 text-[19px] font-bold text-white">{title}</h4>
      {items.map((item) => (
        <Link key={item.label} href={linkHref(item)} className="block py-[3px] hover:text-white">
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-navy pt-[60px] pb-12 text-[14.5px] text-on-navy">
      <div className="wrap">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          <div>
            <Logo className="size-[110px]" />
            <p className="mt-4 max-w-[320px]">{contact.footerText}</p>
          </div>
          <LinkColumn title="Pages" items={footerPages} />
          <LinkColumn title="Events" items={footerEvents} />
          <div>
            <h4 className="mb-3.5 text-[19px] font-bold text-white">Company Info</h4>
            <span className="block py-[3px]">{contact.company}</span>
            <a href={telHref(contact.phone)} className="block py-[3px] hover:text-white">
              Tel: {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="block py-[3px] hover:text-white">
              {contact.email}
            </a>
            <span className="block py-[3px]">{contact.website}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
