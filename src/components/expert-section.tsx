"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useRef, useState } from "react";

export function ExpertSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experts = [
    {
      name: "Aditya Khemka",
      designation: "Fund Manager",
      avatar: "/professional-mentor-coaching-session-in-modern-off.jpg",
      experience: "15+ years",
      company: "Goldman Sachs Asset Management",
      location: "Mumbai, India",
      bio: "Aditya is a seasoned fund manager with over 15 years of experience in asset management. He specializes in equity research and has managed.",
      expertise: ["Portfolio Management", "Risk Assessment", "Equity Research"],
    },
    {
      name: "Biharilal Deora",
      designation: "Asset Manager",
      avatar: "/professional-business-person-looking-at-financial-.jpg",
      experience: "18+ years",
      company: "BlackRock India",
      location: "Delhi, India",
      bio: "Biharilal Deora is an expert in alternative investments and ESG strategies. With 18 years of experience, he has successfully managed diverse.",
      expertise: ["Alternative Investments", "Fixed Income", "ESG Investing"],
    },
  ];

  return (
    <section id="experts" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-20 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } transition-all duration-1000`}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6 text-balance">
            Learn From The Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get personalized insights from industry leaders who've shaped the
            finance world
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {experts.map((expert, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl mb-6 ring-4 ring-white">
                  <Avatar className="w-full h-full">
                    <AvatarImage
                      src={expert.avatar || "/placeholder.svg"}
                      alt={expert.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-2xl bg-gradient-to-br from-[#294085] to-[#3a5aa0] text-white">
                      {expert.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {expert.name}
                </h3>
                <p className="text-lg text-gray-600 mb-1 font-medium">
                  {expert.designation}
                </p>
                <p className="text-[#294085] font-bold text-xl mb-4">
                  {expert.company}
                </p>

                <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <span className="mr-2">📅</span>
                    {expert.experience}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">📍</span>
                    {expert.location}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {expert.bio}
                </p>

                <div className="flex flex-wrap gap-2 justify-center mb-8">
                  {expert.expertise.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 text-[#294085] px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="flex-1 bg-[#294085] hover:bg-[#1e2f5f] text-white rounded-xl h-12 text-lg font-semibold">
                  Read More
                </Button>
                <Button
                  variant="outline"
                  className="rounded-xl border-[#294085] text-[#294085] hover:bg-[#294085] hover:text-white bg-transparent h-12 w-12 p-0"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
