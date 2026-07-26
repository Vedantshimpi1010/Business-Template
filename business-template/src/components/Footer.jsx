import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer({ business, darkMode }) {
  return (
    <footer
      className={`pt-16 pb-8 transition-all duration-300 ${
        darkMode
          ? "bg-black text-white"
          : "bg-gray-900 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* Business */}
        <div>
          <h2 className="text-2xl font-bold">
            {business.name}
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
            {business.tagline}
          </p>

          <div className="flex gap-4 mt-6 text-xl">
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

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-400">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Collections</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Categories
          </h3>

          <div className="space-y-3 text-gray-400">
            {business.categories.slice(0, 6).map((item) => (
              <Link
                key={item.id}
                to={`/collection/${item.slug}`}
                className="block hover:text-violet-400 transition"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>

          <div className="space-y-4 text-gray-400">

            <p className="flex gap-3">
              <Phone size={18} />
              {business.phone}
            </p>

            <p className="flex gap-3">
              <Mail size={18} />
              {business.email}
            </p>

            <p className="flex gap-3">
              <MapPin size={18} />
              {business.address}
            </p>

            <p className="flex gap-3">
              <Clock size={18} />
              9:00 AM - 9:00 PM
            </p>

          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} {business.name}. All Rights Reserved.

        <div className="mt-2 text-sm">
          Made with ❤️ for Local Business
        </div>
      </div>
    </footer>
  );
}

export default Footer;