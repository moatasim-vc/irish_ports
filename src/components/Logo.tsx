import { useId } from "react";

type LogoProps = {
  className?: string;
};

// One heart-shaped shamrock leaf with its tip at (0, 0), pointing up.
const LEAF = "M0 0C-1.5-5-13-7.5-13-16.5C-13-23-5.5-25.5 0-19.5C5.5-25.5 13-23 13-16.5C13-7.5 1.5-5 0 0Z";

// Irish Ports Organisation badge: a green ring carrying the name, around a tricolour disc with a shamrock.
// Both words sit inside the ring (r 64–92): the top one reads over the arc, the bottom one under it.
export default function Logo({ className }: LogoProps) {
  const id = useId();
  const clip = `${id}-clip`;
  const shade = `${id}-shade`;
  const arcTop = `${id}-arc-top`;
  const arcBottom = `${id}-arc-bottom`;

  return (
    <svg viewBox="0 0 200 200" role="img" aria-label="Irish Ports Organisation" className={className}>
      <defs>
        <clipPath id={clip}>
          <circle cx="100" cy="100" r="58" />
        </clipPath>
        <radialGradient id={shade} cx=".38" cy=".3" r=".85">
          <stop offset="0" stopColor="#fff" stopOpacity=".3" />
          <stop offset=".55" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".2" />
        </radialGradient>
        {/* Top: baseline r=72, letters grow outwards. Bottom: baseline r=84, letters grow inwards. */}
        <path id={arcTop} d="M28 100A72 72 0 0 1 172 100" />
        <path id={arcBottom} d="M16 100A84 84 0 0 0 184 100" />
      </defs>

      <circle cx="100" cy="100" r="96" fill="#fff" />
      <circle cx="100" cy="100" r="92" fill="#169b62" />
      <circle cx="100" cy="100" r="88.5" fill="none" stroke="#fff" strokeWidth="0.8" opacity=".55" />
      <circle cx="100" cy="100" r="62" fill="#fff" />
      <circle cx="100" cy="100" r="64.5" fill="none" stroke="#ff883e" strokeWidth="2" />

      <g clipPath={`url(#${clip})`}>
        <rect x="42" y="42" width="39" height="116" fill="#169b62" />
        <rect x="81" y="42" width="38" height="116" fill="#fff" />
        <rect x="119" y="42" width="39" height="116" fill="#ff883e" />
        <g fill="#0f7a4a" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round">
          <path d="M98.8 104C99 116 96 126 89 136L93.4 138C100.6 127 103.2 116 103.2 104Z" />
          <g transform="translate(100 99) scale(1.3)">
            <path d={LEAF} />
            <path d={LEAF} transform="rotate(120)" />
            <path d={LEAF} transform="rotate(240)" />
          </g>
        </g>
        <circle cx="100" cy="100" r="58" fill={`url(#${shade})`} />
      </g>

      <g fontFamily="Georgia,'Times New Roman',serif" fontWeight="700" fill="#fff">
        <text fontSize="17" letterSpacing="2.6">
          <textPath href={`#${arcTop}`} startOffset="50%" textAnchor="middle">
            IRISH PORTS
          </textPath>
        </text>
        <text fontSize="13.5" letterSpacing="2.2">
          <textPath href={`#${arcBottom}`} startOffset="50%" textAnchor="middle">
            ORGANISATION
          </textPath>
        </text>
      </g>
      {/* Dots between the two words. */}
      <circle cx="22" cy="100" r="3" fill="#ff883e" />
      <circle cx="178" cy="100" r="3" fill="#ff883e" />
    </svg>
  );
}
