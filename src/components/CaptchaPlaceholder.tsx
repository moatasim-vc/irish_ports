// Stands in for reCAPTCHA until the site keys are available.
export default function CaptchaPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex w-max max-w-full items-center gap-3 rounded-md border border-line bg-paper px-3.5 py-3 text-sm font-normal text-ink ${className}`}
    >
      <span className="size-[22px] rounded-[3px] border-2 border-[#9aabb8] bg-white" />
      I&apos;m not a robot
      <small className="ml-[18px] text-[11px] text-muted">reCAPTCHA</small>
    </div>
  );
}
