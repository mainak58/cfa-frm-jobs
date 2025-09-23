"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const fullText = "CFA, FRM, CA, MBA";

  useEffect(() => {
    setIsVisible(true);
    let index = 0;
    let isDeleting = false;

    const typewriter = () => {
      if (!isDeleting && index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else if (!isDeleting && index > fullText.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 3000);
      } else if (isDeleting && index > 0) {
        setDisplayText(fullText.slice(0, index - 1));
        index--;
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        setTimeout(() => {
          index = 0;
        }, 500);
      }
    };

    const timer = setInterval(typewriter, isDeleting ? 50 : 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed scale-105"
        style={{
          backgroundImage:
            "url('/modern-financial-district-skyline-at-sunset-with-g.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-[#294085]/95 via-slate-900/80 to-black/90" />

      {/* Floating animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      <div className="absolute inset-0 opacity-20">
        <svg
          className="absolute top-20 right-20 w-64 h-64 text-blue-300/30 animate-pulse"
          viewBox="0 0 100 100"
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            points="10,90 20,70 30,50 40,30 50,20 60,40 70,25 80,15 90,10"
          />
        </svg>
        <svg
          className="absolute bottom-20 left-20 w-48 h-48 text-indigo-300/30 animate-pulse delay-700"
          viewBox="0 0 100 100"
        >
          <rect x="10" y="80" width="8" height="10" fill="currentColor" />
          <rect x="25" y="60" width="8" height="30" fill="currentColor" />
          <rect x="40" y="40" width="8" height="50" fill="currentColor" />
          <rect x="55" y="20" width="8" height="70" fill="currentColor" />
          <rect x="70" y="50" width="8" height="40" fill="currentColor" />
        </svg>
      </div>

      <div className="relative container mx-auto px-6 text-center z-10">
        <div
          className={`transition-all duration-1500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black text-white mb-12 text-balance leading-[0.9] tracking-tighter">
            <span className="block text-4xl lg:text-5xl xl:text-6xl font-light text-blue-200/80 mb-4 tracking-wide">
              ELITE CAREERS IN
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-100 drop-shadow-2xl">
              {displayText}
              <span className="animate-pulse text-white">|</span>
            </span>
          </h1>
        </div>

        <div
          className={`transition-all duration-1500 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <p className="text-2xl lg:text-3xl text-blue-100/90 mb-16 text-balance max-w-5xl mx-auto leading-relaxed font-light tracking-wide">
            Connect with premium opportunities at top-tier financial
            institutions
          </p>
        </div>

        <div
          className={`transition-all duration-1500 delay-1400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="relative group inline-block">
            <Button
              size="lg"
              className="bg-gradient-to-r from-white via-blue-50 to-white text-[#294085] hover:from-blue-50 hover:via-white hover:to-blue-50 text-2xl px-16 py-8 rounded-2xl shadow-2xl hover:shadow-white/40 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 font-bold border-2 border-white/30 backdrop-blur-sm"
            >
              About Us
            </Button>
            <div className="absolute -inset-2 bg-gradient-to-r from-white/30 to-blue-200/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-14 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <div className="w-1.5 h-4 bg-gradient-to-b from-white to-blue-200 rounded-full mt-3 animate-pulse" />
        </div>
      </div> */}
    </section>
  );
}
