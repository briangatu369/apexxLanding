import React from "react";
import { ArrowRight, Rocket, CirclePlay, Users, Trophy } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Place Your Bet",
    description:
      "Enter your bet amount and set an optional auto cash-out multiplier.",
  },
  {
    number: "02",
    title: "Watch it Rise",
    description:
      "The multiplier starts at 1.00x and increases as the rocket flies higher.",
  },
  {
    number: "03",
    title: "Cash Out",
    description:
      "Cash out before the crash to secure your winnings. The higher the multiplier, the bigger the reward.",
  },
  {
    number: "04",
    title: "Play Again",
    description:
      "Each round is different - the game can crash at any moment. Try your luck again!",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
            How to Play
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in [animation-delay:200ms]">
            A simple four-step process to start playing and winning.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-[60px] right-[60px] h-0.5 bg-yellow-500/20 -translate-y-1/2 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative opacity-0 animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700 transition-all duration-300 hover:shadow-xl hover:border-yellow-500/30">
                  <div className="mb-4 flex justify-center md:justify-start">
                    <div className="w-12 h-12 bg-yellow-500/10 text-yellow-500 rounded-full flex items-center justify-center font-bold relative z-10">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center md:text-left">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-center md:text-left">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-[-20px] -translate-y-1/2 z-20">
                    <ArrowRight className="h-5 w-5 text-yellow-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
