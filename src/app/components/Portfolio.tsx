import { motion } from 'motion/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Badge } from './ui/badge';
/* Images */
import web from '../../assets/kuldungaweb.png';
import eapp from '../../assets/eapp.png';
import littile from '../../assets/littile.png';
import pgrs from '../../assets/pgrs.png';
import senergy from '../../assets/senergy.png';
import city from '../../assets/city.jpg';

const projects = [
  {
    title: 'E-commerce Platform – Kaldunga',
    category: 'Web Development',
    description:
      'Built a full-featured e-commerce website for an electric retailer, increasing online sales by 250%.',
    image: web,
    url: 'https://kaldunga.com/',
    tags: ['React', 'Node.js', 'Stripe'],
  },
  {
    title: 'Kaldunga Mobile App',
    category: 'Mobile Development',
    description:
      'Developed a scalable e-commerce mobile app with analytics and Firebase backend.',
    image: eapp,
    url: 'https://play.google.com/store/apps/details?id=com.aurget.buddha',
    tags: ['React Native', 'Firebase', 'Analytics'],
  },
  {
    title: 'Little Wonders Public School',
    category: 'Web Development',
    description:
      'Designed and developed a responsive school website improving communication between parents and faculty.',
    image: littile,
    url: 'https://school-navy-tau.vercel.app/',
    tags: ['Figma', 'Design System', 'React'],
  },
  {
    title: 'City Bus App',
    category: 'Government App',
    description:
      'Secure and user-friendly government mobile application providing access to public services.',
    image: city,
    url: 'https://play.google.com/store/apps/details?id=com.ramainfotech.citybus',
    tags: ['React Native', 'Firebase'],
  },
  {
    title: 'PGRS Citizen Feedback',
    category: 'Government App',
    description:
      'Citizen grievance and feedback app designed for seamless government service interaction.',
    image: pgrs,
    url: 'https://play.google.com/store/apps/details?id=com.rtgs.ap_pgrs_auth',
    tags: ['React Native', 'Firebase'],
  },
  {
    title: 'Synergy Access Campaign',
    category: 'Web Development',
    description:
      'Marketing campaign website focused on lead generation and brand visibility.',
    image: senergy,
    url: 'https://www.synergy-access.com/',
    tags: ['React', 'Node.js'],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            Our Portfolio
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Explore our latest projects and see how we help businesses achieve
            their digital goals.
          </p>
        </motion.div>

        {/* Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">

          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="block h-full"
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg sm:hover:shadow-xl transition-shadow">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-40 xs:h-44 sm:h-52 md:h-56 lg:h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge className="absolute top-2 xs:top-3 sm:top-4 right-2 xs:right-3 sm:right-4 bg-blue-600 text-xs xs:text-sm">
                    {project.category}
                  </Badge>
                </div>

                {/* Content */}
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-base xs:text-lg sm:text-lg md:text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-xs xs:text-sm sm:text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 sm:pt-2">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs xs:text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
