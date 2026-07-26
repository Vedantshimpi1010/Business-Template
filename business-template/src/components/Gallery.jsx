function Gallery({ gallery }) {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {gallery.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt="Gallery"
              className="rounded-xl shadow-md hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;