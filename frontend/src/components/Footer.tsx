import React from "react";
import { Github, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center mb-6">
            <span className="text-xl font-bold text-crash-dark">Crash</span>
          </div>

          <div className="flex space-x-6 mb-6">
            <a
              href="https://www.linkedin.com/in/brian-gatundu-009589262"
              className="text-slate-400 hover:text-crash-accent transition-colors"
              target="_blank" // Open in new tab
              rel="noopener noreferrer" // For security reasons
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Apexx. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
