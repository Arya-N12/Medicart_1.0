import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import SignUpScreen from './components/SignUpScreen';
import SignInScreen from './components/SignInScreen';
import OtpScreen from './components/OtpScreen';
import WelcomeScreen from './components/WelcomeScreen';
import HomeScreen from './components/HomeScreen';
import FiltersScreen from './components/FiltersScreen';
import ProductDetailsScreen from './components/ProductDetailsScreen';
import SuccessScreen from './components/SuccessScreen';
import CartScreen from './components/CartScreen';
import ProfileScreen from './components/ProfileScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onNext={() => navigate('signup')} onSignIn={() => navigate('signin')} />;
      case 'signup':
        return <SignUpScreen onNext={() => navigate('otp')} onBack={() => navigate('splash')} />;
      case 'signin':
        return <SignInScreen onNext={() => navigate('home')} onBack={() => navigate('splash')} />;
      case 'otp':
        return <OtpScreen onNext={() => navigate('welcome')} onBack={() => navigate('signup')} />;
      case 'welcome':
        return <WelcomeScreen onNext={() => navigate('home')} />;
      case 'home':
        return <HomeScreen onNavigate={(screen) => navigate(screen)} />;
      case 'filters':
        return <FiltersScreen onBack={() => navigate('home')} />;
      case 'product_details':
        return <ProductDetailsScreen onBack={() => navigate('home')} onAddToCart={() => navigate('success')} />;
      case 'success':
        return <SuccessScreen onNext={() => navigate('home')} />;
      case 'cart':
        return <CartScreen onBack={() => navigate('home')} onCheckout={() => navigate('success')} />;
      case 'profile':
        return <ProfileScreen onBack={() => navigate('home')} onLogout={() => navigate('signin')} />;
      default:
        return <SplashScreen onNext={() => navigate('signup')} onSignIn={() => navigate('signin')} />;
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-100 sm:items-center sm:justify-center sm:p-4">
      {/* Native-feeling mobile app container */}
      <div className="relative flex h-screen w-full flex-col overflow-hidden bg-white shadow-2xl sm:h-[850px] sm:max-h-[90vh] sm:max-w-[400px] sm:rounded-[40px] sm:border-[8px] sm:border-gray-900">
        {renderScreen()}
      </div>
      
      {/* Simple navigation for testing UI outside the regular flow */}
      <div className="hidden absolute right-8 top-8 sm:flex flex-col gap-2 rounded-xl bg-white p-4 shadow-lg h-[80vh] overflow-y-auto">
        <h3 className="font-bold text-gray-700">Debug Navigation</h3>
        <button onClick={() => navigate('splash')} className="rounded bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300">1. Splash</button>
        <button onClick={() => navigate('signup')} className="rounded bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300">2. Sign Up</button>
        <button onClick={() => navigate('otp')} className="rounded bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300">3. OTP</button>
        <button onClick={() => navigate('welcome')} className="rounded bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300">4. Welcome</button>
        <button onClick={() => navigate('signin')} className="rounded bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300">5. Sign In</button>
        <button onClick={() => navigate('home')} className="rounded bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300">6. Home</button>
        <button onClick={() => navigate('filters')} className="rounded bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300">7. Filters</button>
        <button onClick={() => navigate('product_details')} className="rounded bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300">8. Product Details</button>
        <button onClick={() => navigate('cart')} className="rounded bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300">9. Cart</button>
        <button onClick={() => navigate('profile')} className="rounded bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300">10. Profile</button>
        <button onClick={() => navigate('success')} className="rounded bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300">11. Success</button>
      </div>
    </div>
  );
}

export default App;
