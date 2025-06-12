import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product, setCartOpen }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
      <Link to={`/products/${product._id}`}>
        <figure className="overflow-hidden rounded-t-lg">
          <img
            src={product.images[0]?.secure_url}
            alt={product.name}
            className="h-[60vh] w-full object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </figure>
      </Link>

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1 line-clamp-1">
          {product.name}
        </h2>
        <p className="text-sm text-zinc-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <AddToCartButton product={product} setCartOpen={setCartOpen} />
          <p className="text-lg font-bold text-pink-700">৳ {product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
