/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ShoppingCart, 
  User, 
  Menu, 
  Search, 
  Bell, 
  ArrowLeft, 
  Plus, 
  Minus, 
  ChevronRight,
  CreditCard,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Screen = 'home' | 'details' | 'checkout' | 'success';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  alt: string;
}

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Complete First-Aid Responder Kit',
    price: 850,
    image: 'https://picsum.photos/seed/firstaid/400/300',
    description: 'Comprehensive emergency response kit containing bandages, antiseptics, and essential medical supplies for immediate care.',
    category: 'First Aid & Wound Care',
    alt: 'Red hard-shell emergency first-aid kit opened to show organized medical supplies including bandages, scissors, and antiseptic wipes.'
  },
  {
    id: '2',
    name: 'Dr. Trust Professional Finger Pulse Oximeter',
    price: 1299,
    image: 'https://picsum.photos/seed/oximeter/400/300',
    description: 'Accurately measure your blood oxygen saturation levels (SpO2) and pulse rate in seconds. Features a high-resolution OLED display.',
    category: 'Diagnostic Devices',
    alt: 'Black and silver Dr. Trust finger pulse oximeter showing a digital reading of 98 percent oxygen saturation and 75 beats per minute.'
  },
  {
    id: '3',
    name: 'Accu-Chek Active Blood Glucometer',
    price: 999,
    image: 'https://picsum.photos/seed/glucometer/400/300',
    description: 'Easy-to-use blood glucose monitoring system for accurate diabetes management at home.',
    category: 'Diagnostic Devices',
    alt: 'Accu-Chek Active glucometer device with a test strip inserted, showing a reading of 180 mg/dL, next to a container of test strips.'
  },
  {
    id: '4',
    name: 'Omron Digital Blood Pressure Monitor',
    price: 2450,
    image: 'https://picsum.photos/seed/bp/400/300',
    description: 'Clinically validated digital blood pressure monitor with Intellisense technology for comfortable and accurate readings.',
    category: 'Diagnostic Devices',
    alt: 'White Omron digital blood pressure monitor with a large blue-rimmed display showing 120 over 80 mmHg, connected to a gray arm cuff.'
  }
];

// --- Components ---

