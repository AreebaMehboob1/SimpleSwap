import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
const LPFundsBreakdown: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-4">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-8">LP funds breakdown</h2>
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
            <div className="bg-[#F5F5DC] p-6 rounded-xl min-w-[300px]">
              <div className="flex items-center mb-4 gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full text-sm">
                  1
                </div>
                <h3 className="text-lg font-semibold">10% Operations</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                For upkeep and administrative tasks
              </p>
              <p className="text-xs text-gray-500 underline">Monitor it here</p>
            </div>
            <div className="bg-[#F5F5DC] p-6 rounded-xl min-w-[300px]">
              <div className="flex items-center mb-4 gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full text-sm">
                  2
                </div>
                <h3 className="text-lg font-semibold">10% Marketing</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Growth initiatives & community building
              </p>
              <p className="text-xs text-gray-500 underline">Monitor it here</p>
            </div>
            <div className="bg-[#F5F5DC] p-6 rounded-xl min-w-[300px]">
              <div className="flex items-center mb-4 gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full text-sm">
                  3
                </div>
                <h3 className="text-lg font-semibold">40% Long term lock</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Locked for token value increase
              </p>
              <p className="text-xs text-gray-500 underline">Monitor it here</p>
            </div>
            <div className="bg-[#F5F5DC] p-6 rounded-xl min-w-[300px]">
              <div className="flex items-center mb-4 gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full text-sm">
                  4
                </div>
                <h3 className="text-lg font-semibold">40% Project funding</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                For the perfect liquidity pool balance
              </p>
              <p className="text-xs text-gray-500 underline">Monitor it here</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-900 rounded-3xl overflow-hidden mt-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 text-white">
            <div className="flex flex-col items-center text-center">
              <h3 className="font-semibold mb-2 uppercase">Community</h3>
              <p className="text-sm mb-4">
                Community-owned. You hold the tokens. You make the decisions.
              </p>
              <div className="rounded-lg overflow-hidden relative aspect-square w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20"></div>
                <Button className="bg-white/30 hover:bg-white/40 rounded-full w-12 h-12 flex items-center justify-center">
                  <Play size={20} className="text-white ml-1" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <h3 className="font-semibold mb-2 uppercase">Rewards</h3>
              <p className="text-sm mb-4">
                $$$S token economy rewards swap users.
              </p>
              <div className="rounded-lg overflow-hidden relative aspect-square w-32 h-32 flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-black/20"></div>
                <Button className="bg-white/30 hover:bg-white/40 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                  <Play size={20} className="text-white ml-1" />
                </Button>
                <Button className="bg-white/30 hover:bg-white/40 rounded-full w-12 h-12 flex items-center justify-center">
                  <Play size={20} className="text-white ml-1" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <h3 className="font-semibold mb-2 uppercase">Transparent</h3>
              <p className="text-sm mb-4">
                Complete transparency. All decisions and finances are on-chain
                and discussed live on X.
              </p>
              <div className="rounded-lg overflow-hidden relative aspect-square w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LPFundsBreakdown;
