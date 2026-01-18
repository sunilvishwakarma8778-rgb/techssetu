import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { useState } from 'react';

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
   <section
  id="home"
  className="min-h-screen flex items-center
  pt-14 sm:pt-16 md:pt-18 lg:pt-20
  pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50"
>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-10 md:py-14 lg:py-20 xl:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 className="text-3xl xs:text-3.5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10 leading-tight tracking-tight text-gray-900">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h1>

            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-6 sm:mb-7 md:mb-8 lg:mb-10 xl:mb-12 max-w-2xl leading-relaxed">
              We help startups and businesses grow with modern digital solutions —
              from web & app development to performance-driven marketing.
            </p>

            <div className="flex flex-col xs:flex-row gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 w-full xs:w-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs xs:text-sm sm:text-base md:text-base lg:text-lg px-5 xs:px-6 sm:px-8 md:px-10 lg:px-12 py-2 xs:py-2.5 sm:py-3 md:py-3 lg:py-3.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg font-medium whitespace-nowrap"
              >
                Get Started
                <ArrowRight className="ml-2 h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="text-xs xs:text-sm sm:text-base md:text-base lg:text-lg px-5 xs:px-6 sm:px-8 md:px-10 lg:px-12 py-2 xs:py-2.5 sm:py-3 md:py-3 lg:py-3.5 border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg font-medium whitespace-nowrap"
              >
                Our Services
              </Button>
            </div>

            {/* Stats Grid - Responsive */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {[
                { value: '50+', label: 'Projects' },
                { value: '98%', label: 'Satisfaction' },
                { value: '30+', label: 'Clients' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 leading-none">{item.value}</div>
                  <div className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mt-1.5 sm:mt-2 md:mt-3 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative flex justify-center mt-8 md:mt-0 px-2 sm:px-0"
          >
            {/* Image Container with Skeleton Loader */}
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl sm:rounded-3xl animate-pulse z-10" />
              )}
            <img
  src="https://images.unsplash.com/photo-1758518729685-f88df7890776?..."
  alt="Team collaboration working together"
  loading="eager"
  onLoad={() => setImageLoaded(true)}
  onError={() => setImageLoaded(true)}
  className={`rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl w-full aspect-[4/3] sm:aspect-video object-cover transition-opacity duration-500 ${
    imageLoaded ? 'opacity-100' : 'opacity-0'
  }`}
/>

            </div>

            {/* Trust Badge - Responsive positioning */}
           <div className="hidden sm:block absolute -bottom-6 sm:-bottom-8 left-2 sm:-left-8 ...">

              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white text-base xs:text-lg sm:text-xl md:text-2xl font-bold flex-shrink-0">
                  ✓
                </div>
                <div className="min-w-0">
                  <div className="text-xs xs:text-xs sm:text-sm md:text-base text-gray-500 font-medium leading-tight">Trusted by</div>
                  <div className="text-xs xs:text-sm sm:text-base md:text-lg font-semibold text-gray-900 whitespace-nowrap leading-tight">30+ Companies</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}