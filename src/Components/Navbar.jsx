import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    document.documentElement.style.scrollBehavior = "smooth";
  }, [darkMode]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav className="bg-blue-100 dark:bg-gray-800 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.jpg" alt="ShopMe Logo" className="h-10 md:h-10" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-yellow-300 font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Search + Theme + Hamburger */}
          <div className="flex items-center space-x-2">
            {/* Search Bar */}
            <div className="relative rounded-lg overflow-hidden flex items-center bg-white dark:bg-gray-700">
              <input
                type="text"
                placeholder="Search"
                className="py-1 pl-3 pr-10 w-40 md:w-48 outline-none text-gray-700 dark:text-white dark:bg-gray-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-0 top-0 h-full px-2 text-gray-600 dark:text-gray-300 hover:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center justify-center p-2 rounded-full bg-yellow-400 text-white dark:bg-gray-600 transition-all duration-300"
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707 8 8 0 1017.293 13.293z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 12a4 4 0 100-8 4 4 0 000 8zm8-4a1 1 0 00-1-1h-1a1 1 0 100 2h1a1 1 0 001-1zm-7 7a1 1 0 011-1v-1a1 1 0 10-2 0v1a1 1 0 011 1zM4 10a1 1 0 000-2H3a1 1 0 100 2h1zm12.071 4.071a1 1 0 00-1.414-1.414l-.707.707a1 1 0 101.414 1.414l.707-.707zM5.636 5.636A1 1 0 004.222 4.22l-.707.707a1 1 0 101.414 1.415l.707-.707zm0 8.728a1 1 0 00-1.414 1.415l.707.707a1 1 0 001.414-1.414l-.707-.708zm8.728-8.728a1 1 0 10-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>

            {/* Hamburger Menu for Mobile */}
            <button
              className="md:hidden flex items-center p-2 rounded focus:outline-none text-gray-700 dark:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-100 dark:bg-gray-800 px-4 py-3 space-y-2 transition-all duration-300">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-yellow-300 font-medium"
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
