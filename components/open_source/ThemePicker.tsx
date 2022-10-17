import { useState } from "react";
import useDebouncedEffect from "use-debounced-effect";
import { updateTheme } from "tailwind-material-colors/lib/updateTheme.esm";
import hsl from "hsl-to-hex";

const ThemePicker = () => {
  const [hue, setHue] = useState(160);

  useDebouncedEffect(
    () => {
      updateTheme(
        {
          primary: hsl(hue, 20, 50),
        },
        "class"
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
      className="w-full h-2 rounded-full appearance-none focus:outline-none slider"
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
