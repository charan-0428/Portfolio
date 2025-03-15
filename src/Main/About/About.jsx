
import './About.css';
import resumePDF from '../../assets/Naresh.pdf';
import logo from '../../assets/about-me.png';


const About = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Naresh.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about-container">
    <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hello, I am</h1>
            <h2>Naresh Edagotti</h2>
            <p>Web Designer | Data Scientist | AI Specialist</p>
            <div className="hero-buttons">
              <a
                href="#"
                className="btn secondary"
                onClick={(e) => {
                  e.preventDefault();
                  handleResumeDownload();
                }}
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="hero-logo">
            <img src={logo} alt="Logo" />
          </div>
        </div>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate developer and designer with expertise in web development,
          machine learning, and AI solutions. With a focus on innovation and user-centric
          design, I aim to deliver exceptional solutions that drive meaningful impact.
        </p>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Lead Product Designer</h3>
            <p>Google | 2021 - Present</p>
          </div>
          <div className="timeline-item">
            <h3>Senior Product Designer</h3>
            <p>Webflow | 2018 - 2021</p>
          </div>
          <div className="timeline-item">
            <h3>Junior UX/UI Designer</h3>
            <p>LinkedIn | 2016 - 2018</p>
          </div>
        </div>
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>
        <div className="skills-categories">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skills-grid">
              <div className="skill-item">Python</div>
              <div className="skill-item">R</div>
              <div className="skill-item">SQL</div>
              <div className="skill-item">JavaScript</div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Machine Learning</h3>
            <div className="skills-grid">
              <div className="skill-item">Regression</div>
              <div className="skill-item">Decision Trees</div>
              <div className="skill-item">Random Forest</div>
              <div className="skill-item">XGBoost</div>
              <div className="skill-item">SVM</div>
              <div className="skill-item">CNNs</div>
              <div className="skill-item">RNNs</div>
              <div className="skill-item">LSTMs</div>
            </div>
          </div>

          <div className="skill-category">
            <h3>NLP & GenAI</h3>
            <div className="skills-grid">
              <div className="skill-item">BERT</div>
              <div className="skill-item">GPT</div>
              <div className="skill-item">T5</div>
              <div className="skill-item">RAG Pipelines</div>
              <div className="skill-item">Hugging Face</div>
              <div className="skill-item">Ollama</div>
              <div className="skill-item">Groq</div>
            </div>
          </div>

          <div className="skill-category">
            <h3>AI Frameworks</h3>
            <div className="skills-grid">
              <div className="skill-item">LangChain</div>
              <div className="skill-item">CrewAI</div>
              <div className="skill-item">TensorFlow</div>
              <div className="skill-item">PyTorch</div>
              <div className="skill-item">Flask</div>
              <div className="skill-item">Streamlit</div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Data Analysis</h3>
            <div className="skills-grid">
              <div className="skill-item">Power BI</div>
              <div className="skill-item">SPSS</div>
              <div className="skill-item">Excel</div>
              <div className="skill-item">NumPy</div>
              <div className="skill-item">Pandas</div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Business Skills</h3>
            <div className="skills-grid">
              <div className="skill-item">Data Reporting</div>
              <div className="skill-item">RFP Writing</div>
              <div className="skill-item">Presentations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;