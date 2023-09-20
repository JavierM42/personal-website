import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { SquareButton } from "./SquareButton";

type ColorScheme = "light" | "dark";

export default function DarkModeToggle() {
  // Get browser color scheme reactively from prefers-color-scheme media query
  const [browserColorScheme, setBrowserColorScheme] = useState<
    ColorScheme | undefined
  >();
  useEffect(() => {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const lightQuery = window.matchMedia("(prefers-color-scheme: light)");

    const darkListener = ({ matches }: MediaQueryListEvent) => {
      if (matches) {
        setBrowserColorScheme("dark");
      }
    };
    const lightListener = ({ matches }: MediaQueryListEvent) => {
      if (matches) {
        setBrowserColorScheme("light");
      }
    };

    darkQuery.addEventListener("change", darkListener);
    lightQuery.addEventListener("change", lightListener);

    return () => {
      darkQuery.removeEventListener("change", darkListener);
      lightQuery.removeEventListener("change", lightListener);
    };
  }, [setBrowserColorScheme]);

  const [userColorScheme, setUserColorScheme] = useState<ColorScheme | null>(
    null
  );

  const colorScheme = userColorScheme || browserColorScheme || "light";

  useEffect(() => {
    if (colorScheme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [colorScheme]);

  const shouldReduceMotion = useReducedMotion();

  return (
    <SquareButton
      label="Toggle dark mode"
      onClick={() =>
        setUserColorScheme(colorScheme === "dark" ? "light" : "dark")
      }
      tooltipPlacement="left"
    >
      <motion.svg
        viewBox="0 0 40 40"
        strokeWidth="2.5"
        className="w-6 h-6 stroke-primary"
        strokeLinecap="round"
        animate={colorScheme}
        fill="none"
      >
        <motion.circle
          r={10}
          cx="20"
          cy="20"
          fill="none"
          variants={{
            light: { r: 10 },
            dark: { r: 19 },
          }}
          transition={shouldReduceMotion ? { duration: 0 } : undefined}
        />
        <motion.path
          d="M19,1.25 a 14 19 0 0 1 0 37.5"
          variants={{
            light: { opacity: 0 },
            dark: { opacity: 1 },
          }}
          transition={shouldReduceMotion ? { duration: 0 } : undefined}
        />
        <motion.line
          x1="20"
          x2="20"
          y1="7"
          y2="1"
          variants={{
            light: { opacity: 1 },
            dark: { opacity: 0 },
          }}
          transition={shouldReduceMotion ? { duration: 0 } : undefined}
        />
        <motion.line
          x1="10.5"
          x2="7"
          y1="10.5"
          y2="7"
          variants={{
            light: { opacity: 1 },
            dark: { opacity: 0 },
          }}
          transition={shouldReduceMotion ? { duration: 0 } : undefined}
        />
        <motion.line
          x1="7"
          x2="1"
          y1="20"
          y2="20"
          variants={{
            light: { opacity: 1 },
            dark: { opacity: 0 },
          }}
          transition={shouldReduceMotion ? { duration: 0 } : undefined}
        />
        <motion.line
          x1="10.5"
          x2="7"
          y1="29.5"
          y2="33"
          variants={{
            light: { opacity: 1 },
            dark: { opacity: 0 },
          }}
          transition={shouldReduceMotion ? { duration: 0 } : undefined}
        />
        <motion.line
          x1="20"
          x2="20"
          y1="33"
          y2="39"
          variants={{
            light: { opacity: 1 },
            dark: { opacity: 0 },
          }}
          transition={shouldReduceMotion ? { duration: 0 } : undefined}
        />
        <motion.line
          x1="29.5"
          x2="33"
          y1="29.5"
          y2="33"
          variants={{
            light: { opacity: 1 },
            dark: { opacity: 0 },
          }}
          transition={shouldReduceMotion ? { duration: 0 } : undefined}
        />
        <motion.line
          x1="33"
          x2="39"
          y1="20"
          y2="20"
          variants={{
            light: { opacity: 1 },
            dark: { opacity: 0 },
          }}
          transition={shouldReduceMotion ? { duration: 0 } : undefined}
        />
        <motion.line
          x1="29.5"
          x2="33"
          y1="10.5"
          y2="7"
          variants={{
            light: { opacity: 1 },
            dark: { opacity: 0 },
          }}
          transition={shouldReduceMotion ? { duration: 0 } : undefined}
        />
      </motion.svg>
    </SquareButton>
  );
}
