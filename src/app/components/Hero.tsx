import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h1>

            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-xl leading-relaxed">
              We help startups and businesses grow with modern digital solutions —
              from web & app development to performance-driven marketing.
            </p>

            <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4 w-full xs:w-auto mb-8 sm:mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-sm xs:text-base sm:text-lg px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-3 w-full xs:w-auto"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="text-sm xs:text-base sm:text-lg px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-3 w-full xs:w-auto"
              >
                Our Services
              </Button>
            </div>

            {/* Stats Grid - Responsive */}
            <div className="mt-6 sm:mt-8 md:mt-12 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-sm">
              {[
                { value: '50+', label: 'Projects' },
                { value: '98%', label: 'Satisfaction' },
                { value: '30+', label: 'Clients' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-blue-600">{item.value}</div>
                  <div className="text-xs xs:text-sm text-gray-600 mt-0.5 sm:mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative flex justify-center mt-8 md:mt-0"
          >
            <img
              src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjY4OTk1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Team collaboration"
              loading="lazy"
              className="rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-none"
            />

            {/* Trust Badge - Hidden on mobile, absolute on desktop */}
            <div className="hidden md:block absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-3 sm:p-5 rounded-xl shadow-xl">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-500">Trusted by</div>
                  <div className="text-sm sm:text-lg font-semibold whitespace-nowrap">30+ Companies</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}