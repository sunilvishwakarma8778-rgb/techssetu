import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import sangam from "../../assets/sangam.jpg";
import kaldunga from "../../assets/kalddunga.png";
import gautam from "../../assets/gautam.jpg";
import arvind from "../../assets/arvind.jpeg";
import kartikey from "../../assets/2.jpg";
import dipu from "../../assets/dipu.jpeg";

type Testimonial = {
  name: string;
  image: string;
  text: string;
  rating: number;
  role?: string;
  className?: string; // ✅ optional className
};

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Sangam Prajapati",
      image: sangam,
      text: "Techssetu transformed our online presence completely. Our website traffic increased by 300% and conversions doubled within 6 months. Their team is professional, creative, and always delivers on time.",
      rating: 5,
      className: "border-2 border-blue-500 bg-blue-50",
    },
    {
      name: "Raju Vishwakarma",
      image: kaldunga,
      text: "Working with Techssetu was a game-changer for our business. They understood our vision and delivered a beautiful e-commerce platform that our customers love.",
      rating: 5,
      className: "border-2 border-blue-500 bg-blue-50",
    },
    {
      name: "Gautam Jaiswal",
      image: gautam,
      text: "The mobile app they developed for us exceeded all expectations. The user experience is seamless.",
      rating: 5,
      className: "border-2 border-blue-500 bg-blue-50",
    },
    {
      name: "Arvind Sahani",
      image: arvind,
      text: "Professional, responsive, and incredibly talented. Techssetu helped us modernize our brand.",
      rating: 5,
      className: "border-2 border-blue-500 bg-blue-50",
    },
    {
      name: "Kartikey",
      image: kartikey,
      text: "Their digital marketing strategies are top-notch. We saw immediate results.",
      rating: 5,
      className: "border-2 border-blue-500 bg-blue-50",
    },
    {
      name: "Dipu Sharma",
      image: dipu,
      text: "From concept to launch, Techssetu guided us every step of the way.",
      rating: 5,
      className: "border-2 border-blue-500 bg-blue-50",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it — hear from businesses we've helped.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* ✅ className yahan properly apply hua */}
              <Card
                className={`h-full hover:shadow-xl transition-shadow ${
                  testimonial.className ?? ""
                }`}
              >
                <CardContent className="pt-6 flex flex-col h-full">
                  <Quote className="text-blue-600 mb-4" size={40} />

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-yellow-400"
                        size={20}
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 flex-grow">
                    {testimonial.text}
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">
                        {testimonial.name}
                      </div>
                      {testimonial.role && (
                        <div className="text-sm text-gray-600">
                          {testimonial.role}
                        </div>
                      )}
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
