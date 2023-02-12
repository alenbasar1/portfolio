import React from "react";
import { Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/MainLayout";
import errorRoutes from "./public/errorRoutes";
import publicRoutes from "./public/publicRoutes";
import { PublicRoute } from "./route-types";

const AppRoutes = () => {
  const availableRoutes = [...publicRoutes];

  return (
    <Routes>
      {errorRoutes.map((errorRoute: PublicRoute) => (
        <Route
          key={errorRoute.url}
          path={errorRoute.url}
          element={
            <React.Suspense>
              <errorRoute.Component />
            </React.Suspense>
          }
        />
      ))}
      {availableRoutes.map((route: any) => (
        <Route
          key={route.url}
          path={route.url}
          element={
            <React.Suspense fallback={<div>loading...</div>}>
              <PageLayout>
                <route.Component />
              </PageLayout>
            </React.Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
