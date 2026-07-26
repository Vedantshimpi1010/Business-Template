import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

function Testimonials({ testimonials, darkMode }) {
  return (
    <section
      className={`py-20 transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="What Our Customers Say"
          subtitle="Trusted by hundreds of happy customers."
          darkMode={darkMode}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                darkMode
                  ? "bg-gray-800 shadow-lg"
                  : "bg-gray-100 shadow-md"
              }`}
            >
              <p
                className={`italic ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                "{item.review}"
              </p>

              <h3
                className={`mt-4 text-lg font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {item.name}
              </h3>

              <div className="text-yellow-400 mt-2 text-lg">
                ⭐⭐⭐⭐⭐
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;