import React from 'react';

const CartItem = ({ title, price, qty }) => (
  <div className="flex items-center justify-between border-b border-gray-100 py-4">
    <div className="flex items-center gap-4">
      <div className="h-16 w-16 rounded-xl bg-gray-100 flex items-center justify-center p-2">
        <img src={`https://placehold.co/100x100/e2e8f0/64748b?text=${title.substring(0,3)}`} alt={title} className="max-h-full max-w-full rounded" />
      </div>
      <div>
        <h3 className="text-[15px] font-semibold text-gray-800 line-clamp-1">{title}</h3>
        <p className="text-sm font-bold text-indigo-500 mt-1">₹{price}</p>
      </div>
    </div>
    <div className="flex flex-col items-end gap-2">
      <div className="flex items-center rounded-full bg-gray-100 px-2 py-1">
        <span className="w-6 text-center text-xs font-bold text-gray-800">{qty}</span>
      </div>
    </div>
  </div>
);

const CartScreen = ({ onBack, onCheckout }) => {
  return (
    <div className="flex h-full w-full flex-col bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 px-6 py-6 border-b border-gray-50/50">
        <button onClick={onBack} className="text-gray-800 p-1 -ml-1 transition active:scale-95">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <span className="text-xl font-medium tracking-wide">Your Cart</span>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-2">
        <CartItem title="Dr. Trust Pulse Oximeter" price="1,299" qty="1" />
        <CartItem title="First-Aid Kit" price="850" qty="2" />
        
        {/* Summary */}
        <div className="mt-8 rounded-2xl bg-gray-50 p-5">
           <div className="flex justify-between text-sm text-gray-600 mb-2">
             <span>Subtotal</span>
             <span className="font-semibold text-gray-800">₹2,999</span>
           </div>
           <div className="flex justify-between text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
             <span>Shipping</span>
             <span className="font-semibold text-gray-800">₹50</span>
           </div>
           <div className="flex justify-between text-base font-bold text-gray-900">
             <span>Total</span>
             <span className="text-indigo-600">₹3,049</span>
           </div>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="p-6 pb-8 sm:pb-6">
        <button 
          onClick={onCheckout}
          className="w-full flex items-center justify-between rounded-full bg-[#4F46E5] py-4 px-6 text-sm font-bold text-white shadow-lg transition-transform active:scale-95"
        >
          <span>PROCEED TO CHECKOUT</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartScreen;
