import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Trophy, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-2 opacity-0 animate-fade-in">
              <Rocket className="h-5 w-5 text-yellow-500" />
              <span className="text-yellow-500 font-medium">
                Experience the thrill
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter opacity-0 animate-fade-in [animation-delay:200ms]">
              <span className="text-gradient bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                The climb is
              </span>{" "}
              thrilling.
              <span className="block"> The fall is final.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl opacity-0 animate-fade-in [animation-delay:400ms]">
              Ride the multiplier as it climbs higher and higher. Will you cash
              out in time or crash and burn? Test your instincts. Win big—or
              lose it all.
            </p>
            <p className="text-yellow-500">
              The multiplier rises you heart rate follows😂
            </p>
            <div className="pt-8 flex items-center gap-6 opacity-0 animate-fade-in [animation-delay:800ms]"></div>
          </div>
          <div className="flex-1 relative opacity-0 animate-fade-in [animation-delay:600ms]">
            <div className="w-full h-80">
              <img
                src="image1.webp"
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 to-red-500/20 rounded-lg transform rotate-3"></div>
              <div className="relative bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-700 transform -rotate-2 transition-transform hover:rotate-0 duration-500">
                <div className="bg-black rounded p-3 mb-3">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="bg-gray-900 p-2 rounded font-mono text-xs">
                    <p className="text-green-500">
                      Multiplier: <span className="text-yellow-400">4.32x</span>
                    </p>
                    <p className="text-gray-400">Bet: 10.00 KSH</p>
                    <p className="text-yellow-500">Win: 43.20 kSH!</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded p-3">
                  <div className="h-2 bg-yellow-500/50 rounded w-3/4 mb-2"></div>
                  <div className="h-2 bg-gray-700 rounded w-1/2 mb-2"></div>
                  <div className="h-2 bg-gray-700 rounded w-5/6"></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
