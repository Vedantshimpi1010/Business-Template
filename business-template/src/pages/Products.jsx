import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">
        Our Products
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;