import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageCircle, X } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import business from "../data/business";

function CollectionPage({ darkMode }) {
  const { slug } = useParams();

  const category = business.categories.find((item) => item.slug === slug);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Collection Not Found</h1>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-violet-600 font-semibold"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    );
  }

  const whatsappMessage = `Hello, I am interested in your ${category.title} collection. Please share more details.`;

  const whatsappLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const relatedCategories = business.categories.filter(
    (item) => item.id !== category.id,
  );

  return (
    <section
      className={`min-h-screen py-16 transition-all duration-300 ${
        darkMode ? "bg-slate-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:gap-3 transition-all"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-10"
        >
          <div className="relative rounded-3xl overflow-hidden h-[420px] shadow-2xl">
            <img
              src={category.coverImage}
              alt={category.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute bottom-10 left-10">
              <h1 className="text-5xl font-bold text-white mb-4">
                {category.title}
              </h1>

              <p className="text-gray-200 text-lg max-w-xl">
                {category.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8">Our Collection</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {category.gallery.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-3xl shadow-xl"
              >
                <img
                  src={image}
                  alt={`${category.title} ${index + 1}`}
                  className="w-full h-80 object-cover"
                  onClick={() => setSelectedImage(image)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Related Categories */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {relatedCategories.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                to={`/collection/${item.slug}`}
                className={`rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  darkMode ? "bg-slate-900 border border-slate-800" : "bg-white"
                }`}
              >
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold">{item.title}</h3>

                  <p
                    className={`mt-2 text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item.description}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-2 text-violet-600 font-semibold">
                    Explore
                    <ArrowRight size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* WhatsApp */}
        <div className="text-center mt-20">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition"
          >
            <MessageCircle size={24} />
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X size={36} />
          </button>

          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default CollectionPage;
