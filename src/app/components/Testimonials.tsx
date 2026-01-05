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
      className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Don't just take our word for it — hear from businesses we've helped.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
                className={`h-full hover:shadow-lg sm:hover:shadow-xl transition-shadow ${
                  testimonial.className ?? ""
                }`}
              >
                <CardContent className="pt-4 sm:pt-6 flex flex-col h-full">
                  <Quote className="text-blue-600 mb-3 sm:mb-4 flex-shrink-0" size={32} />

                  <div className="flex mb-3 sm:mb-4 gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-yellow-400"
                        size={18}
                      />
                    ))}
                  </div>

                  <p className="text-xs xs:text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 flex-grow leading-relaxed">
                    {testimonial.text}
                  </p>

                  <div className="flex items-center gap-2 sm:gap-4 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="font-semibold text-xs xs:text-sm sm:text-base truncate">
                        {testimonial.name}
                      </div>
                      {testimonial.role && (
                        <div className="text-xs text-gray-600 truncate">
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
