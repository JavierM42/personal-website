import ExternalLink from "../../../../ExternalLink";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideTwelve() {
  return (
    <Slide className="flex flex-col items-center justify-center">
      <Paragraph>
        I hope you both enjoyed the article and learned something you might use
        for a more practical project.
      </Paragraph>
      <Paragraph>
        Here's a{" "}
        <ExternalLink href="https://codepen.io/JavierM42/pen/wvOxaRK">
          Codepen link
        </ExternalLink>{" "}
        to the final result.
      </Paragraph>
      <Paragraph>
        And just because I can't fathom finishing this article without even
        mentioning corner hits, I've made a version with interactive parameters
        and a corner collision calculator. See it in the next slide.
      </Paragraph>
    </Slide>
  );
}
