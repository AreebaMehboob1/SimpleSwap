import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="py-30 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        {/* Find Us On */}
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-black mb-6">Find us on</h2>
          <div className="flex justify-center space-x-10">
            <a href="#" className="text-black">
              <div className="w-10 h-10 flex items-center justify-center">
                <X size={24} />
              </div>
            </a>
            <a href="#" className="text-black">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="/dexscreener.svg"
                  alt="DEXScreener"
                  width={24}
                  height={24}
                />
              </div>
            </a>
            <a href="#" className="text-black">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="/telegram.svg"
                  alt="Telegram"
                  width={24}
                  height={24}
                />
              </div>
            </a>
            <a href="#" className="text-black">
              <div className="w-44 h-14 flex items-center justify-center">
                {" "}
                {/* Adjusted container size */}
                <img
                  src="/etherscan.png"
                  alt="Etherscan"
                  className="w-[8rem] h-auto"
                />{" "}
                {/* Let it fill the container */}
              </div>
            </a>
          </div>
        </div>
        {/* Animated Video Section */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-xl w-full max-w-lg aspect-video overflow-hidden">
            <video
              src="/footerVideo.mp4" // 🔁 Replace with your actual file path
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-center mb-5">
          <p className="text-sm text-gray-600 mb-1">
            A decentralized initiative by Super Simple Swaps
          </p>
          <p className="text-sm text-gray-600">
            Bringing cheap simplified private swaps to crypto
          </p>
        </div>
        {/* Navigation & CTA Button */}
        <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center mb-6 md:mb-3">
          {/* Centered Nav */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
            <a href="#" className="text-black text-sm">
              Home
            </a>
            <a href="#" className="text-black text-sm">
              Contact
            </a>
            <a href="#" className="text-black text-sm">
              $$$S
            </a>
          </nav>

          {/* Right-aligned Button */}
          <div className="ml-auto">
            <Button className="bg-white text-black hover:bg-gray-100 border border-gray-300 rounded-full px-4 py-2 h-auto text-sm">
              BUY Super Simple Swaps
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
