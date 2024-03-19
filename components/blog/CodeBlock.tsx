import classNames from "classnames";
import { ReactNode } from "react";

import hljs from "highlight.js/lib/core";
import css from "highlight.js/lib/languages/css";
hljs.registerLanguage("css", css);

export default function CodeBlock({
  lang = "css",
  code = "",
  children,
  isFirst,
  isLast,
  start = (value: string) => 0,
  end = (value: string) => value.length,
}: {
  lang?: string;
  code?: string;
  children?: ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
  start?: (value: string) => number;
  end?: (value: string) => number;
}) {
  const highlightedValue = hljs.highlight(code, { language: lang }).value;
  const trimmedValue = highlightedValue.substring(
    start(highlightedValue),
    end(highlightedValue)
  );

  return (
    <div className="w-full max-w-xl">
      {!isFirst && <hr className="w-full h-px border-outline/20" />}
      <pre
        className={classNames(
          "bg-on-surface-variant-light text-surface-variant-light dark:bg-surface w-full max-w-md px-4 py-2 text-xs shadow-inner shadow-black/50 mx-auto overflow-x-auto",
          isFirst && "rounded-t-lg",
          isLast && "rounded-b-lg mb-4"
        )}
      >
        {children}
        {code && <span dangerouslySetInnerHTML={{ __html: trimmedValue }} />}
      </pre>
      {!isLast && <hr className="w-full h-px border-outline/20" />}
    </div>
  );
}
