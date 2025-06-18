import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "🧠 Languages",
      skills: [
        { name: "JavaScript", level: 95, projects: ["E-commerce Platform", "AI Chat App", "3D Portfolio"] },
        { name: "TypeScript", level: 90, projects: ["Dashboard Analytics", "Real-time Tracker"] },
        { name: "HTML", level: 98, projects: ["Landing Pages", "Email Templates"] },
        { name: "CSS", level: 92, projects: ["Animation Library", "Design System"] },
      ],
    },
    {
      title: "⚛️ Frameworks",
      skills: [
        { name: "React", level: 95, projects: ["Social Media App", "E-learning Platform"] },
        { name: "Next.js", level: 88, projects: ["SEO-optimized Sites", "Server-side Apps"] },
        { name: "Vue.js", level: 75, projects: ["Admin Dashboard", "Component Library"] },
        { name: "Svelte", level: 70, projects: ["Interactive Widgets", "Performance Demos"] },
      ],
    },
    {
      title: "🎨 UI & Design",
      skills: [
        { name: "Tailwind CSS", level: 95, projects: ["Design Systems", "Responsive Layouts"] },
        { name: "Framer Motion", level: 90, projects: ["Animated Landing Pages", "Micro-interactions"] },
        { name: "Three.js", level: 85, projects: ["3D Portfolios", "Interactive Experiences"] },
        { name: "GSAP", level: 80, projects: ["Complex Animations", "Scroll Triggers"] },
      ],
    },
    {
      title: "🛠️ Tools & Others",
      skills: [
        { name: "Git", level: 92, projects: ["Team Collaboration", "Open Source"] },
        { name: "Docker", level: 78, projects: ["Development Environment", "Deployment"] },
        { name: "AWS", level: 75, projects: ["Cloud Hosting", "Serverless Functions"] },
        { name: "AI/ML APIs", level: 85, projects: ["ChatGPT Integration", "Image Generation"] },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="relative"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-primary">{skill.level}%</span>
                        </div>
                        
                        <div className="w-full bg-secondary/30 rounded-full h-2 relative overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1, duration: 1 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full relative"
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </motion.div>
                        </div>

                        {/* Hover Projects */}
                        {hoveredSkill === skill.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute z-10 mt-2 p-3 glass rounded-lg border border-primary/30 min-w-max"
                          >
                            <p className="text-xs font-medium mb-2 text-primary">Used in:</p>
                            <div className="flex flex-wrap gap-1">
                              {skill.projects.map((project) => (
                                <Badge key={project} variant="secondary" className="text-xs">
                                  {project}
                                </Badge>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Projects Completed", value: "50+" },
            { label: "Lines of Code", value: "100K+" },
            { label: "Coffee Cups", value: "2000+" },
            { label: "Happy Clients", value: "25+" },
          ].map((stat, index) => (
            <Card key={stat.label} className="glass text-center">
              <CardContent className="p-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-primary mb-1"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
