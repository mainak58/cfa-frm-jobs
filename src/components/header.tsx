"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#294085] via-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-blue-500/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                <img
                  src="https://aswinibajajclasses.com/_next/image?url=https%3A%2F%2Fdel1.vultrobjects.com%2Fcrmaswinibajaj%2FCRM%2FPlatform%2Flogo%2520with%2520name.png&w=384&q=75"
                  alt="CFA FRM Jobs"
                  className="w-10 h-10 object-contain relative z-10 filter brightness-0 invert"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              {/* CFA FRM Jobs */}
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { name: "Services", href: "#services" },
              { name: "Experts", href: "#experts" },
              { name: "Jobs", href: "#jobs" },
              { name: "FAQ", href: "#faq" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-white/90 hover:text-white font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 backdrop-blur-sm"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </a>
            ))}
          </nav>
          <div className="relative group">
            <Button className="bg-gradient-to-r from-white to-blue-50 text-[#294085] hover:from-blue-50 hover:to-white px-6 py-2.5 rounded-xl font-semibold shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 border border-white/20">
              Contact Us
            </Button>
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-blue-200/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
