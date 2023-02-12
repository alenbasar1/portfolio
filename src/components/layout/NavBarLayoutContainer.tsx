import React from "react";
import { navbarConfig } from "../../configs";
import { ThemeMode } from "../../context/ColorModeProvider";

type Props = {
  children: React.ReactNode;
  floating: boolean;
  type?: "primary" | "secondary";
  [key: string]: any;
};

const NavBarLayoutContainer = ({ children, type, floating }: Props) => {
  const { mode } = React.useContext(ThemeMode);

  const { classes } =
    navbarConfig[mode][type ?? "primary"][floating ? "float" : "fixed"];

  return <div className={`${classes}`}>{children}</div>;
};

export default NavBarLayoutContainer;
