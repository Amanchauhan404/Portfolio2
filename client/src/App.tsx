import { useEffect } from "react";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { AIChat } from "./components/AIChat";
import { DashboardDemo } from "./components/DashboardDemo";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    // Initialize GSAP animations or any other libraries here if needed
    console.log("NeoFolio - AI Developer Portfolio Loaded");
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <AIChat />
          <DashboardDemo />
          <Testimonials />
          <Contact />
        </main>
        
        <Footer />
        
        {/* Toast Notifications */}
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: 'rgba(0, 0, 0, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
