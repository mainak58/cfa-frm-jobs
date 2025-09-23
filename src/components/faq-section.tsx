"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Briefcase, Clock, CreditCard } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function FAQSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const faqs = [
    {
      icon: Briefcase,
      question: "How to apply for the premium finance openings?",
      answer:
        "You can apply for our exclusive openings by browsing our curated job listings and clicking on positions that match your qualifications. Our streamlined application process includes resume submission, initial screening, and direct connection with hiring managers. We also provide personalized application guidance to maximize your success rate.",
    },
    {
      icon: Clock,
      question: "What will be the next step after I apply?",
      answer:
        "After you apply, our expert team conducts a comprehensive review of your application within 24-48 hours. If you're a strong match, we'll contact you for a detailed consultation to understand your career goals. This is followed by preparation sessions, direct introductions to hiring managers, and ongoing support throughout the interview process.",
    },
    {
      icon: CreditCard,
      question: "Do we charge for the premium placement services?",
      answer:
        "Our job placement services are completely free for candidates. We believe in democratizing access to premium finance opportunities. Our revenue comes from successful placement fees paid by partner companies, ensuring our interests are aligned with your career success. You only pay for optional premium services like personalized coaching or resume optimization.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30" />
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#294085] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-1000`}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-[#294085]">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our premium finance career platform
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={`bg-white border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="text-left text-lg font-semibold px-8 py-6 hover:no-underline hover:bg-gray-50 transition-colors duration-300 group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#294085] to-[#3a5aa0] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-gray-900 group-hover:text-[#294085] transition-colors duration-300">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-gray-600 text-base leading-relaxed">
                    <div className="pl-16">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}