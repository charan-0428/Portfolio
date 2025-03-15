import emailjs from 'emailjs-com';
import './Contact.css'
import { useState } from 'react';
import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import resumePDF from '../../assets/Naresh.pdf';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const handleResumeDownload = () => {
      const link = document.createElement('a');
      link.href = resumePDF;
      link.download = 'Naresh.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.send(
      "service_nmkbkny",  // ✅ Replace with your actual EmailJS Service ID
      "template_abc456",  // ✅ Replace with your actual EmailJS Template ID
      {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message
      },
      "kZlNM4CVpuvFTgBsI"  // ✅ Replace with your actual EmailJS Public Key
    )
    .then((response) => {
      console.log("Email sent successfully!", response.status, response.text);
      alert("Message sent successfully!");
    })
    .catch((err) => {
      console.error("Email send failed:", err);
      alert("Failed to send message. Try again later.");
    });

    // Reset the form after submission
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>Lets discuss how we can work together</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <h2>Contact Information</h2>
            <div className="info-item">
              <FaPhone className="icon" />
              <span>+91 9553547511</span>
            </div>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <span>statfusionai@gmail.com</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <span>Telangana</span>
            </div>
            <div className="resume-section">
            
                  <a href="#" className="btn secondary" onClick={(e) =>
                   {
                    e.preventDefault();
                    handleResumeDownload();
                  }}>
                     <FaDownload className="icon" />
                 Download Resume
                </a>
              
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
