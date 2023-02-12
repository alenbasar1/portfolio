import React from "react";

export type PublicRoute = {
  url: string;
  Component: React.LazyExoticComponent<(props: any) => JSX.Element>;
};
