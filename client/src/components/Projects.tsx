import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "AI-Powered Dashboard",
      category: "Dashboard",
      description: "Modern analytics dashboard with AI-driven insights and real-time data visualization.",
      image: "https://pixabay.com/get/gb769698ca1ba789c84be4f2213627a117a1174f3927f91f971cef6c6fcec22aab3a834e6fda53af5f09ef45d43eb9ce8ffb8a91476aa8d5f113a7b34cb5d606c_1280.jpg",
      tech: ["React", "TypeScript", "Chart.js", "AI API"],
      liveUrl: "#",
      codeUrl: "#",
      featured: true,
    },
    {
      title: "3D Portfolio Website",
      category: "Portfolio",
      description: "Interactive 3D portfolio showcasing creative projects with immersive user experience.",
      image: "https://pixabay.com/get/gc186ed7800c2f6e1d1f033b50bef0cd9aab69f737f146a7c6733e344b1a190ef4d87275ff0757934382e045bc7fd31d8f560f05592e98c3f1d81409cbfacc787_1280.jpg",
      tech: ["Three.js", "React", "Framer Motion", "GSAP"],
      liveUrl: "#",
      codeUrl: "#",
      featured: true,
    },
    {
      title: "E-commerce Platform",
      category: "E-commerce",
      description: "Full-featured online store with advanced filtering, cart management, and payment integration.",
      image: "https://pixabay.com/get/gc026f24889286ecbbe211cb2924332a5fd3a41429a982e789aeb5b6fe8d2ad626bdf3908fcca0f6d21aa6d668cd4a9b993fdd49e2d17254a0be1742a7eab14fb_1280.jpg",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      liveUrl: "#",
      codeUrl: "#",
      featured: false,
    },
    {
      title: "Real-time Chat App",
      category: "Social",
      description: "Modern messaging application with real-time communication and file sharing capabilities.",
      image: "https://pixabay.com/get/g5b40ee8b26ab00b30edbbb55287e5dbec104f0be7d3bc90bef972358709a41b077585ed6335d1b230a5abe9bfb2cc278ab1ccf17616fe98d2f4861734759dbc8_1280.jpg",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      liveUrl: "#",
      codeUrl: "#",
      featured: false,
    },
    {
      title: "Productivity Tool",
      category: "Productivity",
      description: "Task management application with AI-powered suggestions and team collaboration features.",
      image: "https://pixabay.com/get/g82218002ac652f2fbc9e43dc22df7fb9278046e4a4645c5d7ed0b5ff172b5d5d7191a9958ade6c71bb4a96b560168ba8f0e880b683ad17d4e212bce1f728e4c5_1280.jpg",
      tech: ["Vue.js", "Express", "Redis", "AI API"],
      liveUrl: "#",
      codeUrl: "#",
      featured: false,
    },
    {
      title: "Learning Management System",
      category: "Education",
      description: "Interactive learning platform with video streaming, quizzes, and progress tracking.",
      image: "https://pixabay.com/get/gaf3b2536942eeb394cad2a44d95068a3419ce334d3b150270a13491796890171d154a3449a337ae757e47715b1021cd8654e2bccd77fcc6d48bd0322b5b38219_1280.jpg",
      tech: ["React", "Firebase", "Video.js", "Material-UI"],
      liveUrl: "#",
      codeUrl: "#",
      featured: true,
    },
  ];

  const categories = ["All", "Dashboard", "Portfolio", "E-commerce", "Social", "Productivity", "Education"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Showcasing my best work in web development and AI integration
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`glass hover:scale-105 transition-transform duration-200 ${
                filter === category ? "neon-glow" : ""
              }`}
            >
              <Filter className="mr-2 h-4 w-4" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={project.featured ? "lg:col-span-2" : ""}
            >
              <Card className="glass overflow-hidden h-full group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button size="sm" className="neon-glow">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline" className="glass">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 bg-primary/90">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  
                  <p className="text-foreground/70 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="glass max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
              <p className="text-foreground/70 mb-6">
                Check out my GitHub for more projects and open source contributions.
              </p>
              <Button className="neon-glow hover:scale-105 transition-transform duration-200">
                <Github className="mr-2 h-5 w-5" />
                View All Projects
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