const Header = ({ onCartClick, onMenuClick, currentScreen, onBack }: { 
  onCartClick: () => void, 
  onMenuClick: () => void,
  currentScreen: Screen,
  onBack: () => void
}) => (
  <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
    <div className="flex items-center gap-3">
      {currentScreen !== 'home' ? (
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Go back to previous screen"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
      ) : (
        <button 
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Open navigation menu"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      )}
      <h1 className="text-xl font-bold text-primary tracking-tight">Medcart</h1>
    </div>
    <div className="flex items-center gap-1">
      <button 
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="View notifications"
      >
        <Bell className="w-6 h-6 text-gray-700" />
      </button>
      <button 
        onClick={onCartClick}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
        aria-label="View shopping cart, 4 items"
      >
        <ShoppingCart className="w-6 h-6 text-gray-700" />
        <span className="absolute top-1 right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">4</span>
      </button>
    </div>
  </header>
);

function ProductCard({ product, onClick }: { product: Product, onClick: () => void, key?: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
      <button 
        onClick={onClick}
        className="relative aspect-[4/3] overflow-hidden group"
        aria-label={`View details for ${product.name}`}
      >
        <img 
          src={product.image} 
          alt={product.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </button>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1">{product.name}</h3>
        <p className="text-primary font-bold text-lg">₹{product.price.toLocaleString()}</p>
        <button 
          className="mt-4 w-full bg-primary text-white py-2 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

const HomeScreen = ({ onProductClick }: { onProductClick: (p: Product) => void }) => (
  <main className="p-4 space-y-8">
    <section aria-labelledby="search-heading">
      <h2 id="search-heading" className="sr-only">Search Products</h2>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input 
          type="search" 
          placeholder="Search medicines, devices..." 
          className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          aria-label="Search for medical products"
        />
      </div>
    </section>

    <section aria-labelledby="trending-heading">
      <div className="flex items-center justify-between mb-4">
        <h2 id="trending-heading" className="text-lg font-bold text-gray-900">Trending Products</h2>
        <button className="text-primary font-medium text-sm hover:underline">See All</button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {PRODUCTS.slice(0, 2).map(p => (
          <ProductCard key={p.id} product={p} onClick={() => onProductClick(p)} />
        ))}
      </div>
    </section>

    <section aria-labelledby="categories-heading">
      <div className="flex items-center justify-between mb-4">
        <h2 id="categories-heading" className="text-lg font-bold text-gray-900">Popular Categories</h2>
        <button className="text-primary font-medium text-sm hover:underline">See All</button>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
        {['All', 'Diagnostic Devices', 'First Aid', 'Personal Hygiene'].map((cat, i) => (
          <button 
            key={cat}
            className={`px-6 py-2 rounded-full whitespace-nowrap font-medium transition-colors ${i === 0 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>

    <section aria-labelledby="popular-heading">
      <div className="flex items-center justify-between mb-4">
        <h2 id="popular-heading" className="text-lg font-bold text-gray-900">Most Popular</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {PRODUCTS.slice(2, 4).map(p => (
          <ProductCard key={p.id} product={p} onClick={() => onProductClick(p)} />
        ))}
      </div>
    </section>
  </main>
);

const ProductDetailsScreen = ({ product, onCheckout }: { product: Product, onCheckout: () => void }) => (
  <main className="pb-24">
    <div className="bg-gray-50 p-8 flex justify-center">
      <img 
        src={product.image} 
        alt={product.alt} 
        className="max-h-64 object-contain rounded-2xl shadow-lg"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-primary">₹{product.price.toLocaleString()}</p>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
            <span className="text-yellow-700 font-bold text-sm">★ 4.5</span>
          </div>
        </div>
      </div>

      <div className="flex border-b border-gray-200">
        {['Description', 'Reviews', 'Offers', 'Policy'].map((tab, i) => (
          <button 
            key={tab}
            className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${i === 0 ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <p className="text-gray-600 leading-relaxed">
        {product.description}
      </p>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex gap-4 items-center max-w-md mx-auto">
        <div className="flex items-center bg-gray-100 rounded-xl p-1">
          <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors" aria-label="Decrease quantity">
            <Minus className="w-5 h-5 text-gray-600" />
          </button>
          <span className="w-10 text-center font-bold text-gray-900" aria-label="Quantity 1">1</span>
          <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors" aria-label="Increase quantity">
            <Plus className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <button 
          onClick={onCheckout}
          className="flex-grow bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-transform active:scale-95"
        >
          Add to Cart
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </div>
  </main>
);

const CheckoutScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: 'Pankaj Patel',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.cardNumber.match(/^\d{16}$/)) {
      newErrors.cardNumber = "Please enter a valid 16-digit card number without spaces.";
    }
    if (!formData.expiry.match(/^\d{2}\/\d{2}$/)) {
      newErrors.expiry = "Please enter expiry date in MM/YY format.";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onComplete();
    }
  };

  return (
    <main className="p-6 space-y-8">
      <section aria-labelledby="shipping-heading">
        <h2 id="shipping-heading" className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Shipping Address
        </h2>
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 space-y-2">
          <p className="font-bold text-gray-900">Pankaj Patel</p>
          <p className="text-gray-600">Jubilee Hills, Hyderabad, India</p>
          <p className="text-gray-600">Pincode: 500019</p>
          <button className="text-primary text-sm font-bold hover:underline mt-2">Change Address</button>
        </div>
      </section>

      <section aria-labelledby="payment-heading">
        <h2 id="payment-heading" className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-primary" />
          Payment Method
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2 mb-6">
            {['Debit Card', 'Credit Card', 'UPI', 'Net Banking'].map((method, i) => (
              <button 
                key={method}
                type="button"
                className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-colors ${i === 0 ? 'bg-primary text-white border-primary' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'}`}
              >
                {method}
              </button>
            ))}
          </div>

          <div className="space-y-1">
            <label htmlFor="card-name" className="block text-sm font-medium text-gray-700">Name on Card</label>
            <input 
              id="card-name"
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card Number</label>
            <input 
              id="card-number"
              type="text" 
              placeholder="9887 8390 8737 8362"
              className={`w-full bg-gray-50 border rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary outline-none transition-colors ${errors.cardNumber ? 'border-error' : 'border-gray-200'}`}
              aria-invalid={!!errors.cardNumber}
              aria-describedby={errors.cardNumber ? "card-number-error" : undefined}
              onChange={(e) => setFormData({...formData, cardNumber: e.target.value.replace(/\s/g, '')})}
              required
            />
            {errors.cardNumber && (
              <p id="card-number-error" className="text-error text-sm font-medium mt-1" role="alert">
                {errors.cardNumber}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="exp-date" className="block text-sm font-medium text-gray-700">Exp Date</label>
              <input 
                id="exp-date"
                type="text" 
                placeholder="MM/YY"
                className={`w-full bg-gray-50 border rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary outline-none ${errors.expiry ? 'border-error' : 'border-gray-200'}`}
                aria-invalid={!!errors.expiry}
                aria-describedby={errors.expiry ? "exp-date-error" : undefined}
                onChange={(e) => setFormData({...formData, expiry: e.target.value})}
                required
              />
              {errors.expiry && (
                <p id="exp-date-error" className="text-error text-sm font-medium mt-1" role="alert">
                  {errors.expiry}
                </p>
              )}
            </div>
            <div className="space-y-1">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
              <input 
                id="cvv"
                type="password" 
                placeholder="***"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary outline-none"
                required
              />
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 mt-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 font-medium">Total Amount</span>
              <span className="text-2xl font-bold text-gray-900">₹6,448.00</span>
            </div>
            <button 
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-transform active:scale-95 shadow-lg shadow-blue-100"
            >
              Place Order
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

const SuccessScreen = ({ onBack }: { onBack: () => void }) => (
  <main className="flex flex-col items-center justify-center min-h-[80vh] p-6 text-center">
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8"
    >
      <CheckCircle2 className="w-16 h-16 text-green-600" />
    </motion.div>
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Order Has Been Accepted</h2>
    <p className="text-gray-600 mb-12 max-w-xs">
      Your items have been placed and are on their way to being processed.
    </p>
    <div className="w-full space-y-4">
      <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors">
        Track Order
      </button>
      <button 
        onClick={onBack}
        className="w-full text-primary font-bold py-2 hover:underline"
      >
        Back to Home
      </button>
    </div>
  </main>
);

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setScreen('details');
  };

  const handleBack = () => {
    if (screen === 'details') setScreen('home');
    else if (screen === 'checkout') setScreen('details');
    else if (screen === 'success') setScreen('home');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 max-w-md mx-auto shadow-2xl relative">
      <Header 
        currentScreen={screen}
        onBack={handleBack}
        onCartClick={() => setScreen('checkout')}
        onMenuClick={() => {}}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {screen === 'home' && <HomeScreen onProductClick={handleProductClick} />}
          {screen === 'details' && selectedProduct && (
            <ProductDetailsScreen 
              product={selectedProduct} 
              onCheckout={() => setScreen('checkout')} 
            />
          )}
          {screen === 'checkout' && <CheckoutScreen onComplete={() => setScreen('success')} />}
          {screen === 'success' && <SuccessScreen onBack={() => setScreen('home')} />}
        </motion.div>
      </AnimatePresence>

      {/* Bottom Navigation for Home Screen */}
      {screen === 'home' && (
        <nav className="fixed bottom-0 left-0 right-0 bg-primary text-white p-4 flex justify-around items-center max-w-md mx-auto rounded-t-3xl shadow-2xl">
          <button className="p-2" aria-label="Go to Home">
            <div className="w-6 h-6 border-2 border-white rounded-md flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </button>
          <button className="p-2 opacity-70" aria-label="View Orders">
            <div className="w-6 h-6 border-2 border-white rounded-sm" />
          </button>
          <button className="p-2 opacity-70" aria-label="View Profile">
            <User className="w-6 h-6" />
          </button>
        </nav>
      )}
    </div>
  );
}
