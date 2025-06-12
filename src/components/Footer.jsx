import {
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-zinc-900 py-8 md:py-10 ">
      <div className="container2 flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0">
        <div>
          <Link to="/">
            <img
              src="/src/assets/logo2-ucxU_5Jw.png"
              alt="logo"
              className="w-60"
            />
          </Link>
          <p className="text-white leading-loose text-sm pt-5 w-90">
            আমাদের কালেকশন আপনাকে দেবে ফ্যাশনের আধুনিকতা এবং ঐতিহ্যের একটি
            নিখুঁত সংমিশ্রণ।
          </p>
        </div>
        <div>
          <h1 className="text-white mb-4 text-xl">Explore More</h1>
          <p className="text-gray-400 hover:text-pink-500">New Arrivals</p>
          <p className="text-gray-400 hover:text-pink-500">About Us</p>
          <p className="text-gray-400 hover:text-pink-500">Contact</p>
        </div>
        <div>
          <h1 className="text-white mb-4 text-xl">Client Experience</h1>
          <p className="text-gray-400 hover:text-pink-500">Track Your Order</p>
          <p className="text-gray-400 hover:text-pink-500">
            Returns & Exchanges
          </p>
          <p className="text-gray-400 hover:text-pink-500">Customer Reviews </p>
          <p className="text-gray-400 hover:text-pink-500">Privacy Policy</p>
          <p className="text-gray-400 hover:text-pink-500">FAQ</p>
        </div>
        <div>
          <h1 className="text-white mb-4 text-xl">GET IN TOUCH</h1>
          <p className="text-gray-400 hover:text-pink-500">
            মোবাইল নং: (+88) 01855-375963
          </p>
          <p className="text-gray-400 hover:text-pink-500">
            ইমেইল: hello@glorebd.com
          </p>
          <div className="flex gap-6 text-white text-3xl mt-6">
            <FaFacebook className="hover:text-pink-500" />
            <FaFacebookMessenger className="hover:text-pink-500" />
            <FaTwitter className="hover:text-pink-500" />
            <FaInstagram className="hover:text-pink-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
