import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Button } from '../components/AccessibleUI';
import { Star, ChevronLeft, Heart, ShoppingCart, Plus, Minus } from 'lucide-react';
import { cn } from '@/src/lib/utils';

/**
 * Product Details Screen.
 * Redesign Feature: ARIA Labels & Descriptive Alt-Text.
 */
export const ProductDetailsScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  const [quantity, setQuantity] = React.useState(1);

  if (!product) return <div className="p-10 text-center">Product not found</div>;

  return (
    <main className="pb-24 animate-in slide-in-from-right duration-300">
      <div className="relative aspect-square bg-gray-50">
        <div className="absolute top-4 left-4 right-4 z-10 flex justify-between">
          <Button 
            variant="secondary" 
            size="icon" 
            aria-label="Go back to home"
            onClick={() => navigate(-1)}
            className="bg-white/80 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button 
            variant="secondary" 
            size="icon" 
            aria-label="Add to favorites"
            className="bg-white/80 backdrop-blur-sm"
          >
            <Heart className="w-6 h-6" />
          </Button>
        </div>
        <img 
          src={product.image} 
          alt={product.altText} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="px-6 py-8 bg-white rounded-t-[32px] -mt-8 relative z-20">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
              {product.name}
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center text-yellow-500" aria-label={`Rating: ${product.rating} out of 5 stars`}>
                <Star className="w-4 h-4 fill-current" />
                <span className="ml-1 text-sm font-bold text-gray-700">{product.rating}</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-500 font-medium">120 Reviews</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-2xl font-extrabold text-primary block">₹{product.price}</span>
          </div>
        </div>

        <div className="flex border-b border-gray-100 mb-6" role="tablist" aria-label="Product information">
          {['Description', 'Reviews', 'Offers', 'Policy'].map((tab, i) => (
            <button
              key={tab}
              role="tab"
              aria-selected={i === 0}
              className={cn(
                "px-4 py-3 text-sm font-bold transition-all border-b-2",
                i === 0 ? "border-primary text-primary" : "border-transparent text-gray-400"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="prose prose-sm text-gray-600 mb-8">
          <p>{product.description}</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-primary rounded-full p-1 h-14" aria-label="Adjust quantity">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/20"
              aria-label="Decrease quantity"
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
            >
              <Minus className="w-5 h-5" />
            </Button>
            <span className="w-8 text-center font-bold text-white text-lg" aria-live="polite">
              {quantity}
            </span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/20"
              aria-label="Increase quantity"
              onClick={() => setQuantity(q => q + 1)}
            >
              <Plus className="w-5 h-5" />
            </Button>
          </div>
          
          <Button className="flex-1 h-14 rounded-full text-lg shadow-lg shadow-primary/20" aria-label={`Add ${quantity} items to cart`}>
            <ShoppingCart className="w-5 h-5 mr-2" />
            ADD TO CART
          </Button>
        </div>
      </div>
    </main>
  );
};
