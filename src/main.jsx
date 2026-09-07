import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { seo } from './data/site'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

document.title = seo.title
let metaDescription = document.querySelector('meta[name="description"]')
if (!metaDescription) {
  metaDescription = document.createElement('meta')
  metaDescription.setAttribute('name', 'description')
  document.head.appendChild(metaDescription)
}
metaDescription.setAttribute('content', seo.description)
