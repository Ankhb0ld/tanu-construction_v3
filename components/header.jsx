import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="bg-secondary dark:bg-gray-900 text-foreground dark:text-white py-6 shadow-md fixed w-full z-50 transition-colors duration-500">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold animate-pulse">Tanu Construction</h1>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <nav className={`absolute top-full left-0 w-full bg-secondary dark:bg-gray-900 md:static md:w-auto md:flex md:items-center transition-all duration-300 ${isOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0 p-4 md:p-0">
            <li>
              <a href="#services" className="hover:text-primary transition-colors duration-300">Services</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary transition-colors duration-300">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a>
            </li>
            {/* Theme toggle button */}
            <li className="md:ml-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-4 py-2 bg-primary text-black dark:text-white dark:bg-yellow-400 rounded hover:opacity-80 transition"
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
