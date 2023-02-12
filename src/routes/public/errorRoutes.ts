import React from "react";
import { PublicRoute } from "../route-types";

const NotFound = React.lazy(() => import("../../views/error/NotFound"));

const errorRoutes: PublicRoute[] = [
  {
    url: "*",
    Component: NotFound,
  },
];

export default errorRoutes;
