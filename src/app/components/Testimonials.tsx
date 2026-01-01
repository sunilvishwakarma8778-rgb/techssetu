import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sangam Prajapati',
      image: "src/app/assets/sangam.jpg",
      text: 'Techssetu transformed our online presence completely. Our website traffic increased by 300% and conversions doubled within 6 months. Their team is professional, creative, and always delivers on time.',
      rating: 5,
    },
    {
      name: 'Raju Vishwakarma',
      // role: 'Founder, Kuldunga',
      image: "src/app/assets/image/kaldunga.png",
      text: 'Working with Techssetu was a game-changer for our business. They understood our vision and delivered a beautiful e-commerce platform that our customers love. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Gautam Jaiswal',
      // role: 'Healthcare, FitLife',
      image: "src/app/assets/image/gautam.jpg",
      text: 'The mobile app they developed for us exceeded all expectations. The user experience is seamless, and our customer engagement has skyrocketed. Best investment we\'ve made!',
      rating: 5,
    },
    {
      name: 'Arvind Sahani',
      // role: 'Owner, Thompson Legal',
      image: "src/app/assets/image/arvind.jpeg",
      text: 'Professional, responsive, and incredibly talented. Techssetu helped us modernize our brand and reach a younger demographic. Client inquiries have increased by 150%.',
      rating: 5,
    },
    {
      name: 'Kartikey',
      // role: 'VP of Operations, CloudTech',
      image:  "src/app/assets/sanga1.jpg",
      text: 'Their digital marketing strategies are top-notch. We saw immediate results and continue to grow month over month. The team is knowledgeable and truly cares about our success.',
      rating: 5,
    },
    {
      name: 'Dipu Sharma',
      // role: 'CEO, Urban Eats',
      image: "src/app/assets/image/dipu.jpeg",
      text: 'From concept to launch, Techssetu guided us every step of the way. Our online ordering system is user-friendly and has significantly boosted our revenue. Couldn\'t be happier!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <Quote className="text-blue-600 mb-4" size={40} />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6">{testimonial.text}</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
