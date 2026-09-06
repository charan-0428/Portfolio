import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Download, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import resumePDF from '../../assets/Naresh.pdf';
import './Contact.css';

const EMAILJS_SERVICE_ID = 'service_nmkbkny';
const EMAILJS_TEMPLATE_ID = 'template_abc456';
const EMAILJS_PUBLIC_KEY = 'kZlNM4CVpuvFTgBsI';

const emptyForm = { name: '', email: '', company: '', message: '' };

const details = [
  { icon: Phone, label: 'Phone', value: '+91 9553547511', href: 'tel:+919553547511' },
  {
    icon: Mail,
    label: 'Email',
    value: 'statfusionai@gmail.com',
    href: 'mailto:statfusionai@gmail.com',
  },
  { icon: MapPin, label: 'Location', value: 'Telangana, India' },
];

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Nareshedagotti' },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/naresh-edagotti-6a71a1233/',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    setFormData((current) => ({ ...current, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ state: 'sending', message: '' });

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { ...formData }, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus({ state: 'success', message: 'Thanks! Your message is on its way.' });
        setFormData(emptyForm);
      })
      .catch((err) => {
        console.error('Email send failed:', err);
        setStatus({
          state: 'error',
          message: 'Something went wrong. Please email me directly instead.',
        });
      });
  };

  return (
    <div className="contact-page">
      <section className="section">
        <div className="container">
          <div className="section-head centered" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              Usually replies within a day
            </span>
            <h1 className="section-title">
              Let&apos;s <span className="gradient-text">work together</span>
            </h1>
            <p className="section-subtitle">
              Tell me about your project, your data, or the problem you&apos;re stuck on.
            </p>
          </div>

          <div className="contact-grid">
            <aside className="contact-aside" data-reveal>
              <div className="card contact-info">
                <div className="contact-info-inner">
                  <h2>Contact details</h2>

                  <ul className="info-list">
                    {details.map((item) => {
                      const Icon = item.icon;
                      const content = (
                        <>
                          <span className="info-icon">
                            <Icon size={18} />
                          </span>
                          <span className="info-text">
                            <small>{item.label}</small>
                            <strong>{item.value}</strong>
                          </span>
                        </>
                      );

                      return (
                        <li key={item.label}>
                          {item.href ? (
                            <a href={item.href}>{content}</a>
                          ) : (
                            <span>{content}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>

                  <div className="contact-socials">
                    {socials.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                        >
                          <Icon size={18} />
                        </a>
                      );
                    })}
                  </div>

                  <a
                    className="btn btn-ghost contact-resume"
                    href={resumePDF}
                    download="Naresh-Edagotti-Resume.pdf"
                  >
                    <Download size={18} /> Download resume
                  </a>
                </div>
              </div>
            </aside>

            <div className="card contact-form-card" data-reveal style={{ '--reveal-delay': '120ms' }}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Optional"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="What are you building?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={status.state === 'sending'}
                >
                  {status.state === 'sending' ? 'Sending…' : 'Send message'}
                  <Send size={18} />
                </button>

                {status.message ? (
                  <p className={`form-status ${status.state}`} role="status">
                    {status.message}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
