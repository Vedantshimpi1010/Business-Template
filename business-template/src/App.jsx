import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import business from "./data/business";

import GalleryPage from "./pages/GalleryPage";
import ProductsPage from "./pages/ProductsPage";

import Products from "./pages/Products";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      {/* Navbar */}
      <Navbar
        business={business}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Routes */}
      <Routes>

  <Route path="/" element={<Home darkMode={darkMode} />} />

  <Route path="/about" element={<AboutPage darkMode={darkMode} />} />

  <Route path="/products" element={<ProductsPage darkMode={darkMode} />} />

  <Route path="/gallery" element={<GalleryPage darkMode={darkMode} />} />

  <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />

  <Route path="/shop" element={<Products darkMode={darkMode} />} />
</Routes>

      {/* Footer */}
      <Footer
        business={business}
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;