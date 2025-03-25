
import { useState } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("northeastern-research");
  
  const experiences = [
    {
      id: "northeastern-research",
      company: "Northeastern University",
      title: "Data Science Research Assistant",
      location: "Boston, MA",
      period: "Feb 2024 - Present",
      responsibilities: [
        "Applied community detection algorithms to identify targeted groups in networks, analyzed public opinion trends, and validated patterns using statistical tests on graph-based communities.",
        "Developed a simulation interface (Python, PySpark, pandas, NetworkX, DGL) on the Discovery cluster, to run simulations on large datasets like SNAP, Francis Bacon and social media data for network analysis."
      ]
    },
    {
      id: "northeastern-ta",
      company: "Northeastern University",
      title: "Teaching Assistant",
      location: "Boston, MA",
      period: "Jan 2025 - Present",
      responsibilities: [
        "Assisted students in mastering core concepts of Python, Data Analytics and Data Science, fostering a deep understanding of computational problem-solving techniques.",
        "Evaluated and graded assignments and projects for a class of 300 students, ensuring adherence to academic standards and providing constructive feedback.",
        "Conducted one-on-one sessions to clarify doubts, debug code, and review algorithmic solutions, enhancing the learning experience for students."
      ]
    },
    {
      id: "redhat",
      company: "Red Hat Inc.",
      title: "Data Scientist",
      location: "Boston, MA",
      period: "May 2024 - Nov 2024",
      responsibilities: [
        "Identified emerging AI/ML projects (LLMs, NLP, CV, and GenAI) using social graph analysis, network science using GitHub data (PRs, commits, issues), networkx, pandas, and PyTorchy to enhance the analysis on OpenShift AI.",
        "Applied Degree Centrality, PageRank to assess contributor dynamics, growth trends, and organizational collaborations.",
        "Modelled contributor growth and decay, creating visualizations to highlight high-potential open-source repositories and deployed the models on XKnot dashboard."
      ]
    },
    {
      id: "bright-money",
      company: "Bright Money",
      title: "Software Development Engineer",
      location: "Bengaluru, India",
      period: "Jun 2021 - Aug 2023",
      responsibilities: [
        "Built a Credit Facility Management System (Python, Django, Celery, Airflow, S3, Kafka) integrating Encina for seamless US loan provisioning.",
        "Designed a Workflow Management System (Django, ReactJS, MaterialUI, Postgres) on EC2, automating banking, ML, and backend integrations to streamline operations.",
        "Developed a Growth & Ads Management System with data pipelines, delivering hourly insights on signups, enrolls, and ad performance (Meta, Google Ads) for data-driven decisions.",
        "Automated operations and compliance tasks, saving 33 hours daily (Stripe payments, reconciliation), improving efficiency and reducing errors.",
        "Designed test automation suites for Payment and Credit systems using PyTest, ensuring robustness and ACID properties by validating transactions and money flow across accounts during payments.",
        "Led production releases, code reviews, issue resolution, mentored 8 juniors, and organized team events."
      ]
    },
    {
      id: "techuva-solutions",
      company: "Techuva Solutions",
      title: "Software Engineer",
      location: "Hyderabad, India",
      period: "Aug 2022 - Nov 2022",
      responsibilities: [
        "Developed a backend application called Knowledge Base using Python and Flask consisting of 24 Rest APIs which serves multiple requests for the patient's medical data which are calculated from the data obtained through physical tests taken.",
        "Developed GitOps solutions to raise PRs and merge them to various branches like dev, staging, prod for the deployment of the application during the development and release cycles.",
      ]
    }
  ];

  return (
    <section id="experience" className="py-16">
      <div className="section-container stagger-child">
        <div className="inline-block px-3 py-1 mb-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Experience
        </div>
        <h2 className="section-title">Work History</h2>
        <p className="section-subtitle mb-16">
          My professional journey includes roles in research, teaching, and industry, where I've applied software development and machine learning skills to solve real-world problems.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl mx-auto mt-8">

          {/* Company tabs on the left side - Fixed width to prevent overlapping className="lg:w-1/3 min-w-[250px]" */}
          <div className="mt-28">
            <Tabs 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="flex flex-col space-y-2 bg-transparent p-0 w-full">
                {experiences.map((exp) => (
                  <TabsTrigger 
                    key={exp.id} 
                    value={exp.id}
                    className="w-full flex items-start justify-start text-left p-4 border-l-2 data-[state=active]:border-primary data-[state=active]:bg-primary/5 rounded-r-md shadow-none data-[state=active]:shadow-none"
                  >
                    <div className="w-full overflow-hidden">
                      <h3 className="font-medium truncate">{exp.company}</h3>
                      <p className="text-sm text-muted-foreground truncate">{exp.title}</p>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Experience content on the right side */}
          <div className="mt-28 lg:mt-0 lg:w-2/3 glass-card p-6">
            {experiences.map((exp) => (
              <div 
                key={exp.id} 
                className={`${activeTab === exp.id ? 'block' : 'hidden'} animate-fade-in`}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <div className="text-lg text-primary font-medium">{exp.company}</div>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 list-disc pl-5">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm md:text-base">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

