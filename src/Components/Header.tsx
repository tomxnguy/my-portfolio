import { Link, Outlet } from "react-router-dom";
import mylogo from "../assets/mylogo.png";
import mylogowhite from "../assets/mylogowhite.png";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useDarkMode } from "../Context/useDarkMode";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div>
      {/* Top Header */}
      <div
        className={`flex w-full h-18 items-center justify-between px-4 ${
          darkMode ? "bg-gray-800 text-white" : "bg-amber-200 text-black"
        }`}
      >
        {/* Left Logo */}
        <div className="flex items-center">
          <img
            src={darkMode ? mylogowhite : mylogo}
            alt="mylogo"
            className="w-22 h-22"
          />{" "}
        </div>

        {/* Navigation */}
        <ul className="hidden lg:flex space-x-8 items-center text-sm font-medium font-[Poppins]">
          <li>
            <Link
              to="/"
              className={`hover:shadow-xl hover:underline transition-shadow duration-300 ${
                darkMode ? "hover:text-amber-400" : "hover:text-gray-700"
              }`}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`hover:shadow-xl hover:underline transition-shadow duration-300 ${
                darkMode ? "hover:text-amber-400" : "hover:text-gray-700"
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className={`hover:shadow-xl hover:underline transition-shadow duration-300 ${
                darkMode ? "hover:text-amber-400" : "hover:text-gray-700"
              }`}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={`hover:shadow-xl hover:underline transition-shadow duration-300 ${
                darkMode ? "hover:text-amber-400" : "hover:text-gray-700"
              }`}
            >
              Skills
            </Link>
          </li>
        </ul>

        {/* Dark Mode Icon */}
        <div onClick={toggleDarkMode} className="cursor-pointer">
          {darkMode ? (
            <IoSunny className="text-3xl mr-2 hover:text-amber-400 transition-colors" />
          ) : (
            <IoMoon className="text-3xl mr-2 hover:text-gray-700 transition-colors" />
          )}
        </div>
      </div>

      {/* Small Screen Navigation */}
      <div
        className={`lg:hidden font-[Poppins] py-3 ${
          darkMode ? "bg-gray-800 text-white" : "bg-amber-200 text-black"
        }`}
      >
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
