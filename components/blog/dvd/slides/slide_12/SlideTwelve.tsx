import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideTwelve() {
  return (
    <Slide className="flex flex-col items-center justify-center">
      <Paragraph>
        That's all for today's article. I hope you both enjoyed the visuals and
        learned something you might use for a more practical project.
      </Paragraph>
      <Paragraph>
        {/* TODO */}
        Here's a CODEPEN link to the final result, in case you want to play
        around with it.
      </Paragraph>
      <Paragraph>
        And because I can't fathom finishing this article without even
        mentioning corner hits, I've made a version with interactive parameters
        and a corner collision timer.
      </Paragraph>
      {/* TODO */}
    </Slide>
  );
}
