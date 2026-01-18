import { motion } from 'motion/react';
import { Code, Smartphone, Globe, Search, Palette, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with the latest technologies for optimal performance and user experience.',
      features: ['React & Next.js', 'E-commerce Solutions', 'CMS Integration', 'Progressive Web Apps'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'Java'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that create memorable user experiences and boost conversions.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Data-driven SEO strategies to improve your search rankings and drive organic traffic.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Link Building'],
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing campaigns that generate leads and increase revenue.',
      features: ['Social Media Marketing', 'PPC Advertising', 'Email Marketing', 'Content Strategy'],
    },
    {
      icon: Globe,
      title: 'Brand Strategy',
      description: 'Build a powerful brand identity that resonates with your target audience and sets you apart.',
      features: ['Brand Identity', 'Logo Design', 'Brand Guidelines', 'Market Positioning'],
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 scroll-mt-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-900">Our Services</h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 leading-relaxed">
            Comprehensive digital solutions tailored to help your business thrive in the modern marketplace.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <Card className="h-full hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-blue-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2">
                <CardHeader className="pb-4 sm:pb-5 md:pb-6 lg:pb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all">
                    <service.icon className="text-white" size={28} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base text-gray-600 mt-2 sm:mt-3 leading-relaxed group-hover:text-gray-700 transition-colors">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-2 sm:pt-3 md:pt-4">
                  <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start sm:items-center gap-2.5 sm:gap-3 text-xs xs:text-sm sm:text-base md:text-base text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0 shadow-sm">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
