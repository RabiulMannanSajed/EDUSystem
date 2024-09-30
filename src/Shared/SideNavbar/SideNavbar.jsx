import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <div className="w-[17%] bg-white  absolute  rounded-md ml-[2%]">
      <ul className=" text-white space-y-16 p-5 font-bold text-xl text-center">
        <li>
          <div className="flex items-center text-[#5A616C]">
            <MdOutlineDashboard />
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center text-[#5A616C]">
            <TiDocumentText />
            <Link to="/subjects">Subjects</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center text-[#5A616C]">
            <TiDocumentText />
            <Link to="/evaluation">Evaluation</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center text-[#5A616C]">
            <CgProfile />
            <Link to="/profile">Profile Setting</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center text-[#5A616C]">
            <RiCustomerService2Line />
            <Link to="/support">Support & Help</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center text-[#5A616C]">
            <IoIosLogOut />
            <Link to="/dashboardHome">Log Out</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
