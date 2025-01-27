import { useDarkMode } from "../Context/useDarkMode";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGithub,
  FaDocker,
  FaNpm,
  FaSlack,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql, BiLogoVisualStudio } from "react-icons/bi";
import { IoMdGitMerge } from "react-icons/io";

export default function Skills() {
  const { darkMode } = useDarkMode();

  const skills = [
    {
      title: "Frontend Technologies:",
      tech: [
        {
          name: "HTML",
          icon: <FaHtml5 className="text-[#E44D26] text-6xl md:text-7xl" />,
        },
        {
          name: "CSS",
          icon: <FaCss3Alt className="text-[#1572B6] text-6xl md:text-7xl" />,
        },
        {
          name: "Tailwind CSS",
          icon: (
            <SiTailwindcss className="text-[#38BDF8] text-6xl md:text-7xl" />
          ),
        },
        {
          name: "JavaScript",
          icon: (
            <IoLogoJavascript className="text-[#F7DF1E] text-6xl md:text-7xl" />
          ),
        },
        {
          name: "TypeScript",
          icon: (
            <SiTypescript className="text-[#3178C6] text-6xl md:text-7xl" />
          ),
        },
        {
          name: "React",
          icon: <FaReact className="text-[#61DAFB] text-6xl md:text-7xl" />,
        },
        {
          name: "Next.js",
          icon: (
            <TbBrandNextjs className="text-[#000000] text-6xl md:text-7xl" />
          ),
        },
      ],
    },
    {
      title: "Backend Technologies:",
      tech: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-[#8CC84B] text-6xl md:text-7xl" />,
        },
        {
          name: "Express",
          icon: <SiExpress className="text-[#000000] text-6xl md:text-7xl" />,
        },
        {
          name: "PostgreSQL",
          icon: (
            <BiLogoPostgresql className="text-[#336791] text-6xl md:text-7xl" />
          ),
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-[#47A248] text-6xl md:text-7xl" />,
        },
      ],
    },
    {
      title: "Deployment and DevOps:",
      tech: [
        {
          name: "AWS",
          icon: <FaAws className="text-[#FF9900] text-6xl md:text-7xl" />,
        },
        {
          name: "Vercel",
          icon: (
            <IoLogoVercel className="text-[#000000] text-6xl md:text-7xl" />
          ),
        },
        {
          name: "Docker",
          icon: <FaDocker className="text-[#2496ED] text-6xl md:text-7xl" />,
        },
        {
          name: "GitHub",
          icon: <FaGithub className="text-[#181717] text-6xl md:text-7xl" />,
        },
      ],
    },
    {
      title: "Tools and Collaboration:",
      tech: [
        {
          name: "VS Code",
          icon: (
            <BiLogoVisualStudio className="text-[#007ACC] text-6xl md:text-7xl" />
          ),
        },
        {
          name: "Git",
          icon: (
            <IoMdGitMerge className="text-[#F1502F] text-6xl md:text-7xl" />
          ),
        },
        {
          name: "NPM",
          icon: <FaNpm className="text-[#CB3837] text-6xl md:text-7xl" />,
        },
        {
          name: "Slack",
          icon: <FaSlack className="text-[#4A154B] text-6xl md:text-7xl" />,
        },
      ],
    },
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-gray-950 text-white" : "bg-amber-100 text-black"
      } min-h-screen flex flex-col items-center p-6`}
    >
      <h1 className="text-4xl font-bold mb-6 tracking-widest font-[Roboto]">
        Skills
      </h1>

      <div className="space-y-4 w-4/7 ">
        {skills.map((category, index) => (
          <div
            key={index}
            className={`${
              darkMode
                ? "bg-gray-800 text-white"
                : "bg-emerald-600 text-slate-800"
            } w-full py-6 rounded-xl`}
          >
            <h2 className="text-2xl font-semibold text-center mb-4">
              {category.title}
            </h2>

            <div className="flex flex-wrap justify-center gap-8">
              {category.tech.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="flex flex-col items-center space-y-2"
                >
                  <div className="flex justify-center items-center">
                    {tech.icon}
                  </div>
                  <p className="text-center">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
