import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import techLogo from "../../../src/app/assets/image/techssetu logo black.png";
export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Techssetu
            </div>
            <p className="text-sm mb-4">
              Empowering businesses with innovative digital solutions.
            </p>
            <img src={techLogo} alt="Techssetu logo" className="w-15 h-15 object-contain" />
            {/* <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Globe size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Globe size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Globe size={20} />
              </a>
            </div> */}
          </div>

          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-blue-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="hover:text-blue-400 transition-colors">
                  Portfolio
                </button>
              </li>
              {/* <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-blue-400 transition-colors">
                  Pricing
                </button>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
              <li>SEO Optimization</li>
              <li>Digital Marketing</li>
              <li>Brand Strategy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <a href="sunilvishwakarma8778@gmail.com" className="hover:text-blue-400 transition-colors">
                  sunilvishwakarma8778@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <a href="tel:+917355757848" className="hover:text-blue-400 transition-colors">
                  +91 7355757848
                </a>
              </li>
               <li className="flex items-start gap-2">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <a href="tel:+916393267067" className="hover:text-blue-400 transition-colors">
                  +91 6393267067
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Gorakhpur,<br />
                  Uttar Pradesh, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© {currentYear} Techssetu. All rights reserved.</p>
          <div className="mt-2 space-x-4">
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
