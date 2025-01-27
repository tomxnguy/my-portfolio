import { aboutMe } from "../data/data";
import { AboutMeType } from "../data/types";

export default function About() {
  const about: AboutMeType = aboutMe[0];

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">{about.name}</h1>
      <h2 className="text-xl font-semibold mb-2">{about.title}</h2>
      <p className="text-lg">{about.description}</p>

      <h2 className="text-2xl font-semibold mt-6">Highlights</h2>
      <ul className="list-disc list-inside ml-4 mt-2">
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
