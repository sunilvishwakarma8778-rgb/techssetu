import { motion } from 'motion/react';
import { Target, Users, Award, Zap } from 'lucide-react';
import { useState } from 'react';

export function About() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const features = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We\'re dedicated to helping businesses succeed in the digital world with innovative solutions.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team of 50+ professionals brings decades of combined experience to every project.',
    },
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Recognized industry leaders with multiple awards for excellence in digital services.',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'We pride ourselves on delivering high-quality projects on time, every time.',
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-900">About Techssetu</h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 leading-relaxed">
            We're a full-service digital agency passionate about helping small businesses and startups 
            achieve their goals through innovative digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gray-100 rounded-lg sm:rounded-2xl overflow-hidden aspect-video sm:aspect-auto">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse" />
              )}
              <img
                src="https://images.unsplash.com/photo-1763191213523-1489179a1088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMHN0YXJ0dXB8ZW58MXx8fHwxNzY2OTk1NTExfDA&ixlib=rb-4.0.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Creative workspace and collaborative environment"
                loading="eager"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 font-bold text-gray-900">Who We Are</h3>
            <p className="text-sm xs:text-base sm:text-lg md:text-lg text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
              Founded in 2018, Techssetu has grown from a small team of passionate developers to a 
              full-service digital agency serving clients worldwide. We believe in the power of 
              technology to transform businesses and create lasting impact.
            </p>
            <p className="text-sm xs:text-base sm:text-lg md:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              Our approach combines creativity, technical expertise, and strategic thinking to deliver 
              solutions that not only look great but drive real business results. We're not just 
              service providers – we're your partners in growth.
            </p>

            {/* Checklist */}
            <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
              {[
                'Customer-focused approach',
                'Cutting-edge technology',
                'Transparent communication'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 sm:gap-4 group">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                    <span className="text-white text-sm sm:text-base font-bold">✓</span>
                  </div>
                  <span className="text-sm xs:text-base sm:text-lg md:text-lg text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-5 sm:p-6 md:p-8 rounded-lg sm:rounded-2xl bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
              role="article"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.currentTarget.click();
                }
              }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-5 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all">
                <feature.icon className="text-white" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center group-hover:text-blue-600 transition-colors">{feature.title}</h3>
              <p className="text-xs xs:text-sm sm:text-base md:text-base text-gray-600 leading-relaxed text-center group-hover:text-gray-700 transition-colors">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
