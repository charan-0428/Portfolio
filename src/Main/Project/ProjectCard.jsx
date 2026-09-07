import PropTypes from 'prop-types';
import { ArrowUpRight, Github } from 'lucide-react';
import './Project.css';

const ProjectCard = ({ project, index, delay = 0 }) => (
  <article
    className="card project-card"
    data-reveal
    style={{ '--reveal-delay': `${delay}ms` }}
  >
    <div className="project-card-inner">
      <header className="project-card-head">
        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
        <div className="project-meta">
          <span className="project-category">{project.category}</span>
          {project.year ? <span className="project-year">{project.year}</span> : null}
        </div>
      </header>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-technologies">
        {project.technologies.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        <Github size={16} />
        View source
        <ArrowUpRight size={16} className="project-link-arrow" />
      </a>
    </div>
  </article>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string,
    year: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubLink: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  delay: PropTypes.number,
};

export default ProjectCard;
