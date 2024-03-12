import { useRef } from "react";
import LineWrappingInput from "react-line-wrapping-input";
import GitHubLogo from "../../../assets/github.svg";
import ChevronRight from "../../../public/chevron-right.svg";
import { SquareButton } from "../../SquareButton";
import { DevNote } from "../dev_notes/DevNote";
import OpenSourceCard, { OPEN_SOURCE_CARD_WIDTH } from "./OpenSourceCard";
import TryDynamicColor from "./TryDynamicColor";

export default function OpenSourceCards() {
  const containerRef = useRef<HTMLOListElement>(null);

  function goPrevious() {
    containerRef.current?.scrollBy({
      left: -OPEN_SOURCE_CARD_WIDTH,
      behavior: "smooth",
    });
  }

  function goNext() {
    containerRef.current?.scrollBy({
      left: OPEN_SOURCE_CARD_WIDTH,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative">
      <DevNote className="absolute w-72 top-52 right-24 rotate-[-4deg]">
        Rounded gradient borders on translucent containers re quite tricky,
        especially when the color stops are CSS variables.
        <p className="pt-2">
          This solution uses a pseudoelement and the CSS <code>mask</code>{" "}
          property.
        </p>
      </DevNote>
      <ol
        ref={containerRef}
        className="w-screen [&>*]:align-top [&>*]:inline-block overflow-x-auto pb-8 snap-x snap-mandatory ml-[50%] -translate-x-1/2 whitespace-nowrap px-[calc(50vw-50%)] scrollbar-none"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0 0 0/0), black 8%, black 92%, rgba(0 0 0 /0) 100%)",
          maskImage:
            "linear-gradient(to right, rgba(0 0 0/0), black 8%, black 92%, rgba(0 0 0 /0) 100%)",
        }}
      >
        <OpenSourceCard
          name="tailwind-material-colors"
          content="A TailwindCSS Plugin to generate dynamic color themes according to the Material Design guidelines."
          cta={<TryDynamicColor />}
          gradientColorStops="from-red-container to-green-container via-purple/20"
          className="shadow-purple-container/50 dark:shadow-purple/20"
          notes={
            <DevNote className="firefox-hidden absolute w-72 top-10 -right-1 rotate-[4deg]">
              The animated gradient button uses only a single HTML element and
              no Javascript. This was a self-imposed challenge and I must say
              I'm happy with the results.
            </DevNote>
          }
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
          gradientColorStops="from-outline to-tertiary-container"
          className="shadow-outline/20"
          notes={
            <DevNote className="absolute w-72 top-12 right-6 rotate-[-2deg]">
              Too often I needed an input field that wraps when it gets to a
              certain size, so I did some research and found a{" "}
              <a
                href="https://css-tricks.com/the-cleanest-trick-for-autogrowing-textareas"
                target="_blank"
              >
                nice technique
              </a>
              , which I then abstracted into a library.
            </DevNote>
          }
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
          gradientColorStops="to-primary-container from-primary"
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
          gradientColorStops="to-tertiary-container-dark from-tertiary-container-light"
          className="shadow-tertiary/20"
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
          gradientColorStops="from-secondary/60 to-primary/40"
          className="shadow-secondary-container/80"
        />
        <OpenSourceCard
          name="MTGBarato"
          content="I built a simple web app to help my local trading card game community."
          gradientColorStops="from-[#f6ad55] dark:from-bg-[#88501d] to-[#f6ad55] dark:to-bg-[#88501d]"
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
      <div className="relative flex justify-center gap-8 mt-4 -translate-y-4">
        <SquareButton
          onClick={goPrevious}
          label="Scroll left"
          tooltipPlacement="left"
        >
          <ChevronRight className="rotate-180" />
        </SquareButton>
        <SquareButton
          tooltipPlacement="right"
          onClick={goNext}
          label="Scroll right"
        >
          <ChevronRight />
        </SquareButton>
      </div>
    </div>
  );
}
