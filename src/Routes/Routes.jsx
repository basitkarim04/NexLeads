import React from "react";
import { useRoutes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Landing from "../pages/Landing";

const AppRoutes = () => {
  const routes = [
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/dashboard/*",
      element: <Dashboard />,
    },
  ];

  return useRoutes(routes);
};

export default AppRoutes;
