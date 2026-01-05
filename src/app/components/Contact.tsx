import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sunilvishwakarma8778@gmail.com',
      link: 'sunilvishwakarma8778@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7355757848',
      link: 'tel:+917355757848',
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Gorakhpur, Uttar Pradesh, India',
      // link: '',
    },
  ];

  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4">Get In Touch</h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Ready to start your project? Contact us today for a free consultation and let's bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 font-semibold">Contact Information</h3>
            <div className="space-y-3 sm:space-y-4 md:space-y-6 mb-6 sm:mb-8">
              {contactInfo.map((info) => (
                <Card key={info.title}>
                  <CardContent className="flex items-start gap-3 sm:gap-4 pt-4 sm:pt-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-white" size={20} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs xs:text-sm text-gray-600 mb-1">{info.title}</div>
                      {info.link ? (
                        <a href={info.link} className="text-xs xs:text-sm sm:text-base text-gray-900 hover:text-blue-600 transition-colors break-all">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-xs xs:text-sm sm:text-base text-gray-900">{info.value}</div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 font-semibold">Why Choose Techssetu?</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start sm:items-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">✓</span>
                  <span className="text-xs xs:text-sm sm:text-base">Free initial consultation</span>
                </li>
                <li className="flex items-start sm:items-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">✓</span>
                  <span className="text-xs xs:text-sm sm:text-base">Transparent pricing</span>
                </li>
                <li className="flex items-start sm:items-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">✓</span>
                  <span className="text-xs xs:text-sm sm:text-base">100% satisfaction guarantee</span>
                </li>
                <li className="flex items-start sm:items-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">✓</span>
                  <span className="text-xs xs:text-sm sm:text-base">Dedicated project manager</span>
                </li>
                <li className="flex items-start sm:items-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">✓</span>
                  <span className="text-xs xs:text-sm sm:text-base">On-time delivery</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="pt-4 sm:pt-6">
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs xs:text-sm mb-1.5 sm:mb-2 font-medium">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="text-xs xs:text-sm sm:text-base h-9 sm:h-10"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs xs:text-sm mb-1.5 sm:mb-2 font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Yourname@example.com"
                      className="text-xs xs:text-sm sm:text-base h-9 sm:h-10"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs xs:text-sm mb-1.5 sm:mb-2 font-medium">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="text-xs xs:text-sm sm:text-base h-9 sm:h-10"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs xs:text-sm mb-1.5 sm:mb-2 font-medium">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                      className="text-xs xs:text-sm sm:text-base h-9 sm:h-10"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs xs:text-sm mb-1.5 sm:mb-2 font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project..."
                      rows={4}
                      className="text-xs xs:text-sm sm:text-base"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-xs xs:text-sm sm:text-base h-9 sm:h-10"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      'Message Sent! ✓'
                    ) : (
                      <>
                        Send Message <Send className="ml-2" size={16} />
                      </>
                    )}
                  </Button>
                  {isSubmitted && (
                    <p className="text-green-600 text-center text-xs xs:text-sm">
                      Thank you! We'll get back to you within 24 hours.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
