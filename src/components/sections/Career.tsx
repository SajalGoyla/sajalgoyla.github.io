import { FaMapMarkerAlt } from "react-icons/fa";
import "../../styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Professional <span>Experience</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer 1</h4>
                <h5>Mastercard Technology</h5>
                <div className="role-meta">
                  <span className="role-dates">Jun 2023 - Jul 2025</span>
                  <span className="role-location">
                    <FaMapMarkerAlt className="loc-icon" /> Pune, India
                  </span>
                </div>
                <div className="career-skills">
                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>Microservices</span>
                  <span>CI/CD</span>
                </div>
              </div>
            </div>
            <ul className="career-bullet-points">
              <li>Developed and monitored 20+ mission-critical cron-based batch systems for Mexico's issuer banks, automating dispute management across POS, ATM, and CCBP transactions with 99.9% reliability, while boosting batch performance and scalability by 300%.</li>
              <li>Architected Spring Boot microservices using Axon framework, OOP principles, and Agile methodologies to automate IPM data file generation, processing 1K+ records in sub-second intervals; authored 10+ architectural artifacts (DFDs, SADs) securing SOAR approvals through rigorous design reviews.</li>
              <li>Orchestrated SonarQube, Checkmarx, and Blackduck integration into CI/CD pipelines, achieving 95%+ code coverage and eliminating all critical security vulnerabilities across the development lifecycle.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Summer Analyst Intern</h4>
                <h5>Mastercard Technology</h5>
                <div className="role-meta">
                  <span className="role-dates">May 2022 - Jul 2022</span>
                  <span className="role-location">
                    <FaMapMarkerAlt className="loc-icon" /> Pune, India
                  </span>
                </div>
                <div className="career-skills">
                  <span>CNN</span>
                  <span>Deep Learning</span>
                  <span>Python</span>
                  <span>OCR</span>
                </div>
              </div>
            </div>
            <ul className="career-bullet-points">
              <li>Engineered a CNN-based Attend, Copy, Parse module for automated information extraction, achieving 95%+ accuracy on 4 major target fields (Invoice No., PO No., Date, Amount).</li>
              <li>Automated the processing of 500+ diverse invoice layouts by extracting and mapping raw metadata into structured .json training datasets (50K+ records), reducing manual labeling effort by an estimated 80%.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ML Research Intern</h4>
                <h5>Envision Enterprise Solutions</h5>
                <div className="role-meta">
                  <span className="role-dates">Jun 2021 - Aug 2021</span>
                  <span className="role-location">
                    <FaMapMarkerAlt className="loc-icon" /> Hyderabad, India
                  </span>
                </div>
                <div className="career-skills">
                  <span>Python</span>
                  <span>CNN</span>
                  <span>Time Series</span>
                  <span>GAF/MTF</span>
                </div>
              </div>
            </div>
            <ul className="career-bullet-points">
              <li>Designed a Python module to transform high-dimensional time series data into images (GAF/MTF), enabling CNN-based feature extraction.</li>
              <li>Constructed a pipeline to convert 10K+ data points from Pandas into image snapshots, reducing training data preparation time by 40%.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
