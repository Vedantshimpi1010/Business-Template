import About from "../components/About";
import business from "../data/business";

function AboutPage({ darkMode }) {
  return (
    <About
      about={business.about}
      darkMode={darkMode}
    />
  );
}

export default AboutPage;