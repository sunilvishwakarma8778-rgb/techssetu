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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">About Techssetu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're a full-service digital agency passionate about helping small businesses and startups 
            achieve their goals through innovative digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1763191213523-1489179a1088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMHN0YXJ0dXB8ZW58MXx8fHwxNzY2OTk1NTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Our workspace"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl mb-4">Who We Are</h3>
            <p className="text-gray-600 mb-4">
              Founded in 2018, Techssetu has grown from a small team of passionate developers to a 
              full-service digital agency serving clients worldwide. We believe in the power of 
              technology to transform businesses and create lasting impact.
            </p>
            <p className="text-gray-600 mb-6">
              Our approach combines creativity, technical expertise, and strategic thinking to deliver 
              solutions that not only look great but drive real business results. We're not just 
              service providers – we're your partners in growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Customer-focused approach</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Cutting-edge technology</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Transparent communication</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
