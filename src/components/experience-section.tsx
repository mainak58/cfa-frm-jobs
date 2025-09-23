"use client"
import { FileText, Users, MessageSquare, TrendingUp, Award, Target } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function ExperienceSection() {
  const [counters, setCounters] = useState([0, 0, 0])
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const stats = [
    { number: 30, suffix: "+", label: "Candidates Placed", icon: Award },
    { number: 250, suffix: "+", label: "Companies Partnered", icon: TrendingUp },
    { number: 3500, suffix: "+", label: "Candidate Profiles", icon: Target },
  ]

  const interviewPrep = [
    {
      icon: FileText,
      title: "Resume Optimization",
      description: "Professional resume crafting with ATS optimization and industry-specific formatting",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Group Discussion",
      description: "Master group dynamics and leadership skills for assessment centers",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: MessageSquare,
      title: "Personal Interview",
      description: "Ace one-on-one interviews with confidence and strategic preparation",
      color: "from-green-500 to-green-600",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          stats.forEach((stat, index) => {
            let start = 0
            const end = stat.number
            const duration = 2000
            const increment = end / (duration / 16)

            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                setCounters((prev) => {
                  const newCounters = [...prev]
                  newCounters[index] = end
                  return newCounters
                })
                clearInterval(timer)
              } else {
                setCounters((prev) => {
                  const newCounters = [...prev]
                  newCounters[index] = Math.floor(start)
                  return newCounters
                })
              }
            }, 16)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden px-32">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#294085] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Our <span className="text-[#294085]">Experience</span> Speaks
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transforming careers with data-driven results and personalized guidance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#294085] to-[#3a5aa0] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#294085] mb-3">
                  {counters[index]}
                  {stat.suffix}
                </div>
                <div className="text-lg text-gray-700 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Centered Header above both image and cards */}
          <div className="text-center mb-12">
            <h3 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Master Your <span className="text-[#294085]">Interview</span>
            </h3>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Preparation tools to help you stand out from the competition.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left side - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/confident-professional-in-interview-setting-with-f.jpg"
                  alt="Professional interview preparation"
                  className="w-full h-[400px] lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>

            {/* Right side - Cards */}
            <div className="space-y-8 order-1 lg:order-2">
              {interviewPrep.map((item, index) => (
                <div
                  key={index}
                  className={`group transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 leading-relaxed text-lg">{item.description}</p>
                    </div>
                  </div>
                  {index < interviewPrep.length - 1 && (
                    <div className="mt-8 border-b border-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}