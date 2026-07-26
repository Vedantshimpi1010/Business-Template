function SectionTitle({ title, subtitle, darkMode }) {
  return (
    <div className="text-center mb-14">
      <h2
        className={`text-4xl md:text-5xl font-bold transition-colors duration-300 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mt-4 text-lg max-w-2xl mx-auto transition-colors duration-300 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;