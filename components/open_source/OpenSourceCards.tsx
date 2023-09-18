import LineWrappingInput from "react-line-wrapping-input";
import GitHubLogo from "../../assets/github.svg";
import OpenSourceCard from "./OpenSourceCard";
import TryDynamicColor from "./TryDynamicColor";

export default function OpenSourceCards() {
  return (
    <ol className="grid grid-cols-1 gap-8 lg:p-0 md:grid-cols-2 lg:gap-12">
      <OpenSourceCard
        name="tailwind-material-colors"
        content="A TailwindCSS Plugin to generate dynamic color themes according to the Material Design guidelines."
        cta={<TryDynamicColor />}
        stripClass="bg-gradient-to-r from-red-container to-green-container via-purple-container"
        className="shadow-primary-container/40"
      />
      <OpenSourceCard
        name="tailwind-material-surfaces"
        content="A TailwindCSS Plugin that integrates Material Design interaction states into Tailwind."
        cta={
          <a
            className="flex items-center gap-3 mx-2 my-3 text-sm font-bold flex-nowrap font-[Nunito]"
            href="https://github.com/JavierM42/tailwind-material-surfaces"
            target="_blank"
          >
            View on GitHub
            <GitHubLogo className="w-5 h-5" />
          </a>
        }
        stripClass="bg-gradient-to-r to-primary-container-press from-primary"
        className="shadow-primary/20"
      />
      <OpenSourceCard
        name="tailwind-mode-aware-colors"
        content="A TailwindCSS Plugin to style light and dark modes with a single class."
        cta={
          <a
            className="flex items-center gap-3 mx-2 my-3 text-sm font-bold flex-nowrap font-[Nunito]"
            href="https://github.com/JavierM42/tailwind-mode-aware-colors"
            target="_blank"
          >
            View on GitHub
            <GitHubLogo className="w-5 h-5" />
          </a>
        }
        stripClass="bg-gradient-to-r from-tertiary-container-dark to-tertiary-container-light"
        className="shadow-tertiary/20"
      />
      <OpenSourceCard
        name={
          <LineWrappingInput
            value="react-line-wrapping-input"
            placeholder="react-line-wrapping-input"
            containerClassName="-m-1 rounded-md border border-outline/20 hover:border-outline/60 focus-within:border-outline/60 transition-colors"
            className="p-1 bg-transparent focus:outline-none"
          />
        }
        content="☝️ A customizable input-like component with line wrapping and autosizing."
        cta={
          <a
            className="flex items-center gap-3 mx-2 my-3 text-sm font-bold flex-nowrap font-[Nunito]"
            href="https://github.com/JavierM42/react-line-wrapping-input"
            target="_blank"
          >
            View on GitHub
            <GitHubLogo className="w-5 h-5" />
          </a>
        }
        stripClass="bg-gradient-to-r from-outline to-outline/20"
        className="shadow-outline/20"
      />
      <OpenSourceCard
        name="react-selection-manager"
        content="A tiny selection management library with support for keyboard modifiers."
        cta={
          <a
            className="flex items-center gap-3 mx-2 my-3 text-sm font-bold flex-nowrap font-[Nunito]"
            href="https://github.com/JavierM42/react-selection-manager"
            target="_blank"
          >
            View on GitHub
            <GitHubLogo className="w-5 h-5" />
          </a>
        }
        stripClass="bg-gradient-to-r to-secondary-container from-primary/40"
        className="shadow-secondary-container/80"
      />
      <OpenSourceCard
        name="MTGBarato"
        content="I built a simple web app to help my local trading card game community."
        stripClass="bg-[#f6ad55] dark:bg-[#88501d]"
        className="shadow-[#f6ad55]/20"
        cta={
          <a
            className="flex items-center gap-3 mx-2 my-3 text-sm font-bold flex-nowrap font-[Nunito]"
            href="https://github.com/JavierM42/mtgbarato"
            target="_blank"
          >
            View on GitHub
            <GitHubLogo className="w-5 h-5" />
          </a>
        }
      />
    </ol>
  );
}
