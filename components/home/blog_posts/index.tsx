import classNames from "classnames";
import { useState } from "react";
import { SectionHeader } from "../SectionHeader";
import BlogPostCards, { Tag } from "./BlogPostCards";
import { posts } from "./config";

export const TAG_BUTTON_CLASSNAMES: Record<Tag, string> = {
  CSS: "interactive-bg-purple-container text-purple border-purple",
  Productivity: "interactive-bg-red-container text-red border-red",
  Tailwind: "interactive-bg-tertiary-container text-tertiary border-tertiary",
  React: "interactive-bg-blue-container text-blue border-blue",
};

export const BlogPosts = () => {
  const [filter, setFilter] = useState<Tag | null>(null);

  return (
    <div>
      <SectionHeader
        id="blog"
        heading="Blog posts"
        count={posts.length}
        rightContent={
          <ul className="inline-flex gap-2 w-fit">
            {Object.entries(TAG_BUTTON_CLASSNAMES).map(([tag, className]) => (
              <li key={tag} className="contents">
                <button
                  className={classNames(
                    "px-2 text-sm border rounded-full h-fit font-normal font-pt-sans transition-all shadow-sm",
                    className,
                    filter && filter !== tag && "opacity-40 hover:opacity-100",
                    filter === tag
                      ? "scale-105 bg-opacity-80"
                      : "hover:scale-105 bg-opacity-30"
                  )}
                  onClick={() =>
                    setFilter((value) => (value === tag ? null : (tag as Tag)))
                  }
                >
                  {tag}
                  <span className="text-xs">
                    {" "}
                    (
                    {
                      posts.filter((post) => post.tags?.includes(tag as Tag))
                        .length
                    }
                    )
                  </span>
                </button>
              </li>
            ))}
          </ul>
        }
      />
      <BlogPostCards filter={filter} />
    </div>
  );
};
