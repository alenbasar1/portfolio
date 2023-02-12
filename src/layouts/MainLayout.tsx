import { Box } from "@mui/system";
import React from "react";
import PageLayoutContainer from "../components/layout/PageLayoutContainer";
import ScrollToTop from "../components/layout/ScrollToTop";
import NavBar from "../components/nav-bar/NavBar";

type Props = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <PageLayoutContainer type="primary">
        <ScrollToTop>{children}</ScrollToTop>
      </PageLayoutContainer>
    </>
  );
};

export default PageLayout;
