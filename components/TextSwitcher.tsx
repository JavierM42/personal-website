import { FC, useState } from "react";

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

  // FIXME size changes jump

  return (
    <em
      className="relative inline-block text-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{texts[currentTextIndex]}</span>
      {isHovered && (
        <div
          className="absolute flex items-center justify-between p-2 bg-white shadow-lg rounded-xl -inset-x-12 -inset-y-2"
        >
          <button
            className="flex items-center justify-center w-8 h-8 bg-white rounded-full hover:shadow-md focus:outline-none"
            onClick={handlePrevious}
          >
            {/* TODO inline svg */}
            <img src="/chevron-left.svg"/>
          </button>
          <div className="mt-16 text-xs text-gray-500">
            {currentTextIndex + 1}/{texts.length}
          </div>
          <button
            className="flex items-center justify-center w-8 h-8 bg-white rounded-full hover:shadow-md focus:outline-none"
            onClick={handleNext}
          >
            {/* TODO inline svg */}
            <img src="/chevron-right.svg"/>
          </button>
        </div>
      )}
    </em>
  )
};

export default TextSwitcher;
