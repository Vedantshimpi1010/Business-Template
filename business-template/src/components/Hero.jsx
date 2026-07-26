import heroImage from "../assets/hero.png";
import { motion } from "framer-motion";
import Button from "./Button";

function Hero({ business, darkMode }) {
  return (
    <section
      id="home"
      className={`relative overflow-hidden min-h-screen flex items-center transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-gray-950"
          : "bg-[linear-gradient(135deg,#FFFDF8_0%,#FAF5FF_45%,#FDF2F8_100%)]"
      }`}
    >
      {/* Background Blur */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-violet-400/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-300/20 blur-[120px] rounded-full"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold ${
              darkMode
                ? "bg-violet-900/40 text-violet-300"
                : "bg-violet-100 text-violet-700"
            }`}
          >
            ✨ Trusted Shopping Destination in Sillod
          </div>

          {/* Business Name */}
          <h1 className="mt-8 font-black leading-[1.05]">
            <span className="block text-5xl lg:text-7xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Radhika Selection
            </span>

            <span className="block mt-2 text-5xl lg:text-7xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              & Gift Palace
            </span>
          </h1>

          {/* Marathi Name */}
          <h2
            className={`mt-5 text-xl lg:text-2xl font-medium tracking-wide ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {business.localName}
          </h2>

          {/* Tagline */}
          <p
            className={`mt-8 text-2xl md:text-3xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {business.tagline}
          </p>

          {/* Description */}
          <p
            className={`mt-8 text-lg leading-8 max-w-xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Discover premium clothing, gift items, cosmetics, stationery, sports
            accessories and stylish home décor — everything your family needs,
            all under one roof.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <Button href="#products">🛍 Explore Collection</Button>

            <Button
              variant="secondary"
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp
            </Button>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-4 mt-12">
            {[
              {
                title: "🎁 Gift Items",
                subtitle: "Wide Collection",
              },
              {
                title: "💄 Cosmetics",
                subtitle: "Latest Collection",
              },
              {
                title: "📚 Stationery",
                subtitle: "School & Office",
              },
              {
                title: "🏠 Home Decor",
                subtitle: "Elegant Designs",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className={`rounded-2xl p-5 shadow-lg transition ${
                  darkMode ? "bg-gray-800 border border-gray-700" : "bg-white"
                }`}
              >
                <h3
                  className={`font-bold text-lg ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-sm mt-1 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute w-80 h-80 bg-purple-500/20 blur-3xl rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&auto=format&fit=crop&q=80"
            alt={business.name}
            className="relative w-full max-w-xl rounded-[35px] object-cover shadow-[0_25px_60px_rgba(124,58,237,0.25)] hover:scale-105 transition-all duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
