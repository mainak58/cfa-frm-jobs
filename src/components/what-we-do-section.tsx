"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export function WhatWeDoSection() {
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

  const services = [
    {
      icon: "👥", // Using emoji instead of lucide icon
      title: "Want to be Hired?",
      description: "Looking for openings in finance domain?",
      link: "Your dream job awaits →",
    },
    {
      icon: "🏢", // Using emoji instead of lucide icon
      title: "Want to Hire?",
      description: "Looking to hire candidates at your company?",
      link: "Find them here →",
    },
    {
      icon: "💬", // Using emoji instead of lucide icon
      title: "Build a Community!",
      description: "Discuss & Get Support from the Experts!",
      link: "Build With Us →",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-[#f5f5f5]"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#294085] mb-4 text-balance">
            We Aim To Bridge The Gap Between Job Providers And Job Seekers
          </h2>
          <p className="text-xl text-gray-600 text-balance">
            What Can We Do For You
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`text-center card-hover bg-white border-0 shadow-lg rounded-xl ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-[#294085] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <CardTitle className="text-xl text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-base text-gray-600">
                  {service.description}
                </CardDescription>
                <Button
                  variant="link"
                  className="text-[#294085] p-0 h-auto font-medium hover:text-[#1e2f5f] transition-colors"
                >
                  {service.link}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
