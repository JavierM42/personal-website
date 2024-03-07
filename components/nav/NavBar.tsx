import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import DarkModeToggle from "../DarkModeToggle";
import Switch from "../Switch";
import { DevNote } from "../home/dev_notes/DevNote";
import Link from "next/link";

type Props = {
  children?: ReactNode;
};

export const NavBar: FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center w-full gap-4 px-4 shadow-xl h-14 shadow-primary/10 bg-surface/40 backdrop-blur">
      <div className="relative flex items-center flex-1 h-full gap-6 overflow-x-clip">
        <Link href="/">
          <span className="font-[Nunito] text-lg hover:underline text-primary cursor-pointer">
            javiermorales.dev
          </span>
        </Link>
        {children}
      </div>
      <AnimatePresence>
        {router.query.notes && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Link
              href={`?notes=${router.query.notes !== "true"}`}
              scroll={false}
            >
              <Switch
                tooltip="Hide dev notes"
                tooltipPlacement="left"
                isOn={router.query.notes === "true"}
              />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <DarkModeToggle />
      <DevNote className="absolute w-56 top-16 right-3 rotate-[2deg]">
        The dark mode toggle adds or removes the <code>dark</code> class to the
        body, which is then picked up by the{" "}
        <code>tailwind-mode-aware-colors</code> plugin. I set the default mode
        with the <code>prefers-color-scheme</code> media query.
      </DevNote>
    </header>
  );
};
