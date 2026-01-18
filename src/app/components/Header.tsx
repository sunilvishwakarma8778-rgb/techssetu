import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
// @ts-ignore - suppress missing module declaration for image import (add a global .d.ts for images to remove this)
import techLogo from '../../assets/techssetu5.png';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = ['home', 'about', 'services', 'portfolio', 'testimonials'];

  return (
    <motion.header
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
     className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-lg border-b border-gray-100 overflow-x-hidden"


    >
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="h-14 sm:h-16 md:h-18 lg:h-20 flex items-center justify-between">

          {/* Logo */}
          <div
            className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-shrink-0"
          >
            <img
              src={techLogo}
              alt="Techssetu"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain flex-shrink-0"
            />
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent truncate">
              TECHSSETU
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize text-xs sm:text-sm md:text-base lg:text-base text-gray-700 hover:text-blue-600 transition-colors duration-200 whitespace-nowrap font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block flex-shrink-0">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm md:text-sm lg:text-base px-3 md:px-4 lg:px-6 py-2 md:py-2 lg:py-2.5 font-medium transition-all duration-200"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-gray-800 hover:text-blue-600 transition-colors duration-200 flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
           className="fixed left-0 right-0 bottom-0 top-14 sm:top-16 z-[90] bg-white overflow-y-auto overflow-x-hidden"


          >
            <div className="flex flex-col gap-3 sm:gap-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="capitalize text-sm sm:text-base text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 px-2"
                >
                  {item}
                </motion.button>
              ))}

              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-4 py-2 sm:py-3 text-sm sm:text-base font-medium transition-all duration-200"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
