
import PropTypes from 'prop-types';
import { Github, Instagram, Linkedin, Mail, Youtube ,CircleArrowOutUpRight} from 'lucide-react';
import './Footer.css';
import logoN from '../../assets/logo.png';
import { Link } from 'react-router-dom';


const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    aria-label={label}
    className="social-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="social-icon" />
  </a>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { href: "https://github.com/Nareshedagotti", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/naresh-edagotti-6a71a1233/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.youtube.com/@StatfusionAI", icon:Youtube , label: "Youtube" },
    { href: "https://medium.com/@statfusionai", icon:CircleArrowOutUpRight , label: "Youtube" },
    { href: "https://www.instagram.com/statfusionai/", icon: Instagram, label: "Instagram" },
    { href: "mailto:statfusionai@gmail.com", icon: Mail, label: "Email" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section">
            
            <h2 className="brand-title">Naresh Edagotti</h2>
            <p className="brand-description">
              Creating amazing web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="section-title">Quick Links</h3>
            <ul className="footer-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li> <Link to="/project">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <a href=""></a>
          </div>
          <div className="logo">
            <img src={logoN} alt="logo" />
            <h3>Always available</h3>
          </div>
        </div>

        {/* Social Links */}
        <div className="footer-bottom">
          <div className="social-links">
            {socialLinks.map((link) => (
              <SocialLink
                key={link.label}
                href={link.href}
                icon={link.icon}
                label={link.label}
              />
            ))}
          </div>
          
          <p className="copyright">
            © {currentYear} Naresh Edagotti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;