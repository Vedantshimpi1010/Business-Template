import Gallery from "../components/Gallery";
import business from "../data/business";

function GalleryPage({ darkMode }) {
  return (
    <Gallery
      gallery={business.gallery}
      darkMode={darkMode}
    />
  );
}

export default GalleryPage;