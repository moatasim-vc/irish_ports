import Image from "next/image";
import Logo from "@/components/Logo";

// Mock-up of the printed yearbook cover: green masthead and logo over a port photo.
export default function YearbookCover({ title, image, alt }: { title: string; image: string; alt: string }) {
  return (
    <figure className="relative mx-auto aspect-[5/7] w-full max-w-[400px] overflow-hidden rounded-md bg-navy shadow-[0_22px_48px_rgb(8_41_67/0.28)]">
      <Image src={image} alt={alt} fill sizes="400px" className="object-cover" />
      <figcaption className="relative bg-irish-green px-4 py-4 text-center text-[clamp(20px,2.4vw,28px)] leading-tight font-extrabold tracking-[0.02em] text-white uppercase">
        {title}
      </figcaption>
      <Logo className="relative -mt-3 ml-4 size-20 drop-shadow-[0_6px_14px_rgb(0_0_0/0.35)] sm:size-24" />
    </figure>
  );
}
