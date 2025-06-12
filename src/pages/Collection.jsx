import React, { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "./ProductCard";
import { FaX } from "react-icons/fa6";
import { FiFilter } from "react-icons/fi";
import { useLocation, useOutletContext } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Collection = () => {
  const { setCartOpen } = useOutletContext();
  const [products, isLoading, isError] = useProducts();
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    categories: [],
    maxPrice: 100,
  });

  useEffect(() => {
    if (location.state?.showSearch) {
      setShowSearch(true);
    }
  }, [location]);

  useEffect(() => {
    const handler = () => setShowSearch(true);
    window.addEventListener("trigger-search-bar", handler);
    return () => window.removeEventListener("trigger-search-bar", handler);
  }, []);

  if (isLoading)
    return <p className="text-center py-10 text-pink-600">Loading...</p>;
  if (isError)
    return (
      <p className="text-center py-10 text-red-600">Error fetching products.</p>
    );

  const filteredProducts = products.filter((p) => {
    const matchCategory =
      filters.categories.length === 0 || filters.categories.includes(p.name);
    const matchPrice = p.price <= filters.maxPrice;
    return matchCategory && matchPrice;
  });

  return (
    <div className="bg-pink-50 py-16 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Search Bar */}
        {showSearch && (
          <div className="relative w-full max-w-md mb-10 md:left-92">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-400">
              <BsSearch />
            </div>

            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-full shadow-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <button
              onClick={() => setShowSearch(false)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500 hover:text-black"
              aria-label="Close search"
            >
              <FaX />
            </button>
          </div>
        )}

        {/* Filter Toggle for Mobile */}
        <div className="flex justify-between items-center mb-4 md:hidden">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white text-pink-600 rounded-full shadow text-sm font-medium"
          >
            <FiFilter className="text-lg" />
            Filters
          </button>
          <select className="bg-white border px-3 py-2 rounded text-sm shadow-sm">
            <option>Sort by: Relevant</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Sidebar for desktop */}
          <div className="hidden md:block md:w-90">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>

          {/* Sidebar for mobile */}
          {showFilters && (
            <div className="block md:hidden mb-4">
              <FilterSidebar filters={filters} setFilters={setFilters} />
            </div>
          )}

          {/* Products grid */}
          <div className="w-full md:w-3/4">
            <h1 className="text-4xl font-medium mb-8 text-pink-700">
              All Collections
            </h1>

            {filteredProducts.length === 0 ? (
              <p className="text-center text-gray-500">No products found.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    setCartOpen={setCartOpen}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
