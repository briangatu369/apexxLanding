import React from "react";
import {
  Shield,
  LineChart,
  Zap,
  Bell,
  Users,
  Gamepad,
  Trophy,
  Star,
  CirclePlay,
  Key,
  ListOrdered,
  TrendingUp,
  Clock,
  ArrowUpCircle,
  Repeat,
  Activity,
  ArrowDownCircle,
  Headset,
} from "lucide-react";

const features = [
  // 🚀 Gameplay Features
  {
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    title: "Lightning Fast",
    description:
      "Quick gameplay rounds that keep the excitement coming and your adrenaline pumping.",
  },

  {
    icon: <Trophy className="h-6 w-6 text-yellow-500" />,
    title: "Instant Rewards",
    description:
      "Win and cash out instantly with no delays or hidden conditions.",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-yellow-500" />,
    title: "Leaderboard",
    description:
      "Climb the ranks and prove you're the best crash strategist out there.",
  },

  // ⚙️ Automation & Tools
  {
    icon: <Repeat className="h-6 w-6 text-yellow-500" />,
    title: "Auto Bet & Auto Cashout",
    description:
      "Set your strategy and let the system handle your bets automatically.",
  },
  {
    icon: <Activity className="h-6 w-6 text-yellow-500" />,
    title: "Live Bets Feed",
    description:
      "See bets placed and cashed out by other players in real-time.",
  },
  {
    icon: <ListOrdered className="h-6 w-6 text-yellow-500" />,
    title: "Bet History",
    description: "Track every bet you've made with detailed game records.",
  },

  // 💰 Deposits & Withdrawals
  {
    icon: <ArrowDownCircle className="h-6 w-6 text-yellow-500" />,
    title: "Quick Deposits",
    description:
      "Deposit instantly with secure, lightning-fast payment methods.",
  },
  {
    icon: <ArrowUpCircle className="h-6 w-6 text-yellow-500" />,
    title: "Quick Withdrawals",
    description: "Withdraw your winnings fast with no unnecessary waiting.",
  },

  // 🔐 Fairness & Transparency
  {
    icon: <Shield className="h-6 w-6 text-yellow-500" />,
    title: "Provably Fair",
    description:
      "Our algorithm ensures complete transparency and fairness in every game.",
  },
  {
    icon: <Key className="h-6 w-6 text-yellow-500" />,
    title: "Client Seed Control",
    description:
      "Customize your client seed for full control over game randomness.",
  },

  // 🌍 Support & Access
  {
    icon: <Headset className="h-6 w-6 text-yellow-500" />,
    title: "Customer Support",
    description:
      "Got questions or issues? Our support team is available 24/7 to help you out.",
  },
  {
    icon: <Gamepad className="h-6 w-6 text-yellow-500" />,
    title: "Multiple Platforms",
    description:
      "Play on desktop, tablet, or mobile — the thrill is available wherever you are.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
            Game Features
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in [animation-delay:200ms]">
            Everything you need for the ultimate crash game experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur rounded-lg p-6 shadow-md border border-gray-700 transition-all duration-300 hover:shadow-xl hover:border-yellow-500/30 opacity-0 animate-fade-in feature-card"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="mb-4 p-3 bg-gray-900 inline-block rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
