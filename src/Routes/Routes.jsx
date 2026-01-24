import React from "react";
import { useRoutes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Landing from "../pages/Landing";
import AuthPages from "../pages/LoginSignup";

const AppRoutes = () => {
  const routes = [
    {
      path: "/login",
      element: <AuthPages />,
    },
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ];

  return useRoutes(routes);
};

export default AppRoutes;
