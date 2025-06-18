import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { ParticleBackground } from "./ParticleBackground";

export function Hero() {
  // Simple function to scroll to projects section
  // I learned this from a YouTube tutorial about smooth scrolling
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Same thing but for contact section
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      <ParticleBackground />
      
      <div className="section-content container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 neon-text"
          >
            Hey, I'm <span className="text-primary">Aman Chauhan</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed"
          >
            A Frontend Developer who builds{" "}
            <span className="text-primary font-semibold">futuristic UIs</span>{" "}
            and{" "}
            <span className="text-primary font-semibold">AI-powered experiences</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="neon-glow hover:scale-105 transition-transform duration-200"
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
            
            <Button
              onClick={scrollToProjects}
              variant="outline"
              size="lg"
              className="glass hover:scale-105 transition-transform duration-200"
            >
              View Projects
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              className="glass hover:scale-105 transition-transform duration-200"
              onClick={() => {
                // Just a simple CV download - got this idea from Stack Overflow
                // TODO: Replace with actual CV when I have one ready
                const link = document.createElement('a');
                link.href = 'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFsgMyAwIFIgXQovQ291bnQgMQo+PgplbmRvYmoKMyAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDIgMCBSCi9NZWRpYUJveCBbIDAgMCA2MTIgNzkyIF0KL0NvbnRlbnRzIDQgMCBSCj4+CmVuZG9iago0IDAgb2JqCjw8Ci9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCi9GMSAxMiBUZgozMCA3MDAgVGQKKEFtYW4gQ2hhdWhhbiAtIERldmVsb3BlciBDVikgVGoKRVQKZW5kc3RyZWFtCmVuZG9iago1IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMQovQmFzZUZvbnQgL0hlbHZldGljYQo+PgplbmRvYmoKeHJlZgo2IDAgb2JqCjw8Ci9TaXplIDYKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjIzNwolJUVPRgo=';
                link.download = 'Aman_Chauhan_CV.pdf';
                link.click();
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="floating"
          >
            <ArrowDown className="h-8 w-8 text-primary mx-auto cursor-pointer" onClick={scrollToProjects} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
