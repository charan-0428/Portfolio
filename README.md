# Portfolio — Naresh Edagotti

A React + Vite personal portfolio for AI & data science work: machine learning,
NLP and analytics projects, with an about page, project gallery and contact form.

## Stack

- **React 18** with **React Router 7** for routing
- **Vite 6** for dev server and builds
- **lucide-react** / **react-icons** for icons
- **EmailJS** for the contact form
- Hand-written CSS design system (no UI framework) — tokens live in `src/index.css`

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
npm run lint     # eslint
```

## Structure

```
src/
  index.css                 design tokens, base styles, shared components
  App.jsx                   routes + layout shell
  hooks/useScrollReveal.js  IntersectionObserver reveal-on-scroll
  data/projects.js          single source of truth for project entries
  Components/               Navbar, Footer, Logo, animated Background
  Main/                     Home, About, Project, Contact, Section (services)
```

## Editing the content

- **Projects** — add or edit entries in `src/data/projects.js`. Mark `featured: true`
  to surface a project on the home page; `category` feeds the filter buttons.
- **Skills and experience** — the arrays at the top of `src/Main/About/About.jsx`.
- **Services and stats** — the arrays at the top of `src/Main/Section/Section.jsx`.
- **Contact details and socials** — `src/Main/Contact/Contact.jsx` and
  `src/Components/Footer/Footer.jsx`.
- **Colors, fonts, spacing** — the CSS custom properties in `:root` in `src/index.css`.

## Contact form

The form posts through EmailJS. The service, template and public keys are in
`src/Main/Contact/Contact.jsx`; the public key is safe to ship in the client, but
restrict the allowed origins in the EmailJS dashboard.
