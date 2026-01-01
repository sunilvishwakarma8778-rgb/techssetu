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
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation and let's bring your vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <Card key={info.title}>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">{info.title}</div>
                      {info.link ? (
                        <a href={info.link} className="text-gray-900 hover:text-blue-600 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-gray-900">{info.value}</div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl mb-4">Why Choose Techssetu?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Free initial consultation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Transparent pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>100% satisfaction guarantee</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Dedicated project manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>On-time delivery</span>
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
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
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
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm mb-2">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project..."
                      rows={5}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    size="lg"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      'Message Sent! ✓'
                    ) : (
                      <>
                        Send Message <Send className="ml-2" size={20} />
                      </>
                    )}
                  </Button>
                  {isSubmitted && (
                    <p className="text-green-600 text-center text-sm">
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
