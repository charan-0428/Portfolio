
import './Project.css';

const projectsData = [
  {
    title: 'TradeWise AI',
    description: 'A Streamlit-based web app that helps traders analyze stock data, visualize trends, and generate AI-powered forecasts. It integrates Yahoo Finance for real-time stock data, Ollama DeepSeek-R1 for AI insights, and Plotly for interactive visualizations.',
    technologies: ['Python', 'Streamlit', 'Ollama DeepSeek-R1', 'Yahoo Finance (yfinance)', 'Plotly', 'LangChain'],
    githubLink: 'https://github.com/Nareshedagotti/stockanalyst'
  },
  {
    title: 'Audio & Video Summarizer',
    description: 'A smart tool that summarizes YouTube videos, audio files, and video files using Whisper for transcription and Groq LLM for AI-powered summarization. The interface is designed using Gradio for an intuitive user experience.',
    technologies: ['Python', 'Gradio', 'Whisper LLM', 'Transformers', 'PyTorch', 'LangChain', 'Groq'],
    githubLink: 'https://github.com/Nareshedagotti/Audio-and-video-summarizer'
  },
  {
    title: 'Crop Recommendation System',
    description: 'A machine learning-based system that predicts the best crops to grow based on environmental factors using models like Naive Bayes, Random Forest, Decision Tree, Logistic Regression, XGBoost, and SVM.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'Flask'],
    githubLink: 'https://github.com/Nareshedagotti/crop-recomndation'
  },
  {
    title: 'Power BI Projects: Sales & HR Data Analysis',
    description: 'A set of Power BI dashboards showcasing advanced data visualization techniques for Sales and HR data analysis, providing KPIs and actionable insights.',
    technologies: ['Power BI'],
    githubLink: 'https://github.com/Nareshedagotti/MERISKILL-Internship-PowerBI-Projects'
  },
  {
    title: 'Document Query System (Groq & Ollama Models)',
    description: 'A document query system that allows users to upload PDF, DOCX, or TXT files and interact with them using Groq & Ollama AI models. The system extracts text and enables users to query documents dynamically via a Gradio-based interface.',
    technologies: ['Python', 'Gradio', 'Groq API', 'Ollama', 'LangChain'],
    githubLink: 'https://github.com/Nareshedagotti/Document-Query-System'
  },
  {
    title: 'Personal Diet Assistant',
    description: 'A smart AI-powered diet planner that generates personalized meal plans based on user preferences, dietary goals, and restrictions. Built using Groq API & Gradio for an interactive experience.',
    technologies: ['Python', 'Gradio', 'Groq API'],
    githubLink: 'https://github.com/Nareshedagotti/Personal-Diet-Assistant-with-Groq'
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
   
  );
};

export default Projects;