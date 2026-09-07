import { BarChart3, Bot, Brain, MessagesSquare } from 'lucide-react';
import { services, servicesSection, stats } from '../../data/site';
import './Section.css';

const iconMap = {
  brain: Brain,
  nlp: MessagesSquare,
  chart: BarChart3,
  bot: Bot,
};

const Section = () => (
  <section className="section services">
    <div className="container">
      <div className="section-head centered" data-reveal>
        <h2 className="section-title">{servicesSection.title}</h2>
        <p className="section-subtitle">{servicesSection.subtitle}</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];
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
