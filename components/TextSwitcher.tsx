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

  // FIXME doesn't work with line breaks
  // FIXME size changes jump

  return (
    <em
      className={`relative text-gray-800`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{texts[currentTextIndex]}</span>
      {isHovered && (
        <div
          className="absolute shadow-lg rounded-xl -inset-x-12 -inset-y-6 bg-white flex items-center justify-between p-2"
        >
          <button
            className="rounded-full hover:shadow-md bg-white w-8 h-8 flex items-center justify-center focus:outline-none"
            onClick={handlePrevious}
          >
            {/* TODO inline svg */}
            <img src="/chevron-left.svg"/>
          </button>
          <div className="text-xs mt-16 text-gray-500">
            {currentTextIndex + 1}/{texts.length}
          </div>
          <button
            className="rounded-full hover:shadow-md bg-white w-8 h-8 flex items-center justify-center focus:outline-none"
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
