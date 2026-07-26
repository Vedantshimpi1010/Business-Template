import SectionTitle from "./SectionTitle";

function About({ about, darkMode }) {
  return (
    <section
      id="about"
      className={`py-24 transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title={about.title}
          subtitle={about.description}
          darkMode={darkMode}
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div
            className={`rounded-2xl h-80 flex items-center justify-center transition-colors duration-300 ${
              darkMode ? "bg-gray-800" : "bg-gray-200"
            }`}
          >
            <span
              className={`text-xl ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              Business Image
            </span>
          </div>

          {/* Content */}
          <div>
            <h3
              className={`text-3xl font-bold ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Why Choose Us?
            </h3>

            <p
              className={`mt-6 leading-8 transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We believe in providing quality products, affordable prices,
              and excellent customer service for every customer.
            </p>

            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;