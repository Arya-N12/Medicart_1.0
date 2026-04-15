import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingCart, User, MessageCircle, Bell, Menu, Search, Filter } from 'lucide-react';
import { Button } from './AccessibleUI';
import { cn } from '@/src/lib/utils';

/**
 * Accessible Navigation component using ARIA landmarks.
 * Redesign Feature: ARIA Landmarks & ARIA Labels.
 */
export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" aria-label="Open navigation menu">
          <Menu className="w-6 h-6 text-gray-900" />
        </Button>
        <Link to="/" className="text-xl font-bold text-primary tracking-tight">
          MEDCART
        </Link>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" aria-label="Search products">
          <Search className="w-6 h-6 text-gray-900" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="View notifications" className="relative">
          <Bell className="w-6 h-6 text-gray-900" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full" />
        </Button>
        <Link to="/cart">
          <Button variant="ghost" size="icon" aria-label="View shopping cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-900" />
          </Button>
        </Link>
      </div>
    </header>
  );
};

export const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: ShoppingCart, label: 'Cart', path: '/cart' },
    { icon: MessageCircle, label: 'Chat', path: '/chat' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50" aria-label="Main Navigation">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link 
            key={item.path} 
            to={item.path}
            className={cn(
              "flex flex-col items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg px-2 py-1",
              isActive ? "text-primary" : "text-gray-500 hover:text-gray-900"
            )}
            aria-current={isActive ? 'page' : undefined}
          >
            <item.icon className={cn("w-6 h-6", isActive && "fill-primary/10")} />
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
