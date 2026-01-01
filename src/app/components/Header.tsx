import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import techLogo from "../../../src/app/assets/image/techssetU2.png";

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
      <nav className="container mx-auto px-4 py-4">
        
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <img src={techLogo} alt="Techssetu logo" className="w-15 h-15 object-contain" />
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TECHSSETU
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-gray-800">
            <button onClick={() => scrollToSection('home')} className="text-black-800 hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-800 hover:text-blue-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-800 hover:text-blue-600 transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-800 hover:text-blue-600 transition-colors">
              Testimonials
            </button>
            {/* <button onClick={() => scrollToSection('pricing')} className="hover:text-blue-600 transition-colors">
              Pricing
            </button> */}
            <Button onClick={() => scrollToSection('contact')} className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            type="button"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 bg-white rounded-lg shadow-lg p-4">
            <button onClick={() => scrollToSection('home')} className="text-left hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-left hover:text-blue-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-left hover:text-blue-600 transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-left hover:text-blue-600 transition-colors">
              Testimonials
            </button>
            {/* <button onClick={() => scrollToSection('pricing')} className="text-left hover:text-blue-600 transition-colors">
              Pricing
            </button> */}
            <Button onClick={() => scrollToSection('contact')} className="bg-blue-600 hover:bg-blue-700 w-full">
              Contact Us
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
