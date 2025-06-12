import React, { useState, useEffect } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { BsSearch, BsBagHeartFill } from "react-icons/bs";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { FaBars, FaHome, FaInfoCircle, FaPhone, FaStore } from "react-icons/fa";

import useCart from "./hooks/useCart";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DrawerLayout from "./DrawerLayout";

const Navbar = ({ setCartOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [cartItems] = useCart();

  const handleSearchClick = () => {
    if (location.pathname !== "/collections") {
      navigate("/collections", { state: { showSearch: true } });
    } else {
      window.dispatchEvent(new CustomEvent("trigger-search-bar"));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar for md+ screens */}
      <div
        className={`hidden md:block fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent relative"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center font-medium">
            {/* Left Side: Menu + Search */}
            <div className="flex items-center gap-6">
              <DrawerLayout>
                <label
                  htmlFor="my-drawer"
                  className="flex items-center gap-3 text-lg font-medium cursor-pointer"
                >
                  <HiMenuAlt1 className="text-2xl text-pink-600" />
                  Menu
                </label>
              </DrawerLayout>

              <button
                onClick={handleSearchClick}
                className="flex items-center gap-3 text-lg font-medium cursor-pointer"
              >
                <BsSearch className="text-2xl text-pink-700" />
                Search
              </button>
            </div>

            {/* Center: Logo */}
            <Link to="/" className="flex justify-center">
              <img
                src="/src/assets/logo-CoRENOR5.png"
                alt="logo"
                className="w-36"
              />
            </Link>

            {/* Right Side: Shop + Cart */}
            <div className="flex items-center gap-6">
              <Link
                to="/collections"
                className="flex items-center gap-2 text-lg font-medium"
              >
                <RiShoppingBag2Fill className="text-2xl text-pink-600" />
                Shop
              </Link>

              <button
                className="relative cursor-pointer"
                onClick={() => setCartOpen(true)}
              >
                <span className="absolute -top-2 -right-3.5 bg-pink-600 text-white rounded-full text-xs px-2 py-1">
                  {cartItems.length}
                </span>
                <BsBagHeartFill className="text-2xl text-zinc-900" />
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Navbar (bottom) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-around items-center py-2 z-40">
        <Link
          to="/menu"
          className="flex flex-col items-center text-black text-sm"
        >
          <FaBars className="text-2xl" />
          <span>Menu</span>
        </Link>

        <Link
          to="/collections"
          className="flex flex-col items-center text-black text-sm"
        >
          <FaStore className="text-2xl" />
          <span>Shop</span>
        </Link>

        {/* Center Floating Home Button */}
        <Link
          to="/"
          className="relative -top-6 z-50 bg-pink-500 text-white p-4 rounded-full shadow-lg"
        >
          <FaHome className="text-2xl" />
        </Link>

        <Link
          to="/about"
          className="flex flex-col items-center text-black text-sm"
        >
          <FaInfoCircle className="text-2xl" />
          <span>About</span>
        </Link>

        <Link
          to="/contact"
          className="flex flex-col items-center text-black text-sm"
        >
          <FaPhone className="text-2xl" />
          <span>Contact</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
