import { useState } from "react";

function Navbar({ business }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Products", id: "products" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h2 className="text-2xl font-bold text-blue-600">
          {business.name}
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:text-blue-600 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop WhatsApp Button */}
        <a
          href={`https://wa.me/${business.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
        >
          WhatsApp
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="block px-6 py-4 border-b hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;