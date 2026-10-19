import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Partners from "@/components/Partners";
import Highlight from "@/components/news/Highlight";
import { hero, highlights, readMore, stories, type NewsItem } from "@/content/news";

export const metadata: Metadata = {
  title: hero.title,
  description: "The latest news and event highlights from Irish Ports and the ports sector.",
};

function NewsCard({
  story,
  large = false,
  className = "",
}: {
  /** Left out when there are fewer stories than places for them. */
  story?: NewsItem;
  large?: boolean;
  className?: string;
}) {
  if (!story) return null;

  return (
    <article
      className={`group relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded-card bg-navy p-5 sm:p-6 ${className}`}
    >
      <Image
        src={story.image}
        alt={story.alt}
        fill
        sizes={large ? "(min-width: 1024px) 680px, 100vw" : "(min-width: 1024px) 470px, 100vw"}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/60 to-navy/5" />
      <div className="relative">
        <h3
          className={`max-w-[640px] leading-[1.25] font-bold tracking-[-0.02em] text-balance text-white ${
            large ? "text-[clamp(19px,2vw,24px)]" : "text-[19px]"
          }`}
        >
          {story.title}
        </h3>
        {/* Opens the article once a link is set; the whole card is clickable. */}
        <a
          className="btn btn-sm mt-4 after:absolute after:inset-0"
          href={story.link || "#"}
          {...(story.link && { target: "_blank", rel: "noopener noreferrer" })}
          aria-label={`${readMore}: ${story.title}`}
        >
          {readMore}
        </a>
      </div>
    </article>
  );
}

// Three rows of one large and two small stories; the large card swaps sides each row.
function NewsRow({ stories: [first, second, third], largeRight = false }: { stories: NewsItem[]; largeRight?: boolean }) {
  // Source order follows the story order, so phones show the stories in sequence.
  const largeCard = (story?: NewsItem) => <NewsCard story={story} large className="lg:min-h-[500px]" />;
  const smallCards = (items: (NewsItem | undefined)[]) => (
    <div className="grid gap-4 sm:gap-5">
      {items.map((story, i) => (
        <NewsCard key={i} story={story} />
      ))}
    </div>
  );

  return largeRight ? (
    <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1fr_1.45fr]">
      {smallCards([first, second])}
      {largeCard(third)}
    </div>
  ) : (
    <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1.45fr_1fr]">
      {largeCard(first)}
      {smallCards([second, third])}
    </div>
  );
}

export default function NewsPage() {
  const rows = [stories.slice(0, 3), stories.slice(3, 6), stories.slice(6, 9)];

  return (
    <>
      <PageHero title={hero.title} banner="news" />

      <section className="section" aria-label="Event highlights">
        <div className="wrap mx-auto grid max-w-[1160px] gap-16 lg:gap-12">
          {highlights.map((item, i) => (
            <div key={item.title} className="grid gap-16 lg:gap-12">
              {i > 0 && <hr className="mx-auto w-40 border-line" />}
              <Highlight item={item} flip={i % 2 === 1} />
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-mist" aria-labelledby="latest-news">
        <div className="wrap mx-auto grid max-w-[1160px] gap-4 sm:gap-5">
          <h2 id="latest-news" className="sr-only">
            Latest news
          </h2>
          {rows.map((row, i) =>
            row.length ? <NewsRow key={i} stories={row} largeRight={i === 1} /> : null,
          )}
        </div>
      </section>

      <Partners />
    </>
  );
}
