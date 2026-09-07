import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Sparkles } from 'lucide-react';
import Section from '../Section/Section';
import ProjectCard from '../Project/ProjectCard';
import projects from '../../data/projects';
import { hero, stack, pages, person } from '../../data/site';
import portrait from '../../assets/about-me.png';
import resumePDF from '../../assets/Naresh.pdf';
import './Home.css';

const floatIconMap = {
  sparkles: Sparkles,
};

const Home = () => {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <div className="home">
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              {person.availability}
            </span>

            <h1 className="hero-title">
              {hero.titleLead}{' '}
              <span className="gradient-text nowrap">{hero.titleAccent}</span>
            </h1>

            <p className="hero-description">{hero.description}</p>

            <div className="hero-actions">
              <Link to={hero.primaryCta.to} className="btn btn-primary">
                {hero.primaryCta.label} <ArrowRight size={18} />
              </Link>
              <a
                className="btn btn-ghost"
                href={resumePDF}
                download={person.resumeFileName}
              >
                <Download size={18} /> {hero.secondaryCta.label}
              </a>
              <a
                className="hero-github"
                href={hero.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} /> {hero.githubHandle}
              </a>
            </div>

            <ul className="hero-highlights">
              {hero.highlights.map((item) => (
                <li key={item.value}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-visual" data-reveal style={{ '--reveal-delay': '150ms' }}>
            <div className="portrait-ring">
              <img src={portrait} alt="Portrait of Naresh Edagotti" />
            </div>

            {hero.floatCards.map((card, index) => {
              const FloatIcon = floatIconMap[card.icon];
              return (
                <div
                  key={card.title}
                  className={`float-card ${index === 0 ? 'float-card-a' : 'float-card-b'}`}
                >
                  {card.icon === 'bars' ? (
                    <span className="spark-bars" aria-hidden="true">
                      <i style={{ height: '38%' }} />
                      <i style={{ height: '62%' }} />
                      <i style={{ height: '45%' }} />
                      <i style={{ height: '82%' }} />
                      <i style={{ height: '68%' }} />
                    </span>
                  ) : (
                    <FloatIcon size={16} />
                  )}
                  <div>
                    <strong>{card.title}</strong>
                    <small>{card.subtitle}</small>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...stack, ...stack].map((item, index) => (
              <span key={`${item}-${index}`} className="marquee-item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Section />

      <section className="section featured">
        <div className="container">
          <div className="featured-head" data-reveal>
            <div className="section-head">
              <h2 className="section-title">{pages.home.featuredTitle}</h2>
              <p className="section-subtitle">{pages.home.featuredSubtitle}</p>
            </div>
            <Link to="/project" className="btn btn-ghost">
              {pages.home.allProjectsLabel} <ArrowRight size={18} />
            </Link>
          </div>

          <div className="projects-grid">
            {featured.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                delay={index * 90}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-card" data-reveal>
            <h2>{pages.home.ctaTitle}</h2>
            <p>{pages.home.ctaBody}</p>
            <Link to="/contact" className="btn btn-primary">
              {pages.home.ctaLabel} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
