import {
  FaFacebook,
  FaInstagram,
  FaShoppingBag,
  FaWhatsapp,
} from "react-icons/fa";

const OrderConfirm = () => {
  return (
    <div className="bg-pink-50 h-screen flex items-center justify-center">
      <div className="bg-white w-full py-16">
        <div className="container text-center ">
          <div className="text-pink-700 text-7xl mb-4 flex justify-center">
            <FaShoppingBag />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 my-6">
            ধন্যবাদ! আপনার অর্ডারটি সম্পন্ন হয়েছে।
          </h1>
          <p className=" text-gray-600 mb-6  md:text-md ">
            আমাদের একজন কাস্টমার কেয়ার এক্সিকিউটিভ খুব শীঘ্রই আপনার সাথে যোগাযোগ
            করে অর্ডারটি কনফার্ম করে নিবে। <br />
            <span className="font-medium  text-pink-700">G'lorebd</span> এ
            অর্ডার করার জন্য অসংখ্য ধন্যবাদ।
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center my-6 text-lg">
            <button className="bg-pink-700 hover:bg-pink-800 text-white px-6 py-2 rounded-full transition">
              Continue Shopping
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-full transition">
              Go Back
            </button>
          </div>

          <div className="flex justify-center gap-6 text-3xl text-gray-600">
            <a href="#" className="text-blue-600 transition">
              <FaFacebook />
            </a>
            <a href="#" className="text-green-500 transition">
              <FaWhatsapp />
            </a>
            <a href="#" className="text-pink-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;
