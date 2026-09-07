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

**All personal content lives in one file: `src/data/site.js`.** No component edits
are needed to re-brand the site.

Start with the identity constants at the top:

```js
const NAME = 'Naresh Edagotti';
const EMAIL = 'statfusionai@gmail.com';
const PHONE = '+91 9553547511';
const GITHUB_USER = 'Nareshedagotti';
const TITLE_SUFFIX = 'AI & Data Science Portfolio';
```

Changing `NAME` alone updates the wordmark and its monogram, the page title and
meta description, the hero copy, the about heading, the resume filename and the
footer copyright. `EMAIL`, `PHONE` and `GITHUB_USER` likewise feed every place
they appear, project repository links included.

The rest of the file is grouped by what it drives:

| Export | Drives |
| --- | --- |
| `person` | name, role, bio, location, contact details, availability |
| `seo` | document title and meta description |
| `socials` | footer columns, footer icon row, contact card icons |
| `navLinks`, `navCta`, `footerLinks` | navigation |
| `hero`, `stack` | home hero, floating cards, highlights, tech marquee |
| `servicesSection`, `services`, `stats` | the "What I do" section |
| `experience`, `skillGroups` | about page timeline and skills |
| `projects` | project cards (`featured: true` also surfaces on the home page; `category` feeds the filters) |
| `pages` | per-page headings and section copy |
| `emailjs` | contact form credentials |

`icon` fields are string keys (e.g. `'github'`, `'brain'`), mapped to
lucide-react components inside the components that render them — so the config
file itself stays import-free.

**Colors, fonts, spacing** — the CSS custom properties in `:root` in `src/index.css`.

## Contact form

The form posts through EmailJS. The service, template and public keys are in
`src/Main/Contact/Contact.jsx`; the public key is safe to ship in the client, but
restrict the allowed origins in the EmailJS dashboard.
