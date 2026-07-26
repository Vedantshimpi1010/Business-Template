import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

import business from "../data/business";

function Home({ darkMode }) {
  return (
    <>
      <Hero hero={business.hero} business={business} darkMode={darkMode} />

      <Stats darkMode={darkMode} />

<About
  about={business.about}
  business={business}
  darkMode={darkMode}
/>
      <Categories
        categories={business.categories}
        darkMode={darkMode}
      />

      

      <FloatingWhatsApp business={business} />

      <Testimonials
        testimonials={business.testimonials}
        darkMode={darkMode}
      />

      <Contact
        business={business}
        darkMode={darkMode}
      />
    </>
  );
}

export default Home;