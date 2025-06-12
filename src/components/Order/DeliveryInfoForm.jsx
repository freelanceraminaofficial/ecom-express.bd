import React from "react";

export default function DeliveryInfoForm({
  register,
  errors,
  handleDeliveryCharge,
}) {
  return (
    <>
      <div className="inline-flex gap-2 items-center mb-3 text-lg">
        <h2 className="text-gray-500 text-md">
          DELIVERY{" "}
          <span className="text-gray-700 font-semibold ml-1">INFORMATION</span>
        </h2>
        <div className="w-8 sm:w-12 h-0.5 bg-gray-700"></div>
      </div>

      <p className="text-gray-600 text-sm my-5">
        অর্ডার নিশ্চিত করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার দিয়ে অর্ডার
        কনফার্ম করুন।
      </p>

      {/* Name */}
      <div>
        <label className="text-sm font-semibold">আপনার নাম*</label>
        <input
          {...register("name", {
            required: "সর্বনিম্ন ৩ অক্ষরের নাম দিন",
            minLength: 3,
          })}
          placeholder="Enter Full Name"
          className={`w-full p-2 border rounded-lg ${
            errors.name ? "border-red-500" : "border-pink-200"
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="text-sm font-semibold">আপনার ফোন নাম্বার*</label>
        <input
          {...register("phone", {
            required: "আপনার ফোন নাম্বার দিন",
            pattern: {
              value: /^(01[3-9]\d{8})$/,
              message: "সঠিক ফোন নাম্বার দিন",
            },
          })}
          placeholder="Enter Contact Number"
          className={`w-full p-2 border rounded-lg ${
            errors.phone ? "border-red-500" : "border-pink-200"
          }`}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      {/* Address */}
      <div>
        <label className="text-sm font-semibold">
          আপনার ডেলিভারি ঠিকানা দিন*
        </label>
        <textarea
          {...register("address", { required: "আপনার ঠিকানা দিন" })}
          placeholder="Enter Delivery Address"
          className={`w-full p-2 border rounded-lg ${
            errors.address ? "border-red-500" : "border-pink-200"
          }`}
        />
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address.message}</p>
        )}
      </div>

      {/* Area */}
      <div>
        <label className="text-sm font-semibold">ডেলিভারি এলাকা*</label>
        <select
          {...register("area", { required: "ডেলিভারি এলাকা নির্বাচন করুন" })}
          className={`w-full p-2 border rounded-lg ${
            errors.area ? "border-red-500" : "border-pink-200"
          }`}
          defaultValue=""
          onChange={handleDeliveryCharge}
        >
          <option value="">Select Delivery Area</option>
          <option value="ঢাকার ভিতরে ৳ 40">ঢাকার ভিতরে ৳ 40</option>
          <option value="সার-ঢাকা ৳ 100">সার-ঢাকা ৳ 100</option>
          <option value="ঢাকার বাইরে ৳ 150">ঢাকার বাইরে ৳ 150</option>
        </select>
        {errors.area && (
          <p className="text-red-500 text-sm">{errors.area.message}</p>
        )}
      </div>

      {/* Note */}
      <div>
        <label className="text-sm font-semibold">গ্রাহক নোট (optional)</label>
        <textarea
          {...register("note")}
          placeholder="Enter Your Note"
          className="w-full p-2 border border-pink-200 rounded-lg"
        />
      </div>
    </>
  );
}
