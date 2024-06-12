import { useRef } from "react";
import ChevronRight from "../../../public/chevron-right.svg";
import { SquareButton } from "../../SquareButton";
import { DevNote } from "../dev_notes/DevNote";
import BlogPostCard, { BLOG_POST_CARD_WIDTH } from "./BlogPostCard";
import { posts } from "./config";

export type Tag = "CSS" | "Productivity" | "Tailwind" | "React";

export default function BlogPostCards({ filter }: { filter: Tag | null }) {
  const containerRef = useRef<HTMLOListElement>(null);

  function goPrevious() {
    containerRef.current?.scrollBy({
      left: -BLOG_POST_CARD_WIDTH,
      behavior: "smooth",
    });
  }

  function goNext() {
    containerRef.current?.scrollBy({
      left: BLOG_POST_CARD_WIDTH,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative">
      <DevNote className="absolute w-64 -top-14 left-1/2 rotate-[-3deg]">
        I used <code>framer-motion</code> for these illustrations, with some
        simple SVG paths and sometimes a mask.
      </DevNote>
      <ol
        ref={containerRef}
        className="w-screen [&>*]:align-top [&>*]:inline-block overflow-x-auto pb-8 snap-x snap-mandatory ml-[50%] -translate-x-1/2 whitespace-nowrap px-[calc(50vw-50%)] scrollbar-none"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0 0 0/0), black 8%, black 92%, rgba(0 0 0 /0) 100%)",
          maskImage:
            "linear-gradient(to right, rgba(0 0 0/0), black 8%, black 92%, rgba(0 0 0 /0) 100%)",
        }}
      >
        {posts.map((post) =>
          !filter || post.tags?.includes(filter) ? (
            <BlogPostCard key={post.url} {...post} />
          ) : null
        )}
      </ol>
      <div className="relative flex justify-center gap-8 mt-4 -translate-y-4">
        <SquareButton
          onClick={goPrevious}
          label="Scroll left"
          tooltipPlacement="left"
        >
          <ChevronRight className="rotate-180" />
        </SquareButton>
        <SquareButton
          tooltipPlacement="right"
          onClick={goNext}
          label="Scroll right"
        >
          <ChevronRight />
        </SquareButton>
        <DevNote className="absolute w-72 -top-8 left-[calc(50%-360px)] rotate-[3deg]">
          The cards don't need any Javascript. CSS <code>scroll-snap</code> can
          snap elements to the center of their container. The buttons do need
          some scripting, but they simply scroll a certain number of pixels and
          don't need to track state.
        </DevNote>
      </div>
    </div>
  );
}
