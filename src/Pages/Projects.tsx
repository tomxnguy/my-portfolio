import { useState } from "react";
import { projects } from "../data/data";
import { useDarkMode } from "../Context/useDarkMode";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

export default function Projects() {
  const { darkMode } = useDarkMode();
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (images: string[], index: number) => {
    setSelectedImages(images);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImages([]);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedImages.length - 1 : prev - 1
    );
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-950 text-white" : "bg-amber-100 text-black"
      } min-h-screen flex flex-col items-center p-6`}
    >
      <h1 className="text-4xl font-bold mb-6 tracking-widest font-[Roboto]">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {projects.map((project, projectIndex) => (
          <div
            key={projectIndex}
            className={`${
              darkMode
                ? "bg-zinc-800 text-white"
                : "bg-emerald-600 text-slate-800"
            } rounded-lg shadow-md p-4`}
          >
            {/* Top of Box */}
            <div className="flex justify-between">
              <h2 className="text-2xl font-[Roboto] font-bold mb-2">
                {project.name}
              </h2>
              <div className="flex">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 hover:scale-120 hover:text-yellow-400 duration-150 ease-in-out cursor-pointer"
                >
                  <FaGithub />
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 hover:scale-120 hover:text-yellow-400 duration-150 ease-in-out cursor-pointer"
                  >
                    <FaLink />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}

            <p className="text-sm font-[Poppins] mb-4">{project.description}</p>
            <div className="mb-4">
              <h3 className="text-lg font-[Roboto] font-semibold">
                Technologies Used:
              </h3>
              <ul className="list-disc list-inside">
                {project.technologies.map((tech, techIndex) => (
                  <li className="font-[Poppins]" key={techIndex}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Images */}

            <div className="grid grid-cols-2 gap-2">
              {project.images.map((image, imageIndex) => (
                <img
                  key={imageIndex}
                  src={image}
                  alt={`Project ${projectIndex + 1} - Image ${imageIndex + 1}`}
                  className="cursor-pointer rounded-md object-cover h-32 w-full"
                  onClick={() => openModal(project.images, imageIndex)}
                />
              ))}
            </div>
            <div className="flex space-x-4 mt-4"></div>
          </div>
        ))}
      </div>

      {/* Modal */}

      {isModalOpen && (
        <div
          onClick={closeModal}
          className={`fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center ${
            darkMode ? "bg-opacity-20" : "bg-opacity-30"
          } bg-black backdrop-blur-[0.5px]`}
        >
          {/* Previous Arrow */}
          <button
            className="absolute left-3 text-white bg-gray-500 bg-opacity-50 hover:bg-opacity-75 p-3 hover:outline z-20"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ❮
          </button>

          {/* Image */}
          <div className="relative w-9/10 h-full flex items-center justify-center">
            <img
              src={selectedImages[currentImageIndex]}
              alt={`Modal Image ${currentImageIndex + 1}`}
              className="rounded-md max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Next Arrow */}
          <button
            className="absolute right-3 text-white bg-gray-500 hover:bg-opacity-40 p-3 hover:outline"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ❯
          </button>
        </div>
      )}
    </div>
  );
}
