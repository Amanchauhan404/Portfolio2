import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // My skills organized by category - updated these based on what I actually know
  const skillCategories = [
    {
      title: "🧠 Languages",
      skills: [
        { name: "JavaScript", level: 85, projects: ["Portfolio Site", "Todo App", "Weather App"] },
        { name: "TypeScript", level: 75, projects: ["This Portfolio", "Shopping Cart"] },
        { name: "HTML", level: 90, projects: ["Various Websites", "Landing Pages"] },
        { name: "CSS", level: 88, projects: ["Responsive Designs", "Animation Effects"] },
      ],
    },
    {
      title: "⚛️ Frameworks",
      skills: [
        { name: "React", level: 85, projects: ["This Portfolio", "E-commerce Site"] },
        { name: "Next.js", level: 70, projects: ["Blog Website", "Landing Pages"] },
        { name: "Vue.js", level: 60, projects: ["Small Projects", "Learning Demos"] },
        { name: "Express.js", level: 65, projects: ["API Backends", "Simple Servers"] },
      ],
    },
    {
      title: "🎨 UI & Design",
      skills: [
        { name: "Tailwind CSS", level: 80, projects: ["This Portfolio", "Responsive Sites"] },
        { name: "Framer Motion", level: 70, projects: ["Portfolio Animations", "Page Transitions"] },
        { name: "Three.js", level: 60, projects: ["Learning Projects", "This Portfolio"] },
        { name: "Bootstrap", level: 75, projects: ["Quick Prototypes", "Client Projects"] },
      ],
    },
    {
      title: "🛠️ Tools & Others",
      skills: [
        { name: "Git", level: 80, projects: ["Version Control", "GitHub Projects"] },
        { name: "Node.js", level: 70, projects: ["Backend APIs", "Build Tools"] },
        { name: "MongoDB", level: 65, projects: ["Database Projects", "CRUD Apps"] },
        { name: "AI APIs", level: 50, projects: ["This Chat Feature", "Learning Projects"] },
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
            { label: "Projects Completed", value: "25+" },
            { label: "Lines of Code", value: "50K+" },
            { label: "Coffee Cups", value: "1000+" },
            { label: "Learning Hours", value: "500+" },
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
