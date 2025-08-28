import { experiences } from "../data/data";
import { useDarkMode } from "../Context/useDarkMode";

export default function Experience() {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`${
        darkMode ? "bg-zinc-950 text-white" : "bg-amber-100 text-black"
      } min-h-screen flex flex-col items-center p-6`}
    >
      <h1 className="text-4xl tracking-widest font-bold mb-6">Experience</h1>

      <div className="space-y-8 w-9/10">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`${
              darkMode
                ? "bg-zinc-800 text-white"
                : "bg-emerald-600 text-slate-800"
            } rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center gap-6`}
          >
            <img
              src={experience.logo}
              alt={`${experience.company} logo`}
              className="h-16 w-16 object-contain rounded-full"
            />

            <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between w-full">
              <div>
                <h2 className="text-2xl font-bold">{experience.role}</h2>
                <p className="text-sm font-semibold ">{experience.company}</p>
                <p className="text-sm text-gray-300">{experience.location}</p>
                <p className="text-sm mt-2">{experience.date}</p>
              </div>

              <ul className="mt-4 ml-4 md:mt-0 space-y-2 lg:w-5/8">
                {experience.description.map((desc, descIndex) => (
                  <li key={descIndex} className="text-sm">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
