
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add smooth scroll animation
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.getBoundingClientRect().height;
        const viewportHeight = window.innerHeight;
        
        // When section is in viewport
        if (sectionTop < viewportHeight * 0.75 && sectionTop > -sectionHeight * 0.5) {
          section.classList.add('animate-fade-in');
          
          // Add animation to child elements with stagger-child class
          const staggerChildren = section.querySelectorAll('.stagger-child');
          staggerChildren.forEach((child) => {
            child.classList.add('visible');
          });
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex flex-col space-y-0">
        <HeroSection />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;