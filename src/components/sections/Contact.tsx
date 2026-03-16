import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn, MdWork, MdSend, MdArrowOutward } from "react-icons/md";
import "../../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "699fe6ed-ab82-45a0-8a01-fe71cab69fd5",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h5>06 // CONTACT</h5>
          <h2>Let's Connect</h2>
          <p>Open to full-time opportunities, collaborations, and interesting problems.</p>
        </div>

        <div className="contact-flex">
          <div className="contact-info-pane">
            <div className="contact-info-item">
              <div className="contact-icon">
                <MdEmail />
              </div>
              <div className="contact-details">
                <h4>EMAIL</h4>
                <p><a href="mailto:sg4607@columbia.edu" data-cursor="disable">sg4607@columbia.edu</a></p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <MdPhone />
              </div>
              <div className="contact-details">
                <h4>PHONE</h4>
                <p>(646) 208-2480</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <MdWork />
              </div>
              <div className="contact-details">
                <h4>LINKEDIN</h4>
                <p><a href="https://linkedin.com/in/sajalgoyla" target="_blank" data-cursor="disable">linkedin.com/in/sajalgoyla</a></p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <MdLocationOn />
              </div>
              <div className="contact-details">
                <h4>LOCATION</h4>
                <p>New York, NY</p>
              </div>
            </div>

            <div className="contact-socials-row">
              <a href="mailto:sg4607@columbia.edu" data-cursor="disable"><MdEmail /></a>
              <a href="https://linkedin.com/in/sajalgoyla" target="_blank" data-cursor="disable"><MdWork /></a>
              <a href="https://github.com/sajalgoyla" target="_blank" data-cursor="disable"><MdArrowOutward /></a>
            </div>
          </div>

          <div className="contact-form-pane">
            <form className="contact-form" onSubmit={handleSendEmail}>
              <div className="form-group">
                <label>NAME</label>
                <input type="text" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>EMAIL</label>
                <input type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>SUBJECT</label>
                <input type="text" placeholder="What's this about?" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>MESSAGE</label>
                <textarea placeholder="Let's build something great together..." rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required></textarea>
              </div>
              <button type="submit" className="submit-btn" data-cursor="disable" disabled={status === "loading"}>
                {status === "loading" ? "SENDING..." : status === "success" ? "MESSAGE SENT!" : status === "error" ? "ERROR! TRY AGAIN" : "SEND MESSAGE"} {status === "idle" && <MdSend />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
