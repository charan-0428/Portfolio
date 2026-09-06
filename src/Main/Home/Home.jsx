import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Sparkles } from 'lucide-react';
import Section from '../Section/Section';
import ProjectCard from '../Project/ProjectCard';
import projects from '../../data/projects';
import portrait from '../../assets/about-me.png';
import resumePDF from '../../assets/Naresh.pdf';
import './Home.css';

const stack = [
  'Python',
  'PyTorch',
  'TensorFlow',
  'LangChain',
  'Hugging Face',
  'Scikit-learn',
  'Power BI',
  'Streamlit',
  'SQL',
  'Groq',
  'Ollama',
  'Flask',
];

const highlights = [
  { value: 'ML', label: 'Predictive models' },
  { value: 'NLP', label: 'LLM & RAG pipelines' },
  { value: 'BI', label: 'Dashboards & insights' },
];

const Home = () => {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <div className="home">
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              Available for new projects
            </span>

            <h1 className="hero-title">
              Transforming intelligence through{' '}
              <span className="gradient-text nowrap">AI &amp; data</span>
            </h1>

            <p className="hero-description">
              I&apos;m Naresh Edagotti — a data scientist and AI engineer building machine
              learning, NLP and analytics products that turn raw data into decisions people
              can act on.
            </p>

            <div className="hero-actions">
              <Link to="/project" className="btn btn-primary">
                View my work <ArrowRight size={18} />
              </Link>
              <a
                className="btn btn-ghost"
                href={resumePDF}
                download="Naresh-Edagotti-Resume.pdf"
              >
                <Download size={18} /> Download resume
              </a>
              <a
                className="hero-github"
                href="https://github.com/Nareshedagotti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} /> github.com/Nareshedagotti
              </a>
            </div>

            <ul className="hero-highlights">
              {highlights.map((item) => (
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

            <div className="float-card float-card-a">
              <Sparkles size={16} />
              <div>
                <strong>RAG pipelines</strong>
                <small>LangChain · Groq · Ollama</small>
              </div>
            </div>

            <div className="float-card float-card-b">
              <span className="spark-bars" aria-hidden="true">
                <i style={{ height: '38%' }} />
                <i style={{ height: '62%' }} />
                <i style={{ height: '45%' }} />
                <i style={{ height: '82%' }} />
                <i style={{ height: '68%' }} />
              </span>
              <div>
                <strong>Analytics</strong>
                <small>Power BI dashboards</small>
              </div>
            </div>
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
              <h2 className="section-title">Selected work</h2>
              <p className="section-subtitle">
                A few projects that show how I take an idea from data to a working product.
              </p>
            </div>
            <Link to="/project" className="btn btn-ghost">
              All projects <ArrowRight size={18} />
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
            <h2>Have a data problem worth solving?</h2>
            <p>
              Tell me about the outcome you&apos;re after and I&apos;ll tell you what the data
              can realistically do about it.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Start a conversation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
