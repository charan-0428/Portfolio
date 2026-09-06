import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  PenLine,
  Youtube,
} from 'lucide-react';
import Logo from '../Logo/Logo';
import './Footer.css';

const socialLinks = [
  { href: 'https://github.com/Nareshedagotti', icon: Github, label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/naresh-edagotti-6a71a1233/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  { href: 'https://www.youtube.com/@StatfusionAI', icon: Youtube, label: 'YouTube' },
  { href: 'https://medium.com/@statfusionai', icon: PenLine, label: 'Medium' },
  { href: 'https://www.instagram.com/statfusionai/', icon: Instagram, label: 'Instagram' },
  { href: 'mailto:statfusionai@gmail.com', icon: Mail, label: 'Email' },
];

const quickLinks = [
  { to: '/home', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/project', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    aria-label={label}
    className="social-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon size={18} />
  </a>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo tagline="AI &amp; Data Science" />
            <p>
              Building machine learning, NLP and analytics products that turn data into
              decisions people can act on.
            </p>
            <a className="footer-cta" href="mailto:statfusionai@gmail.com">
              statfusionai@gmail.com <ArrowUpRight size={16} />
            </a>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <h3>Explore</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-nav">
            <h3>Elsewhere</h3>
            <ul>
              <li>
                <a href="https://github.com/Nareshedagotti" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/naresh-edagotti-6a71a1233/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://medium.com/@statfusionai" target="_blank" rel="noreferrer">
                  Medium
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@StatfusionAI" target="_blank" rel="noreferrer">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="rule" />

        <div className="footer-bottom">
          <p className="copyright">© {currentYear} Naresh Edagotti. All rights reserved.</p>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
