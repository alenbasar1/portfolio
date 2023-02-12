import React from "react";
import { createContext } from "react";

type Props = {
  children: React.ReactElement[] | React.ReactElement;
};

type Mode = {
  mode: "light" | "dark";
  addTheme: any;
};

export const ThemeMode = createContext<Mode>({
  mode: localStorage.getItem("theme-mode") as "light" | "dark",
  addTheme: () => {},
});

export default function ThemeModeProvider({
  children,
}: Props): React.ReactElement {
  const [mode, setTheme] = React.useState<"light" | "dark">(
    localStorage.getItem("theme-mode") as "light" | "dark"
  );

  const addAccount = (theme: "light" | "dark") => setTheme(theme);

  const contextValue = {
    mode: mode,
    addTheme: React.useCallback((theme: any) => addAccount(theme), []),
  };

  return (
    <ThemeMode.Provider value={contextValue}>{children}</ThemeMode.Provider>
  );
}
