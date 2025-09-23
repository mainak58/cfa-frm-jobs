"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: "launch-career",
      title: "Want to be Hired?",
      subtitle: "Looking for openings in finance domain?",
      description: "",
      icon: "💺",
      buttonText: "Your dream job awaits",
      gradient: "from-blue-500 to-indigo-600",
      accentColor: "bg-blue-500",
      stats: "500+ Jobs",
      formFields: [
        { placeholder: "Full Name", type: "text" },
        { placeholder: "Email Address", type: "email" },
        { placeholder: "Current Position", type: "text" },
        {
          placeholder: "Target Role (e.g., Investment Banking Analyst)",
          type: "text",
        },
        {
          placeholder: "Tell us about your career aspirations...",
          type: "textarea",
        },
      ],
    },
    {
      id: "find-talent",
      title: "Want to Hire?",
      subtitle: "Looking to hire candidates at your company?",
      description: "",
      icon: "💼",
      buttonText: "Find them here",
      gradient: "from-purple-500 to-pink-600",
      accentColor: "bg-purple-500",
      stats: "1000+ Candidates",
      formFields: [
        { placeholder: "Company Name", type: "text" },
        { placeholder: "Contact Email", type: "email" },
        { placeholder: "Position Title", type: "text" },
        { placeholder: "Required Experience Level", type: "text" },
        { placeholder: "Describe your ideal candidate...", type: "textarea" },
      ],
    },
    {
      id: "join-network",
      title: "Build a Community!",
      subtitle: "Discuss & Get Support from the Experts!",
      description: "",
      icon: "🎯",
      buttonText: "Build With Us",
      gradient: "from-emerald-500 to-teal-600",
      accentColor: "bg-emerald-500",
      stats: "2000+ Members",
      formFields: [
        { placeholder: "Full Name", type: "text" },
        { placeholder: "Professional Email", type: "email" },
        { placeholder: "Current Company", type: "text" },
        { placeholder: "Years of Experience", type: "text" },
        {
          placeholder: "What value can you bring to our network?",
          type: "textarea",
        },
      ],
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-200 to-blue-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-10" />
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-40 right-32 w-6 h-6 bg-purple-400 rotate-45 opacity-40" />
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-emerald-400 rounded-full opacity-50" />
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-pink-400 rotate-12 opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 text-balance">
            What Can We Do For <span className="text-[#294085]">You</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose your exclusive path to finance career excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            return (
              <Dialog key={service.id}>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden h-[480px] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/20 bg-white border border-gray-100 hover:border-blue-200 rounded-3xl">
                      {/* Decorative angled cut overlay */}
                      <div
                        className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-tr from-transparent via-gray-50/50 to-gray-100/50"
                        style={{
                          clipPath: "polygon(85% 0, 100% 0, 100% 100%, 0 100%)",
                        }}
                      />

                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                      />
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-4 right-4 w-32 h-32 border border-gray-200 rounded-full" />
                        <div className="absolute bottom-8 left-4 w-24 h-24 border border-gray-100 rounded-full" />
                        <div className="absolute top-1/2 right-8 w-16 h-16 border border-gray-150 rounded-full" />
                      </div>

                      <div className="relative z-10 p-8 h-full flex flex-col">
                        <div className="text-center mb-8">
                          <div className="relative mb-6 mx-auto">
                            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-all duration-300 border-2 border-blue-100 relative z-10">
                              <span className="text-4xl text-blue-600">
                                {service.icon}
                              </span>
                            </div>
                            <div
                              className={`absolute inset-0 w-20 h-20 ${service.accentColor} rounded-full opacity-20 animate-pulse group-hover:animate-ping`}
                            />
                          </div>

                          <h3 className="text-2xl font-bold mb-3 text-gray-900">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {service.subtitle}
                          </p>
                          <div
                            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white ${service.accentColor} shadow-lg`}
                          >
                            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                            {service.stats}
                          </div>
                        </div>

                        <div className="flex-1 mb-6">
                          <div className="space-y-3">
                            {index === 0 && (
                              <>
                                <div className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                                  Personalized job matching
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                                  Resume optimization
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                                  Interview preparation
                                </div>
                              </>
                            )}
                            {index === 1 && (
                              <>
                                <div className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                                  Pre-screened candidates
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                                  Skills assessment
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                                  Fast hiring process
                                </div>
                              </>
                            )}
                            {index === 2 && (
                              <>
                                <div className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                                  Expert mentorship
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                                  Networking events
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                                  Career resources
                                </div>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="mt-auto">
                          <div className="group/btn inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-all duration-300 cursor-pointer">
                            <span>{service.buttonText}</span>
                            <svg
                              className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover/btn:translate-x-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>

                <DialogContent className="max-w-lg bg-white backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-800 flex items-center mb-2">
                      <span className="text-xl mr-3">{service.icon}</span>
                      {service.title}
                    </DialogTitle>
                    <p className="text-gray-600">{service.subtitle}</p>
                  </DialogHeader>

                  <div className="space-y-4 mt-6">
                    {service.formFields.map((field, idx) =>
                      field.type === "textarea" ? (
                        <Textarea
                          key={idx}
                          placeholder={field.placeholder}
                          rows={3}
                          className="border-gray-200 focus:border-blue-400 rounded-xl resize-none"
                        />
                      ) : (
                        <Input
                          key={idx}
                          placeholder={field.placeholder}
                          type={field.type}
                          className="h-12 border-gray-200 focus:border-blue-400 rounded-xl"
                        />
                      )
                    )}

                    <Button className="w-full h-12 font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-[1.02]">
                      Submit Request
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}
