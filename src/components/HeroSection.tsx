import React from 'react';
import { Button } from "@/components/ui/button";
import { X, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl mx-4 md:mx-12 mt-4 h-[430px] bg-green-500">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container flex flex-col items-start relative z-10 h-full pt-20 pb-10 bg-green">
        <div className="bg-white p-6 rounded-3xl max-w-sm mb-5">
          <h1 className="text-3xl font-bold text-black mb-4 leading-tight">
            Redefining private crypto swaps
          </h1>
          <p className="text-md text-black mb-4">
            Super Simple Swaps is a first-of-its-kind experiment in private community-rewarded crypto swaps for the modern trader.
          </p>
        </div>
        <div className="flex flex-wrap gap-[6.0rem] mb-1">
          <Button className="bg-black text-white hover:bg-gray-800 rounded-3xl px-6 py-6 h-auto text-base font-medium">
            Swap now
          </Button>
          <Button variant="outline" className="bg-white border-2 border-gray-200 text-black rounded-3xl px-6 py-6 h-auto text-base font-medium hover:bg-gray-100 flex items-center justify-center gap-2">
            <span>find us on</span>
            <X size={18} />
          </Button>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;