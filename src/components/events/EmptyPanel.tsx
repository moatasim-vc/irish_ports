export default function EmptyPanel({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-card border border-dashed border-line bg-white px-6 py-12 text-center">
      <h3 className="text-[17px] font-semibold text-navy">{title}</h3>
      <p className="mx-auto mt-1 max-w-[640px] text-muted">{text}</p>
      {children}
    </div>
  );
}
