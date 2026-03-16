import { FaRobot, FaBrain, FaDatabase } from "react-icons/fa";
import "../../styles/Work.css";
import WorkImage from "../ui/WorkImage";

const projects = [
  {
    title: "Agentic CRAG DevPilot",
    subtitle: "Jan 2026 - Present · Personal Project",
    badge: "Active",
    badgeColor: "#0d9488",
    icon: <FaRobot className="project-icon" style={{ color: "#f472b6" }} />,
    description: "Agentic Corrective RAG system with autonomous web-search fallback, reducing LLM hallucinations by 40%. Full-stack AI platform with sub-second latency for real-time code generation.",
    bullets: [
      { emoji: "⚡", bold: "40% reduction", text: "in LLM hallucinations via CRAG" },
      { emoji: "🔍", bold: "Hugging Face + Pinecone", text: "with 100% context isolation" },
      { emoji: "⚙️", bold: "Sub-second latency", text: "for real-time code generation" }
    ],
    skills: ["LangGraph", "Llama 3.1", "FastAPI", "Next.js", "Pinecone", "Groq"],
    image: "/images/crag_devpilot.png",
  },
  {
    title: "Multimodal Malpractice Detection",
    subtitle: "Feb 2024 - Aug 2025 · IIT Guwahati Research",
    badge: "IEEE",
    badgeColor: "#ca8a04",
    icon: <FaBrain className="project-icon" style={{ color: "#fb7185" }} />,
    description: "End-to-end multimodal system for exam malpractice using face liveness detection and plagiarism analysis. IEEE paper submitted.",
    bullets: [
      { emoji: "👁️", bold: "96% face liveness accuracy", text: "— CNN + Transfer Learning" },
      { emoji: "📄", bold: "83% plagiarism detection", text: "via Bi-LSTM + Manhattan Distance" },
      { emoji: "🏗️", bold: "Tested across", text: "VGG16/19, ResNet50, DenseNet121, InceptionV3" }
    ],
    skills: ["Deep Learning", "NLP", "CNN", "LSTM", "OpenCV", "Transfer Learning"],
    image: "/images/face_liveness.png",
  },
  {
    title: "Full-Stack CRUD App",
    subtitle: "Sep - Dec 2025 · Columbia University",
    badge: "Columbia",
    badgeColor: "#16a34a",
    icon: <FaDatabase className="project-icon" style={{ color: "#a78bfa" }} />,
    description: "Production-grade full-stack application with a 13-component PostgreSQL schema, complex triggers, full-text search, and RBAC deployed on Google Cloud Platform.",
    bullets: [
      { emoji: "🗄️", bold: "13-component PostgreSQL schema", text: "with triggers & cascades" },
      { emoji: "🔒", bold: "Role-Based Access Control", text: "(RBAC)" },
      { emoji: "✅", bold: "100% functional coverage", text: "on GCP" }
    ],
    skills: ["PostgreSQL", "Flask", "Google Cloud", "RBAC", "tsvector"],
    image: "/images/db_schema.png",
  },
];

const Work = () => {
  return (
    <div className="work-section section-container" id="work">
      <div className="work-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-box">
                <WorkImage image={project.image} alt={project.title} />
              </div>

              <div className="project-header">
                <div className="project-icon-box">{project.icon}</div>
                <div
                  className="project-badge"
                  style={{
                    color: project.badgeColor,
                    borderColor: project.badgeColor,
                    backgroundColor: `${project.badgeColor}20`
                  }}
                >
                  {project.badge}
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>

                <ul className="project-bullets">
                  {project.bullets.map((bullet, i) => (
                    <li key={i}>
                      <span className="bullet-emoji">{bullet.emoji}</span>
                      <span className="bullet-text">
                        <strong>{bullet.bold}</strong> {bullet.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-skills">
                {project.skills.map((skill, i) => (
                  <span className="project-skill-tag" key={i}>
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

export default Work;
