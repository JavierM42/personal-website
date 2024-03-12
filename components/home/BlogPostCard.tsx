import Link from "next/link";
import { FC, ReactNode } from "react";

type Props = {
  illustration?: ReactNode;
  title: ReactNode;
  summary: string;
  url: string;
};

export const BLOG_POST_CARD_WIDTH = 424;

const BlogPostCard: FC<Props> = ({
  illustration,
  title,
  summary,
  url,
}: Props) => {
  return (
    <li className="[&>*]:whitespace-normal rounded-xl snap-center shadow-xl shadow-primary-container/40 first:ml-12 last:mr-12 lg:first:ml-0 lg:last:mr-0 mx-1.5 sm:mx-6 bg-surface/40 w-[424px] max-w-[calc(100vw-42px)] flex-shrink-0">
      <div className="flex flex-col items-end min-h-[216px] px-4 py-2">
        <div className="flex-1 w-full">
          <div className="float-left h-32 pr-4 mx-auto w-36">
            {illustration}
          </div>
          <h3 className="w-full mt-2 text-lg font-bold">{title}</h3>
          <p className="w-full mb-4 text-sm text-on-surface/80">{summary}</p>
        </div>
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
    </li>
  );
};

export default BlogPostCard;
