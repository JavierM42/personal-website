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
    <li className="flex flex-col items-center px-4 py-2 shadow bg-surface">
      {illustration}
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
