import React from "react";
import { pageLayoutConfig } from "../../configs";
import { ThemeMode } from "../../context/ColorModeProvider";

type Props = {
  children: React.ReactNode;
  type: "primary" | "secondary";
  [key: string]: any;
};

const PageLayoutContainer = ({ children, type, ...props }: Props) => {
  const { mode } = React.useContext(ThemeMode);

  const { classes } = pageLayoutConfig[mode ?? "dark"]["primary"];

  return <div className={`${classes}`}>{children}</div>;
};

export default PageLayoutContainer;
