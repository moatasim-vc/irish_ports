import type { Paragraph } from "@/content/ports";

// Paragraphs whose links open the outside site in a new tab.
export default function RichText({ paragraphs, className = "" }: { paragraphs: Paragraph[]; className?: string }) {
  return (
    <div className={`space-y-4 text-muted ${className}`}>
      {paragraphs.map((paragraph, i) => (
        <p key={i}>
          {paragraph.map((segment, j) =>
            typeof segment === "string" ? (
              segment
            ) : (
              <a
                key={j}
                href={segment.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal underline decoration-teal/30 underline-offset-2 hover:decoration-teal"
              >
                {segment.text}
              </a>
            ),
          )}
        </p>
      ))}
    </div>
  );
}
