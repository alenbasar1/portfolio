import React from "react";
import { PublicRoute } from "../route-types";

const Home = React.lazy(() => import("../../views"));
const About = React.lazy(() => import("../../views/pages/About"));
const Projects = React.lazy(() => import("../../views/pages/Projects"));
const Stack = React.lazy(() => import("../../views/pages/Stack"));
const Contact = React.lazy(() => import("../../views/pages/Contact"));

const publicRoutes: PublicRoute[] = [
  {
    url: "/",
    Component: Home,
  },
  {
    url: "/about",
    Component: About,
  },
  {
    url: "/projects",
    Component: Projects,
  },
  {
    url: "/stack",
    Component: Stack,
  },
  {
    url: "/Contact",
    Component: Contact,
  },
];

export default publicRoutes;
