import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import projects, { projectCategories } from '../../data/projects';
import { pages, socials } from '../../data/site';
import './Project.css';

const githubHref = socials.find((s) => s.label === 'GitHub').href;

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const visible =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="projects-page">
      <section className="section projects-intro">
        <div className="container">
          <div className="section-head centered" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              {projects.length} shipped projects
            </span>
            <h1 className="section-title">
              {pages.projects.title} <span className="gradient-text">{pages.projects.titleAccent}</span>
            </h1>
            <p className="section-subtitle">{pages.projects.subtitle}</p>
          </div>

          <div className="project-filters" data-reveal>
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
                <span className="filter-count">
                  {category === 'All'
                    ? projects.length
                    : projects.filter((project) => project.category === category).length}
                </span>
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {visible.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                delay={(index % 3) * 90}
              />
            ))}
          </div>

          <a
            className="btn btn-ghost projects-more"
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {pages.projects.moreLabel} <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
