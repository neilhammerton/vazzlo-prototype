import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Reception Genies design system: fonts + tokens + base element defaults.
// Imported before index.css so app styles can override DS base rules.
import '../design-system/styles.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
