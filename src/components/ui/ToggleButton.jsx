import React from "react";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

const ThemeToggle = ({ darkMode, onToggle }) => {
  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  return (
    <button
      onClick={onToggle}
      className={`relative w-16 h-8 flex items-center rounded-full transition-colors duration-500 ease-in-out shadow-inner 
        ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
    >
      <span
        className={`absolute left-1 w-6 h-6 flex items-center justify-center rounded-full bg-white shadow-md transform transition-transform duration-500 ease-in-out 
          ${darkMode ? "translate-x-8 bg-gray-900" : "translate-x-0"}`}
      >
        {darkMode ? (
          <Moon className="w-4 h-4 text-blue-300" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-500" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
