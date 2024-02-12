import ExternalLink from "../../../../ExternalLink";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideFourteen() {
  return (
    <Slide className="flex flex-col items-center justify-center">
      <h2 className="mb-2">Note</h2>
      <Paragraph>
        In the future you may see more animated CSS properties out in the wild
        thanks to the new <code>@property</code> syntax. Interpolation is still{" "}
        <ExternalLink href="https://caniuse.com/mdn-css_at-rules_property">
          not supported on Firefox
        </ExternalLink>{" "}
        as of February 2024.
      </Paragraph>
      <Paragraph className="mb-8">
        As a matter of fact, I'm already using CSS variable interpolation in the
        animated background of this site. The background defaults to a static
        version on browsers that don't support it.
      </Paragraph>
      <hr className="w-full h-px max-w-md mb-4 bg-on-surface" />
      <h2 className="mb-2">Sources</h2>
      <ul className="max-w-lg mb-8 list-disc">
        <li>
          <Paragraph>
            CRT display effect on first slide adapted from{" "}
            <ExternalLink href="https://aleclownes.com/2017/02/01/crt-display.html">
              this article
            </ExternalLink>{" "}
            by Alec Lownes.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            Corner hit calculations by David Vreken at{" "}
            <ExternalLink href="https://aleclownes.com/2017/02/01/crt-display.html">
              The Lost Math Lessons
            </ExternalLink>
            .
          </Paragraph>
        </li>
        <li>
          "Five minutes later" card from{" "}
          <ExternalLink href="https://spongebob.gavinr.com/">
            SpongeBob Time Cards Generator
          </ExternalLink>{" "}
          by Gavin Rehkemper.
        </li>
      </ul>
      <hr className="w-full h-px max-w-md mb-4 bg-on-surface" />
      <Paragraph>Published on February 14, 2024.</Paragraph>
      {/* TODO update date */}
    </Slide>
  );
}
