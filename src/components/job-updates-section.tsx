"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export function JobUpdatesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const jobs = [
    {
      company: "Goldman Sachs",
      role: "Fund Accountant",
      date: "Jan 23, 2025",
      location: "Mumbai",
      salary: "₹15-25 LPA",
      experience: "3-5 years",
      description:
        "Join our elite fund accounting team to manage complex investment portfolios and work with cutting-edge financial instruments.",
      type: "Full-time",
    },
    {
      company: "BlackRock India",
      role: "Fund Analyst",
      date: "Jan 18, 2025",
      location: "Delhi",
      salary: "₹20-35 LPA",
      experience: "2-4 years",
      description:
        "Develop sophisticated quantitative models for hedge fund strategies using big data and machine learning techniques.",
      type: "Full-time",
    },
    {
      company: "JP Morgan Chase",
      role: "Relations Associate",
      date: "Jan 15, 2025",
      location: "Bangalore",
      salary: "₹18-28 LPA",
      experience: "4-6 years",
      description:
        "Lead investor communications and relationship management for institutional clients in global markets.",
      type: "Full-time",
    },
    {
      company: "Morgan Stanley",
      role: "Risk Analyst",
      date: "Jan 12, 2025",
      location: "Hyderabad",
      salary: "₹12-20 LPA",
      experience: "1-3 years",
      description:
        "Assess and monitor financial risks across diverse investment portfolios using advanced frameworks.",
      type: "Full-time",
    },
    {
      company: "Deutsche Bank",
      role: "Banking Analyst",
      date: "Jan 10, 2025",
      location: "Chennai",
      salary: "₹25-40 LPA",
      experience: "2-4 years",
      description:
        "Execute complex M&A transactions, IPOs, and debt financing deals with Fortune 500 companies.",
      type: "Full-time",
    },
  ];

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

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % jobs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, jobs.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % jobs.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + jobs.length) % jobs.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "Urgent":
        return "bg-red-500 text-white";
      case "Hot":
        return "bg-orange-500 text-white";
      case "Featured":
        return "bg-purple-500 text-white";
      case "Premium":
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black";
      default:
        return "bg-green-500 text-white";
    }
  };

  return (
    <section id="jobs" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } transition-all duration-1000`}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Latest <span className="text-[#294085]">Opportunities</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover premium finance roles from top-tier companies worldwide
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto mb-24">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {[...jobs, ...jobs].map((job, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 bg-white border shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden h-[520px] flex flex-col"
                >
                  <CardHeader className="pb-4 relative flex-shrink-0">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#294085] to-[#3a5aa0] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                        <div className="w-6 h-6 bg-white/20 rounded"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-xl mb-2 text-gray-900 group-hover:text-[#294085] transition-colors duration-300 line-clamp-2 leading-tight">
                          {job.role}
                        </CardTitle>
                        <p className="text-lg font-semibold text-[#294085] truncate">
                          {job.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                        <span className="mr-1">📅</span>
                        {job.date}
                      </div>
                      <div className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        <span className="mr-1">💼</span>
                        {job.type}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col justify-between px-6 pb-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center text-gray-600">
                          <span className="mr-2 text-[#294085]">📍</span>
                          <span className="truncate">{job.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <span className="mr-2 text-[#294085]">⏰</span>
                          <span className="truncate">{job.experience}</span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mx-0">
                        <div className="text-lg font-bold text-[#294085] text-center">
                          {job.salary}
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed text-sm line-clamp-3 px-0">
                        {job.description}
                      </p>
                    </div>

                    <div className="mt-6 px-0">
                      <Button className="w-full bg-[#294085] hover:bg-[#1e2f5f] text-white rounded-lg py-3 text-lg font-semibold transition-all duration-300">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white shadow-lg border-0 hover:bg-[#294085] hover:text-white transition-all duration-300 rounded-full"
            onClick={prevSlide}
          >
            <span className="text-xl">‹</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white shadow-lg border-0 hover:bg-[#294085] hover:text-white transition-all duration-300 rounded-full"
            onClick={nextSlide}
          >
            <span className="text-xl">›</span>
          </Button>
        </div>

        <div className="flex justify-center space-x-3">
          {jobs.map((_, index) => (
            <button
              key={index}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#294085] w-8"
                  : "bg-gray-300 w-3 hover:bg-gray-400"
              }`}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
