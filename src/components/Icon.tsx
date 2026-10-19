import type { IconName } from "@/content/home";

const paths: Record<IconName, React.ReactNode> = {
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4M9 15l2 2 4-4" />
    </>
  ),
  webinar: (
    <>
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 21h8M12 17v4M10 8.5v5l4-2.5z" />
    </>
  ),
  ship: (
    <>
      <path d="M3 17l2 4h14l2-4-9-3z" />
      <path d="M6 15V9h12v6M12 9V4M9 6h6" />
      <path d="M2 21c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  chart: <path d="M3 3v18h18M7 15l4-4 3 3 5-6" />,
  book: (
    <path d="M4 4h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4zM20 4h-6a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6z" />
  ),
};

export default function Icon({ name, className = "size-[22px]" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
