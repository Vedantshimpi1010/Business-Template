import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

function Categories({ categories, darkMode }) {
  return (
    <section
      id="products"
      className={`py-24 transition-all duration-300 ${
        darkMode ? "bg-slate-950" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Our Categories"
          subtitle="Discover our premium collection for every member of your family."
          darkMode={darkMode}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`group overflow-hidden rounded-3xl shadow-xl transition-all duration-500 ${
                darkMode
                  ? "bg-slate-900 border border-slate-800"
                  : "bg-white"
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Title on Image */}
                <div className="absolute bottom-5 left-5">
                  <h3 className="text-white text-2xl font-bold">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p
                  className={`leading-7 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {category.description}
                </p>

                <button className="flex items-center gap-2 mt-6 font-semibold text-violet-600 group-hover:gap-4 transition-all duration-300">
                  Explore Collection
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;