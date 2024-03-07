import { CSSProperties, FC, ReactNode } from "react";
import { NavBar } from "./nav/NavBar";
import { DevNote } from "./home/dev_notes/DevNote";

type Props = {
  children: ReactNode;
  navbarContent: ReactNode;
};

const Layout: FC<Props> = ({ children, navbarContent }) => {
  return (
    <>
      <div
        className="fixed inset-0 bg-animated-gradient bg-gradient-to-br from-primary-container to-primary-container -z-1 dark:opacity-40"
        style={
          {
            "--tw-gradient-via": "rgb(var(--color-tertiary-container) / 1)",
          } as CSSProperties
        }
      />
      <header>
        <NavBar>{navbarContent}</NavBar>
      </header>
      {children}
    </>
  );
};

export default Layout;
