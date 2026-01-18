import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useState } from "react";

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              We help startups and businesses grow with modern digital solutions —
              from web & app development to performance-driven marketing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base rounded-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="px-8 py-3 text-base rounded-lg"
              >
                Our Services
              </Button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 max-w-md">
              {[
                { value: "50+", label: "Projects" },
                { value: "98%", label: "Satisfaction" },
                { value: "30+", label: "Clients" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-3xl font-bold text-blue-600">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl" />
              )}
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Team working together"
                onLoad={() => setImageLoaded(true)}
                className={`w-full rounded-2xl shadow-xl transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
