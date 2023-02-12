import React, { useEffect, useLayoutEffect, useState } from "react";
import { ThemeMode } from "../../context/ColorModeProvider";
import NavBarLayoutContainer from "../layout/NavBarLayoutContainer";
import MenuItems from "./MenuItems";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton } from "@mui/material";

const NavBar = () => {
  const [isFloating, setIsFloating] = useState<boolean>(false);
  const { addTheme, mode } = React.useContext(ThemeMode);

  const floatingHandler = () => {
    if (window.scrollY > 48) {
      setIsFloating(Boolean(true));
    } else {
      setIsFloating(Boolean(false));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", floatingHandler);
  }, []);

  return (
    <NavBarLayoutContainer floating={isFloating}>
      <div className="inline-block text-AntiFlashWhite font-bold">
        Alen Basar
      </div>
      <div>
        <MenuItems />
        <IconButton
          sx={{ color: "white" }}
          onClick={() => {
            localStorage.setItem(
              "theme-mode",
              localStorage.getItem("theme-mode") === "light" ? "dark" : "light"
            );
            addTheme(mode === "light" ? "dark" : "light");
          }}
        >
          {mode === "light" ? (
            <DarkModeIcon />
          ) : (
            <LightModeIcon /> ?? <LightModeIcon />
          )}
        </IconButton>
      </div>
    </NavBarLayoutContainer>
  );
};

export default NavBar;
