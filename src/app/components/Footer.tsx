import { Phone, MapPin, MessageCircle, Mail } from "lucide-react";
// @ts-ignore: allow importing image files without type declarations
import techLogo from '../../assets/techssetu5.png';
export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-12 md:mb-16">
          {/* Brand Section */}
          <div>
            <img 
              src={techLogo} 
              alt="Techssetu logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain mb-3 sm:mb-4 md:mb-5" 
            />
            <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-5">
              Techssetu
            </div>
            <p className="text-xs xs:text-sm sm:text-base text-gray-400 mb-5 sm:mb-6 md:mb-7 leading-relaxed max-w-xs">
              Empowering businesses with innovative digital solutions.
            </p>
            
            <div className="flex gap-2 sm:gap-3 md:gap-4">
              <a
                href="https://wa.me/917355757848"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp contact"
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-200 hover:shadow-lg flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <MessageCircle size={20} strokeWidth={1.5} />
              </a>
              <a
                href="mailto:sunilvishwakarma8778@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email contact"
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-200 hover:shadow-lg flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Mail size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://wa.me/916393267067"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp contact (alternate)"
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-200 hover:shadow-lg flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <MessageCircle size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 font-bold">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-xs xs:text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors text-left font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-2 py-1"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-xs xs:text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors text-left font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-2 py-1"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-xs xs:text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors text-left font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-2 py-1"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-xs xs:text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors text-left font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-2 py-1"
                >
                  Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 font-bold">Services</h3>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
              <li className="text-xs xs:text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors cursor-default">Web Development</li>
              <li className="text-xs xs:text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors cursor-default">Mobile Apps</li>
              <li className="text-xs xs:text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors cursor-default">UI/UX Design</li>
              <li className="text-xs xs:text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors cursor-default">SEO Optimization</li>
              <li className="text-xs xs:text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors cursor-default">Digital Marketing</li>
              <li className="text-xs xs:text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors cursor-default">Brand Strategy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 font-bold">Contact</h3>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 group">
                <Mail size={18} className="mt-0.5 sm:mt-1 flex-shrink-0 text-gray-400 group-hover:text-blue-400 transition-colors" strokeWidth={1.5} />
                <a
                  href="mailto:sunilvishwakarma8778@gmail.com"
                  className="text-xs xs:text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-1"
                >
                  sunilvishwakarma8778@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 group">
                <Phone size={18} className="mt-0.5 sm:mt-1 flex-shrink-0 text-gray-400 group-hover:text-blue-400 transition-colors" strokeWidth={1.5} />
                <a
                  href="tel:+917355757848"
                  className="text-xs xs:text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-1"
                >
                  +91 7355757848
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 group">
                <Phone size={18} className="mt-0.5 sm:mt-1 flex-shrink-0 text-gray-400 group-hover:text-blue-400 transition-colors" strokeWidth={1.5} />
                <a
                  href="tel:+916393267067"
                  className="text-xs xs:text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-1"
                >
                  +91 6393267067
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 group">
                <MapPin size={18} className="mt-0.5 sm:mt-1 flex-shrink-0 text-gray-400 group-hover:text-blue-400 transition-colors" strokeWidth={1.5} />
                <span className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">
                  Gorakhpur,
                  <br />
                  Uttar Pradesh, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
          <p className="text-center text-xs xs:text-sm sm:text-base text-gray-400 mb-4 sm:mb-5 md:mb-6">
            © {currentYear} Techssetu. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs xs:text-sm sm:text-base">
            <a 
              href="#" 
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-2 py-1"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="#" 
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-2 py-1"
            >
              Terms of Service
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="#" 
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-2 py-1"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
