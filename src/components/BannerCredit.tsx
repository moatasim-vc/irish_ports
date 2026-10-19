// Small photographer credit in the banner corner, required by the photos' CC licences.
export default function BannerCredit({ credit }: { credit: { author: string; license: string; source: string } }) {
  return (
    <a
      href={credit.source}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute right-3 bottom-2 max-w-[calc(100%-24px)] truncate text-[10.5px] text-white/55 hover:text-white"
    >
      Photo: {credit.author} · {credit.license}
    </a>
  );
}
