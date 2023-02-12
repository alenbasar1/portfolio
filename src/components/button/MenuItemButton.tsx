import React from "react";
import { menuItemButtonConfig } from "../../configs";
import { ThemeMode } from "../../context/ColorModeProvider";

type Props = {
  children: React.ReactNode;
  isActive: boolean;
  type: "primary" | "secondary";
  [key: string]: any;
};

const MenuItemButton = ({ children, isActive, type, ...props }: Props) => {
  const { mode } = React.useContext(ThemeMode);

  const { classes } =
    menuItemButtonConfig[mode][type][isActive ? "active" : "inactive"];

  return <button className={classes}>{children}</button>;
};

export default MenuItemButton;
