import CodeBlock from "../../CodeBlock";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideTen() {
  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      <Paragraph>
        I was really disappointed when that didn't work. Turns out we can't set{" "}
        <code className="whitespace-nowrap">--a</code> in an element that also
        uses its value.
      </Paragraph>
      <Paragraph>
        No problem, just add more <code>div</code>s:
      </Paragraph>
      <div className="p-1 text-sm border border-primary">
        .step
        <div className="p-1 text-[13px] border border-primary">
          .rename-variables
          <div className="p-1 text-[12px] border border-primary">
            .step
            <div className="p-1 text-[10px] border border-primary">
              .rename-variables
              <div className="p-1 text-[9.5px] border border-primary">
                .step
              </div>
            </div>
          </div>
        </div>
      </div>
      <Paragraph>
        We calculate the algorithm step on two new variables, then on the
        following element we assign the original ones back.
      </Paragraph>
      <CodeBlock
        isFirst
        isLast
        code={`.step {
  --a2: var(--b);
  --b2: mod(var(--a), var(--b));
}

.rename-variables {
  --a: var(--a2);
  --b: var(--b2);
}`}
      />
    </Slide>
  );
}
