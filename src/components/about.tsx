import { useBackgroundColor } from "../context/context";

export default function About() {
  const { bgColor, textColor } = useBackgroundColor();

  const isLightBackground =
    bgColor.includes("white") || bgColor.includes("gray-50");
  const cardBg = isLightBackground ? "bg-gray-100" : "bg-gray-800";

  return (
    <section
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-12 ${bgColor} ${textColor} transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          About <span className="text-indigo-500">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Image */}
          <div className="md:w-1/3 flex justify-center">
            <div className="p-4 flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
              <img
                src="https://via.placeholder.com/300"
                alt="Karthik Paidipalli"
                className="rounded-full w-40 h-40 md:w-56 md:h-56 object-cover border-4 border-indigo-500"
              />
            </div>
          </div>

          {/* About Card */}
          <div
            className={`${cardBg} shadow-md rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 md:w-2/3`}
          >
            <p className="mb-4 leading-relaxed text-lg">
              Hi, I'm <span className="font-semibold">Karthik Paidipalli</span>{" "}
              — a full-stack developer with around 2 years of experience
              building fast, modern, and user-friendly web and mobile
              applications. I specialize in <strong>React.js</strong>,{" "}
              <strong>React Native</strong>, and{" "}
              <strong>API integrations</strong>, with hands-on experience in
              transforming legacy systems and creating admin-friendly tools that
              make everyday operations easier.
            </p>

            <p className="leading-relaxed text-lg">
              At <strong>current company</strong>, I've worked on migrating
              large-scale apps from Angular to React, building real-time
              employee attendance trackers, and developing online ordering
              platforms with complete admin dashboards in React Native. I've
              also optimized RESTful APIs for speed and scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
