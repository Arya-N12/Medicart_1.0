import React from 'react';

const CheckboxRow = ({ id, label, defaultChecked = false }) => (
  <div className="flex items-center gap-4 py-3">
    <div className="relative flex items-center">
      <input 
        type="checkbox" 
        id={id}
        defaultChecked={defaultChecked}
        className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border border-gray-300 bg-white checked:border-[#4F46E5] checked:bg-[#4F46E5] focus:outline-none focus:ring-offset-1 focus:ring-1 focus:ring-[#4F46E5]" 
      />
      <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none stroke-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
    <label htmlFor={id} className="text-[15px] font-normal text-gray-800 cursor-pointer">{label}</label>
  </div>
);

const FiltersScreen = ({ onBack }) => {
  return (
    <div className="flex h-full w-full flex-col bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 px-6 py-6 border-b border-gray-50/50">
        <button onClick={onBack} className="text-gray-800 p-1 -ml-1 transition active:scale-95">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <span className="text-xl font-medium tracking-wide">Filters</span>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4">
        {/* Categories Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
             <h2 className="text-[17px] font-extrabold text-black">Categories</h2>
             <div className="ml-4 h-px flex-1 bg-gray-100"></div>
          </div>
          
          <div className="flex flex-col">
            <CheckboxRow id="cat1" label="Diagnostic Devices (Thermometers, Oximeters)" />
            <CheckboxRow id="cat2" label="First Aid & Wound Care (Bandages, Antiseptics)" defaultChecked />
            <CheckboxRow id="cat3" label="Orthopedic Support (Knee Braces, Bandages)" />
            <CheckboxRow id="cat4" label="Personal Hygiene (Sanitizers, Masks)" />
            <CheckboxRow id="cat5" label="Health Supplements (Vitamins, Protein)" />
          </div>
        </div>

        {/* Brand Section */}
        <div className="mb-24">
          <div className="flex items-center mb-4">
             <h2 className="text-[17px] font-extrabold text-black">Brand</h2>
             <div className="ml-4 h-px flex-1 bg-gray-100"></div>
          </div>
          
          <div className="flex flex-col">
            <CheckboxRow id="brand1" label="Omron" />
            <CheckboxRow id="brand2" label="Dr.Trust" />
            <CheckboxRow id="brand3" label="Accu-Chek" />
            <CheckboxRow id="brand4" label="Johnson & Johnson" />
            <CheckboxRow id="brand5" label="Dettol" />
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent sm:absolute">
        <button 
          onClick={onBack}
          className="w-full rounded-full bg-[#4F46E5] py-4 text-sm font-bold text-white shadow-lg transition-transform active:scale-95"
        >
          APPLY FILTER
        </button>
      </div>
    </div>
  );
};

export default FiltersScreen;
