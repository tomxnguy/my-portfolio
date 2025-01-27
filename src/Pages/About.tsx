import { aboutMe } from "../data/data";
import { AboutMeType } from "../data/types";
import profilepicture from "../assets/profilepicture.png";

export default function About() {
  const about: AboutMeType = aboutMe[0];

  return (
    <section className="font-sans flex flex-col items-center p-8">
      <img
        className="w-64 h-64 rounded-full mb-6"
        src={profilepicture}
        alt="profilepic"
      />
      <h1 className="text-3xl font-bold mb-4 text-center">{about.name}</h1>
      <h2 className="text-xl font-semibold mb-2 text-center">{about.title}</h2>
      <p className="text-md">{about.description}</p>

      <h2 className="text-2xl font-semibold mt-6">Highlights</h2>
      <ul className="list-disc list-inside ml-2 mt-2">
        {about.highlights.map((highlight, index) => (
          <li key={index} className="text-base">
            {highlight}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Hobbies</h2>
      <ul className="list-disc list-inside ml-4 mt-2">
        {about.hobbies.map((hobby, index) => (
          <li key={index} className="text-base">
            {hobby}
          </li>
        ))}
      </ul>
    </section>
  );
}
