import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-16 h-10">
            <img
              src={"logo.png"}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-gray-300 hover:text-yellow-500 transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-gray-300 hover:text-yellow-500 transition-colors"
          >
            How to Play
          </a>

          <a
            href="#join-waitlist"
            className="text-gray-300 hover:text-yellow-500 transition-colors"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile Navigation Trigger */}
        <button
          className="md:hidden p-2 text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-800 shadow-lg md:hidden animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="text-gray-300 hover:text-yellow-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-yellow-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How to Play
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
