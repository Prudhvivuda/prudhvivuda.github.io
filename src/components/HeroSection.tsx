
import { ArrowDownIcon, GithubIcon, LinkedinIcon, TwitterIcon, Mail, InstagramIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 bg-background text-foreground"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>

      <div className="section-container">
        <div className="max-w-4xl mx-auto stagger-child">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Machine Learning Engineer
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            Hi, I'm Prudhvi Vuda
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
            A passionate Machine Learning Engineer with expertise in building AI-powered 
            solutions, data analysis, and developing scalable machine learning systems.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#contact">
              <Button className="text-base">
                Contact Me
              </Button>
            </a>
            <a href="#projects">
              <Button variant="outline" className="text-base">
                View Projects
              </Button>
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://linkedin.com/in/Prudhvivuda" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={24} />
            </a>
            <a 
              href="https://github.com/Prudhvivuda" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label="GitHub profile"
            >
              <GithubIcon size={24} />
            </a>
            <a 
              href="https://x.com/VudaPrudhvi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label="Twitter profile"
            >
              <TwitterIcon size={24} />
            </a>
            <a 
              href=" https://www.instagram.com/prudhvi.vuda_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label="Twitter profile"
            >
              <InstagramIcon size={24} />
            </a>
            <a 
              href="mailto:prudhvi12042001@gmail.com" 
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="mb-2">Scroll Down</span>
        <ArrowDownIcon size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;