import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import DotPageIndicator from "./DotPageIndicator";

type Props = {
  options: Array<{
    heading: string;
    body?: ReactNode;
  }>;
}

const TextSwitcher: FC<Props> = ({ options }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentTextIndex(
      currentTextIndex === 0 ? options.length - 1 : currentTextIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentTextIndex(
      currentTextIndex === options.length - 1 ? 0 : currentTextIndex + 1
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
      {options[currentTextIndex].heading}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute top-0 z-10 pt-10 overflow-hidden shadow-lg -inset-x-1 rounded-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div className="p-2 bg-white">
              <div className="space-y-3 text-sm text-gray-500">
                {options[currentTextIndex].body}
              </div>
              {options.length > 1 && (
                <div className="flex items-center justify-center space-x-2 text-gray-500">
                  <button
                    className="flex items-center justify-center w-8 h-8 bg-white rounded-full hover:shadow-md focus:outline-none"
                    onClick={handlePrevious}
                  >
                    {/* TODO animations */}
                    {/* TODO inline svg */}
                    <img src="/chevron-left.svg"/>
                  </button>
                  <DotPageIndicator
                    numberOfPages={options.length}
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
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </em>
  )
};

export default TextSwitcher;
