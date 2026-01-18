import { motion } from 'motion/react';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Badge } from './ui/badge';

const projects = [
  {
    title: 'E-commerce Platform – Kaldunga',
    category: 'Web Development',
    description:
      'Built a full-featured e-commerce website for an electric retailer, increasing online sales by 250%.',
    image: 'https://i.pinimg.com/736x/d9/c9/ca/d9c9ca3071f052121f8c70ccd8b0e89b.jpg',
    url: 'https://kaldunga.com/',
    tags: ['React', 'Node.js', 'Stripe'],
  },
  {
    title: 'Kaldunga Mobile App',
    category: 'Mobile Development',
    description:
      'Developed a scalable e-commerce mobile app with analytics and Firebase backend.',
    image: 'https://i.pinimg.com/736x/17/a9/35/17a9354ee1dd1cb3fce8930216b26e3b.jpg',
    url: 'https://play.google.com/store/apps/details?id=com.aurget.buddha',
    tags: ['React Native', 'Firebase', 'Analytics'],
  },
  {
    title: 'Little Wonders Public School',
    category: 'Web Development',
    description:
      'Designed and developed a responsive school website improving communication between parents and faculty.',
    image: 'https://i.pinimg.com/736x/0a/58/ef/0a58efbc6cb292c68f32cd34b1aa1cf2.jpg',
    url: 'https://school-navy-tau.vercel.app/',
    tags: ['Figma', 'Design System', 'React'],
  },
  {
    title: 'City Bus App',
    category: 'Government App',
    description:
      'Secure and user-friendly government mobile application providing access to public services.',
    image: 'https://i.pinimg.com/736x/f7/75/8f/f7758f919f7ea349759d3c660202254b.jpg',
    url: 'https://play.google.com/store/apps/details?id=com.ramainfotech.citybus',
    tags: ['React Native', 'Firebase'],
  },
  {
    title: 'PGRS Citizen Feedback',
    category: 'Government App',
    description:
      'Citizen grievance and feedback app designed for seamless government service interaction.',
    image: 'https://i.pinimg.com/736x/9a/d3/29/9ad3293bf6fa444f55ca27a998c91d2c.jpg',
    url: 'https://play.google.com/store/apps/details?id=com.rtgs.ap_pgrs_auth',
    tags: ['React Native', 'Firebase'],
  },
  {
    title: 'Synergy Access Campaign',
    category: 'Web Development',
    description:
      'Marketing campaign website focused on lead generation and brand visibility.',
    image: 'https://i.pinimg.com/736x/b4/07/d9/b407d97642d266013347c4855046fdb5.jpg',
    url: 'https://www.synergy-access.com/',
    tags: ['React', 'Node.js'],
  },
];

export function Portfolio() {
  const [imageStates, setImageStates] = useState<Record<string, boolean>>({});

  const handleImageLoad = (title: string) => {
    setImageStates(prev => ({ ...prev, [title]: true }));
  };

  return (
    <section
      id="portfolio"
      className="py-12 sm:py-16 md:py-20 lg:py-24 scroll-mt-24 bg-white"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our latest projects and see how we help businesses grow.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
                {/* Image */}
                <div className="relative aspect-video bg-gray-100 overflow-hidden">
                  {!imageStates[project.title] && (
                    <div className="absolute inset-0 animate-pulse bg-gray-300" />
                  )}
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    onLoad={() => handleImageLoad(project.title)}
                    className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                      imageStates[project.title] ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <Badge className="absolute top-4 right-4 bg-blue-600 text-white">
                    {project.category}
                  </Badge>
                </div>

                {/* Content */}
                <CardHeader>
                  <CardTitle className="group-hover:text-blue-600 transition">
                    {project.title}
                  </CardTitle>
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
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
