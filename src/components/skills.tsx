import { useBackgroundColor } from "../context/context";

// Material UI Icons
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import StorageIcon from "@mui/icons-material/Storage";
import GitHubIcon from "@mui/icons-material/GitHub";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import HubIcon from "@mui/icons-material/Hub"; 
import BoltIcon from "@mui/icons-material/Bolt"; 

export default function Skills() {
  const { bgColor, textColor } = useBackgroundColor();

  const skills = [
    {
      name: "JavaScript",
      icon: <JavascriptIcon fontSize="large" className="text-yellow-500" />,
    },
    {
      name: "React",
      icon: (
        <img
          src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
          alt="React"
          className="w-8 h-8"
        />
      ),
    },
    {
      name: "React Native",
      icon: (
        <img
          src="https://reactnative.dev/img/header_logo.svg"
          alt="React Native"
          className="w-8 h-8"
        />
      ),
    },
    {
      name: "Next.js",
      icon: (
        <img
          src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
          alt="Next.js"
          className="w-8 h-8"
        />
      ),
    },
    {
      name: "Node.js",
      icon: <HubIcon fontSize="large" className="text-green-600" />,
    },
    {
      name: "Express.js",
      icon: (
        <IntegrationInstructionsIcon
          fontSize="large"
          className="text-gray-700 dark:text-gray-300"
        />
      ),
    },
    {
      name: "MySQL",
      icon: <StorageIcon fontSize="large" className="text-blue-500" />,
    },
    {
      name: "HTML",
      icon: <HtmlIcon fontSize="large" className="text-orange-600" />,
    },
    {
      name: "CSS",
      icon: <CssIcon fontSize="large" className="text-blue-600" />,
    },
    {
      name: "Tailwind CSS",
      icon: <BoltIcon fontSize="large" className="text-cyan-500" />,
    },
    {
      name: "Git & GitHub",
      icon: (
        <GitHubIcon
          fontSize="large"
          className="text-gray-900 dark:text-white"
        />
      ),
    },
  ];

  const isLightBackground =
    bgColor.includes("white") || bgColor.includes("gray-50");
  const cardBg = isLightBackground
    ? "bg-gray-100"
    : "bg-white dark:bg-gray-800";

  return (
    <section
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-12 ${bgColor} ${textColor} transition-colors duration-300`}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          My <span className="text-indigo-500">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
              className={`${cardBg} shadow-md rounded-xl p-6 flex flex-col items-center justify-center text-center transform transition-transform duration-300 cursor-pointer opacity-0 animate-fadeIn hover:scale-110`}
            >
              <div className="mb-3">{skill.icon}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
