import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NetworksSection from "@/components/NetworksSection";
import MissionSection from "@/components/MissionSection";
import FeatureVideo from "@/components/FeatureVideo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <section id="exchange-section" className="py-10 px-6 md:px-12 bg-white">
          <div className="container mx-auto bg-gray-100 border border-gray-300 shadow-xl rounded-xl p-6 inline-block">
            <iframe
              id="iframe-widget"
              src="https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=false&amount=0.3&amountFiat=1500&backgroundColor=FFFFFF&darkMode=false&from=eth&fromFiat=eur&horizontal=true&isFiat&lang=en-US&link_id=fb1308874b28ed&locales=false&logo=false&primaryColor=0044cc&to=sol&toFiat=eth&toTheMoon=true"
              style={{
                width: "100%",
                height: "auto",
                minHeight: "200px",
                border: "none",
                borderRadius: "0.5rem",
              }}
              title="Crypto Exchange Widget"
            />
          </div>
        </section>
        <NetworksSection />
        <MissionSection />
        <FeatureVideo />
      </main>
      <Footer />
    </>
  );
};

export default Index;
