/**
 * Single source of truth for every piece of personal content on the site.
 * Replace the values here and the whole portfolio re-brands — no component
 * edits needed.
 *
 * Start with the identity constants directly below: the name, email, phone
 * and GitHub handle feed the wordmark, page title, meta description, resume
 * filename, hero copy, contact rows and social links, so changing one of
 * them updates every place it appears.
 *
 * `icon` fields are string keys resolved to lucide-react components inside
 * the components that render them, so this file stays import-free.
 */

const NAME = 'Naresh Edagotti';
const EMAIL = 'statfusionai@gmail.com';
const PHONE = '+91 9553547511';
const GITHUB_USER = 'Nareshedagotti';
const TITLE_SUFFIX = 'AI & Data Science Portfolio';

/** "Naresh Edagotti" -> "NE" */
const monogram = (fullName) =>
  fullName
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export const person = {
  name: NAME,
  initials: monogram(NAME),
  brandTagline: 'AI & Data Science',
  role: 'Data Scientist · AI Specialist · Web Designer',
  shortRole: 'a data scientist and AI engineer',
  location: 'Telangana, India',
  email: EMAIL,
  phone: PHONE,
  phoneHref: `tel:${PHONE.replace(/[^\d+]/g, '')}`,
  availability: 'Available for new projects',
  replyTime: 'Usually replies within a day',
  resumeFileName: `${NAME.replace(/\s+/g, '-')}-Resume.pdf`,
  bio:
    "I'm a developer and designer working across web development, machine learning " +
    'and AI. I care about innovation and user-centred design, and about shipping ' +
    'solutions that make a measurable difference.',
  footerBlurb:
    'Building machine learning, NLP and analytics products that turn data into ' +
    'decisions people can act on.',
  focusAreas: 'ML · NLP · Analytics',
};

export const seo = {
  title: `${NAME} — ${TITLE_SUFFIX}`,
  description:
    `${NAME} — Data Scientist and AI Engineer building machine learning, NLP ` +
    'and analytics products that turn data into decisions.',
  shortDescription: 'Machine learning, NLP and analytics products that turn data into decisions.',
};

