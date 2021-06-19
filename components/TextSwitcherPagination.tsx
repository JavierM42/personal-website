import classNames from "classnames";
import { FC, useCallback, useEffect } from "react";
import DotPageIndicator from "./DotPageIndicator";

type Props = {
  numberOfPages: number;
  currentPageIndex: number;
  onPageChange: (newIndex: number) => void;
  className?: string;
}

const TextSwitcherPagination: FC<Props> = ({ numberOfPages, currentPageIndex, onPageChange, className }: Props) => {
  const handlePrevious = () => {
    onPageChange(
      currentPageIndex === 0 ? numberOfPages - 1 : currentPageIndex - 1
    );
  };

  const handleNext = () => {
    onPageChange(
      currentPageIndex === numberOfPages - 1 ? 0 : currentPageIndex + 1
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
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [handleKeydown]);

  return (
    <div className={classNames("flex items-center justify-center space-x-2 text-gray-500", className)}>
      <button
        className="flex items-center justify-center w-8 h-8 bg-white rounded-full hover:shadow-md focus:outline-none"
        onClick={handlePrevious}
      >
        {/* TODO animations */}
        {/* TODO inline svg */}
        <img src="/chevron-left.svg"/>
      </button>
      <DotPageIndicator
        numberOfPages={numberOfPages}
        currentPageIndex={currentPageIndex}
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
  )
};

export default TextSwitcherPagination;
