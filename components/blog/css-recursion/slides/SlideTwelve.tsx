import WithTooltip from "../../../WithTooltip";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideTwelve() {
  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      <Paragraph>
        That's not exactly true: if you've ever styled a responsive application,
        you've used media queries, which allow us to conditionally apply some
        styles.
      </Paragraph>
      <Paragraph>
        Hold on, we want to conditionally apply the step if the previous step's{" "}
        <code>b</code> value is not <code>0</code>, and media queries query the
        viewport, not the parent element...
      </Paragraph>
      <Paragraph>
        We can use{" "}
        <WithTooltip text="Just a joke, but I guess it would work since media queries within an iframe check against the iframe's dimensions...">
          <em className="line-through">iframes</em>
        </WithTooltip>{" "}
        container queries, of course.
      </Paragraph>
    </Slide>
  );
}
