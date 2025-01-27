import { Link, Outlet } from "react-router-dom";
import mylogo from "../assets/mylogo.png";
import { IoMoon } from "react-icons/io5";

export default function Header() {
  return (
    <div>
      <div className="flex w-full h-18 items-center justify-between bg-blue-200">
        <div className="items-center">
          <img src={mylogo} alt="mylogo" />
        </div>
        <div>
          <IoMoon className="text-3xl mr-2" />
        </div>
      </div>
      <div>
        <ul className="flex h-10 py-3 items-center justify-between text-xs bg-blue-300 ">
          <li className="flex ml-6 h-full">
            <Link to="/">About Me </Link>
          </li>
          <li className="flex h-full">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="flex h-full">
            <Link to="/experience">Experience</Link>
          </li>
          <li className="flex mr-6 h-full">
            <Link to="/skills">Skills</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
