import { FC, ReactNode, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import TextSwitcherPagination from "./TextSwitcherPagination";
import classNames from "classnames";

type Props = {
  size?: '2xl' | '4xl';
  options: Array<{
    heading: string;
    body?: ReactNode;
  }>;
}

const TextSwitcher: FC<Props> = ({ size = '2xl', options }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  return (
    <em
      className="relative inline-block text-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {options[currentPageIndex].heading}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={classNames("absolute top-0 z-10 overflow-hidden shadow-lg -inset-x-1 rounded-xl", {
              'pt-10': size === '2xl',
              'pt-14': size === '4xl',
            })}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div className="p-2 bg-white">
              <div className="space-y-3 text-sm text-gray-500">
                {options[currentPageIndex].body}
              </div>
              {options.length > 1 && <TextSwitcherPagination
                numberOfPages={options.length}
                currentPageIndex={currentPageIndex}
                setCurrentPageIndex={setCurrentPageIndex}
              />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </em>
  )
};

export default TextSwitcher;
