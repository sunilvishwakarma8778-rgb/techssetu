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
const eweb = new URL('../assets/eweb.png', import.meta.url).href;
const appImg = new URL('../assets/app.png', import.meta.url).href;
const webschool = new URL('../assets/webschool.png', import.meta.url).href;
const gapp = new URL('../assets/image/gapp.jpg', import.meta.url).href;
const pgrsapp = new URL('../assets/pgrsapp.png', import.meta.url).href;
const senergy = new URL('../assets/senergy.png', import.meta.url).href;

const projects = [
  {
    title: 'E-commerce Platform – Kaldunga',
    category: 'Web Development',
    description:
      'Built a full-featured e-commerce website for an electric retailer, increasing online sales by 250%.',
    image: eweb,
    url: 'https://kaldunga.com/',
    tags: ['React', 'Node.js', 'Stripe'],
  },
  {
    title: 'Kaldunga Mobile App',
    category: 'Mobile Development',
    description:
      'Developed a scalable e-commerce mobile app with analytics and Firebase backend.',
    image: appImg,
    url: 'https://play.google.com/store/apps/details?id=com.aurget.buddha',
    tags: ['React Native', 'Firebase', 'Analytics'],
  },
  {
    title: 'Little Wonders Public School',
    category: 'Web Development',
    description:
      'Designed and developed a responsive school website improving communication between parents and faculty.',
    image: webschool,
    url: 'https://school-navy-tau.vercel.app/',
    tags: ['Figma', 'Design System', 'React'],
  },
  {
    title: 'City Bus App',
    category: 'Government App',
    description:
      'Secure and user-friendly government mobile application providing access to public services.',
    image: gapp,
    url: 'https://play.google.com/store/apps/details?id=com.ramainfotech.citybus',
    tags: ['React Native', 'Firebase'],
  },
  {
    title: 'PGRS Citizen Feedback',
    category: 'Government App',
    description:
      'Citizen grievance and feedback app designed for seamless government service interaction.',
    image: pgrsapp,
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
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects and see how we help businesses achieve
            their digital goals.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <Card className="h-full overflow-hidden group hover:shadow-xl transition-shadow">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-48 sm:h-52 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 bg-blue-600">
                    {project.category}
                  </Badge>
                </div>

                {/* Content */}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
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
