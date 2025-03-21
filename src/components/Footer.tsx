
import { ArrowUpIcon, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-12 pb-6 border-t text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center">
          <a 
            href="#home" 
            className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mb-8 hover:bg-primary/90 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUpIcon size={20} />
          </a>

          <div className="flex items-center gap-6 mb-8">
            <a 
              href="https://linkedin.com/in/Prudhvivuda" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/Prudhvivuda" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="GitHub profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:prudhvi12042001@gmail.com" 
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <p className="text-center text-muted-foreground text-sm">
            &copy; {currentYear} Prudhvi Vuda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
