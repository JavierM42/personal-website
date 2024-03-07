import Link from "next/link";
import { FC, useState } from "react";
import Switch from "../../Switch";
import { DevNote } from "./DevNote";
import { useDevNotesState } from "./useDevNotesState";

export const DevNotesSection: FC = () => {
  const showDevNotes = useDevNotesState();
  const [fastAnimation, setFastAnimation] = useState(false);

  return (
    <>
      <div className="relative z-10 max-w-md px-6 pt-3 pb-6 mx-auto shadow-xl shadow-tertiary-container bg-surface/50 rounded-xl">
        <p>
          I had a lot of fun building this website and getting to use a few
          techniques I've learned through the years, as well as some new browser
          features.
        </p>
        <p className="block lg:hidden">
          To see the dev notes, please use a larger screen. I'm sorry for the
          incovenience.
        </p>
        <p className="hidden lg:block">
          Toggle the switch to show floating developer notes.
        </p>
        <div className="justify-center hidden w-full lg:flex">
          <Link href={`?notes=${!showDevNotes}`} scroll={false}>
            <Switch
              tooltip={showDevNotes ? "Hide dev notes" : "Show dev notes"}
              tooltipPlacement="right"
              isOn={showDevNotes}
            />
          </Link>
        </div>
        <DevNote className="absolute w-72 -top-40 -right-64 rotate-[-3deg]">
          There's a very subtle animation on the gradient background. Animating
          gradients was not possible until recently. The new{" "}
          <code>@property</code> rule can now animate CSS variables (not in
          Firefox yet, though).
          <div className="mt-4">
            If you're having trouble seeing the animation, toggle the switch to
            speed it up.
          </div>
          <div className="flex justify-center mt-4">
            <Switch
              isOn={fastAnimation}
              tooltip="Fast background animation"
              tooltipPlacement={"right"}
              noIcon
              onClick={() => {
                setFastAnimation((isFast) => {
                  const newValue = !isFast;
                  document.documentElement.style.setProperty(
                    "--gradient-animation-duration",
                    newValue ? "1s" : "10s"
                  );
                  return newValue;
                });
              }}
            />
          </div>
        </DevNote>
      </div>
      <div className="flex justify-center w-full h-24 gap-10 mt-12">
        <DevNote className="w-48 rotate-[-2deg] h-fit -mt-5">
          Tech stack:
          <ul className="pl-4 list-disc">
            <li>React</li>
            <li>NextJS</li>
            <li>TypeScript</li>
            <li>TailwindCSS</li>
            <li>Framer Motion</li>
            <li>Floating UI</li>
            <li>A couple of my libraries</li>
            <li>Hosted on Vercel</li>
          </ul>
        </DevNote>
        <DevNote className="w-64 rotate-[1deg] h-fit">
          NextJS does most of the heavy lifting regarding performance. As of my
          last check, Lighthouse page load performance scores were 99 on desktop
          and 85 on mobile. The latter is not ideal and definitely something to
          improve upon.
        </DevNote>
        <DevNote className="w-64 rotate-[-3deg] h-fit -mt-4">
          I'm a fan of motion animations, but not everyone is. This website
          supports the <code>prefers-reduced-motion</code> feature, which
          disables all but some opacity-based animations when set to{" "}
          <code>reduce</code>.
        </DevNote>
      </div>
    </>
  );
};
