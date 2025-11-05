import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard1 from "../components/main-dashbord/Sidebar-box/Dashboard1";
import Dashboard2 from "../components/main-dashbord/Sidebar-box/Dashboard2";
import Dashboard from "../components/main-dashbord/Sidebar-box/Dashboard";




const DashboardRoutes = () => {
  return (
    // ts
    <Routes>
      <Route path="/" element={<Dashboard />} />

            {/* <Route path="/ScheduleDate" element={<Dashboard2 />} /> */}

    </Routes>
  );
};

export default DashboardRoutes;
