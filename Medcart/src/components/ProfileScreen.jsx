import React from 'react';

const ProfileMenuItem = ({ icon, title }) => (
  <button className="flex w-full items-center justify-between border-b border-gray-100 py-4 hover:bg-gray-50 px-2 rounded-lg transition">
    <div className="flex items-center gap-4">
      <div className="text-gray-400">{icon}</div>
      <span className="text-[15px] font-medium text-gray-700">{title}</span>
    </div>
    <svg className="h-4 w-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const ProfileScreen = ({ onBack, onLogout }) => {
  return (
    <div className="flex h-full w-full flex-col bg-white">
      {/* Top Banner & Header */}
      <div className="relative h-48 w-full bg-[#4F46E5] rounded-b-[30px] px-6 pt-12 pb-6 flex flex-col justify-between">
        <div className="flex items-center justify-between text-white relative z-10">
          <button onClick={onBack} className="p-1 -ml-1 transition active:scale-95">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <span className="text-lg font-medium">Profile</span>
          <div className="w-6" /> {/* Placeholder to center title */}
        </div>
      </div>

      {/* User Info Card Overflowing Header */}
      <div className="px-6 relative -mt-16 z-20 mb-6">
        <div className="bg-white rounded-2xl shadow-lg p-5 flex items-center gap-4 border border-gray-50">
          <div className="h-20 w-20 rounded-full border-[3px] border-indigo-100 overflow-hidden bg-gray-200">
             <img 
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
              alt="Profile Avatar" 
              className="h-full w-full object-cover grayscale"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Pankaj Patel</h2>
            <p className="text-sm font-medium text-gray-400 mt-1">+91 99794 09958</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-8">
        <ProfileMenuItem 
          title="My Orders" 
          icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>}
        />
        <ProfileMenuItem 
          title="Saved Addresses" 
          icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
        />
        <ProfileMenuItem 
          title="Payment Methods" 
          icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>}
        />
        <ProfileMenuItem 
          title="Settings" 
          icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
        />
        
        <button 
          onClick={onLogout}
          className="mt-8 flex w-full items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition font-semibold"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;
