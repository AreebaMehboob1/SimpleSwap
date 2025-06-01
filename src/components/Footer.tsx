import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const handleButtonClick = () => {
    const exchangeSection = document.getElementById("exchange-section");
    if (exchangeSection) {
      exchangeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="footer-section" className="py-30 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        {/* Find Us On */}
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Find us on</h2>
          <div className="flex justify-center items-center gap-10">
            <a href="#" className="text-black flex items-center gap-2">
              <img src="/x-social-media.svg" alt="X" className="w-auto h-10" />
              <span className="font-bold fs-6">Twitter</span>
            </a>
            <a href="#" className="text-black flex items-center gap-2">
              <img
                src="/dexscreener.svg"
                alt="DEXScreener"
                className="h-10 w-auto"
              />
              <h1>
                <span className="font-bold">DEX</span>SCREENER
              </h1>
            </a>
            <a href="#" className="text-black flex items-center gap-2">
              <img src="/telegram.svg" alt="Telegram" className="w-auto h-10" />
              <span className="font-bold fs-6">Telegram</span>
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

          {/* Right-aligned Button */}
          <div className="ml-auto position-relative">
            <Button
              onClick={handleButtonClick}
              className="bg-gradient-to-r me-3 from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-violet-500 text-white hover:bg-gradient-to-r hover:from-red-600 hover:via-orange-600 hover:via-yellow-600 hover:via-green-600 hover:via-blue-600 hover:via-indigo-600 hover:to-violet-600 rounded-full px-6 py-2 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Buy Super Simple Swaps
              {/* <a href="#" className="position-absolute bottom-0 end-0 p-5"> */}
              {/* </a> */}
            </Button>
            <a href="#">
              <i className="bi bi-arrow-up-circle h3"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
