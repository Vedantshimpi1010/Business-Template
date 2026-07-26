import { useState } from "react";
import { Sun, Moon, Menu, X, Store } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ business, darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
          darkMode
            ? "bg-slate-900/80 border-slate-700 shadow-xl"
            : "bg-white/80 border-white shadow-xl"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 flex items-center justify-center shadow-lg">
              <Store className="text-white" size={22} />
            </div>

            <div>
              <h1
                className={`font-bold text-lg leading-none ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Radhika Selection
              </h1>

              <p
                className={`text-xs ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Gift Palace
              </p>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative font-medium transition-all duration-300 ${
                      isActive
                        ? "text-violet-600"
                        : darkMode
                        ? "text-gray-300 hover:text-violet-400"
                        : "text-gray-700 hover:text-violet-600"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}

                      {isActive && (
                        <motion.div
                          layoutId="underline"
                          className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-gradient-to-r from-violet-600 to-pink-500"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-white font-medium bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg hover:scale-105 transition"
            >
              WhatsApp
            </a>

            {/* Dark Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-11 h-11 rounded-xl flex items-center justify-center transition ${
                darkMode
                  ? "bg-slate-800 text-yellow-400 hover:bg-slate-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                darkMode
                  ? "bg-slate-800 text-yellow-400"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                darkMode
                  ? "bg-slate-800 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className={`lg:hidden border-t ${
                darkMode
                  ? "border-slate-700 bg-slate-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              <ul className="flex flex-col py-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-6 py-3 font-medium transition ${
                          isActive
                            ? "text-violet-600"
                            : darkMode
                            ? "text-gray-300 hover:bg-slate-800"
                            : "text-gray-700 hover:bg-gray-100"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}

                <div className="px-6 pt-4">
                  <a
                    href={`https://wa.me/${business.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 rounded-xl text-white font-medium bg-gradient-to-r from-green-500 to-emerald-600"
                  >
                    💬 Chat on WhatsApp
                  </a>
                </div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;