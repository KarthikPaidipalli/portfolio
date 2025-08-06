import { useState } from "react";
import Switch from "@mui/material/Switch";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useBackgroundColor } from "../context/context";

export default function Header() {
  const { darkMode, toggleBackground, bgColor, textColor } = useBackgroundColor();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <header className={`${bgColor} ${textColor} shadow-md`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Title */}
        <h1 className="text-3xl font-bold italic bg-clip-text drop-shadow-md tracking-wider">
          Karthik
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-sm md:text-base font-medium">
            {navItems.map((item) => (
              <li
                key={item}
                className="hover:text-indigo-400 transition duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-2">
            {!darkMode ? (
              <WbSunnyIcon className="text-yellow-500" />
            ) : (
              <BedtimeIcon className="text-indigo-300" />
            )}
            <Switch
              checked={darkMode}
              onChange={toggleBackground}
              color="default"
            />
          </div>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <CloseIcon className="text-2xl" />
            ) : (
              <MenuIcon className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-base font-medium">
            {navItems.map((item) => (
              <li
                key={item}
                className="hover:text-indigo-400 transition duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-2 mt-4">
            {!darkMode ? (
              <WbSunnyIcon className="text-yellow-500" />
            ) : (
              <BedtimeIcon className="text-indigo-300" />
            )}
            <Switch
              checked={darkMode}
              onChange={toggleBackground}
              color="default"
            />
          </div>
        </div>
      )}
    </header>
  );
}
