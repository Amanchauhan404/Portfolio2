import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

export function AIChat() {
  // Chat state - keeping track of messages
  // Started with just one welcome message
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: "Hello! I'm Aman's AI assistant. Feel free to ask me anything about his skills, projects, or experience!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Some questions people might want to ask
  const suggestedQuestions = [
    "What technologies does Aman know?",
    "What is his most recent project?",
    "How much experience does he have?",
    "What makes Aman different from other developers?",
  ];

  // Simple bot responses - just hardcoded for now
  // Maybe I'll make this smarter later with a real AI API
  const botResponses: Record<string, string> = {
    "technologies": "Aman works with React, TypeScript, Next.js, TailwindCSS, and he's learning Three.js and AI APIs. He's been coding for about 3+ years now.",
    "experience": "Aman has 3+ years of frontend development experience. He started with basic HTML/CSS and gradually moved to React and modern frameworks. Still learning new things every day!",
    "advanced project": "His most recent project is this AI-themed portfolio you're looking at! He's also worked on some e-commerce sites and dashboard applications using React and Next.js.",
    "different": "Aman likes to keep things simple but effective. He focuses on clean code, good user experience, and is always eager to learn new technologies. Currently exploring AI integration in web apps.",
    "skills": "Aman's main skills are React, JavaScript, TypeScript, TailwindCSS, Next.js, and he's currently learning Three.js for 3D graphics and various AI APIs for smarter web applications.",
    "projects": "Aman has built e-commerce platforms, portfolio websites, dashboard applications, and some smaller utility apps. He's always working on something new!",
    "contact": "You can reach Aman through the contact form below, or email him directly at chauhanaman7000@gmail.com. He's always interested in new opportunities and collaborations!",
    "default": "That's a great question! Aman is a frontend developer who enjoys building modern web applications. Feel free to ask about his skills, projects, or experience!",
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (message.includes(key)) {
        return response;
      }
    }
    
    return botResponses.default;
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Create user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Add some delay to make it feel more natural
    // Random delay between 1-3 seconds like a real person typing
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: generateResponse(input),
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <section id="ai-chat" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
            Ask My AI Assistant
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Get instant answers about my skills, experience, and projects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass">
              <CardHeader className="border-b border-white/10">
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <span>AI Assistant</span>
                  <Badge variant="secondary" className="ml-auto">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Online
                  </Badge>
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                {/* Messages Area */}
                <div className="h-96 overflow-y-auto p-6 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`flex items-start space-x-3 max-w-[80%] ${
                        message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === "user" 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-secondary text-secondary-foreground"
                        }`}>
                          {message.type === "user" ? (
                            <User className="h-4 w-4" />
                          ) : (
                            <Bot className="h-4 w-4" />
                          )}
                        </div>
                        
                        <div className={`rounded-lg p-3 ${
                          message.type === "user"
                            ? "bg-primary text-primary-foreground"
                            : "glass border border-white/10"
                        }`}>
                          <p className="text-sm">{message.content}</p>
                          <span className="text-xs opacity-70 mt-1 block">
                            {message.timestamp.toLocaleTimeString()}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                          <Bot className="h-4 w-4" />
                        </div>
                        <div className="glass border border-white/10 rounded-lg p-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Suggested Questions */}
                <div className="p-4 border-t border-white/10">
                  <p className="text-sm text-foreground/70 mb-3">Suggested questions:</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {suggestedQuestions.map((question) => (
                      <Button
                        key={question}
                        variant="outline"
                        size="sm"
                        onClick={() => handleSuggestedQuestion(question)}
                        className="text-xs glass hover:scale-105 transition-transform duration-200"
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-white/10">
                  <div className="flex space-x-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask me anything about Aman..."
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="glass border-white/10"
                    />
                    <Button 
                      onClick={handleSendMessage}
                      disabled={!input.trim() || isTyping}
                      className="neon-glow hover:scale-105 transition-transform duration-200"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
