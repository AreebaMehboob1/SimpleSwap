
import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center bg-white">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Logo" className="w-[4rem] h-[4rem] object-contain" />
        <span className="font-bold text-lg text-black">Super Simple Swaps</span>
      </div>
      
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="text-black hover:text-gray-600 transition-colors text-sm">Home</a>
        <a href="#" className="text-black hover:text-gray-600 transition-colors text-sm">Contact</a>
        <a href="#" className="text-black hover:text-gray-600 transition-colors text-sm">$$$S</a>
      </nav>
      
      <div className="flex items-center">
        <Button className="bg-white text-black hover:bg-gray-100 border border-gray-300 rounded-full px-4 py-2 h-auto text-sm">
          BUY Super Simple Swaps
        </Button>
      </div>
    </header>
  );
};

export default Header;
