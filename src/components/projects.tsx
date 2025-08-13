import { useBackgroundColor } from "../context/context";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { projects } from "../constants/constants";

export default function Projects() {
  const { bgColor, textColor } = useBackgroundColor();

  const isLightBackground =
    bgColor.includes("white") || bgColor.includes("gray-50");
  const cardBg = isLightBackground
    ? "bg-gray-100"
    : "bg-white dark:bg-gray-800";

  return (
    <section
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-12 ${bgColor} ${textColor} transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          My <span className="text-indigo-500">Projects</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
              className={`${cardBg} shadow-md rounded-xl p-6 flex flex-col transition-transform duration-300 hover:scale-105 cursor-pointer opacity-0 animate-fadeIn`}
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-base mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-indigo-500 hover:underline"
                >
                  <LaunchIcon fontSize="small" /> Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:underline"
                >
                  <GitHubIcon fontSize="small" /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
