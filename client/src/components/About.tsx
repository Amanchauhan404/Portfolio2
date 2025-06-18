import { motion } from "framer-motion";
import { Code, Rocket, Zap, Brain } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  // My coding journey - these are the major milestones I remember
  const timeline = [
    {
      year: "2020",
      title: "Started Coding Journey",
      description: "Got curious about websites and started with HTML/CSS tutorials",
      icon: <Code className="h-5 w-5" />,
    },
    {
      year: "2021", 
      title: "First React Project",
      description: "Built my first single page app - was mind blown by components!",
      icon: <Rocket className="h-5 w-5" />,
    },
    {
      year: "2022",
      title: "Learned Modern Tools",
      description: "Started using TypeScript and Next.js for bigger projects",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Got into AI APIs and started building smarter web apps",
      icon: <Brain className="h-5 w-5" />,
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
            About Me
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Passionate frontend developer with a love for creating immersive digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="glass">
              <CardContent className="p-8">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden glass border-4 border-primary/50">
                    <img
                      src="https://pixabay.com/get/gb81f147295c2c0513c2eb638f34480995d929b6ea276a8cee5911bd27edc265077b663d230ab6bfcfacab08b7f2964e3f904a76c17a1d909cdcad2118ea06d18_1280.jpg"
                      alt="Aman Chauhan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Aman Chauhan</h3>
                    <p className="text-foreground/80">Frontend Developer & AI Enthusiast</p>
                  </div>
                </div>
                
                <p className="text-foreground/80 leading-relaxed">
                  Hey there! I'm Aman, a frontend developer who really enjoys building cool stuff on the web. 
                  Started out just being curious about how websites worked, and now I'm into creating modern 
                  interfaces with some AI features thrown in. Always learning something new!
                </p>
                
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-primary font-semibold">Location:</span>
                    <p className="text-foreground/80">India</p>
                  </div>
                  <div>
                    <span className="text-primary font-semibold">Experience:</span>
                    <p className="text-foreground/80">3+ Years</p>
                  </div>
                  <div>
                    <span className="text-primary font-semibold">Favorite Tech:</span>
                    <p className="text-foreground/80">React & Next.js</p>
                  </div>
                  <div>
                    <span className="text-primary font-semibold">Currently Learning:</span>
                    <p className="text-foreground/80">Three.js & AI APIs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">My Journey</h3>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                    {item.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-primary font-bold">{item.year}</span>
                      <div className="flex-1 h-px bg-primary/30"></div>
                    </div>
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-foreground/70 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
