import React, { useState, useEffect } from "react";
import { useBackgroundColor } from "../context/context";

export default function Hero() {
  const { textColor, bgColor } = useBackgroundColor();
  const name = "Karthik";
  const [displayName, setDisplayName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    let timeout:any;

    if (!remove) {
      // Typing
      if (currentIndex < name.length) {
        timeout = setTimeout(() => {
          setDisplayName((prev) => prev + name[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 150);
      } else {
        timeout = setTimeout(() => {
          setRemove(true);
        }, 1000);
      }
    } else if (remove && currentIndex >= 0) {
      // Deleting
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayName((prev) => prev.slice(0, -1));
          setCurrentIndex((prev) => prev - 1);
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setRemove(false);
        }, 1000);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, remove]);

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center ${bgColor} ${textColor} px-4 sm:px-6 md:px-12 overflow-hidden transition-colors duration-300`}
    >
      {/* Background Circles */}
      <div className="absolute -top-20 sm:-top-40 -left-20 sm:-left-40 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-indigo-300 dark:bg-indigo-700 rounded-full blur-xl sm:blur-2xl md:blur-3xl opacity-40 animate-pulse z-0" />
      <div className="absolute -bottom-20 sm:-bottom-40 -right-20 sm:-right-40 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-purple-300 dark:bg-purple-700 rounded-full blur-xl sm:blur-2xl md:blur-3xl opacity-40 animate-pulse z-0" />

      {/* Main Content */}
      <div className="max-w-2xl md:max-w-3xl mx-auto text-center z-10 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 flex justify-center items-center gap-2 sm:gap-3 flex-wrap">
          Hi, I'm{" "}
          <span className="text-indigo-500 dark:text-indigo-400">
            {displayName}
            <span className="inline-block animate-blink">|</span>
          </span>
          <img
            src="https://media.tenor.com/0CpFOKGVaeMAAAAm/hand-waving-hand.webp"
            alt="Waving Hand"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 animate-wiggle origin-bottom"
          />
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
          A passionate Full-Stack Developer who loves building beautiful, fast, and scalable web applications.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 active:scale-95">
            Contact Me
          </button>
          <button className="border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 active:scale-95">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}
