import { Outlet, useLocation } from "react-router-dom";
import TopNavbar from "../Shared/TopNavbar/TopNavbar";
import SideNavbar from "../Shared/SideNavbar/SideNavbar";

const Main = () => {
  const location = useLocation();
  console.log(location);
  //   this is use to find the location of the user if the user in those page then show sideNav
  const hideTheSideNav =
    location.pathname.includes("dashboard") ||
    location.pathname.includes("subjects") ||
    location.pathname.includes("/evaluation") ||
    location.pathname.includes("/profile");

  return (
    <div>
      <TopNavbar></TopNavbar>
      {hideTheSideNav && <SideNavbar></SideNavbar>}
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
