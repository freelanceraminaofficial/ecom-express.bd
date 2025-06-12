import React from "react";

const CartFooter = ({ totalAmount, cartItems, onClearAll, onCheckout }) => {
  return (
    <div className="p-4 border-t border-zinc-300 bg-pink-100">
      <div className="flex justify-between items-center text-lg font-semibold">
        <span>Subtotal:</span>
        <span>৳ {totalAmount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mt-4 gap-2 text-md">
        <button
          onClick={onClearAll}
          className="flex-1 bg-gray-200 hover:bg-gray-300 py-2 rounded-md"
        >
          Clear All
        </button>
        <button
          onClick={onCheckout}
          disabled={cartItems.length === 0}
          className={`flex-1 py-2 rounded-md text-white ${
            cartItems.length === 0
              ? "bg-pink-300 cursor-not-allowed"
              : "bg-pink-600 hover:bg-pink-700 cursor-pointer"
          }`}
        >
          Checkout →
        </button>
      </div>
    </div>
  );
};

export default CartFooter;
