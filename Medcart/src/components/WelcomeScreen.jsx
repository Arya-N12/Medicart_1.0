import React from 'react';

const WelcomeScreen = ({ onNext }) => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-between overflow-hidden bg-[#4F46E5]">
      
      {/* Wavy Background Elements */}
      <div className="absolute inset-0 z-0">
        <svg viewBox="0 0 400 850" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute h-full w-full opacity-60">
           {/* Custom abstract blob shapes to mimic the reference */}
          <path d="M0 0H400V250C330 200 250 300 150 250C50 200 0 350 0 350V0Z" fill="#3730A3" />
          <path d="M400 400C300 450 250 550 150 500C50 450 0 550 0 550V850H400V400Z" fill="#4338CA" />
          <path d="M0 750C80 700 150 820 250 780C350 740 400 850 400 850V900H0V750Z" fill="#3730A3" />
        </svg>
      </div>

      {/* Top Text Content */}
      <div className="z-10 mt-32 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-white">Hello Pankaj</h1>
        <p className="mt-3 text-lg font-light text-gray-100">Welcome to the MedCart</p>
      </div>

      {/* Profile Picture Area */}
      <div className="z-10 flex flex-col items-center">
        <div className="h-32 w-32 overflow-hidden rounded-full border-[3px] border-white shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
            alt="Profile Avatar" 
            className="h-full w-full object-cover grayscale"
          />
        </div>
        <button className="mt-6 rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-[#4F46E5] shadow-sm transition hover:bg-gray-50 active:scale-95">
          Change Profile Picture
        </button>
      </div>

      {/* Bottom Actions */}
      <div className="z-10 mb-16 flex w-full flex-col items-center gap-6 px-10">
        <button 
          onClick={onNext}
          className="w-full rounded-full bg-white py-4 text-sm font-bold text-[#4F46E5] shadow-lg transition hover:bg-gray-50 active:scale-95"
        >
          UPLOAD PICTURE
        </button>
        <button 
          onClick={onNext}
          className="text-sm font-bold tracking-wide text-white transition hover:text-gray-200 hover:underline"
        >
          SKIP
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
