import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const MissionSection: React.FC = () => {
  return (
    <section className="bg-[#1A2E4D] py-12 px-6 md:px-12 rounded-3xl mx-4 md:mx-12">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
          Mission Simple
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 flex flex-col items-center md:items-start">
            <div className="flex items-center md:items-start gap-4 mb-6">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-20 h-20 md:w-24 md:h-24 object-contain flex-shrink-0"
              />
              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                No team token dumps. No hidden mechanics. SSS is entirely funded
                through liquidity provider (LP) rewards—staying true to first
                principles. The team never sells tokens, ensuring full
                transparency. Every allocation is traceable via dedicated
                Ethereum addresses.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-white/70 backdrop-blur rounded-2xl shadow-sm overflow-hidden border-0">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">
                    75%
                  </h3>
                  <p className="text-base md:text-lg text-gray-700">
                    Profit to swap users
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur rounded-2xl shadow-sm overflow-hidden border-0">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">
                    25%
                  </h3>
                  <p className="text-base md:text-lg text-gray-700">
                    Profit to holders
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur rounded-2xl shadow-sm overflow-hidden border-0 sm:col-span-2">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">
                    100%
                  </h3>
                  <p className="text-base md:text-lg text-gray-700">
                    Transparently Built and Allocated
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
