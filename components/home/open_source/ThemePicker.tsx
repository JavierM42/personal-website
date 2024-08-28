import hsl from "hsl-to-hex";
import { useState } from "react";
import { updateTheme } from "tailwind-material-colors/lib/updateTheme.esm";
import useDebouncedEffect from "use-debounced-effect";

const ThemePicker = () => {
  const [hue, setHue] = useState(83);

  useDebouncedEffect(
    () => {
      updateTheme(
        {
          primary: hsl(hue, 20, 50),
        },
        "class",
        "tonalSpot"
      );
    },
    100,
    [hue]
  );

  return (
    <input
      type="range"
      min="0"
      max="360"
      className="w-full h-2 rounded-full appearance-none focus:outline-none color-slider"
      style={
        {
          background:
            "linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(0, 100%, 50%))",
          "--hue": hue,
        } as any
      }
      value={hue}
      onChange={(event) => setHue(parseInt(event.target.value))}
    />
  );
};

export default ThemePicker;
