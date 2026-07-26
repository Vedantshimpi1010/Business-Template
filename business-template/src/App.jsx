import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import business from "./data/business";
import About from "./components/About";
import Categories from "./components/Categories";
import Gallery from "./components/Gallery";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar business={business} />
      <Hero hero={business.hero} business={business} />
      <About about={business.about} />
      <Categories categories={business.categories} />
      <Gallery gallery={business.gallery} />
      <FloatingWhatsApp business={business} />
      <Testimonials testimonials={business.testimonials} />
    </>
  );
}

export default App;