import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function Portfolio() {
  const projects = [
    {
      title: 'E-commerce Platform Kaldunga',
      category: 'Web Development',
      description: 'Built a full-featured e-commerce Webside for a Electric retailer, increasing online sales by 250%.',
      image: "src/app/assets/kaldungaweb.png",
      url: 'https://kaldunga.com/',
      tags: ['React', 'Node.js', 'Stripe'],
    },
    {
      title: 'kaldunga Mobile App',
      category: 'Mobile Development',
      description: 'Built a full-featured e-commerce App platform for a Electric retailer, increasing online sales by 250%.',
      image:  "src/app/assets/image/kalddunga.png",
       url: 'https://play.google.com/store/apps/details?id=com.aurget.buddha',
      tags: ['React Native', 'Firebase', 'Analytics'],
    },
    {
      title: 'Little Wonders Public School Website',
      category: 'Web Development',
      description: 'Designed and developed a responsive school website with clear navigation and engaging visuals, enhancing communication between parents, students, and faculty.',
      image: "src/app/assets/image/littelschool.png",
      url: 'https://school-navy-tau.vercel.app/',
      tags: ['Figma', 'Design System', 'React Tsx'],
    },
    {
      title: 'City Bus',
      category: 'Government App Development',
      description: 'Built a secure and user-friendly government mobile application to provide citizens with easy access to public services, information, and digital resources.',
      image: "src/app/assets/image/gapp.jpg",
      url: 'https://play.google.com/store/apps/details?id=com.rtgs.ap_pgrs_auth',
      tags: ['React Native', 'Firebase'],
    },
    {
      title: 'PGRS Citizen Feedback',
      category: 'Government App Development',
      description: 'Built a secure and user-friendly government mobile application to provide citizens with easy access to public services, information, and digital resources.',
      image: "src/app/assets/image/gapp1.jpg",
      url: 'https://play.google.com/store/apps/details?id=com.ramainfotech.citybus',
      tags: ['React Native', 'Firebase'],
    },
    {
      title: 'Synergy Access Marketing Campaign',
      category: 'Web Development',
      description: 'Executed a results-driven digital marketing campaign website for Synergy Access, designed to generate leads, boost brand visibility, and maximize audience engagement.',
      image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwZGVzaWdufGVufDF8fHx8MTc2Njk1NzUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      url: 'https://www.synergy-access.com/',
      tags: ['React','Node js'],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Wrap the card in an anchor when a url is provided so tapping/clicking opens the project site */}
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 right-4 bg-blue-600">
                        {project.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
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
                </a>
              ) : (
                <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-blue-600">
                      {project.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
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
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
