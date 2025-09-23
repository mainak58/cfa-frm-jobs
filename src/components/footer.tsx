import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-40">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
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
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              Connecting finance professionals with premium opportunities at
              top-tier institutions worldwide.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-[#294085] rounded-full"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-[#294085] rounded-full"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-[#294085] rounded-full"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Job Search
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Career Coaching
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Interview Prep
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Resume Review
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3 text-[#294085]" />
                +91 98312 54737
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3 text-[#294085]" />
                connect@cfafrmjobs.com
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-[#294085]" />
                Kolkata, India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 CFA FRM Jobs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
