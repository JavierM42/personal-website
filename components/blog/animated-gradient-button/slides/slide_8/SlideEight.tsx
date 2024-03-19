import ExternalLink from "../../../../ExternalLink";
import Paragraph from "../../../Paragraph";
import Slide from "../../../Slide";

export default function SlideEight() {
  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      <Paragraph>
        I haven't shown any code snippets on this article because I wanted to
        focus on the underlying ideas rather than on implementation details.
      </Paragraph>
      <Paragraph>
        Now that you know how it works, here's a Codepen{" "}
        <ExternalLink href="https://codepen.io/JavierM42/pen/WNWGBGm?editors=1100">
          link
        </ExternalLink>{" "}
        to the final version, with none of the TailwindCSS and dark mode stuff
        you'd find if you inspected one of the buttons here.
      </Paragraph>
      <Paragraph>
        That's all for now. I hope you enjoyed this short article.
      </Paragraph>
      <Paragraph className="italic">
        P.S. There's a new comment section down below, powered by{" "}
        <ExternalLink href="https://utteranc.es/">utteranc.es</ExternalLink>. I
        loved the simplicity of it, it uses GitHub Issues as both a login system
        and a store.
      </Paragraph>
      <hr className="w-full h-px max-w-md mb-4 bg-on-surface" />
      <Paragraph>Published on March 19, 2024.</Paragraph>
    </Slide>
  );
}
