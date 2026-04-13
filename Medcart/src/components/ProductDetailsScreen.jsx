import React, { useState } from 'react';

const ProductDetailsScreen = ({ onBack, onAddToCart }) => {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex h-full w-full flex-col bg-white">
      {/* Top Header */}
      <div className="flex items-center justify-between px-6 pt-12 pb-4">
        <button onClick={onBack} className="p-2 -m-2 text-gray-900 transition active:scale-95">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <button className="p-2 -m-2 text-gray-900 transition">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden px-6 pb-[100px]">
        {/* Product Image Area */}
        <div className="relative mb-6 mt-4 flex h-64 w-full items-center justify-center rounded-3xl bg-gray-50 p-4 overflow-hidden">
           <img 
             src="https://placehold.co/600x400/f8fafc/94a3b8?text=Dr.+Trust+Pulse+Oximeter" 
             alt="Dr. Trust Oximeter" 
             className="h-full object-contain mix-blend-multiply rounded-2xl"
           />
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-1.5 mb-8">
          <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-pink-500"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
        </div>

        {/* Title and Price */}
        <div className="flex items-start justify-between mb-8">
          <h1 className="text-xl font-medium leading-snug text-gray-900 w-[60%]">
            Dr. Trust Professional Finger Pulse Oximeter
          </h1>
          <div className="flex flex-col items-end">
            <span className="text-xl font-semibold text-[#4F46E5]">₹1,299</span>
            <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span>4.5</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex w-full justify-between border-b border-gray-100 mb-6">
          <button className="pb-3 text-sm font-medium text-[#4F46E5] border-b-2 border-pink-500 -mb-px px-1">Description</button>
          <button className="pb-3 text-sm font-medium text-gray-500 hover:text-gray-800 px-1">Reviews</button>
          <button className="pb-3 text-sm font-medium text-gray-500 hover:text-gray-800 px-1">Offers</button>
          <button className="pb-3 text-sm font-medium text-gray-500 hover:text-gray-800 px-1">Policy</button>
        </div>

        {/* Description Text */}
        <p className="text-[14.5px] leading-[1.7] text-gray-500 font-light tracking-wide pb-10">
          Accurately Measure Your Blood Oxygen Saturation Levels (SpO2), Pulse Rate, And Pulse Strength In Seconds. Features A High-Resolution, Multi-Directional OLED Display For Easy Reading. The Hypoallergenic, Medical-Grade Silicone Finger Chamber Ensures Comfort For All Ages. Box Includes 2 AAA Batteries And A Carrying Lanyard.
        </p>
      </div>

      {/* Bottom Actions */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex gap-4 bg-gradient-to-t from-white via-white to-transparent p-6 pb-8 backdrop-blur-sm sm:pb-6">
        {/* Quantity Selector */}
        <div className="flex h-14 items-center justify-between gap-4 rounded-full bg-[#4F46E5] px-4 font-bold text-white min-w-[100px] shrink-0">
          <button 
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="p-1 text-white hover:text-gray-200 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </button>
          <span className="text-lg w-4 text-center">{qty}</span>
          <button 
            onClick={() => setQty(qty + 1)}
            className="p-1 text-white hover:text-gray-200 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </button>
        </div>

        {/* Add to Cart Button */}
        <button 
          onClick={onAddToCart}
          className="flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-[#4F46E5] px-6 text-sm font-bold text-white shadow-lg transition-transform active:scale-95"
        >
          ADD TO CART 
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        </button>
      </div>

    </div>
  );
};

export default ProductDetailsScreen;
