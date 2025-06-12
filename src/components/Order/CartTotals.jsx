import React from "react";

export default function CartTotals({
  subtotal,
  discount,
  deliveryCharge,
  total,
}) {
  return (
    <div className="pt-4">
      <div className="inline-flex items-center gap-2 mb-4 text-lg">
        <h2>
          CART <span className="text-gray-700 font-semibold ml-1">TOTALS</span>
        </h2>
        <div className="w-8 sm:w-12 h-0.5 bg-gray-700"></div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <p>Subtotal:</p>
          <p>৳ {subtotal.toFixed(2)}</p>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-pink-400">
            <p>Discount:</p>
            <p>- ৳ {discount.toFixed(2)}</p>
          </div>
        )}

        <div className="flex justify-between">
          <p>Delivery Charge:</p>
          <p>৳ {deliveryCharge.toFixed(2)}</p>
        </div>

        <div className="flex justify-between font-bold">
          <p>Total:</p>
          <p>৳ {total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
