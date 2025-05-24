import React from "react";

const networks = [
  { name: "Ethereum", icon: "/ethereum.svg" },
  { name: "Avalanche", icon: "/avalanche.svg" },
  { name: "Base", icon: "/base.svg" },
  { name: "Solana", icon: "/solana.svg" },
  { name: "Binance", icon: "/bnb.svg" },
  { name: "Arbitrum", icon: "/arbitrum.svg" },
  { name: "Ton", icon: "/ton.svg" },
];

const NetworksSection: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white text-center">
      <div className="container ">
        <h2 className="text-3xl font-bold text-black mb-10 ">
          Supported Networks
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8">
          {networks.map((network) => (
            <div key={network.name} className="flex flex-col items-center">
              <div className="network-icon mb-2 bg-white rounded-full p-1  flex items-center justify-center">
                <img
                  src={network.icon}
                  alt={`${network.name} logo`}
                  className="w-[60px] h-[60px] object-contain rounded-full"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-700 max-w-3xl mx-auto text-center mb-4">
          Unlock the full potential of your finances with low cost swaps and
          transfers for frequent crypto users and high volume wallet users.
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto text-center">
          All transfers are privately shielded from blockchain trace tools as
          standard.
        </p>
      </div>
    </section>
  );
};

export default NetworksSection;
