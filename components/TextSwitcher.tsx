import classNames from "classnames";
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

  // TODO arrow bindings

  return (
    <em
      className="relative inline-block text-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={classNames({"relative z-20": isHovered })}
      >
        {texts[currentTextIndex]}
      </span>
      {isHovered && (
        <div
          className="absolute top-0 z-10 bg-white shadow-lg -inset-x-1 rounded-xl -bottom-8"
        >
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-2 space-x-2 text-gray-500">
            <button
              className="flex items-center justify-center w-8 h-8 bg-white rounded-full hover:shadow-md focus:outline-none"
              onClick={handlePrevious}
            >
              {/* TODO inline svg */}
              <img src="/chevron-left.svg"/>
            </button>
            <div className="flex items-center space-x-1">
              {Array.from(Array(texts.length)).map((_, index) => (
                <div
                  key={index}
                  className={classNames('rounded-full w-1.5 h-1.5', {
                    'bg-gray-400': index === currentTextIndex,
                    'bg-gray-200': index !== currentTextIndex
                  })}
                />
              ))}
            </div>
            <button
              className="flex items-center justify-center w-8 h-8 bg-white rounded-full hover:shadow-md focus:outline-none"
              onClick={handleNext}
            >
              {/* TODO inline svg */}
              <img src="/chevron-right.svg"/>
            </button>
          </div>
        </div>
      )}
    </em>
  )
};

export default TextSwitcher;
