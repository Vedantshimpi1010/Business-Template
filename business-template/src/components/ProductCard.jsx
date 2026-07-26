import { FaStar, FaWhatsapp } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold">
          {product.name}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {product.category}
        </p>

        <div className="flex items-center gap-1 mt-2 text-yellow-500">
          <FaStar />
          <span>{product.rating}</span>
        </div>

        <h3 className="text-2xl font-bold text-green-600 mt-3">
          ₹{product.price}
        </h3>

        <button className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl flex justify-center items-center gap-2">
          <FaWhatsapp />
          Enquire on WhatsApp
        </button>
      </div>
    </div>
  );
}

export default ProductCard;