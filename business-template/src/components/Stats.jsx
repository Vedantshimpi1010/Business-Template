import { Users, Package, Star, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import stats from "../data/stats";

function Stats({ darkMode }) {
  const iconMap = {
    Users,
    Package,
    Star,
    Trophy,
  };

  return (
    <section
      className={`py-20 transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: item.id * 0.15 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  darkMode
                    ? "bg-gray-800 shadow-lg"
                    : "bg-gray-50 shadow"
                }`}
              >
                <Icon
                  size={45}
                  className={`mx-auto ${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                />

                <h2
                  className={`text-4xl font-bold mt-5 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {item.number}
                </h2>

                <p
                  className={`mt-2 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;