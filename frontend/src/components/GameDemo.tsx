import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Clock } from "lucide-react";

const GameDemo = () => {
  const [multiplier, setMultiplier] = useState(1.0);
  const [isFlying, setIsFlying] = useState(false);
  const [hasCrashed, setHasCrashed] = useState(false);
  const [betAmount, setBetAmount] = useState(10);
  const [autoStopAt, setAutoStopAt] = useState(2.0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isFlying && !hasCrashed) {
      interval = setInterval(() => {
        setMultiplier((prev) => {
          // Exponential growth for the multiplier
          const newMultiplier = prev * 1.01;

          // Check if the multiplier reaches the crash point randomly
          if (Math.random() < 0.02 && newMultiplier > 1.2) {
            setHasCrashed(true);
            setIsFlying(false);
            return prev;
          }

          // Check if multiplier reached auto cash out
          if (newMultiplier >= autoStopAt) {
            setIsFlying(false);
            return newMultiplier;
          }

          return newMultiplier;
        });
      }, 100);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isFlying, hasCrashed, autoStopAt]);

  const startGame = () => {
    setMultiplier(1.0);
    setIsFlying(true);
    setHasCrashed(false);
  };

  const cashOut = () => {
    if (isFlying && !hasCrashed) {
      setIsFlying(false);
    }
  };

  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
            Experience the Thrill
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in [animation-delay:200ms]">
            Place your bet and watch the multiplier soar. Cash out before it
            crashes!
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 opacity-0 animate-fade-in [animation-delay:400ms] relative">
          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-50 rounded-xl">
            <Clock className="h-16 w-16 text-yellow-500 mb-4 animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold text-gradient bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
              Coming Soon
            </h3>
            <p className="text-lg text-gray-300 max-w-md text-center mb-6">
              We're putting the finishing touches on our game. Get ready for the
              ultimate crash experience!
            </p>
            <div className="flex space-x-4">
              <div className="h-3 w-3 rounded-full bg-yellow-500 animate-pulse"></div>
              <div className="h-3 w-3 rounded-full bg-orange-500 animate-pulse [animation-delay:300ms]"></div>
              <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse [animation-delay:600ms]"></div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            {/* Game display area */}
            <div className="w-full h-64 bg-black/50 rounded-lg mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700/20 via-gray-900/40 to-black z-0"></div>

              {/* Rocket animation */}
              <div
                className={`absolute bottom-4 left-4 z-10 transition-all duration-300 ease-in-out transform ${
                  isFlying
                    ? `translate-y-${Math.min(
                        Math.floor((1 - 1 / multiplier) * -40),
                        -1
                      )}`
                    : ""
                }`}
              ></div>

              {/* Multiplier trail */}
              <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent z-0"></div>

              {/* Multiplier value */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div
                  className={`text-5xl font-bold ${
                    hasCrashed
                      ? "text-red-500"
                      : isFlying
                      ? "text-yellow-400"
                      : "text-white"
                  }`}
                >
                  {hasCrashed ? "CRASHED!" : multiplier.toFixed(2) + "x"}
                </div>
              </div>
            </div>

            {/* Game controls */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameDemo;
