import React from "react";
import { categories } from "../assets/assets";

const FilterSidebar = ({ filters, setFilters }) => {
  const toggleCategory = (cat) => {
    const updated = filters.categories.includes(cat)
      ? filters.categories.filter((c) => c !== cat)
      : [...filters.categories, cat];
    setFilters({ ...filters, categories: updated });
  };

  return (
    <div className=" p-4 rounded-lg shadow w-full h-96 max-w-xs border-0.5 border-gray-700">
      <h3 className="font-semibold mb-2">Filter by Sub-Category</h3>
      {categories.map((cat) => (
        <div key={cat} className="mb-2">
          <label>
            <input
              type="checkbox"
              checked={filters.categories.includes(cat)}
              onChange={() => toggleCategory(cat)}
              className="mr-2 accent-pink-500"
            />
            {cat}
          </label>
        </div>
      ))}

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Filter by Price</h3>
        <input
          type="range"
          min="50"
          max="100"
          value={filters.maxPrice}
          onChange={(e) =>
            setFilters({ ...filters, maxPrice: parseInt(e.target.value) })
          }
          className="w-full accent-pink-500 border-0 cursor-pointer"
        />
        <div className="flex justify-between text-sm">
          <span>Min: ৳50</span>
          <span>Max: ৳{filters.maxPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
