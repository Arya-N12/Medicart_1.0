import React from 'react';
import { PRODUCTS } from '../constants';
import { Button } from '../components/AccessibleUI';
import { ShoppingCart, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

/**
 * Home Screen with accessible product grid and categories.
 * Redesign Feature: Descriptive Alt-Text & Color Contrast Optimization.
 */
export const HomeScreen = () => {
  return (
    <main className="pb-24 animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="px-4 py-6" aria-labelledby="trending-heading">
        <div className="flex items-center justify-between mb-4">
          <h2 id="trending-heading" className="text-lg font-bold text-gray-900 uppercase tracking-wide">
            Trending Products
          </h2>
          <Button variant="ghost" className="text-primary font-bold text-sm">
            See All <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
          {PRODUCTS.slice(0, 2).map((product) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              className="min-w-[280px] bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="aspect-[4/3] relative bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.altText} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-extrabold text-lg">₹{product.price}</span>
                  <Button 
                    size="icon" 
                    variant="secondary" 
                    aria-label={`Add ${product.name} to cart`}
                    onClick={(e) => {
                      e.preventDefault();
                      // Add to cart logic
                    }}
                  >
                    <ShoppingCart className="w-5 h-5 text-primary" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-4 py-6" aria-labelledby="categories-heading">
        <div className="flex items-center justify-between mb-4">
          <h2 id="categories-heading" className="text-lg font-bold text-gray-900 uppercase tracking-wide">
            Popular Categories
          </h2>
          <Button variant="ghost" className="text-primary font-bold text-sm">
            See All <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
          {['All', 'Diagnostic Devices', 'First Aid', 'Hygiene'].map((cat, i) => (
            <Button 
              key={cat} 
              variant={i === 0 ? 'primary' : 'secondary'}
              className="whitespace-nowrap rounded-full px-6"
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section className="px-4 py-6" aria-labelledby="popular-heading">
        <h2 id="popular-heading" className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">
          Recently Added
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {PRODUCTS.map((product) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="aspect-square relative bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.altText} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3">
                <h3 className="font-bold text-sm text-gray-900 mb-1 line-clamp-2 h-10">{product.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-primary font-bold">₹{product.price}</span>
                  <Button 
                    size="icon" 
                    variant="secondary" 
                    className="w-8 h-8"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <ShoppingCart className="w-4 h-4 text-primary" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};
