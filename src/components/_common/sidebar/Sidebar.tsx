import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";
import { SidebarRoutes } from "../../../constants/SidebarRoutes";
import { ROUTES } from "../../../constants/Routes";

const Sidebar = () => {
  const location = useLocation();
  const out = () => {
    localStorage.clear();
  };
  return (
    <div className="sidebar">
      <div className="sidebar__links">
        {SidebarRoutes.map(({ path, title }, index) => {
          return (
            <Link
              key={index}
              className={
                location.pathname === path ? "active" : "sidebar__link"
              }
              to={path}
            >
              {title}
            </Link>
          );
        })}
      </div>
      <div className={"logUut"}>
        <Link to={ROUTES.LOGIN} className={"link"} onClick={out}>
          Log out
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
