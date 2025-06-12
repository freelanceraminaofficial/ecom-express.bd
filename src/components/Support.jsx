import React from "react";

const Support = () => {
  return (
    <div className="bg-pink-300 py-8 md:py-10 mt-10">
      <div className="container2 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center">
          <img
            src="/src/assets/download.png"
            alt="Easy Exchange"
            className="w-16 h-16 mb-2"
          />
          <h3 className="text-lg font-semibold">Easy Exchange Policy</h3>
          <p className="text-sm text-gray-700">
            We offer hassle-free exchange policy
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/src/assets/downloads.png"
            alt="Return Policy"
            className="w-16 h-16 mb-2"
          />
          <h3 className="text-lg font-semibold">3 Days Return Policy</h3>
          <p className="text-sm text-gray-700">
            We provide 3 days free return policy
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/src/assets/download (1).png"
            alt="Customer Support"
            className="w-16 h-16 mb-2"
          />
          <h3 className="text-lg font-semibold">Best Customer Support</h3>
          <p className="text-sm text-gray-700">
            We provide 24/7 customer support
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
