import classNames from "classnames";
import { FC, useCallback, useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import DotPagination from "./DotPagination";

type Props = {
  texts: string[];
}

const TextSwitcher: FC<Props> = ({ texts }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentTextIndex(
      currentTextIndex === 0 ? texts.length - 1 : currentTextIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentTextIndex(
      currentTextIndex === texts.length - 1 ? 0 : currentTextIndex + 1
    );
  };

  const handleKeydown = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case "ArrowRight":
        handleNext();
        break;
      case "ArrowLeft":
        handlePrevious();
        break;
    }
  }, [handleNext, handlePrevious]);
  // TODO animate arrows when you use the keyboard

  useEffect(() => {
    if (isHovered) {
      window.addEventListener('keydown', handleKeydown);
      return () => window.removeEventListener('keydown', handleKeydown);
    }
  }, [isHovered, handleKeydown]);

  return (
    <em
      className="relative inline-block text-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-20">
        {/* TODO since it's z-20 it collides with other open TextSwitchers */}
        {texts[currentTextIndex]}
      </span>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute top-0 z-10 bg-white shadow-lg -inset-x-1 rounded-xl -bottom-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-2 space-x-2 text-gray-500">
              <button
                className="flex items-center justify-center w-8 h-8 bg-white rounded-full hover:shadow-md focus:outline-none"
                onClick={handlePrevious}
              >
                {/* TODO animations */}
                {/* TODO inline svg */}
                <img src="/chevron-left.svg"/>
              </button>
              <DotPagination
                numberOfPages={texts.length}
                currentPageIndex={currentTextIndex}
              />
              <button
                className="flex items-center justify-center w-8 h-8 bg-white rounded-full hover:shadow-md focus:outline-none"
                onClick={handleNext}
              >
                {/* TODO inline svg */}
                {/* TODO animations */}
                <img src="/chevron-right.svg"/>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </em>
  )
};

export default TextSwitcher;
