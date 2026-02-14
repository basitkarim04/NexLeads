import React from "react";
import { useRoutes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Landing from "../pages/Landing";
import AuthPages from "../pages/LoginSignup";
import AdminPanel from "../pages/admin";

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
    {
      path: "/admin-dashboard",
      element: <AdminPanel />,
    },
  ];

  return useRoutes(routes);
};

export default AppRoutes;
