import React from "react";

export default function PaymentMethod() {
  return (
    <div className="mt-2 flex items-center justify-between gap-2">
      <p className="font-semibold">Payment Method</p>
      <div className="flex items-center gap-2">
        <span className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
        </span>
        <span className="text-sm font-medium text-gray-700 border px-4 py-2 rounded-lg border-pink-200">
          Cash on Delivery
        </span>
      </div>
    </div>
  );
}
