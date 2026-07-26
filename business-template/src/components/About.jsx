import SectionTitle from "./SectionTitle";

function About({ about }) {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <SectionTitle
          title={about.title}
          subtitle={about.description}
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
            <span className="text-gray-500 text-xl">
              Business Image
            </span>
          </div>

          <div>
            <h3 className="text-3xl font-bold">
              Why Choose Us?
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
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