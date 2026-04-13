import React from 'react';

const InputField = ({ label, type = "text", placeholder }) => {
  return (
    <div className="flex flex-col rounded-md border border-gray-100 bg-gray-50/50 p-3 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
      <label className="text-sm text-gray-800">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        className="mt-1 w-full bg-transparent text-[15px] text-gray-500 placeholder-gray-400 outline-none"
      />
    </div>
  );
};

const SignUpScreen = ({ onNext, onBack }) => {
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
        <button onClick={onBack} className="absolute left-6 top-12 z-10 p-2 -m-2 text-white transition active:scale-95">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>

        {/* Center Logo */}
        <div className="z-10 flex h-full items-center justify-center pb-6">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border-[1.5px] border-white/90 bg-transparent relative top-6">
            <span className="text-[64px] font-normal leading-none text-white font-serif tracking-tighter">M</span>
          </div>
        </div>
      </div>

      {/* Main Form Area */}
      <div className="z-20 flex -mt-8 flex-1 flex-col items-center overflow-y-auto px-6 pb-8 pt-4">
        
        {/* Seamless form container overlapping header just slightly to hide any gap, background white. 
            The image shows the form fields starting straight after a "SIGN UP" separator. 
            Using a flex form to fill the space. */}
        <div className="w-full bg-white pt-2">
          
          <div className="mb-6 flex items-center justify-center">
            <div className="h-px flex-1 bg-gray-100"></div>
            <span className="px-4 text-[13px] font-bold text-[#4F46E5] tracking-wide">SIGN UP</span>
            <div className="h-px flex-1 bg-gray-100"></div>
          </div>

          <div className="flex flex-col gap-4">
            <InputField 
              label="Enter Name" 
              placeholder="Pankaj_Patel" 
            />
            <InputField 
              label="Enter Email" 
              type="email"
              placeholder="pankaj.paghadar8@gmail.com" 
            />
            <InputField 
              label="Enter Mobile" 
              type="tel"
              placeholder="+91 99794 09958" 
            />
            <InputField 
              label="Enter Password" 
              type="password"
              placeholder="••••••" 
            />
            <InputField 
              label="Confirm Password" 
              type="password"
              placeholder="••••••" 
            />
          </div>
        </div>

        {/* Next Button */}
        <div className="mt-auto pt-8 w-full">
          <button 
            onClick={onNext}
            className="w-full rounded-full bg-[#4F46E5] py-4 text-sm font-bold text-white shadow-md transition hover:bg-indigo-600 active:scale-95"
          >
            NEXT
          </button>
        </div>

      </div>
    </div>
  );
};

export default SignUpScreen;
