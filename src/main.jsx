import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import logo from './assets/effective-logo.svg'

// set favicon dynamically so Vite resolves the correct built asset path
const setFavicon = (href) => {
  try {
    let link = document.querySelector("link[rel*='icon']")
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      document.getElementsByTagName('head')[0].appendChild(link)
    }
    link.href = href
  } catch (e) {
    // ignore in non-browser environments
  }
}

setFavicon(logo)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
