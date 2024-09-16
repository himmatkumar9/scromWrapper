"use client"; 
import React, { useState } from 'react';

const DiscountCalculator = () => {
  const [discountedPrice, setDiscountedPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState(null);

  const calculateOriginalPrice = (discountedPrice) => {
    const discountRate = 0.80; // 80% discount
    return discountedPrice / (1 - discountRate);
  };

  const handleCalculate = () => {
    const price = parseFloat(discountedPrice);
    if (!isNaN(price)) {
      const original = calculateOriginalPrice(price);
      setOriginalPrice(original);
    } else {
      setOriginalPrice(null); // Reset if the input is invalid
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">80% Discount Calculator</h1>
        <input
          type="number"
          value={discountedPrice}
          onChange={(e) => setDiscountedPrice(e.target.value)}
          placeholder="Enter discounted price"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
        <button
          onClick={handleCalculate}
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Calculate Original Price
        </button>

        {originalPrice !== null && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md shadow-inner">
            <p className="text-lg">
              The original price before the 80% discount is: <span className="font-bold">${originalPrice.toFixed(2)}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscountCalculator;
