
import { Calendar, GraduationCap, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      school: "Northeastern University",
      college: "Khoury College of Computer Sciences",
      degree: "Master of Science in Data Science",
      location: "Boston, MA",
      gpa: "3.8/4",
      period: "Apr 2025",
      courses: [
        "Supervised and Unsupervised Machine Learning",
        "Generative AI",
        "Data Management Processing",
        "Natural Language Processing",
        "Algorithms",
        "Information Retrieval"
      ]
    },
    {
      school: "Vignan's Institute of Information Technology",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      location: "Visakhapatnam, India",
      gpa: "9.33/10.0",
      period: "Jun 2018 - May 2022",
      courses: [
        "Engineering Mathematics",
        "Discrete Mathematics",
        "Statistics and R Programming",
        "Computer Networks",
        "Crypto and Network Security",
        "Operating Systems",
        "Formal Languages and Automata Theory",
        "Compiler Design",
        "Data Mining",
        "Unified Object Modeling Language",
        "Cloud Computing",
        "Programming Languages",
        "Web Technologies",
        "Database Management Systems",
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Computer Organization and Architecture",
        "Digital Logic Design",
        "Software Engineering",
        "Big Data Analytics",
        "Machine Learning",
        "Foundations of AI",
      ]
    }
  ];

  return (
    <section id="education" className="py-24 bg-accent/50 text-foreground">
      <div className="section-container stagger-child">
        <div className="inline-block px-3 py-1 mb-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Education
        </div>
        <h2 className="section-title">Academic Background</h2>
        <p className="section-subtitle">
          My educational journey has provided me with a strong foundation in computer science
          and specialized knowledge in data science and machine learning.
        </p>

        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className="glass-card p-8 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{edu.school}</h3>
                  {edu.college && (
                    <p className="text-lg text-muted-foreground">{edu.college}</p>
                  )}
                </div>
                <div className="mt-2 md:mt-0 flex items-center text-primary">
                  <Calendar size={16} className="mr-1" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-y-2 sm:gap-x-4">
                <div className="flex items-center text-muted-foreground">
                  <GraduationCap size={16} className="mr-1" />
                  <span>{edu.degree}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin size={16} className="mr-1" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex text-muted-foreground">
                  <span>GPA: {edu.gpa}</span>
                </div>
              </div>

              {edu.courses.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Relevant Coursework:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {edu.courses.map((course, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;