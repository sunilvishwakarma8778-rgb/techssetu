import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    // {
    //   name: 'Starter',
    //   price: '$2,999',
    //   description: 'Perfect for small businesses just getting started',
    //   features: [
    //     'Custom Website Design',
    //     'Up to 5 Pages',
    //     'Mobile Responsive',
    //     'Basic SEO Setup',
    //     'Contact Form',
    //     '2 Rounds of Revisions',
    //     '30 Days Support',
    //   ],
    //   popular: false,
    // },
    // {
    //   name: 'Professional',
    //   price: '$5,999',
    //   description: 'Ideal for growing businesses that need more',
    //   features: [
    //     'Everything in Starter',
    //     'Up to 10 Pages',
    //     'Advanced SEO',
    //     'Content Management System',
    //     'E-commerce Integration',
    //     'Social Media Integration',
    //     'Analytics Dashboard',
    //     'Unlimited Revisions',
    //     '90 Days Support',
    //   ],
    //   popular: true,
    // },
    // {
    //   name: 'Enterprise',
    //   price: 'Custom',
    //   description: 'Comprehensive solutions for established businesses',
    //   features: [
    //     'Everything in Professional',
    //     'Unlimited Pages',
    //     'Custom Features',
    //     'Mobile App Development',
    //     'Advanced Analytics',
    //     'API Integrations',
    //     'Dedicated Account Manager',
    //     'Priority Support',
    //     '1 Year Support',
    //   ],
    //   popular: false,
    // },
  ];

  return (
    <section id="pricing" className="py-0 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* <h2 className="text-4xl md:text-5xl mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the package that fits your needs and budget. All plans include our quality guarantee.
          </p> */}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className={`h-full ${plan.popular ? 'border-blue-600 border-2 shadow-xl' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-gray-600"> /project</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-gray-800 hover:bg-gray-900'
                    }`}
                    size="lg"
                    onClick={scrollToContact}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            {/* Need a custom solution? We offer flexible pricing for unique requirements. */}
          </p>
          <Button variant="outline" size="lg" onClick={scrollToContact}>
            {/* Contact Us for Custom Quote */}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
