import { Download, GraduationCap, Mail, MapPin } from 'lucide-react';
import resumePDF from '../../assets/Naresh.pdf';
import portrait from '../../assets/about-me.png';
import { person, pages, experience, skillGroups } from '../../data/site';
import './About.css';

const About = () => (
  <div className="about-page">
    <section className="section about-hero">
      <div className="container about-hero-inner">
        <div className="about-intro" data-reveal>
          <span className="eyebrow">
            <span className="dot" />
            About me
          </span>
          <h1 className="section-title">
            {pages.about.greeting} <span className="gradient-text">{person.name}</span>
          </h1>
          <p className="about-role">{person.role}</p>
          <p className="section-subtitle">{person.bio}</p>

          <ul className="about-facts">
            <li>
              <MapPin size={16} /> {person.location}
            </li>
            <li>
              <Mail size={16} /> {person.email}
            </li>
            <li>
              <GraduationCap size={16} /> {person.focusAreas}
            </li>
          </ul>

          <a className="btn btn-primary" href={resumePDF} download={person.resumeFileName}>
            <Download size={18} /> Download resume
          </a>
        </div>

        <div className="about-portrait" data-reveal style={{ '--reveal-delay': '140ms' }}>
          <img src={portrait} alt="Portrait of Naresh Edagotti" />
        </div>
      </div>
    </section>

    <section className="section about-experience">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2 className="section-title">{pages.about.experienceTitle}</h2>
          <p className="section-subtitle">{pages.about.experienceSubtitle}</p>
        </div>

        <ol className="timeline">
          {experience.map((item, index) => (
            <li
              key={`${item.company}-${item.role}`}
              className="timeline-item"
              data-reveal
              style={{ '--reveal-delay': `${index * 90}ms` }}
            >
              <div className="timeline-marker" aria-hidden="true" />
              <div className="card timeline-card">
                <div className="timeline-card-inner">
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="section about-skills">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2 className="section-title">{pages.about.skillsTitle}</h2>
          <p className="section-subtitle">{pages.about.skillsSubtitle}</p>
        </div>

        <div className="skill-groups">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="card skill-group"
              data-reveal
              style={{ '--reveal-delay': `${index * 70}ms` }}
            >
              <div className="skill-group-inner">
                <h3>{group.title}</h3>
                <div className="skill-chips">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
