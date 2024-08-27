import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <div className="w-[17%] bg-gray-500 absolute  rounded-md ml-[2%]">
      <ul className=" text-white space-y-16 p-5 font-bold text-xl text-center">
        <li>
          <div className="flex items-center">
            <MdOutlineDashboard />
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <TiDocumentText />
            <Link to="/subjects">Subjects</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <TiDocumentText />
            <Link to="/evaluation">Evaluation</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <CgProfile />
            <Link to="/profile">Profile Setting</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <RiCustomerService2Line />
            <Link to="/dashboardHome">Support & Help</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <IoIosLogOut />
            <Link to="/dashboardHome">Log Out</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
