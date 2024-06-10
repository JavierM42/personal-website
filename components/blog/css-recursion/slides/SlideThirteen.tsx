import ExternalLink from "../../../ExternalLink";
import CodeBlock from "../../CodeBlock";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideThirteen() {
  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      <Paragraph>
        <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries">
          Container queries
        </ExternalLink>{" "}
        (also a new browser feature) allow us to define an element as a{" "}
        <em className="italic">container</em>, then any children rules who use
        the <code>@container</code> directive will query the nearest{" "}
        <em className="italic">container</em> ancestor.
      </Paragraph>
      <CodeBlock
        isFirst
        isLast
        code={`@container (min-width: 1px) {
  .step {
    --a2: var(--b);
    --b2: mod(var(--a), var(--b));
    width: calc(var(--b2) * 1px);
    container-type: inline-size;
}

.rename-variables {
  --a: var(--a2);
  --b: var(--b2);
}`}
      />
      <Paragraph>
        Each <code>.step</code> element defines itself as a container and sets
        its own <code>width</code> to the value of <code>b</code>. Visually,
        this is irrelevant, since it's a fully transparent element.
      </Paragraph>
      <Paragraph>
        However, the following step's rule will only run if the container width
        is <code>1px</code> or larger, meaning it will stop the execution when
        it needs to.
      </Paragraph>
    </Slide>
  );
}
