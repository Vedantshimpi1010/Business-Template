import { motion } from "framer-motion";
import { CheckCircle, Store, Gift, ShieldCheck } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

const features = [
  {
    icon: <Store size={24} />,
    title: "Wide Collection",
    description: "Clothing, gifts, home décor & daily essentials.",
  },
  {
    icon: <Gift size={24} />,
    title: "Gift Palace",
    description: "Beautiful gift items for every occasion.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Trusted Shopping",
    description: "Quality products with friendly customer service.",
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Family Store",
    description: "Everything your family needs under one roof.",
  },
];

function About({ about = {}, business = {}, darkMode }) {
  return (
    <section
      id="about"
      className={`py-24 transition-all duration-300 ${
        darkMode ? "bg-slate-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title={about?.title || "About Us"}
          subtitle={about?.description || ""}
          darkMode={darkMode}
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-violet-500/20 blur-3xl rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=900&auto=format&fit=crop&q=80"
              alt={business?.name || "About Store"}
              className="relative w-full h-[500px] object-cover rounded-[32px] shadow-[0_25px_60px_rgba(124,58,237,0.25)] hover:scale-105 transition-all duration-700"
            />

            {/* Floating Rating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className={`absolute bottom-6 right-6 rounded-2xl px-6 py-4 shadow-2xl ${
                darkMode ? "bg-slate-800 border border-slate-700" : "bg-white"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span className="text-2xl font-bold text-violet-600">5.0</span>
              </div>

              <p
                className={`text-sm mt-1 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                27 Google Reviews
              </p>
            </motion.div>
          </motion.div>

          
          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <span
              className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                darkMode
                  ? "bg-violet-900/40 text-violet-300"
                  : "bg-violet-100 text-violet-700"
              }`}
            ></span>

            {/* Heading */}
            <h3
              className={`mt-6 text-4xl font-bold leading-tight ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Everything You Need, All Under One Roof
            </h3>

            {/* Description */}
            <p
              className={`mt-6 text-lg leading-8 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {about?.description ||
                "Radhika Selection & Gift Palace is a trusted shopping destination in Sillod offering clothing, gift items, cosmetics, stationery, sports accessories and home décor. We are committed to providing quality products and a comfortable shopping experience."}
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className={`rounded-2xl p-5 shadow-lg transition ${
                    darkMode
                      ? "bg-slate-800 border border-slate-700"
                      : "bg-white border border-gray-100"
                  }`}
                >
                  <div className="text-violet-600 mb-3">{feature.icon}</div>

                  <h4
                    className={`font-bold text-lg ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {feature.title}
                  </h4>

                  <p
                    className={`text-sm mt-2 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Button href={`tel:${business?.phone || ""}`}>📞 Call Now</Button>

              <Button
                variant="secondary"
                href={`https://wa.me/${business?.whatsapp || ""}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
