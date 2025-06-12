import React from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useCart from "../hooks/useCart";
import Swal from "sweetalert2";

const AddToCartButton = ({ product, setCartOpen }) => {
  const axiosPublic = useAxiosPublic();
  const [_, refetch] = useCart();

  const handleAddToCart = (product) => {
    const productItem = {
      productId: product._id,
      name: product.name,
      image: product.images?.[0]?.secure_url,
      price: product.price,
      quantity: 1,
    };

    axiosPublic
      .post("/carts", productItem)
      .then((res) => {
        if (res.data?.insertedId || res.data?.updated) {
          refetch();
          Swal.fire({
            position: "top-mid",
            icon: "success",
            title: `${product.name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          if (setCartOpen) setCartOpen(true);
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "There was an issue adding the item to your cart. Please try again.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <button
      onClick={() => handleAddToCart(product)}
      className="bg-pink-700 text-white px-8 text-md py-2 rounded-md cursor-pointer"
    >
      অর্ডার করুন
    </button>
  );
};

export default AddToCartButton;
