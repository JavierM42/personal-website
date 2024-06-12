import classNames from "classnames";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { Tag } from "./BlogPostCards";

export type BlogPostCardProps = {
  illustration?: ReactNode;
  title: ReactNode;
  summary: string;
  url: string;
  tags?: Tag[];
};

export const BLOG_POST_CARD_WIDTH = 424;

const TAG_CLASSNAMES: Record<Tag, string> = {
  CSS: "bg-purple-container/30 text-purple border-purple",
  Productivity: "bg-red-container/30 text-red border-red",
  Tailwind: "bg-tertiary-container/30 text-tertiary border-tertiary",
  React: "bg-blue-container/30 text-blue border-blue",
};

const BlogPostCard: FC<BlogPostCardProps> = ({
  illustration,
  title,
  summary,
  url,
  tags = [],
}) => {
  return (
    <li className="[&>*]:whitespace-normal rounded-xl snap-center shadow-xl shadow-primary-container/40 first:ml-12 last:mr-12 lg:first:ml-0 lg:last:mr-0 mx-1.5 sm:mx-6 bg-surface/40 w-[424px] max-w-[calc(100vw-42px)] flex-shrink-0">
      <div className="flex flex-col min-h-[216px] px-4 py-2">
        <div className="flex-1 w-full">
          <div className="float-left h-32 pr-4 mx-auto w-36">
            {illustration}
          </div>
          <h3 className="w-full mt-2 text-lg font-bold">{title}</h3>
          <p className="w-full mb-4 text-sm text-on-surface/80">{summary}</p>
        </div>
        <div className="flex">
          <ul className="flex flex-wrap items-center flex-1 gap-4">
            {tags.map((tag) => (
              <li
                key={tag}
                className={classNames(
                  "px-2 text-sm border rounded-full h-fit",
                  TAG_CLASSNAMES[tag]
                )}
              >
                {tag}
              </li>
            ))}
          </ul>
          {url.startsWith("http") ? (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="font-[Nunito]"
            >
              Read the post
            </a>
          ) : (
            <Link href={url}>
              <span className="font-bold font-[Nunito] text-primary cursor-pointer hover:underline">
                Read the post
              </span>
            </Link>
          )}
        </div>
      </div>
    </li>
  );
};

export default BlogPostCard;
