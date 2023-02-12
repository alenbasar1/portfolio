import React from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
