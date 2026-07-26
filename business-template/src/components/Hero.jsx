import heroImage from "../assets/hero.png";
import { motion } from "framer-motion";
import Button from "./Button";

function Hero({ hero, business, darkMode }) {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-r from-blue-50 via-white to-purple-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Welcome Text */}
          <p
            className={`font-semibold uppercase tracking-wider mb-4 ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Welcome to {business.name}
          </p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 bg-clip-text text-transparent"
          >
            {hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`mt-6 text-xl leading-8 max-w-xl transition-colors duration-300 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {hero.subtitle}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <Button
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp
            </Button>

            <Button variant="secondary">
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-lg rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;