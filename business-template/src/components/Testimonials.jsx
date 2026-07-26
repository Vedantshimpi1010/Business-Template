import { motion } from "framer-motion";
import { Quote } from "lucide-react";
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
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.2, duration: 0.5 }}
  viewport={{ once: true }}
  className={`rounded-3xl p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ${
    darkMode
      ? "bg-slate-800 border border-slate-700"
      : "bg-white shadow-lg"
  }`}
>
  <Quote
    size={34}
    className="text-violet-500 mb-4"
  />

  <div className="flex gap-1 text-yellow-400 mb-4">
    {Array.from({ length: item.rating }).map((_, i) => (
      <span key={i}>⭐</span>
    ))}
  </div>

  <p
    className={`leading-7 ${
      darkMode ? "text-gray-300" : "text-gray-600"
    }`}
  >
    "{item.review}"
  </p>

  <div className="mt-6">
    <h3 className="text-lg font-bold">
      {item.name}
    </h3>

    <span className="text-sm text-violet-500 font-medium">
      Verified Customer
    </span>
  </div>
</motion.div> 
          ))}
        </div>
        <div className="mt-14 text-center">
  <div className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
    ⭐ 5.0 Google Rating • 27 Reviews
  </div>
</div>
      </div>
    </section>
  );
}

export default Testimonials;