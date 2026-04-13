import React from 'react';

const SplashScreen = ({ onNext, onSignIn }) => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-between overflow-hidden bg-[#4F46E5]">
      
      {/* Wavy Background Elements */}
      <div className="absolute inset-0 z-0">
        <svg viewBox="0 0 400 850" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute h-full w-full opacity-60">
          <path d="M0 0H400V350C400 350 340 450 200 450C60 450 0 550 0 550V0Z" fill="#3730A3" />
          <path d="M0 600C0 600 70 750 200 750C330 750 400 900 400 900H0V600Z" fill="#4338CA" />
          <path d="M-50 150C-50 150 50 30 200 130C350 230 450 100 450 100V-50H-50V150Z" fill="#4338CA" />
        </svg>
      </div>

      {/* Center Content */}
      <div className="z-10 flex h-full flex-col items-center justify-center pt-20">
        {/* Logo Circle */}
        <div className="flex h-40 w-40 items-center justify-center rounded-full border-2 border-white bg-transparent">
          <span className="text-[100px] font-normal leading-none text-white font-serif tracking-tighter">M</span>
        </div>
        
        {/* Brand Name */}
        <h1 className="mt-8 text-3xl font-bold tracking-[0.2em] text-white">MEDCART</h1>
      </div>

      {/* Bottom Actions */}
      <div className="z-10 mb-16 flex w-full flex-col items-center gap-6 px-10">
        <button 
          onClick={onNext}
          className="w-full rounded-full bg-white py-4 text-sm font-bold text-[#4F46E5] shadow-lg transition-transform active:scale-95"
        >
          GET STARTED
        </button>
        <button onClick={onSignIn} className="text-sm font-bold text-white hover:text-gray-200">
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;
