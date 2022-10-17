import { FC, useState } from "react";
import ThemePicker from "./ThemePicker";

const TryDynamicColor: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex items-center justify-end w-full h-12">
      {isExpanded ? (
        <ThemePicker />
      ) : (
        // TODO transition colors
        <button
          className="px-6 py-3 text-sm font-bold rounded-lg shadow text-on-surface bg-gradient-to-r from-red-container to-green-container via-purple-container hover:from-red-container-hover hover:to-green-container-hover hover:via-purple-container-hover"
          onClick={() => setIsExpanded(true)}
        >
          Try it, live on this page
        </button>
      )}
    </div>
  );
};

export default TryDynamicColor;
