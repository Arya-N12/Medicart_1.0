import React from 'react';

const InputField = ({ label, type = "text", placeholder, icon }) => {
  return (
    <div className="flex flex-col rounded-md border border-gray-100 bg-gray-50/50 p-3 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
      <label className="text-sm text-gray-800">{label}</label>
      <div className="flex items-center">
        <input 
          type={type} 
          placeholder={placeholder} 
          className="mt-1 w-full bg-transparent text-[15px] text-gray-500 placeholder-gray-400 outline-none"
        />
        {icon && <div className="text-gray-400 P-1">{icon}</div>}
      </div>
    </div>
  );
};

const SignInScreen = ({ onNext, onBack }) => {
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

      {/* Main Form Area */}
      <div className="z-20 flex flex-1 flex-col items-center px-6 pt-12 pb-8">
        
        <div className="w-full bg-white">
          <div className="mb-8 flex items-center justify-center mt-[-10px]">
            <div className="h-px flex-1 bg-gray-100"></div>
            <span className="px-5 text-[14px] font-bold text-[#4F46E5] tracking-wide">SIGN IN</span>
            <div className="h-px flex-1 bg-gray-100"></div>
          </div>

          <div className="flex flex-col gap-5">
            <InputField 
              label="User Name" 
              placeholder="Pankaj_Patel" 
            />
            <InputField 
              label="Password" 
              type="password"
              placeholder="••••••" 
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              }
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 w-full flex flex-col items-center">
          <button 
            onClick={onNext}
            className="w-full rounded-full bg-[#4F46E5] py-4 text-sm font-bold text-white shadow-md transition hover:bg-indigo-600 active:scale-95"
          >
            SIGN IN
          </button>
          
          <button className="mt-6 text-sm text-gray-500 hover:text-[#4F46E5] transition">
            Forgot Password?
          </button>
        </div>

      </div>
    </div>
  );
};

export default SignInScreen;
