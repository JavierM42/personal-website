import { FC, ReactNode } from "react";

type Props = {
  illustration?: ReactNode;
  title: ReactNode;
  summary: string;
  url: string;
};

const BlogPostCard: FC<Props> = ({
  illustration,
  title,
  summary,
  url,
}: Props) => {
  return (
    <li className="[&>*]:whitespace-normal py-2 snap-center px-4 shadow space-y-6 first:ml-0 last:mr-0 mx-4 bg-surface w-[372px] max-w-[calc(100vw-52px)] flex-shrink-0">
      <div className="w-48 h-48 mx-auto">{illustration}</div>
      <div className="w-full mt-2 font-bold text-md">{title}</div>
      <p className="w-full mb-4 text-sm text-outline">{summary}</p>
      <div className="flex justify-end w-full">
        <a href={url} target="_blank" rel="noreferrer">
          Read the post
        </a>
      </div>
    </li>
  );
};

export default BlogPostCard;
