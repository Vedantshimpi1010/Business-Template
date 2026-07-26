import heroImage from "../assets/hero.png";
import { motion } from "framer-motion";
function Hero({ hero, business }) {
  return (
    <section
  id="home"
  className="min-h-screen bg-gray-50 flex items-center"
>
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div>
      <p className="text-blue-600 font-semibold mb-3">
        Welcome to {business.name}
      </p>

      <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-5xl md:text-7xl font-extrabold leading-tight"
>
  {hero.title}
</motion.h1>

      <p className="mt-6 text-xl text-gray-600 leading-8">
        {hero.subtitle}
      </p>

      <div className="flex gap-4 mt-10">
        <a
          href={`https://wa.me/${business.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-7 py-3 rounded-xl hover:bg-green-600 transition"
        >
          WhatsApp
        </a>

        <button className="border border-blue-600 text-blue-600 px-7 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition">
          Learn More
        </button>
      </div>
    </div>

    {/* Right Image */}
    <div>
      <img
        src={heroImage}
        alt="Hero"
        className="w-full rounded-3xl shadow-xl"
      />
    </div>

  </div>
</section>
  );
}

export default Hero;