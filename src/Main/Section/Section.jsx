import { BarChart3, Bot, Brain, MessagesSquare } from 'lucide-react';
import './Section.css';

const services = [
  {
    icon: Brain,
    title: 'Machine learning & predictive models',
    description:
      'I design and implement models that predict outcomes, sharpen decision-making and optimise workflows — from crop recommendation systems to business analytics, using Random Forest, XGBoost and SVM.',
  },
  {
    icon: MessagesSquare,
    title: 'Natural language processing',
    description:
      'Grammar correction tools, sentiment analysis and multilingual chatbots built on BERT, GPT and Whisper, bridging communication gaps in education, business and agriculture.',
  },
  {
    icon: BarChart3,
    title: 'Data visualization & analytics',
    description:
      'Interactive dashboards and visual reports in Power BI and Plotly that make the numbers behind a business legible at a glance.',
  },
  {
    icon: Bot,
    title: 'AI chatbots & automation',
    description:
      'Context-aware assistants built with LangChain and models served through Ollama and Groq, lifting customer support, education and day-to-day operations.',
  },
];

const stats = [
  { value: '500+', label: 'Projects completed' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '50+', label: 'AI models built' },
];

const Section = () => (
  <section className="section services">
    <div className="container">
      <div className="section-head centered" data-reveal>
        <h2 className="section-title">What I do</h2>
        <p className="section-subtitle">
          I specialise in data-driven insights and solutions that help businesses reach their
          goals.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <article
              key={service.title}
              className="card service-card"
              data-reveal
              style={{ '--reveal-delay': `${index * 80}ms` }}
            >
              <div className="service-card-inner">
                <span className="service-icon">
                  <Icon size={20} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="stats" data-reveal>
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <span className="stat-number gradient-text">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Section;
