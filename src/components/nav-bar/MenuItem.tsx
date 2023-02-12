import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../button/Button";
import MenuItemButton from "../button/MenuItemButton";

type MenuItemProps = {
  url: string;
  title: string;
  id: string;
};

type MenuItemLinkProps = {
  to: string;
  primary: string;
  crtPath: string;
  isActive: boolean;
  [key: string]: any;
};

const MenuItem = ({ url, title, id }: MenuItemProps) => {
  const { pathname } = useLocation();

  return (
    <MenuItemLink
      id={id}
      to={url}
      primary={title}
      crtPath={pathname}
      isActive={pathname === url}
    />
  );
};

const MenuItemLink = ({
  to,
  id,
  primary,
  crtPath,
  isActive,
  ...props
}: MenuItemLinkProps) => {
  return (
    <Link
      title={primary}
      to={to}
      target={["resume"].includes(id) ? "_blank" : "_self"}
    >
      <Button
        isActive={isActive}
        type={["resume", "contact"].includes(id) ? "primary" : "secondary"}
        onClick={() => {
          if (isActive) {
            location.reload();
          }
        }}
      >
        {primary}
      </Button>
    </Link>
  );
};

export default MenuItem;
