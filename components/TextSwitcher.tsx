import { FC, ReactNode, useEffect, useRef, useState } from "react";
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
  const ref = useRef<HTMLElement>(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const handleMouseLeave = () => {
    if (!isFocused) {
      setIsExpanded(false);
    }
  };

  // TODO the outside-click effect does not really work without contexts to disable the hover effect of the others when you're focused on the expanded one
  // handle clicks both inside and outside
  useEffect(() => {
    if (isExpanded) {
      const handleClick = (event: MouseEvent) =>  {
        if (ref.current?.contains(event.target as HTMLElement)) {
          setIsFocused(true);
        } else {
          setIsFocused(false);
          setIsExpanded(false);
        }
      };

      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }
  }, [isExpanded, setIsExpanded, setIsFocused]);

  // IDEA: backdrop blur the rest of the paragraphs?

  return (
    <em
      ref={ref}
      className="relative inline-block text-gray-800"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={handleMouseLeave}
    >
      {options[currentPageIndex].heading}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className={classNames("absolute top-0 z-10 overflow-hidden shadow-lg -inset-x-1 rounded-xl", {
              'pt-10': size === '2xl',
              'pt-16': size === '4xl',
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
