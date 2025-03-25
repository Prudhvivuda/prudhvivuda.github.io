
import { CircleCheck } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Data Engineering",
      skills: [
        { name: "Python" },
        { name: "Java" },
        { name: "C/C++" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "SQL" },
        { name: "Apache Spark" },
        { name: "ETL" },
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
      ]
    },
    {
      title: "Data Analysis & Visualization",
      skills: [
        { name: "Hypothesis Testing" },
        { name: "A/B Testing" },
        { name: "Statistical Analysis" },
        { name: "Data Wrangling" },
        { name: "Data Integration" },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "TensorFlow" },
        { name: "Keras" },
        { name: "PyTorch" },
        { name: "Hugging Face" },
        { name: "NLTK" },
        { name: "SpaCy" },
        { name: "Scikit-Learn" },
        { name: "OpenCV" },
        { name: "Seaborn" },
        { name: "Matplotlib" },
        { name: "Plotly" },
        { name: "NumPy" },
        { name: "Pandas" },
      ]
    },
    {
      title: "Technologies & Tools",
      skills: [
        { name: "Django" },
        { name: "Flask" },
        { name: "React" },
        { name: "Airflow" },
        { name: "Kafka" },
        { name: "Streamlit" },
        { name: "FastAPI" },
        { name: "Git" },
        { name: "Linux" },
        { name: "Docker" },
        { name: "Kubernetes" },
        { name: "AWS" },
        { name: "GCP" },
        { name: "FAISS" },
      ]
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="section-container stagger-child">
        <div className="inline-block px-3 py-1 mb-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Skills
        </div>
        <h2 className="section-title">Technical Proficiency</h2>
        <p className="section-subtitle">
          I have developed a diverse set of technical skills throughout my academic and professional journey,
          enabling me to tackle complex machine learning and data science challenges.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b">{category.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2">
                    <CircleCheck size={18} className="text-primary" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card p-8">
          <h3 className="text-xl font-semibold mb-6">Key Machine Learning Capabilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Supervised Learning",
              "Unsupervised Learning",
              "Neural Networks",
              "Computer Vision",
              "Natural Language Processing",
              "Reinforcement Learning",
              "Generative AI Models",
              "Time Series Analysis",
              "Anomaly Detection",
              "Recommendation Systems",
              "Network Analysis",
              "Ensemble Methods",
              "Feature Engineering",
              "Hyperparameter Tuning",
              "Model Deployment & MLOps"
            ].map((capability, index) => (
              <div key={index} className="flex items-center gap-2">
                <CircleCheck size={18} className="text-primary" />
                <span>{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
