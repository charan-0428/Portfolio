import { Download, GraduationCap, Mail, MapPin } from 'lucide-react';
import resumePDF from '../../assets/Naresh.pdf';
import portrait from '../../assets/about-me.png';
import './About.css';

// TODO: replace with your real roles — these came with the original template.
const experience = [
  { role: 'Lead Product Designer', company: 'Google', period: '2021 — Present' },
  { role: 'Senior Product Designer', company: 'Webflow', period: '2018 — 2021' },
  { role: 'Junior UX/UI Designer', company: 'LinkedIn', period: '2016 — 2018' },
];

const skillGroups = [
  {
    title: 'Programming languages',
    items: ['Python', 'R', 'SQL', 'JavaScript'],
  },
  {
    title: 'Machine learning',
    items: [
      'Regression',
      'Decision Trees',
      'Random Forest',
      'XGBoost',
      'SVM',
      'CNNs',
      'RNNs',
      'LSTMs',
    ],
  },
  {
    title: 'NLP & GenAI',
    items: ['BERT', 'GPT', 'T5', 'RAG Pipelines', 'Hugging Face', 'Ollama', 'Groq'],
  },
  {
    title: 'AI frameworks',
    items: ['LangChain', 'CrewAI', 'TensorFlow', 'PyTorch', 'Flask', 'Streamlit'],
  },
  {
    title: 'Data analysis',
    items: ['Power BI', 'SPSS', 'Excel', 'NumPy', 'Pandas'],
  },
  {
    title: 'Business skills',
    items: ['Data Reporting', 'RFP Writing', 'Presentations'],
  },
];

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
            Hello, I&apos;m <span className="gradient-text">Naresh Edagotti</span>
          </h1>
          <p className="about-role">Data Scientist · AI Specialist · Web Designer</p>
          <p className="section-subtitle">
            I&apos;m a developer and designer working across web development, machine learning
            and AI. I care about innovation and user-centred design, and about shipping
            solutions that make a measurable difference.
          </p>

          <ul className="about-facts">
            <li>
              <MapPin size={16} /> Telangana, India
            </li>
            <li>
              <Mail size={16} /> statfusionai@gmail.com
            </li>
            <li>
              <GraduationCap size={16} /> ML · NLP · Analytics
            </li>
          </ul>

          <a className="btn btn-primary" href={resumePDF} download="Naresh-Edagotti-Resume.pdf">
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
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Where I&apos;ve worked and what I focused on.</p>
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
          <h2 className="section-title">Technical skills</h2>
          <p className="section-subtitle">
            The toolkit I reach for, grouped by the kind of problem it solves.
          </p>
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
