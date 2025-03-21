
import { ExternalLink, Calendar, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "RAG system to answer questions based on a collection of documents",
      period: "Oct 2024",
      description: "Developed a BE system that supports Retrieval-Augmented Generation using Ollama with Mistral 7B, and FastAPI to answer questions based on a corpus.",
      technologies: [
        "Mistral LLM",
        "NLP (tokenization)",
        "BM25 ranking algorithm",
        "BLEU score",
        "PyTest"
      ],
      githubUrl: "https://github.com/Prudhvivuda/rag-system"
    },
    {
      title: "Audio Deepfake Detection",
      period: "Jun 2024 - Jul 2024",
      description: "Engineered a deepfake audio detection system using MFCCs and spectral contrast on deepfake models (WaveFake, Codec-Fake). Applied dimensionality reduction techniques such as PCA and t-SNE for effective feature visualization.",
      technologies: [
        "NumPy",
        "Pandas",
        "Randomforest",
        "Librosa",
        "Parselmouth",
        "TensorFlow/Keras",
        "PyTorch"
      ],
      githubUrl: "https://github.com/Prudhvivuda/audio-deepfake-detection"
    },
    {
      title: "Music Recommender System",
      period: "Mar 2024 - Apr 2024",
      description: "Developed a personalized music recommender system using collaborative filtering on the Million Song Dataset with Alternating Least Squares & SVD, achieving nDCG of 0.54, precision@20 of 0.36, recall@20 of 0.48.",
      technologies: [
        "Matrix Factorization",
        "Ranking Metrics", 
        "k Nearest Neighbors", 
        "Data Processing"
      ],
      githubUrl: "https://github.com/Prudhvivuda/music-recommender"
    },
    {
      title: "Rail Track Foreign Object Detection",
      period: "Nov 2023 - Dec 2023",
      description: "A project focused on the detection and monitoring of rail lines in railway scenes using U-Net AI framework with pre-trained VGG19. The project employed a combination of image segmentation, clustering, and anomaly detection methods.",
      technologies: [
        "Deep Learning",
        "U-Net with VGG Backbone",
        "Clustering (DBSCAN)",
        "Anomaly Detection (Autoencoder)",
        "Mean Intersection over Union (mIoU)"
      ],
      githubUrl: "https://github.com/Prudhvivuda/rail-track-detection"
    },
    {
      title: "Q&A Chatbot using Gemini Pro LLM",
      period: "Oct 2023",
      description: "Developed an AI Chatbot application using the Gemini Pro large language model (LLM) for AI-powered conversation and integrated Google's generative AI library to leverage the Gemini Pro LLM for natural language response generation.",
      technologies: [
        "Python",
        "Streamlit",
        "genai",
        "dotenv",
        "Google GenerativeAI",
        "Gemini Pro LLM"
      ],
      githubUrl: "https://github.com/Prudhvivuda/gemini-chatbot"
    },
    {
      title: "Breast Cancer Prediction Using Deep Learning",
      period: "Jan 2022 - May 2022",
      description: "Authored a paper in JCRS, presenting a comparative analysis of ML algorithms & identified the optimal algorithm, Artificial Neural Network (ANN) with Adam optimizer, achieving 98% accuracy in predicting breast cancer.",
      technologies: [
        "Deep Learning",
        "Optimizers",
        "TensorFlow",
        "Flask",
        "HTML",
        "Research Methodology"
      ],
      githubUrl: "https://github.com/Prudhvivuda/breast-cancer-prediction"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-accent/50">
      <div className="section-container stagger-child">
        <div className="inline-block px-3 py-1 mb-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Projects
        </div>
        <h2 className="section-title">Featured Work</h2>
        <p className="section-subtitle">
          Here are some of my notable projects that demonstrate my skills and expertise
          in machine learning, data science, and software development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card flex flex-col h-full overflow-hidden group transition-all"
            >
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar size={14} className="mr-1" />
                  <span>{project.period}</span>
                </div>
                
                <p className="mb-6 text-muted-foreground text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="font-normal">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="font-normal">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="border-t border-border p-4 mt-auto">
                <div className="flex justify-between">
                  <a 
                    href={project.githubUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    Repository
                  </a>
                  
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/Prudhvivuda" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              View More Projects <ExternalLink size={16} className="ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;