import { Shirt, ShoppingBag, Baby, Footprints } from "lucide-react";
import SectionTitle from "./SectionTitle";

function Categories({ categories }) {
  const iconMap = {
    "Men's Wear": Shirt,
    "Ladies Wear": ShoppingBag,
    "Kids Wear": Baby,
    Footwear: Footprints,
  };

  return (
    <section id="products" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Our Categories"
          subtitle="Explore our wide range of clothing collections for every age and style."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {categories.map((category) => {
            const Icon = iconMap[category.title] || ShoppingBag;

            return (
              <div
                key={category.id}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-center">
                  <Icon size={48} className="text-blue-600" />
                </div>

                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {category.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Categories;