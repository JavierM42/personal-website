import { FC } from "react";
import DarkModeToggle from "../DarkModeToggle";

export const NavBar: FC = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-40 flex items-center w-full px-4 shadow-xl h-14 shadow-primary/10 bg-surface/40 backdrop-blur">
      <div className="relative flex items-center flex-1 h-full gap-6">
        <a href="#" className="font-[Nunito] text-lg">
          javiermorales.dev
        </a>
        <a href="#work-experience">Work</a>
        <a href="#open-source">Open Source</a>
        <a href="#blog">Blog</a>
      </div>
      <DarkModeToggle />
    </div>
  );
};
