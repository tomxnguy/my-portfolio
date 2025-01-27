import { useDarkMode } from "../Context/useDarkMode";

export default function Skills() {
  const { darkMode } = useDarkMode();

  return (
    <div>
      <div
        className={`${
          darkMode ? "bg-gray-950 text-white" : "bg-amber-100 text-black"
        } min-h-screen flex flex-col items-center p-6`}
      >
        <h1 className="text-4xl font-bold mb-6 tracking-widest font-[Roboto]">
          Skills
        </h1>

        <div>under construction</div>
      </div>
    </div>
  );
}
