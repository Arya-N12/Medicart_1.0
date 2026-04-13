import React, { useState } from 'react';

const ProductCard = ({ title, price, image, onClick }) => (
  <div 
    onClick={onClick}
    className="flex min-w-[140px] cursor-pointer flex-col rounded-2xl bg-white p-3 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] transition-transform active:scale-95"
  >
    <div className="mb-2 h-24 w-full overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center p-2">
      <img src={image} alt={title} className="h-full object-contain" />
    </div>
    <h3 className="line-clamp-2 text-xs font-semibold text-gray-800 leading-tight h-8">{title}</h3>
    <div className="mt-2 flex items-center justify-between">
      <span className="font-bold text-indigo-400">₹{price}</span>
      <button className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-50 text-red-400 hover:bg-gray-100">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </button>
    </div>
  </div>
);

const HomeScreen = ({ onNavigate }) => {
  return (
    <div className="flex h-full w-full flex-col bg-gray-50 pb-[72px]">
      {/* Top App Bar */}
      <div className="flex items-center justify-between bg-white px-6 py-4 shadow-sm z-10">
        <button className="text-gray-800">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex items-center gap-4">
          <button className="relative text-gray-800">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute right-1 top-0 h-2 w-2 rounded-full bg-red-500 border border-white"></span>
          </button>
          <button className="text-gray-800">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        {/* Search & Filter */}
        <div className="flex gap-3 px-6 py-4">
          <div className="flex flex-1 items-center rounded-xl bg-gray-100 px-4 py-3">
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <input 
              type="text" 
              placeholder="Search" 
              className="ml-2 w-full bg-transparent text-[15px] outline-none placeholder-gray-400"
            />
          </div>
          <button 
            onClick={() => onNavigate('filters')}
            className="flex items-center justify-center rounded-xl bg-gray-100 p-3 text-gray-600 transition active:scale-95"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>
        </div>

        {/* Trending Products */}
        <div className="px-6 py-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[13px] font-extrabold tracking-wide text-black uppercase">Trending Products</h2>
            <div className="flex-1 border-t border-gray-100 mx-3"></div>
            <button className="text-xs font-semibold text-red-400 hover:underline">See All</button>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6">
            <ProductCard 
              onClick={() => onNavigate('product_details')}
              title="Complete First-Aid Responder Kit" 
              price="850" 
              image="https://placehold.co/400x300/f8fafc/94a3b8?text=First-Aid+Kit" 
            />
            <ProductCard 
              onClick={() => onNavigate('product_details')}
              title="Dr. Trust Pulse Oximeter" 
              price="1,299" 
              image="https://placehold.co/400x300/f8fafc/94a3b8?text=Oximeter" 
            />
          </div>
        </div>

        {/* Popular Categories */}
        <div className="px-6 py-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[13px] font-extrabold tracking-wide text-black uppercase">Popular Categories</h2>
            <div className="flex-1 border-t border-gray-100 mx-3"></div>
            <button className="text-xs font-semibold text-red-400 hover:underline">See All</button>
          </div>

          <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar -mx-6 px-6">
            <button className="shrink-0 rounded-full bg-[#4F46E5] px-5 py-2 text-xs font-medium text-white transition">All</button>
            <button className="shrink-0 rounded-full bg-gray-100 px-4 py-2 text-xs font-medium text-gray-700 transition">Diagnostic Devices</button>
            <button className="shrink-0 rounded-full bg-gray-100 px-4 py-2 text-xs font-medium text-gray-700 transition">First Aid & Wound Care</button>
          </div>

          {/* More Products Row */}
          <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar -mx-6 px-6">
            <ProductCard 
              onClick={() => onNavigate('product_details')}
              title="Accu-Chek Active Blood Glucometer" 
              price="999" 
              image="https://placehold.co/400x300/f8fafc/94a3b8?text=Glucometer" 
            />
            <ProductCard 
              onClick={() => onNavigate('product_details')}
              title="Omron Digital Blood Pressure Monitor" 
              price="2,450" 
              image="https://placehold.co/400x300/f8fafc/94a3b8?text=BP+Monitor" 
            />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex h-[72px] items-center justify-around bg-[#5A4BFF] rounded-t-[24px]">
        {/* Box Icon (Cart) */}
        <button onClick={() => onNavigate('cart')} className="flex items-center justify-center p-2 text-white/70 hover:text-white transition">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
           </svg>
        </button>
        {/* Home Icon */}
        <button onClick={() => onNavigate('home')} className="flex flex-col items-center justify-center p-2 text-white relative">
           <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
           </svg>
           <span className="w-1 h-1 bg-white rounded-full absolute bottom-1"></span>
        </button>
        {/* User Icon (Profile) */}
        <button onClick={() => onNavigate('profile')} className="flex items-center justify-center p-2 text-white/70 hover:text-white transition">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
           </svg>
        </button>
      </div>

    </div>
  );
};

export default HomeScreen;
