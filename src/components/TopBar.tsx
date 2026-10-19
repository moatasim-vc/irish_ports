import { contact, telHref } from "@/content/site";

export default function TopBar() {
  return (
    <div className="bg-navy-deep py-[9px] text-center text-xs text-[#b8d7e3] sm:text-[13px]">
      <div className="wrap">
        {contact.callLine}{" "}
        <a href={telHref(contact.phone)} className="font-semibold whitespace-nowrap text-gold">
          {contact.phone}
        </a>{" "}
        | email{" "}
        <a href={`mailto:${contact.email}`} className="font-semibold whitespace-nowrap text-gold">
          {contact.email}
        </a>
      </div>
    </div>
  );
}
