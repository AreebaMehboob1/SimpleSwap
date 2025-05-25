import React from "react";
import { Button } from "@/components/ui/button";
import { X, Play } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl mx-4 md:mx-12 mt-4 h-[430px] bg-green-500">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/HeroSection (2).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container flex flex-col items-start relative z-10 h-full pt-20 pb-10 bg-green">
        <div className="bg-white p-6 rounded-2xl max-w-sm mb-5">
          <h1 className="text-3xl font-bold text-black mb-4 leading-tight">
            Redefining private crypto swaps
          </h1>
          <p className="text-md text-black mb-4">
            Super Simple Swaps is a first-of-its-kind experiment in private
            community-rewarded crypto swaps for the modern trader.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 mb-1">
          <Button
            variant="outline"
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-full px-8 py-4 text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Swap Now
          </Button>
          <Button
            variant="outline"
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-full px-8 py-4 text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span>Find Us On</span>
            <X size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
