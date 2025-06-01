import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
const LPFundsBreakdown: React.FC = () => {
  return (
    <section id="featurevideo-section" className="py-16 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-4">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-8">LP Funds Breakdown</h2>
            <p className="text-gray-700 mb-4">
              Fee-Offset Bridge – Cross-Chain Made Affordable.
            </p>
            <p className="text-gray-700 mb-4">
              We power every transaction with swap fee offsets—no team token
              sales, no dilution, and no hidden moves. Swap fees fuel a
              community fund, reducing costs for all users and creating a
              self-sustaining ecosystem. This first-principles approach ensures
              every bridge is efficient and cost-effective, letting users swap
              privately and cheaply without compromise.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:w-3/4">
            {/* Operations */}
            <div className="bg-[#1A3C4D] p-6 rounded-xl min-w-[300px]">
              <div className="flex items-center mb-4 gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full text-sm">
                  1
                </div>
                <h3 className="text-lg font-semibold text-white">
                  10% Operations
                </h3>
              </div>
              <p className="text-sm text-gray-300 mb-3">
                For upkeep and administrative tasks
              </p>
              <p className="text-xs text-gray-400 underline">Monitor it here</p>
            </div>
            {/* Marketing */}
            <div className="bg-[#2A5A6B] p-6 rounded-xl min-w-[300px]">
              <div className="flex items-center mb-4 gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full text-sm">
                  2
                </div>
                <h3 className="text-lg font-semibold text-white">
                  10% Marketing
                </h3>
              </div>
              <p className="text-sm text-gray-300 mb-3">
                Growth initiatives & community building
              </p>
              <p className="text-xs text-gray-400 underline">Monitor it here</p>
            </div>
            {/* Long Term Lock */}
            <div className="bg-[#2E2A5A] p-6 rounded-xl min-w-[300px]">
              <div className="flex items-center mb-4 gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full text-sm">
                  3
                </div>
                <h3 className="text-lg font-semibold text-white">
                  40% Long term lock
                </h3>
              </div>
              <p className="text-sm text-gray-300 mb-3">
                Locked for token value increase
              </p>
              <p className="text-xs text-gray-400 underline">Monitor it here</p>
            </div>
            {/* Project Funding */}
            <div className="bg-[#1A2E4D] p-6 rounded-xl min-w-[300px]">
              <div className="flex items-center mb-4 gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full text-sm">
                  4
                </div>
                <h3 className="text-lg font-semibold text-white">
                  40% Project funding
                </h3>
              </div>
              <p className="text-sm text-gray-300 mb-3">
                For the perfect liquidity pool balance
              </p>
              <p className="text-xs text-gray-400 underline">Monitor it here</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-3xl overflow-hidden mt-5">
          {/* Video Background */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="featurevideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 p-8 text-white">
            {/* Community Section */}
            <div className="flex flex-col items-center text-center">
              <h3 className="font-semibold mb-2 uppercase">Community</h3>
              <p className="text-sm mb-4">
                Community-owned. You hold the tokens. You make the decisions.
              </p>
              <div className="relative aspect-square w-32 h-32 flex items-center justify-center mt-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        className="w-16 h-16 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div className="absolute top-0 left-0 w-8 h-8 bg-cyan-400/30 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">Q</span>
                      </div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 bg-cyan-400/30 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">A</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rewards Section */}
            <div className="flex flex-col items-center text-center">
              <h3 className="font-semibold mb-2 uppercase">Rewards</h3>
              <p className="text-sm mb-4">
                $$$S token economy rewards swap users.
              </p>
              <div className="relative aspect-square w-32 h-32 flex items-center justify-center mt-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        className="w-16 h-16 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 11.5V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-7.5M12 21V9m0 0H7.5a2.5 2.5 0 010-5c.844 0 1.598.43 2.03 1.09A2.5 2.5 0 0112 9zm0 0h4.5a2.5 2.5 0 000-5c-.844 0-1.598.43-2.03 1.09A2.5 2.5 0 0012 9z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transparent Section */}
            <div className="flex flex-col items-center text-center">
              <h3 className="font-semibold mb-2 uppercase">Transparent</h3>
              <p className="text-sm mb-4">
                Complete transparency. All decisions and finances are on-chain
                and discussed live on X.
              </p>
              <div className="relative aspect-square w-32 h-32 flex items-center justify-center mt-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        className="w-16 h-16 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LPFundsBreakdown;
