import Image from "next/image";
import Slide from "../../Slide";
import Paragraph from "../../Paragraph";

export default function SlideTwo() {
  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      <Paragraph>
        I hope the retro monitor effect wasn't too hard on your eyes. No more of
        that, I promise. It was just a fun little extra for the title slide.
      </Paragraph>
      <Paragraph>
        The story of this article starts with some random conversation at the
        office:
      </Paragraph>
      <div className="max-w-xl space-y-4">
        <div className="flex items-end justify-end gap-2 pl-4 md:pl-20">
          <p className="px-4 py-2 rounded-br-none shadow-lg md:mb-8 shadow-primary-light/20 rounded-3xl bg-primary-container">
            I just center divs for a living
          </p>
          <div className="w-8 h-8 rounded-full shadow-md md:w-16 md:h-16 shrink-0">
            <Image
              src="/javi.jpg"
              width="64"
              height="64"
              className="w-16 h-16 rounded-full"
            />
          </div>
        </div>
        <div className="flex items-end gap-2 pr-4 md:pr-20">
          <div className="flex items-center justify-center w-8 h-8 text-xs rounded-full shadow-md md:text-lg md:w-16 md:h-16 bg-surface/90 shrink-0 text-on-surface/60">
            E.M.
          </div>
          <p className="flex items-center px-4 py-2 rounded-bl-none shadow-lg md:mb-8 rounded-3xl bg-surface/90">
            Yeah, but five minutes later, you've got those divs bouncing around
            like the old DVD screensaver.
          </p>
        </div>
      </div>
    </Slide>
  );
}
