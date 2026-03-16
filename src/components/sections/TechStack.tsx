import "../../styles/TechStack.css";

const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "SQL", "PostgreSQL", "MySQL", "HTML5", "CSS3", "MATLAB"],
  },
  {
    category: "AI & LLM Technologies",
    skills: ["LangGraph", "LangChain", "RAG/CRAG", "Llama 3.1", "Hugging Face", "Pinecone", "Groq LPU", "OpenAI", "PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "Pandas", "NumPy"],
  },
  {
    category: "Web Frameworks",
    skills: ["FastAPI", "Next.js", "Spring Boot", "Node.js", "Angular", "Flask", "Hibernate", "REST APIs", "Microservices"],
  },
  {
    category: "Cloud, DevOps & Tools",
    skills: ["Docker", "Kubernetes", "GCP", "AWS", "Azure", "CI/CD", "SonarQube", "Checkmarx", "Blackduck", "Git", "GitHub", "Linux"],
  },
];

const TechStack = () => {
  return (
    <div className="techstack-section section-container" id="techstack">
      <div className="techstack-container">
        <h2>
          My <span>Tech Stack</span>
        </h2>
        <div className="techstack-grid">
          {skillsData.map((group, index) => (
            <div className="techstack-card" key={index}>
              <h3>{group.category}</h3>
              <div className="techstack-tags">
                {group.skills.map((skill, i) => (
                  <span className="techstack-tag" key={i}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
