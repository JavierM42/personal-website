import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideFourteen() {
  return (
    <Slide className="flex flex-col items-center justify-center">
      <h2 className="mb-2">Conclusion</h2>
      <Paragraph>Just because you can, it doesn't mean you should.</Paragraph>
      <Paragraph>
        This was only an experiment to push the boundaries of what can be
        programmed with CSS. I felt <em className="italic">dirty</em> after
        writing the words{" "}
        <em className="italic">"No problem, just add more divs"</em>. Don't
        quote me on thatm, and please try to avoid unnecessary nesting in your
        HTML.
      </Paragraph>
      <Paragraph>
        I can't think of any practical uses for this, but I'd love to hear about
        them if you find any.
      </Paragraph>
      <Paragraph>
        I hope you enjoyed the article and thought{" "}
        <em className="italic">"that's... creative"</em> at least once while you
        read it. Thanks for reading!
      </Paragraph>
      <hr className="w-full h-px max-w-md mb-4 bg-on-surface" />
      <Paragraph>Published on June 10, 2024.</Paragraph>
    </Slide>
  );
}
