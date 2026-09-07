import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import { person, navLinks, navCta } from '../../data/site';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(scrolled > 12);
      setProgress(height > 0 ? Math.min(scrolled / height, 1) * 100 : 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer on navigation and keep the page from scrolling behind it.
  useEffect(() => setIsMobileMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isMobileMenuOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}
    >
      <div className="nav-container">
        <Link to="/" className="navbar-logo" aria-label={`${person.name} — home`}>
          <Logo />
        </Link>

        <nav className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link ${isActive || (link.to === '/home' && pathname === '/') ? 'active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to={navCta.to} className="btn btn-primary nav-cta">
            {navCta.label}
          </Link>
        </nav>

        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <span className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />
    </header>
  );
};

export default Navbar;
