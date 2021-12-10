import React from "react";
import "./Layout.scss";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={"layout__container"}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
