import classNames from "classnames";
import { motion } from "framer-motion";
import { FC, HTMLProps, useEffect, useState } from "react";

type Props = Pick<HTMLProps<HTMLUListElement>, "id" | "className"> & {
  items: FC<{
    isExpanded: boolean;
    isOtherExpanded: boolean;
    onExpand: () => void;
  }>[];
  onExpand?: () => void;
  onCollapseAll?: () => void;
};

/**
  Expects exactly 4 items and will render them in a grid with 1 column for small screens and 2 columns for large screens.
*/
const ExpandableGridList: FC<Props> = ({
  items,
  onExpand,
  onCollapseAll,
  className,
  ...listProps
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleClickOutside = () => {
      setExpandedIndex((value) => {
        if (value !== null) {
          onCollapseAll?.();
        }
        return null;
      });
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [onCollapseAll]);

  return (
    <ol
      className={classNames(
        className,
        "grid transition-all motion-reduce:transition-none duration-300 lg:aspect-[16/10] grid-cols-[1fr]",
        {
          "grid-rows-[300px_300px_300px_300px] lg:grid-cols-[1fr_1fr]":
            expandedIndex === null,
          // Row height adjusted manually for visual balance TODO find a cleaner solution
          "grid-rows-[546px_224px_224px_224px] sm:grid-rows-[420px_260px_260px_260px]":
            expandedIndex === 0,
          "grid-rows-[208px_576px_208px_208px] sm:grid-rows-[270px_390px_270px_270px]":
            expandedIndex === 1,
          "grid-rows-[205px_205px_585px_205px] sm:grid-rows-[270px_270px_450px_270px]":
            expandedIndex === 2,
          "grid-rows-[240px_240px_240px_480px] sm:grid-rows-[270px_270px_270px_390px]":
            expandedIndex === 3,
          "lg:grid-cols-[4fr_1fr]":
            expandedIndex !== null && expandedIndex % 2 === 0,
          "lg:grid-cols-[1fr_4fr]":
            expandedIndex !== null && expandedIndex % 2 === 1,
          "lg:grid-rows-[1fr_1fr]": expandedIndex === null,
          "lg:grid-rows-[3fr_1fr]":
            expandedIndex !== null && expandedIndex < 4 / 2,
          "lg:grid-rows-[1fr_3fr]":
            expandedIndex !== null && expandedIndex >= 4 / 2,
        }
      )}
      {...listProps}
    >
      {items.map((Item, index) => (
        <Item
          key={index}
          isExpanded={expandedIndex === index}
          isOtherExpanded={expandedIndex !== null && expandedIndex !== index}
          onExpand={() => {
            setExpandedIndex(index);
            onExpand?.();
          }}
        />
      ))}
    </ol>
  );
};

export default ExpandableGridList;
