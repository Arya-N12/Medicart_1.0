import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/AccessibleUI';
import { ChevronLeft, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';

/**
 * Cart Screen.
 * Redesign Feature: ARIA Labels & Color Contrast Optimization.
 */
export const CartScreen = () => {
  const navigate = useNavigate();
  
  return (
    <main className="pb-24 animate-in fade-in duration-300">
      <header className="px-4 py-6 flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)} aria-label="Back to home">
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-xl font-bold text-gray-900">Your Cart</h1>
      </header>

      <div className="px-4 space-y-4">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="flex gap-4 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
              <img 
                src={product.image} 
                alt={product.altText} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <h2 className="font-bold text-gray-900 line-clamp-1">{product.name}</h2>
                <p className="text-primary font-bold">₹{product.price}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center bg-gray-50 rounded-lg p-1" aria-label={`Quantity for ${product.name}`}>
                  <Button variant="ghost" size="icon" className="w-8 h-8" aria-label="Decrease quantity">
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-8 text-center font-bold text-sm" aria-live="polite">1</span>
                  <Button variant="ghost" size="icon" className="w-8 h-8" aria-label="Increase quantity">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <Button variant="ghost" size="icon" className="text-error hover:bg-error/10" aria-label={`Remove ${product.name} from cart`}>
                  <Trash2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-20 left-0 right-0 p-6 bg-white border-t border-gray-100 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500 font-bold uppercase tracking-wider">Total Amount</span>
          <span className="text-2xl font-extrabold text-gray-900">₹6,448.00</span>
        </div>
        <Link to="/checkout">
          <Button className="w-full h-14 rounded-full text-lg shadow-lg shadow-primary/20">
            CHECKOUT <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
};
