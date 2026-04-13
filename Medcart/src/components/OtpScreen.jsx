import React from 'react';

const OtpScreen = ({ onNext, onBack }) => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-white">
      
      {/* Top Blue Header Area */}
      <div className="relative h-64 w-full bg-[#4F46E5] rounded-b-[20px] overflow-hidden">
        {/* Wavy background for header */}
        <div className="absolute inset-0 z-0">
          <svg viewBox="0 0 400 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute h-full w-full opacity-30">
            <path d="M-50 150C-50 150 50 20 200 100C350 180 450 50 450 50V-50H-50V150Z" fill="#3730A3" />
            <path d="M0 256V200C100 220 250 120 400 180V256H0Z" fill="#4338CA" />
          </svg>
        </div>

        {/* Back Icon */}
        <button onClick={onBack} className="absolute left-6 top-12 z-10 p-2 -m-2 text-white">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>

        {/* Center Logo & Title */}
        <div className="z-10 flex h-full flex-col items-center justify-center pb-6">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border-[1.5px] border-white/90 bg-transparent mt-4 mb-3">
            <span className="text-[64px] font-normal leading-none text-white font-serif tracking-tighter">M</span>
          </div>
          <h1 className="text-2xl font-bold tracking-[0.2em] text-white">MEDCART</h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="z-20 flex flex-1 flex-col items-center px-6 pt-12 pb-8 text-center">
        
        <div className="w-full bg-white">
          <div className="mb-10 flex items-center justify-center mt-[-10px]">
            <div className="h-px flex-1 bg-gray-100"></div>
            <span className="px-5 text-[14px] font-bold text-[#4F46E5] tracking-wide">OTP VERIFICATION</span>
            <div className="h-px flex-1 bg-gray-100"></div>
          </div>

          <p className="mb-8 text-sm text-gray-700 tracking-wide">
            OTP HAS BEEN SENT TO <span className="font-semibold">9979409958</span>
          </p>

          {/* OTP Digit Boxes */}
          <div className="flex justify-center gap-4 px-2">
            {[8, 9, 7, 7].map((num, i) => (
              <div 
                key={i} 
                className="flex h-16 w-14 items-center justify-center rounded-md border border-gray-100 bg-gray-50/50 shadow-sm text-2xl font-normal text-gray-800"
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-16 w-full flex flex-col items-center">
          <button 
            onClick={onNext}
            className="w-full rounded-full bg-[#4F46E5] py-4 text-sm font-bold text-white shadow-md transition hover:bg-indigo-600 active:scale-95"
          >
            VERIFY OTP
          </button>
          
          <div className="mt-8 flex items-center justify-center gap-4 text-[15px]">
            <span className="text-gray-400">00:30</span>
            <button className="text-gray-500 hover:text-[#4F46E5] transition font-medium">
              Resend OTP
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OtpScreen;
