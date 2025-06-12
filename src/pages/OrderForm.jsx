import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";

import OrderItemsList from "../components/Order/OrderItemsList";
import DeliveryInfoForm from "../components/Order/DeliveryInfoForm";
import CartTotals from "../components/Order/CartTotals";
import PaymentMethod from "../components/Order/PaymentMethod";

export default function OrderForm() {
  const navigate = useNavigate();
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [cartItems] = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    navigate("/thankyou");
  };

  const handleDeliveryCharge = (e) => {
    const value = e.target.value;
    const charge = parseFloat(value.replace(/[^0-9]/g, ""));
    setDeliveryCharge(charge);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
  const discount = subtotal > 1000 ? subtotal * 0.2 : 0;
  const total = subtotal - discount + deliveryCharge;

  return (
    <div className="flex flex-col lg:flex-row gap-6 bg-pink-50 px-4 sm:px-6 md:px-10 lg:px-14 py-8 min-h-screen">
      {/* Order Items */}
      <div className="w-full lg:w-1/2 p-0 sm:p-2">
        <OrderItemsList cartItems={cartItems} />
      </div>

      {/* Order Form */}
      <div className="w-full lg:w-1/2 p-0 sm:p-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-4 sm:p-6 rounded-lg shadow-md space-y-4"
        >
          <DeliveryInfoForm
            register={register}
            errors={errors}
            handleDeliveryCharge={handleDeliveryCharge}
          />
          <PaymentMethod />
          <CartTotals
            subtotal={subtotal}
            discount={discount}
            deliveryCharge={deliveryCharge}
            total={total}
          />
          <button
            type="submit"
            className="bg-pink-600 text-white w-full py-2 rounded-lg hover:bg-pink-700 transition cursor-pointer"
          >
            অর্ডারটি নিশ্চিত করুন
          </button>
        </form>
      </div>
    </div>
  );
}
