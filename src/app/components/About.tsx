import { motion } from 'motion/react';
import { Target, Users, Award, Zap } from 'lucide-react';

export function About() {
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
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4">About Techssetu</h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            We're a full-service digital agency passionate about helping small businesses and startups 
            achieve their goals through innovative digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-8 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1763191213523-1489179a1088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMHN0YXJ0dXB8ZW58MXx8fHwxNzY2OTk1NTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Our workspace"
              className="rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 font-semibold">Who We Are</h3>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 leading-relaxed">
              Founded in 2018, Techssetu has grown from a small team of passionate developers to a 
              full-service digital agency serving clients worldwide. We believe in the power of 
              technology to transform businesses and create lasting impact.
            </p>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Our approach combines creativity, technical expertise, and strategic thinking to deliver 
              solutions that not only look great but drive real business results. We're not just 
              service providers – we're your partners in growth.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                  <span className="text-white text-xs sm:text-sm">✓</span>
                </div>
                <span className="text-xs xs:text-sm sm:text-base text-gray-700">Customer-focused approach</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                  <span className="text-white text-xs sm:text-sm">✓</span>
                </div>
                <span className="text-xs xs:text-sm sm:text-base text-gray-700">Cutting-edge technology</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                  <span className="text-white text-xs sm:text-sm">✓</span>
                </div>
                <span className="text-xs xs:text-sm sm:text-base text-gray-700">Transparent communication</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 sm:p-6 rounded-lg sm:rounded-xl hover:bg-blue-50 transition-colors"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl mb-2 font-semibold">{feature.title}</h3>
              <p className="text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
