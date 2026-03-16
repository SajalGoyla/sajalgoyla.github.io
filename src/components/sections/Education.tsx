import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import "../../styles/Education.css";

const educationData = [
  {
    institution: "Columbia University",
    location: "New York, NY",
    badge: "Current",
    icon: <FaGraduationCap className="edu-icon columbia-icon" />,
    degree: "MS in Computer Science",
    dates: "Aug 2025 - Dec 2026 (Expected)",
    gpaLabel: "GPA",
    gpa: "3.99",
    gpaScale: "4.0",
    minor: null,
    courses: [
      "High Performance ML",
      "NLP",
      "Applied ML Cloud",
      "Analysis of Algorithms",
      "Databases",
      "AI",
    ],
  },
  {
    institution: "IIT Guwahati",
    location: "Assam, India",
    badge: null,
    icon: <FaUniversity className="edu-icon iit-icon" />,
    degree: "B.Tech — Electronics & Communication Engineering",
    dates: "Aug 2019 - May 2023",
    gpaLabel: "CGPA",
    gpa: "8.73",
    gpaScale: "10.0",
    minor: "Minor in CS: 7.2",
    courses: [
      "DSA",
      "Machine Learning",
      "Computer Architecture",
      "Discrete Math",
      "Signal Processing",
    ],
  },
];

const Education = () => {
  return (
    <div className="education-section section-container" id="education">
      <div className="education-container">
        <p className="section-label">02 // EDUCATION</p>
        <h2>
          Academic <span>Journey</span>
        </h2>
        <div className="education-grid">
          {educationData.map((edu, idx) => (
            <div className="education-card" key={idx}>
              <div className="edu-card-top">
                <div className="edu-header">
                  <div className="edu-icon-container">{edu.icon}</div>
                  <div className="edu-title-block">
                    <h3>{edu.institution}</h3>
                    <span className="edu-loc">{edu.location}</span>
                  </div>
                </div>
                {edu.badge && <div className="edu-badge">{edu.badge}</div>}
              </div>

              <div className="edu-card-middle">
                <h4>{edu.degree}</h4>
                <div className="edu-dates">{edu.dates}</div>
                <div className="edu-gpa-container">
                  <span className="gpa-label">{edu.gpaLabel}</span>
                  <span className="gpa-score">
                    {edu.gpa} <span>/ {edu.gpaScale}</span>
                  </span>
                  {edu.minor && <span className="edu-minor">{edu.minor}</span>}
                </div>
              </div>

              <div className="edu-card-bottom">
                <p className="courses-label">KEY COURSES</p>
                <div className="edu-courses">
                  {edu.courses.map((course, i) => (
                    <span className="course-tag" key={i}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
