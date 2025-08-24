import { useBackgroundColor } from "../context/context";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contacts() {
  const { bgColor, textColor } = useBackgroundColor();

  const isLightBackground =
    bgColor.includes("white") || bgColor.includes("gray-50");

  const cardBg = isLightBackground ? "bg-gray-100" : "bg-gray-800";

  const cardText = isLightBackground ? "text-black" : "text-white";

  return (
    <section
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-12 ${bgColor} ${textColor} transition-colors duration-300`}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Contact <span className="text-indigo-500">Me</span>
        </h2>

        <div className={`${cardBg} ${cardText} shadow-md rounded-xl p-6 mb-8`}>
          <div className="flex items-center gap-3 mb-4">
            <EmailIcon className="text-indigo-500" />
            <a
              href="mailto:paidipallikarthik1510@gmail.com"
              className="hover:underline"
            >
              paidipallikarthik1510@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <LinkedInIcon className="text-indigo-500" />
            <a
              href="https://linkedin.com/in/karthikpaidipalli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/karthikpaidipalli
            </a>
          </div>
          <div className="flex items-center gap-3">
            <GitHubIcon className="text-indigo-500" />
            <a
              href="https://github.com/KarthikPaidipalli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/KarthikPaidipalli
            </a>
          </div>
        </div>

        <div className={`${cardBg} ${cardText} shadow-md rounded-xl p-6`}>
          <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                alert("There is no backend connection");
              }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
