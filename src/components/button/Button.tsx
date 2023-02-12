import React from "react";
import { buttonConfig } from "../../configs";

type Props = {
  children: React.ReactNode;
  isActive: boolean;
  type?: "primary" | "secondary";
  [key: string]: any;
};

const Button = ({
  children,
  padding,
  type,
  margin,
  isActive,
  ...props
}: Props) => {
  const { classes } =
    buttonConfig[type ?? "primary"][isActive ? "active" : "inactive"];

  return (
    <button className={`p-1 ml-1 ${classes} `} {...props}>
      {children}
    </button>
  );
};

export default Button;
