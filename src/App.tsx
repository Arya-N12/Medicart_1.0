import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, BottomNav } from './components/Navigation';
import { HomeScreen } from './screens/HomeScreen';
import { ProductDetailsScreen } from './screens/ProductDetailsScreen';
import { CartScreen } from './screens/CartScreen';
import { CheckoutScreen } from './screens/CheckoutScreen';

/**
 * Main App component for Medcart.
 * Implements ARIA landmarks and keyboard navigation support.
 */
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-primary selection:text-white">
        {/* Skip to Content link for keyboard users */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
        >
          Skip to main content
        </a>

        <Navbar />
        
        <div id="main-content" tabIndex={-1} className="max-w-md mx-auto min-h-screen relative outline-none">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductDetailsScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/checkout" element={<CheckoutScreen />} />
            <Route path="/chat" element={<div className="p-10 text-center">Chat Screen (Coming Soon)</div>} />
            <Route path="/profile" element={<div className="p-10 text-center">Profile Screen (Coming Soon)</div>} />
          </Routes>
        </div>

        <BottomNav />
      </div>
    </Router>
  );
}
