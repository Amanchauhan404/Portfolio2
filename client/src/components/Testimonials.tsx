import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechStart Inc.",
      image: "https://pixabay.com/get/gb81f147295c2c0513c2eb638f34480995d929b6ea276a8cee5911bd27edc265077b663d230ab6bfcfacab08b7f2964e3f904a76c17a1d909cdcad2118ea06d18_1280.jpg",
      content: "Alex delivered an exceptional AI-powered dashboard that exceeded our expectations. His attention to detail and innovative approach to user experience is outstanding.",
      rating: 5,
      project: "Analytics Dashboard",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "InnovateLabs",
      image: "https://pixabay.com/get/g9f3a55a4961f3be07f2a1907940b6ca4e1c473569e3743cfa17aebf22c946778b8fa171aa08785a8c01cc804efaa23a92d02b0b739b4683d7fe5fa17a8f2eb42_1280.jpg",
      content: "Working with Alex was a game-changer for our startup. He built a stunning 3D portfolio website that perfectly showcased our product. Highly recommend!",
      rating: 5,
      project: "3D Portfolio Website",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthCo",
      image: "https://pixabay.com/get/g6500c11e41b27e392f14b962f47fbc6c1c0ae2f1cb27402686f2cb1c73d80aa8b73796cbf7449c858f4eec3b3c110496920ce9ab6e0b5784b3a127acc729a317_1280.jpg",
      content: "Alex's expertise in modern web technologies is impressive. He created a responsive e-commerce platform that increased our conversion rate by 40%.",
      rating: 5,
      project: "E-commerce Platform",
    },
    {
      name: "David Thompson",
      role: "Lead Developer",
      company: "CodeCraft Studios",
      image: "https://pixabay.com/get/gb81f147295c2c0513c2eb638f34480995d929b6ea276a8cee5911bd27edc265077b663d230ab6bfcfacab08b7f2964e3f904a76c17a1d909cdcad2118ea06d18_1280.jpg",
      content: "Alex's code quality and architectural decisions are top-notch. He seamlessly integrated AI features into our learning platform, making it truly innovative.",
      rating: 5,
      project: "Learning Management System",
    },
    {
      name: "Lisa Wang",
      role: "Design Lead",
      company: "CreativeFlow",
      image: "https://pixabay.com/get/g6500c11e41b27e392f14b962f47fbc6c1c0ae2f1cb27402686f2cb1c73d80aa8b73796cbf7449c858f4eec3b3c110496920ce9ab6e0b5784b3a127acc729a317_1280.jpg",
      content: "Alex has an excellent eye for design and animation. The micro-interactions and smooth transitions he implemented brought our designs to life beautifully.",
      rating: 5,
      project: "Interactive Website",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
            Client Testimonials
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Card className="glass overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  {/* Quote Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Quote className="h-8 w-8 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonials[currentIndex].rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/50">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                      <p className="text-foreground/70">{testimonials[currentIndex].role}</p>
                      <p className="text-primary text-sm">{testimonials[currentIndex].company}</p>
                    </div>
                  </div>

                  {/* Project Badge */}
                  <div className="mt-6">
                    <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                      Project: {testimonials[currentIndex].project}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="glass rounded-full w-12 h-12 hover:scale-110 transition-transform duration-200"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4">
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="glass rounded-full w-12 h-12 hover:scale-110 transition-transform duration-200"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>

          {/* Thumbnails */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12"
          >
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-lg border transition-all duration-200 ${
                  index === currentIndex
                    ? "border-primary bg-primary/10"
                    : "border-white/10 glass hover:border-primary/50"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/50">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{testimonial.name}</p>
                    <p className="text-xs text-foreground/70 truncate">{testimonial.company}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
