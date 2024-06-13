import CodeBlock from "../../CodeBlock";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideNine() {
  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      <Paragraph>
        Well, there's no arbitrary recursion in CSS, but nothing stops me from
        nesting a bunch of <code>div</code>s like this:
      </Paragraph>
      <div className="p-1 text-sm border border-primary">
        .step
        <div className="p-1 text-[13px] border border-primary">
          .step
          <div className="p-1 text-[12px] border border-primary">
            .step
            <div className="p-1 text-[10px] border border-primary">
              .step
              <div className="p-1 text-[9.5px] border border-primary">
                .step
              </div>
            </div>
          </div>
        </div>
      </div>
      <Paragraph>
        If we made every <code>.step</code> element calculate one step of the
        algorithm over two CSS variables <code>--a</code> and <code>--b</code>,
        we could be onto something.
      </Paragraph>
      <CodeBlock
        isFirst
        isLast
        code={`.step {
  --a: var(--b);
  --b: mod(var(--a), var(--b));
}`}
      />
    </Slide>
  );
}
