import Categories from "../components/Categories-old";
import business from "../data/business";

function ProductsPage({ darkMode }) {
  return (
    <Categories
      categories={business.categories}
      darkMode={darkMode}
    />
  );
}

export default ProductsPage;