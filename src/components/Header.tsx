import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const handleButtonClick = () => {
    const exchangeSection = document.getElementById("exchange-section");
    if (exchangeSection) {
      exchangeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center bg-gradient-to-r from-white to-gray-50 shadow-sm">
      <div className="flex items-center gap-4">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-12 h-12 object-contain rounded-full"
        />
        <span className="font-extrabold text-xl text-gray-900 tracking-tight">
          Super Simple Swaps
        </span>
      </div>

      <nav className="hidden md:flex space-x-10">
        <Link
          to="/"
          className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300 text-base"
        >
          Home
        </Link>
        <Link
          to="/"
          onClick={() => {
            const footerSection = document.getElementById("footer-section");
            if (footerSection) {
              footerSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300 text-base"
        >
          Contact
        </Link>
        <Link
          to="/"
          onClick={() => {
            const featurevideo = document.getElementById(
              "featurevideo-section"
            );
            if (featurevideo) {
              featurevideo.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300 text-base"
        >
          $$$S
        </Link>
      </nav>

      <div className="flex items-center">
        <Button
          onClick={handleButtonClick}
          className="bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-violet-500 text-white hover:bg-gradient-to-r hover:from-red-600 hover:via-orange-600 hover:via-yellow-600 hover:via-green-600 hover:via-blue-600 hover:via-indigo-600 hover:to-violet-600 rounded-full px-6 py-2 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
        >
          Buy Super Simple Swaps
        </Button>
      </div>
    </header>
  );
};

export default Header;
