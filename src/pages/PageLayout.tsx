import { Outlet } from "react-router-dom";
import { NavHeader } from "../components";
import { NavLogo } from "../components/NavLogo";

export const PageLayout = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="stars-bg"></div>
      <div className="stars-bg-twinkling"></div>
      <div className="moving-clouds"></div>

      <NavHeader />
      <NavLogo />
      <Outlet />
    </div>
  );
};