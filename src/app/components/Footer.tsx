import { Phone, MapPin, MessageCircle, Mail } from "lucide-react";
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
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-8">
          <div>
            <div className="text-xl xs:text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-4">
              Techssetu
            </div>
            <p className="text-xs xs:text-sm text-gray-400 mb-4 leading-relaxed">
              Empowering businesses with innovative digital solutions.
            </p>
           <img src={techLogo} alt="Techssetu logo" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain mb-4" />
            
            <div className="flex gap-2 sm:gap-4">
              <a
                href="https://wa.me/917355757848"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors flex-shrink-0"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="mailto:sunilvishwakarma8778@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors flex-shrink-0"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://wa.me/916393267067"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors flex-shrink-0"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base xs:text-lg sm:text-xl text-white mb-3 sm:mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-xs xs:text-sm sm:text-base hover:text-blue-400 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-xs xs:text-sm sm:text-base hover:text-blue-400 transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-xs xs:text-sm sm:text-base hover:text-blue-400 transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-xs xs:text-sm sm:text-base hover:text-blue-400 transition-colors text-left"
                >
                  Portfolio
                </button>
              </li>
              {/* <li>
                <button onClick={() => scrollToSection('pricing')} className="text-xs xs:text-sm sm:text-base hover:text-blue-400 transition-colors text-left">
                  Pricing
                </button>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-base xs:text-lg sm:text-xl text-white mb-3 sm:mb-4 font-semibold">Services</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="text-xs xs:text-sm sm:text-base">Web Development</li>
              <li className="text-xs xs:text-sm sm:text-base">Mobile Apps</li>
              <li className="text-xs xs:text-sm sm:text-base">UI/UX Design</li>
              <li className="text-xs xs:text-sm sm:text-base">SEO Optimization</li>
              <li className="text-xs xs:text-sm sm:text-base">Digital Marketing</li>
              <li className="text-xs xs:text-sm sm:text-base">Brand Strategy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base xs:text-lg sm:text-xl text-white mb-3 sm:mb-4 font-semibold">Contact</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail size={16} className="mt-0.5 sm:mt-1 flex-shrink-0" />
                <a
                  href="mailto:sunilvishwakarma8778@gmail.com"
                  className="text-xs xs:text-sm sm:text-base hover:text-blue-400 transition-colors break-all"
                >
                  sunilvishwakarma8778@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone size={16} className="mt-0.5 sm:mt-1 flex-shrink-0" />
                <a
                  href="tel:+917355757848"
                  className="text-xs xs:text-sm sm:text-base hover:text-blue-400 transition-colors"
                >
                  +91 7355757848
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone size={16} className="mt-0.5 sm:mt-1 flex-shrink-0" />
                <a
                  href="tel:+916393267067"
                  className="text-xs xs:text-sm sm:text-base hover:text-blue-400 transition-colors"
                >
                  +91 6393267067
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin size={16} className="mt-0.5 sm:mt-1 flex-shrink-0" />
                <span className="text-xs xs:text-sm sm:text-base leading-relaxed">
                  Gorakhpur,
                  <br />
                  Uttar Pradesh, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-xs xs:text-sm">
          <p className="text-gray-400">© {currentYear} Techssetu. All rights reserved.</p>
          <div className="mt-2 sm:mt-3 space-x-2 sm:space-x-4 flex flex-wrap justify-center gap-2">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <span>|</span>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
