import { Link, Outlet } from "react-router-dom";
import mylogo from "../assets/mylogo.png";
import { IoMoon } from "react-icons/io5";

export default function Header() {
  return (
    <div>
      {/* Top Header */}
      <div className="flex w-full h-18 items-center justify-between bg-blue-200 px-4">
        {/* Left Logo */}
        <div className="flex items-center">
          <img src={mylogo} alt="mylogo" className="w-12 h-12" />
        </div>

        {/* Navigation */}
        <ul className="hidden lg:flex space-x-8 items-center text-sm font-medium">
          <li>
            <Link to="/">About Me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
        </ul>

        {/* Dark Mode Icon */}
        <div>
          <IoMoon className="text-3xl mr-2" />
        </div>
      </div>

      {/* Small Screen Navigation */}
      <div className="lg:hidden bg-blue-300 py-3">
        <ul className="flex justify-around text-xs">
          <li>
            <Link to="/">About Me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}
