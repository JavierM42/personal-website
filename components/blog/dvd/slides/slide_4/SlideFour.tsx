import ColorAnimation from "../../ColorAnimation";
import DvdScreensaver from "../../DvdScreensaver";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideFour() {
  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      <Paragraph>
        My strategy to reverse engineer an animation is always the same: good
        old <span className="italic">divide and conquer</span>:
      </Paragraph>
      <div className="grid grid-cols-[auto_auto_auto_auto_auto] gap-4 items-center my-12">
        <div className="space-y-2">
          <div className="border shadow w-fit h-fit bg-surface/30 border-surface">
            <DvdScreensaver width={180} height={135} />
          </div>
          <div className="text-center">The whole thing</div>
        </div>
        <div className="mb-10 text-3xl font-bold text-on-surface">=</div>
        <div className="space-y-2">
          <div className="border shadow w-fit h-fit bg-surface/30 border-surface">
            <DvdScreensaver width={180} height={135} colors={false} />
          </div>
          <div className="text-center">Bounce around</div>
        </div>
        <div className="mb-10 text-3xl font-bold text-on-surface">+</div>
        <div className="space-y-2">
          <ColorAnimation width={135} height={135} />
          <div className="text-center">Change colors</div>
        </div>
      </div>
      <p className="max-w-md text-justify">
        Let's focus on the movement. Can we divide it further?
      </p>
    </Slide>
  );
}
