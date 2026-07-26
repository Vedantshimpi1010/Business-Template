import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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
          title="Explore Our Collection"
          subtitle="Discover premium fashion, gifts, cosmetics, stationery, sports items and home décor for your family."
          darkMode={darkMode}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div
                className={`overflow-hidden rounded-3xl shadow-xl transition-all duration-500 ${
                  darkMode
                    ? "bg-slate-900 border border-slate-800"
                    : "bg-white"
                }`}
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={category.coverImage}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Title */}
                  <div className="absolute bottom-5 left-5">
                    <h3 className="text-white text-2xl font-bold">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col min-h-[180px]">
                  <p
                    className={`leading-7 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {category.description}
                  </p>

                  <Link
                    to={`/collection/${category.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-violet-600 hover:text-violet-700 transition-all duration-300 group-hover:gap-4"
                  >
                    Explore Collection
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;