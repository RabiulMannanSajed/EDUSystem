import { Outlet, useLocation, useMatch } from "react-router-dom";
import TopNavbar from "../Shared/TopNavbar/TopNavbar";
import SideNavbar from "../Shared/SideNavbar/SideNavbar";
import DefaultNavbar from "../Shared/DefaultNavbar/DefaultNavbar";

const Main = () => {
  const location = useLocation();
  const isAfterMathRoute = useMatch("/afterMath/:id");

  console.log(location);
  //   this is use to find the location of the user if the user in those page then show sideNav
  const hideTheSideNav =
    location.pathname.includes("dashboard") ||
    location.pathname.includes("subjects") ||
    location.pathname.includes("/evaluation") ||
    location.pathname.includes("/profile") ||
    location.pathname.includes("support") ||
    location.pathname.includes("/recommendSubject") ||
    isAfterMathRoute;

  const noNavbar =
    location.pathname.includes("/") ||
    location.pathname.includes("/login") ||
    location.pathname.includes("/signUp");
  return (
    <div>
      {noNavbar && <TopNavbar />}
      {hideTheSideNav && <DefaultNavbar></DefaultNavbar>}
      {hideTheSideNav && <SideNavbar></SideNavbar>}
      <div className="bg-[#EFF0F6]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
