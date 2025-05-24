import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="py-30 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        {/* Find Us On */}
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Find us on</h2>
          <div className="flex justify-center items-center gap-10">
            <a href="#" className="text-black">
              <img src="/X.png" alt="X" className="w-auto h-10" />
            </a>
            <a href="#" className="text-black">
              <img
                src="/DexScreener.png"
                alt="DEXScreener"
                className="h-10 w-auto"
              />
            </a>
            <a href="#" className="text-black">
              <img src="/telegram.png" alt="Telegram" className="w-auto h-8" />
            </a>
            <a href="#" className="text-black">
              <img
                src="/etherscan.png"
                alt="Etherscan"
                className="h-8 w-auto"
              />
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
          <img
            src="/logo.png"
            alt="Logo"
            className="w-[2rem] h-[2rem] object-contain me-3"
          />
          <span className="font-bold text-lg text-black">
            Super Simple Swaps
          </span>
          <nav className="absolute left-1/2 font-bold transform -translate-x-1/2 flex space-x-8">
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
            <Button className="bg-white font-bold text-black hover:bg-gray-100 border border-gray-300 rounded-full px-4 py-2 h-auto text-sm">
              BUY Super Simple Swaps
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
