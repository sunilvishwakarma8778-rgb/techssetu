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
    <section
  id="services"
  className="scroll-mt-24 py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50"
>

      <div className="container mx-auto px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4">Our Services</h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Comprehensive digital solutions tailored to help your business thrive in the modern marketplace.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg sm:hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <service.icon className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-base sm:text-lg md:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0 sm:pt-2">
                  <ul className="space-y-1.5 sm:space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start sm:items-center gap-2 text-xs xs:text-sm sm:text-base text-gray-600">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        {feature}
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
