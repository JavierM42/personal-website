import { FC, ReactNode } from "react";

type Props = {
  illustration?: ReactNode;
  title: ReactNode;
  summary: string;
  url: string;
};

export const BLOG_POST_CARD_WIDTH = 372;

const BlogPostCard: FC<Props> = ({
  illustration,
  title,
  summary,
  url,
}: Props) => {
  return (
    <li className="[&>*]:whitespace-normal rounded-xl py-2 snap-center px-4 shadow-xl shadow-primary-container/40 space-y-6 first:ml-0 last:mr-0 mx-1.5 sm:mx-4 bg-surface w-[372px] max-w-[calc(100vw-42px)] flex-shrink-0">
      <div className="w-48 h-48 mx-auto">{illustration}</div>
      <h3 className="w-full mt-2 text-lg font-bold">{title}</h3>
      <p className="w-full mb-4 text-sm text-outline">{summary}</p>
      <div className="flex justify-end w-full">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="font-[Nunito]"
        >
          Read the post
        </a>
      </div>
    </li>
  );
};

export default BlogPostCard;
