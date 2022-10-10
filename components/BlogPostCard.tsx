import { FC, ReactNode } from "react";

type Props = {
  title: ReactNode;
  summary: string;
  url: string;
};

const BlogPostCard: FC<Props> = ({ title, summary, url }: Props) => {
  return (
    <li className="px-4 py-2 shadow bg-surface">
      <div className="font-bold text-md">{title}</div>
      <p className="text-sm text-outline">{summary}</p>
      <div className="flex justify-end">
        <a href={url} target="_blank" rel="noreferrer">
          Read the post
        </a>
      </div>
    </li>
  );
};

export default BlogPostCard;
