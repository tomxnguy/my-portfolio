import { aboutMe } from "../data/data";
import { AboutMeType } from "../data/types";
import profilepicture from "../assets/profilepicture.png";
import classphoto from "../assets/classphoto.jpg";
import { motion } from "framer-motion";
import { useDarkMode } from "../Context/useDarkMode";

export default function About() {
  const about: AboutMeType = aboutMe[0];
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`${
        darkMode ? "bg-zinc-950 text-white" : "bg-amber-100 text-black"
      } min-h-screen`}
    >
      <section
        className={`font-sans flex flex-col items-center ${
          darkMode ? "bg-neutral-800" : "bg-emerald-200"
        } max-w-3xl mx-auto`}
      >
        <motion.h1
          className="text-5xl tracking-widest font-[Urbanist] font-bold my-4 text-center rounded-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          {about.name}
        </motion.h1>
        <motion.img
          className="w-64 h-64 rounded-full mb-6"
          src={profilepicture}
          alt="profilepic"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
        />
        <motion.h2
          className={`text-xl font-[Roboto] w-full font-semibold mb-2 p-4 text-center ${
            darkMode ? "bg-gray-700" : "bg-orange-300"
          }`}
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0 }}
        >
          {about.title}
        </motion.h2>
        <motion.p
          className="text-md p-6 font-[Poppins] text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          {about.description}
        </motion.p>

        <motion.h2
          className={`text-xl font-[Roboto] w-full font-semibold mb-4 p-4 text-center ${
            darkMode ? "bg-gray-700" : "bg-orange-300"
          }`}
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0 }}
        >
          Highlights
        </motion.h2>
        <div className="w-3/4">
          <motion.img
            className="rounded-md mb-2"
            src={classphoto}
            alt="classphoto"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0 }}
          />
        </div>
        <motion.ul
          className="list-disc font-[Poppins] list-inside ml-2 mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          {about.highlights.map((highlight, index) => (
            <motion.li
              key={index}
              className="text-base m-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, delay: index * 0.3 }}
            >
              {highlight}
            </motion.li>
          ))}
        </motion.ul>

        <motion.h2
          className={`text-xl font-[Roboto] w-full font-semibold mb-2 mt-4 p-4 text-center ${
            darkMode ? "bg-gray-700" : "bg-orange-300"
          }`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hobbies
        </motion.h2>
        <motion.ul
          className="list-disc font-[Poppins] list-inside m-6 mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {about.hobbies.map((hobby, index) => (
            <motion.li
              key={index}
              className="text-base m-2 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {hobby}
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </div>
  );
}
