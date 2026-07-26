import SectionTitle from "./SectionTitle";

function Gallery({ gallery, darkMode }) {
  return (
    <section
      id="gallery"
      className={`py-20 transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Gallery"
          subtitle="Take a look at our collection and store highlights."
          darkMode={darkMode}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {gallery.map((item) => (
            <div
              key={item.id}
              className={`overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                darkMode
                  ? "bg-gray-800 shadow-lg"
                  : "bg-white shadow-md"
              }`}
            >
              <img
                src={item.image}
                alt="Gallery"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;