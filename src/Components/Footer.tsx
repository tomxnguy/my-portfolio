import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

export default function Footer() {
  return (
    <div className="w-full h-[170px] flex flex-col items-center justify-center bg-cyan-950 text-white">
      <div className="flex gap-6 text-2xl">
        <a
          aria-label="Links to Thomas Nguyenlinkedin"
          href="https://www.linkedin.com/in/tomxnguy/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-140 duration-150 ease-in-out cursor-pointer"
        >
          <FaLinkedin />
        </a>
        <a
          aria-label="Links to Thomas Nguyen's GitHub"
          href="https://github.com/tomxnguy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-140 duration-150 ease-in-out cursor-pointer"
        >
          <FaGithub />
        </a>
        <a
          aria-label="Opens email to Thomas' email at tomxnguy"
          href="mailto:tomxnguy@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-140 duration-150 ease-in-out cursor-pointer"
        >
          <SiMinutemailer />
        </a>
      </div>
      <div>
        <p className="my-3">Please feel free to contact/follow</p>
      </div>
      <p className="text-xs">Thomas Nguyen © 2025</p>
    </div>
  );
}
