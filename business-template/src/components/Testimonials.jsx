import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

function Testimonials({ testimonials }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="What Our Customers Say"
          subtitle="Trusted by hundreds of happy customers."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-2xl p-6 shadow-md"
            >
              <p className="text-gray-600 italic">
                "{item.review}"
              </p>

              <h3 className="mt-4 font-bold text-lg">
                {item.name}
              </h3>

              <div className="text-yellow-500 mt-2">
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