import classNames from "classnames";
import { ReactNode } from "react";

export default function CodeBlock({
  children,
  isFirst,
  isLast,
}: {
  children?: ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  return (
    <div className="w-full max-w-xl">
      {!isFirst && <hr className="w-full h-px border-outline/20" />}
      <pre
        className={classNames(
          "bg-on-surface-variant-light text-surface-variant-light dark:bg-surface w-full max-w-md px-4 py-2 text-xs shadow-inner shadow-black/50 mx-auto",
          isFirst && "rounded-t-lg",
          isLast && "rounded-b-lg mb-4"
        )}
      >
        {children}
      </pre>
      {!isLast && <hr className="w-full h-px border-outline/20" />}
    </div>
    // TODO code color
  );
}
