
import { BadgeCheck } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background text-foreground">
      <div className="section-container stagger-child">
        <div className="inline-block px-3 py-1 mb-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
          About Me
        </div>
        <h2 className="section-title">Who I Am</h2>
        <p className="section-subtitle">
          A dedicated Machine Learning Engineer with a passion for building AI solutions
          that make a difference.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-6 text-foreground">
              I'm currently pursuing my Master's in Data Science at Northeastern University's Khoury College of Computer Sciences, 
              with a focus on Machine Learning, Generative AI, and Natural Language Processing.
            </p>
            <p className="text-lg mb-6 text-foreground">
              My journey in machine learning began during my Bachelor's at Vignan's Institute of Information Technology, 
              where I discovered my passion for solving complex problems with AI. Now, I'm dedicated to leveraging cutting-edge 
              technologies to build innovative solutions across various domains.
            </p>
            <p className="text-lg text-foreground">
              I enjoy working with diverse datasets, developing algorithms that extract meaningful insights, 
              and creating AI systems that have real-world impact. My experience spans from research in network science 
              to practical applications in industry settings.
            </p>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Machine Learning",
                "Deep Learning",
                "Natural Language Processing",
                "Computer Vision",
                "Data Analysis",
                "Neural Networks",
                "MLOps",
                "Network Science"
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-2 text-foreground">
                  <BadgeCheck size={18} className="text-primary" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
