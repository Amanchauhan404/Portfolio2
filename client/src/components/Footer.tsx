import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Projects",
      links: [
        { name: "AI Dashboard", href: "#projects" },
        { name: "3D Portfolio", href: "#projects" },
        { name: "E-commerce", href: "#projects" },
        { name: "Chat App", href: "#projects" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "GitHub", href: "https://github.com" },
        { name: "LinkedIn", href: "https://linkedin.com" },
        { name: "Email", href: "mailto:alex.chen.dev@email.com" },
        { name: "Resume", href: "#" },
      ],
    },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <footer className="relative py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 neon-text">NeoFolio</h3>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Creating futuristic web experiences with cutting-edge technologies and AI integration.
            </p>
            <div className="flex items-center text-sm text-foreground/60">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>by Alex Chen</span>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4 text-primary">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05), duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-foreground/70 text-sm">
                © {currentYear} Alex Chen. All Rights Reserved.
              </p>
              <p className="text-foreground/60 text-xs mt-1">
                Designed and developed with modern web technologies
              </p>
            </div>

            <div className="flex items-center space-x-4">
              {/* Scroll to Top Button */}
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="icon"
                className="glass rounded-full hover:scale-110 transition-transform duration-200"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>

              {/* Status Indicator */}
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-foreground/70">Available for work</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Credit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="glass rounded-lg p-4 inline-block">
            <p className="text-xs text-foreground/60">
              Built with React, TypeScript, Three.js, Framer Motion & TailwindCSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
