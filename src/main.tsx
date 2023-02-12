import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeModeProvider from "./context/ColorModeProvider";
import "./index.css";

localStorage.setItem(
  "theme-mode",
  localStorage.getItem("theme-mode") ?? "dark"
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeModeProvider>
      <App />
    </ThemeModeProvider>
  </React.StrictMode>
);
