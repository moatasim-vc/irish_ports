export default function SectionTitle({
  children,
  center = false,
  className = "mb-9",
}: {
  children: React.ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`text-[clamp(26px,2.8vw,36px)] leading-[1.1] font-bold tracking-[-0.03em] text-balance text-navy before:mb-4 before:block before:h-[3px] before:w-11 before:bg-gold ${
        center ? "text-center before:mx-auto" : ""
      } ${className}`}
    >
      {children}
    </h2>
  );
}
