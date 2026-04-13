import React from 'react';

const SuccessScreen = ({ onNext }) => {
  return (
    <div className="relative flex h-full w-full flex-col bg-white">
      
      {/* Ghost background items (simulating an overlay over the cart) */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-around opacity-[0.03] grayscale">
        <div className="h-32 w-32 rounded-lg bg-gray-500"></div>
        <div className="h-32 w-32 rounded-lg bg-gray-500"></div>
        <div className="h-32 w-32 rounded-lg bg-gray-500"></div>
      </div>

      <div className="z-10 flex h-full flex-col">
        {/* Top Header Back arrow & title visually simulated as faded cart */}
        <div className="flex items-center gap-4 px-6 pt-12 opacity-10">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-lg font-medium tracking-wide">YOUR CART</span>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          
          {/* Confetti & Checkmark Graphic */}
          <div className="relative mb-10 flex h-48 w-48 items-center justify-center">
            {/* Abstract Confetti Lines & Circles */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 200">
              <circle cx="80" cy="40" r="4" fill="#34D399" />
              <circle cx="140" cy="55" r="3" fill="#A78BFA" fillOpacity="0" stroke="#C084FC" strokeWidth="1" />
              <circle cx="55" cy="55" r="3" fill="none" stroke="#FBBF24" strokeWidth="1" />
              <circle cx="68" cy="130" r="4" fill="none" stroke="#34D399" strokeWidth="1" />
              <circle cx="106" cy="140" r="3" fill="#34D399" />
              <circle cx="118" cy="147" r="4" fill="#60A5FA" />
              
              <path d="M 40 110 Q 55 125, 70 100" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 135 125 Q 150 110, 145 135" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 130 50 Q 150 55, 150 35" fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            
            {/* Main Badge */}
            <div className="z-10 flex h-32 w-32 items-center justify-center rounded-full bg-[#5A4BFF] shadow-lg shadow-indigo-200 border-[6px] border-indigo-100">
              <svg className="h-14 w-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            {/* Outer rings */}
            <div className="absolute h-[140px] w-[140px] rounded-full border border-indigo-200"></div>
            <div className="absolute h-[150px] w-[150px] rounded-full border border-indigo-50"></div>
          </div>

          {/* Texts */}
          <h2 className="mb-4 text-2xl font-bold leading-tight text-gray-900">
            Your Order<br />Has Been Accepted
          </h2>
          <p className="mb-12 px-2 text-[15px] leading-relaxed text-gray-400">
            Your items has been placed and is on<br />
            it's way to being processed
          </p>

          {/* Buttons */}
          <div className="flex w-full flex-col gap-4">
            <button className="w-full rounded-full bg-[#4F46E5] py-4 text-sm font-bold text-white shadow-md transition hover:bg-indigo-600 active:scale-95">
              TRACK ORDER
            </button>
            <button 
              onClick={onNext}
              className="w-full rounded-full bg-white py-4 text-sm font-bold text-[#4F46E5] transition hover:bg-gray-50 active:scale-95"
            >
              BACK TO HOME
            </button>
          </div>
        </div>

        {/* Faded background checkout button at the bottom */}
        <div className="mb-10 mt-auto flex w-full justify-center px-6 opacity-30">
          <button className="w-full max-w-[280px] rounded-full bg-[#FFF1F2] py-4 text-sm font-bold text-[#FEE2E2]">
            CHECKOUT →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
