import Link from "next/link";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideTwo() {
  return (
    <Slide
      transparent
      noPadding
      className="flex flex-col items-center justify-center md:shadow-none"
    >
      <ul className="grid px-2 md:px-0 w-full gap-4 md:grid-cols-2 grid-rows-[1fr_1fr]">
        <li className="px-4 pt-4 shadow-md rounded-xl bg-surface/40">
          <div className="mb-2 text-2xl font-bold">⚠️ Math Warning</div>
          <Paragraph>
            There's a fair amount of math in this article. I'll explain it as
            clearly as I'm able.
          </Paragraph>
        </li>
        <li className="px-4 pt-4 shadow-md rounded-xl bg-surface/40">
          <div className="mb-2 text-2xl font-bold">
            ⚠️ Browser Support Warning
          </div>
          <Paragraph>
            The live demo only works on version Chrome 125 or newer. Visit{" "}
            <code>chrome://version</code> to check your current version.
          </Paragraph>
        </li>
        <li className="px-4 pt-4 shadow-md rounded-xl bg-surface/40">
          <div className="mb-2 text-2xl font-bold">⚠️ Sequel Warning</div>
          <Paragraph>
            Having read my{" "}
            <Link href="/blog/dvd">CSS-only DVD Screensaver article</Link> is
            recommended to fully understand the context of this article.
          </Paragraph>
        </li>
        <li className="px-4 pt-4 shadow-md rounded-xl bg-surface/40">
          <div className="mb-2 text-2xl font-bold">⚠️ Performance Warning</div>
          <Paragraph>
            Client-side performance for the demo isn't the best, but should work
            fine on faster devices.
          </Paragraph>
        </li>
      </ul>
    </Slide>
  );
}