export const socials = [
  { icon: 'github', label: 'GitHub', href: `https://github.com/${GITHUB_USER}` },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/naresh-edagotti-6a71a1233/',
  },
  { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@StatfusionAI' },
  { icon: 'medium', label: 'Medium', href: 'https://medium.com/@statfusionai' },
  { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/statfusionai/' },
  { icon: 'mail', label: 'Email', href: `mailto:${EMAIL}` },
];

/** Shown in the contact card's icon row — a subset of `socials` by label. */
export const contactSocialLabels = ['GitHub', 'LinkedIn'];

export const navLinks = [
  { to: '/home', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/project', label: 'Projects' },
];

export const navCta = { to: '/contact', label: "Let's talk" };

export const footerLinks = [
  { to: '/home', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/project', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export const hero = {
  titleLead: 'Transforming intelligence through',
  titleAccent: 'AI & data',
  description:
    `I'm ${NAME} — a data scientist and AI engineer building machine learning, ` +
    'NLP and analytics products that turn raw data into decisions people can act on.',
  primaryCta: { to: '/project', label: 'View my work' },
  secondaryCta: { label: 'Download resume' },
  githubHandle: `github.com/${GITHUB_USER}`,
  githubUrl: `https://github.com/${GITHUB_USER}`,
  highlights: [
    { value: 'ML', label: 'Predictive models' },
    { value: 'NLP', label: 'LLM & RAG pipelines' },
    { value: 'BI', label: 'Dashboards & insights' },
  ],
  floatCards: [
    { icon: 'sparkles', title: 'RAG pipelines', subtitle: 'LangChain · Groq · Ollama' },
    { icon: 'bars', title: 'Analytics', subtitle: 'Power BI dashboards' },
  ],
};

export const stack = [
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

export const servicesSection = {
  title: 'What I do',
  subtitle:
    'I specialise in data-driven insights and solutions that help businesses reach their goals.',
};

export const services = [
  {
    icon: 'brain',
    title: 'Machine learning & predictive models',
    description:
      'I design and implement models that predict outcomes, sharpen decision-making and ' +
      'optimise workflows — from crop recommendation systems to business analytics, using ' +
      'Random Forest, XGBoost and SVM.',
  },
  {
    icon: 'nlp',
    title: 'Natural language processing',
    description:
      'Grammar correction tools, sentiment analysis and multilingual chatbots built on ' +
      'BERT, GPT and Whisper, bridging communication gaps in education, business and ' +
      'agriculture.',
  },
  {
    icon: 'chart',
    title: 'Data visualization & analytics',
    description:
      'Interactive dashboards and visual reports in Power BI and Plotly that make the ' +
      'numbers behind a business legible at a glance.',
  },
  {
    icon: 'bot',
    title: 'AI chatbots & automation',
    description:
      'Context-aware assistants built with LangChain and models served through Ollama and ' +
      'Groq, lifting customer support, education and day-to-day operations.',
  },
];

export const stats = [
  { value: '500+', label: 'Projects completed' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '50+', label: 'AI models built' },
];

/** TODO: replace with your real roles — these came with the original template. */
export const experience = [
  { role: 'Lead Product Designer', company: 'Google', period: '2021 — Present' },
  { role: 'Senior Product Designer', company: 'Webflow', period: '2018 — 2021' },
  { role: 'Junior UX/UI Designer', company: 'LinkedIn', period: '2016 — 2018' },
];

export const skillGroups = [
  { title: 'Programming languages', items: ['Python', 'R', 'SQL', 'JavaScript'] },
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
  { title: 'Data analysis', items: ['Power BI', 'SPSS', 'Excel', 'NumPy', 'Pandas'] },
  { title: 'Business skills', items: ['Data Reporting', 'RFP Writing', 'Presentations'] },
];

export const projects = [
  {
    title: 'TradeWise AI',
    category: 'GenAI',
    year: '2025',
    featured: true,
    description:
      'A Streamlit-based web app that helps traders analyze stock data, visualize trends, ' +
      'and generate AI-powered forecasts. It integrates Yahoo Finance for real-time stock ' +
      'data, Ollama DeepSeek-R1 for AI insights, and Plotly for interactive visualizations.',
    technologies: ['Python', 'Streamlit', 'Ollama DeepSeek-R1', 'yfinance', 'Plotly', 'LangChain'],
    githubLink: `https://github.com/${GITHUB_USER}/stockanalyst`,
  },
  {
    title: 'Audio & Video Summarizer',
    category: 'NLP',
    year: '2025',
    featured: true,
    description:
      'A smart tool that summarizes YouTube videos, audio files, and video files using ' +
      'Whisper for transcription and Groq LLM for AI-powered summarization. The interface ' +
      'is designed using Gradio for an intuitive user experience.',
    technologies: ['Python', 'Gradio', 'Whisper', 'Transformers', 'PyTorch', 'LangChain', 'Groq'],
    githubLink: `https://github.com/${GITHUB_USER}/Audio-and-video-summarizer`,
  },
  {
    title: 'Crop Recommendation System',
    category: 'Machine Learning',
    year: '2024',
    featured: true,
    description:
      'A machine learning-based system that predicts the best crops to grow based on ' +
      'environmental factors using models like Naive Bayes, Random Forest, Decision Tree, ' +
      'Logistic Regression, XGBoost, and SVM.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'Flask'],
    githubLink: `https://github.com/${GITHUB_USER}/crop-recomndation`,
  },
  {
    title: 'Power BI: Sales & HR Analytics',
    category: 'Analytics',
    year: '2024',
    description:
      'A set of Power BI dashboards showcasing advanced data visualization techniques for ' +
      'Sales and HR data analysis, providing KPIs and actionable insights.',
    technologies: ['Power BI', 'DAX', 'Excel'],
    githubLink: `https://github.com/${GITHUB_USER}/MERISKILL-Internship-PowerBI-Projects`,
  },
  {
    title: 'Document Query System',
    category: 'GenAI',
    year: '2025',
    description:
      'A document query system that allows users to upload PDF, DOCX, or TXT files and ' +
      'interact with them using Groq & Ollama AI models. The system extracts text and ' +
      'enables users to query documents dynamically via a Gradio-based interface.',
    technologies: ['Python', 'Gradio', 'Groq API', 'Ollama', 'LangChain'],
    githubLink: `https://github.com/${GITHUB_USER}/Document-Query-System`,
  },
  {
    title: 'Personal Diet Assistant',
    category: 'GenAI',
    year: '2025',
    description:
      'A smart AI-powered diet planner that generates personalized meal plans based on ' +
      'user preferences, dietary goals, and restrictions. Built using Groq API & Gradio ' +
      'for an interactive experience.',
    technologies: ['Python', 'Gradio', 'Groq API'],
    githubLink: `https://github.com/${GITHUB_USER}/Personal-Diet-Assistant-with-Groq`,
  },
];

export const pages = {
  projects: {
    title: "Things I've",
    titleAccent: 'built',
    subtitle:
      'Machine learning, generative AI and analytics work — each one open source and ready ' +
      'to explore.',
    moreLabel: 'More on GitHub',
  },
  about: {
    greeting: "Hello, I'm",
    experienceTitle: 'Experience',
    experienceSubtitle: "Where I've worked and what I focused on.",
    skillsTitle: 'Technical skills',
    skillsSubtitle: 'The toolkit I reach for, grouped by the kind of problem it solves.',
  },
  contact: {
    title: "Let's",
    titleAccent: 'work together',
    subtitle: "Tell me about your project, your data, or the problem you're stuck on.",
  },
  home: {
    featuredTitle: 'Selected work',
    featuredSubtitle:
      'A few projects that show how I take an idea from data to a working product.',
    allProjectsLabel: 'All projects',
    ctaTitle: 'Have a data problem worth solving?',
    ctaBody:
      "Tell me about the outcome you're after and I'll tell you what the data can " +
      'realistically do about it.',
    ctaLabel: 'Start a conversation',
  },
};

/** EmailJS credentials for the contact form (public key is safe client-side). */
export const emailjs = {
  serviceId: 'service_nmkbkny',
  templateId: 'template_abc456',
  publicKey: 'kZlNM4CVpuvFTgBsI',
};

export default {
  person,
  seo,
  socials,
  contactSocialLabels,
  navLinks,
  navCta,
  footerLinks,
  hero,
  stack,
  servicesSection,
  services,
  stats,
  experience,
  skillGroups,
  projects,
  pages,
  emailjs,
};
