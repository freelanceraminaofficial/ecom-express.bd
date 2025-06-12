import { useOutletContext } from "react-router-dom";

import ReactRating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";

import AddToCartButton from "../components/AddToCartButton";
import useProduct from "../hooks/useProduct";
import useCart from "../hooks/useCart";
import useCartActions from "../hooks/useCartActions";
import Products from "../components/Products";
import { useState, useEffect } from "react";

const ProductDetails = () => {
  const { setCartOpen } = useOutletContext();
  const { product, isLoading, isError, error } = useProduct();
  const [cartItems] = useCart();
  const { handlePlusQuantity, handleMinusQuantity } = useCartActions();

  // Wait for product to load before setting initial rating
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    if (product && product.rating) {
      setUserRating(parseFloat(product.rating));
    }
  }, [product]);

  if (isLoading) return <p>Loading product...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const { _id, name, description, price, category, images } = product;

  // Check if product is already in the cart
  const cart = cartItems.find((item) => item.productId === _id) || {
    quantity: 0,
  };

  const handleRatingChange = (rate) => {
    setUserRating(rate);
    console.log("User selected rating:", rate);
    // TODO: Send this rating to your backend if needed
  };

  return (
    <div className="py-16 px-4 md:px-10 mx-auto max-w-fit">
      <div className="card bg-base-100 rounded-lg shadow-sm w-full md:w-[1000px] flex flex-col md:flex-row gap-6 items-start">
        <figure className="md:w-[50%]">
          <img
            src={images?.[0]?.secure_url || "/placeholder.jpg"}
            alt={name}
            className="h-[80vh] w-full object-cover hover:scale-110 duration-500 ease-in-out rounded transition-transform"
          />
        </figure>

        <div className="card-body md:w-[50%] text-lg">
          <div>
            <h1 className="text-2xl font-bold mb-4">{name}</h1>
            <p className="mb-4 text-gray-600">Category: {category?.name}</p>
            <div className="flex items-center gap-2 mb-4">
              <ReactRating
                initialRating={userRating}
                onChange={handleRatingChange}
                emptySymbol={<FaRegStar color="#F59E0B" size={30} />}
                fullSymbol={<FaStar color="#F59E0B" size={30} />}
                fractions={2} // allows half stars
              />
              <span className="text-yellow-600 font-semibold">
                {userRating.toFixed(1)}
              </span>
            </div>
          </div>

          <div>
            {/* Quantity & Actions */}
            <div className="flex gap-2 items-center mb-4">
              <p className="mb-2 font-semibold">Price: ${price}</p>
              <button
                onClick={() => handlePlusQuantity(cart)}
                className="border border-gray-300 px-3 py-1 rounded"
              >
                +
              </button>
              <span className="px-2">{cart.quantity}</span>
              <button
                onClick={() => handleMinusQuantity(cart)}
                className="border border-gray-300 px-3 py-1 rounded"
                disabled={cart.quantity === 0}
              >
                -
              </button>
            </div>
          </div>

          <div className="mb-8 text-pink-600">
            <p>100% Original Product.</p>
            <p>Express Shipping</p>
            <p>Cash on Delivery Available</p>
            <p>Easy return and exchange policy within 3 days</p>
          </div>

          <p className="mb-6">{description}</p>
          <AddToCartButton product={product} setCartOpen={setCartOpen} />
        </div>
      </div>

      {/* Similar Products */}
      <div className="mt-16">
        <Products setCartOpen={setCartOpen} product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
