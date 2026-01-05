import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
// @ts-ignore: allow importing image assets without type declaration
import techLogo from '../../assets/techssetu5.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/60 backdrop-blur-sm'
      }`}
      style={{ WebkitBackdropFilter: !isScrolled ? 'blur(6px)' : undefined }}
    >
      <nav className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo Section */}
          <div className="flex items-center gap-2 min-w-0 flex-shrink-0">
            <img
              src={techLogo}
              alt="Techssetu logo"
              loading="eager"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
            />
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent truncate">
              TECHSSETU
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 text-gray-800 flex-grow justify-center">
            <button onClick={() => scrollToSection('home')} className="text-xs sm:text-sm md:text-base lg:text-base hover:text-blue-600 transition-colors whitespace-nowrap">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-xs sm:text-sm md:text-base lg:text-base hover:text-blue-600 transition-colors whitespace-nowrap">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-xs sm:text-sm md:text-base lg:text-base hover:text-blue-600 transition-colors whitespace-nowrap">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-xs sm:text-sm md:text-base lg:text-base hover:text-blue-600 transition-colors whitespace-nowrap">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-xs sm:text-sm md:text-base lg:text-base hover:text-blue-600 transition-colors whitespace-nowrap">
              Testimonials
            </button>
          </div>

          {/* CTA Button - Hidden on mobile */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm md:text-sm lg:text-base px-3 sm:px-4 lg:px-6 py-2 whitespace-nowrap"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 flex-shrink-0 z-[1000]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-[999] bg-white pt-16 sm:pt-20 px-4 sm:px-6 overflow-y-auto">
            <div className="flex flex-col gap-3 sm:gap-4 pb-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-base sm:text-lg text-gray-800 hover:text-blue-600 transition-colors text-left py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-base sm:text-lg text-gray-800 hover:text-blue-600 transition-colors text-left py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-base sm:text-lg text-gray-800 hover:text-blue-600 transition-colors text-left py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-base sm:text-lg text-gray-800 hover:text-blue-600 transition-colors text-left py-2"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-base sm:text-lg text-gray-800 hover:text-blue-600 transition-colors text-left py-2"
              >
                Testimonials
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-4 sm:mt-6 py-2 sm:py-3"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}