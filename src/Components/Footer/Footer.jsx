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
import { person, socials, footerLinks } from '../../data/site';
import './Footer.css';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  youtube: Youtube,
  medium: PenLine,
  instagram: Instagram,
  mail: Mail,
};

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
            <Logo />
            <p>{person.footerBlurb}</p>
            <a className="footer-cta" href={`mailto:${person.email}`}>
              {person.email} <ArrowUpRight size={16} />
            </a>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <h3>Explore</h3>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-nav">
            <h3>Elsewhere</h3>
            <ul>
              {socials
                .filter((social) => social.icon !== 'mail')
                .map((social) => (
                  <li key={social.label}>
                    <a href={social.href} target="_blank" rel="noreferrer">
                      {social.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <hr className="rule" />

        <div className="footer-bottom">
          <p className="copyright">© {currentYear} {person.name}. All rights reserved.</p>
          <div className="social-links">
            {socials.map((social) => {
              const Icon = iconMap[social.icon];
              if (!Icon) return null;
              return (
                <SocialLink
                  key={social.label}
                  href={social.href}
                  icon={Icon}
                  label={social.label}
                />
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
