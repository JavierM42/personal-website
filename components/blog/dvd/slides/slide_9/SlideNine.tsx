import Image from "next/image";
import Slide from "../../Slide";

export default function SlideNine() {
  return (
    <Slide className="flex flex-col items-center justify-center">
      <div className="max-w-xl space-y-4">
        <div className="flex items-end gap-2 pr-20">
          <p className="flex items-center px-4 py-2 rounded-bl-none shadow-lg rounded-3xl bg-surface/90">
            How can we do this for all four walls?
          </p>
        </div>
        <div className="flex items-end justify-end gap-2 pl-20">
          <p className="px-4 py-2 mb-8 rounded-br-none shadow-lg shadow-primary-light/20 rounded-3xl bg-primary-container">
            We animate two CSS variables, then define our <code>hue</code> based
            on a linear combination of both.
          </p>
          <div className="w-16 h-16 rounded-full shadow-md shrink-0">
            <Image
              src="/javi.jpg"
              width="64"
              height="64"
              className="w-16 h-16 rounded-full"
            />
          </div>
        </div>
        <div className="flex items-end gap-2 pr-20">
          <p className="flex items-center px-4 py-2 rounded-bl-none shadow-lg rounded-3xl bg-surface/90">
            Animate CSS variables? Can you even do that?
          </p>
        </div>
        <div className="flex items-end justify-end gap-2 pl-20">
          <p className="px-4 py-2 mb-8 rounded-br-none shadow-lg shadow-primary-light/20 rounded-3xl bg-primary-container">
            Well, yes, but it's something you hardly ever see because they don't
            behave how you expect.
          </p>
          <div className="w-16 h-16 rounded-full shadow-md shrink-0">
            <Image
              src="/javi.jpg"
              width="64"
              height="64"
              className="w-16 h-16 rounded-full"
            />
          </div>
        </div>
      </div>
      {/* TODO */}
      {/* <p>(Unless you use the new @property rule and only on some browsers)</p> */}
      {/* https://caniuse.com/mdn-css_at-rules_property */}
    </Slide>
  );
}
