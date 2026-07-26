import { Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer({ business, darkMode }) {
  return (
    <footer
      className={`py-12 transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-gray-900 text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Business Info */}
        <div>
          <h2 className="text-2xl font-bold">{business.name}</h2>

          <p
            className={`mt-3 ${
              darkMode ? "text-gray-300" : "text-gray-400"
            }`}
          >
            {business.tagline}
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>

          <p
            className={`flex items-center gap-2 ${
              darkMode ? "text-gray-300" : "text-gray-400"
            }`}
          >
            <Phone size={18} />
            {business.phone}
          </p>

          <p
            className={`flex items-center gap-2 mt-2 ${
              darkMode ? "text-gray-300" : "text-gray-400"
            }`}
          >
            <Mail size={18} />
            {business.email}
          </p>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>

          <div className="flex gap-5 text-2xl">
            <a
              href={business.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href={business.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div
        className={`mt-10 pt-6 text-center border-t ${
          darkMode
            ? "border-gray-700 text-gray-400"
            : "border-gray-700 text-gray-400"
        }`}
      >
        © {new Date().getFullYear()} {business.name}. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;