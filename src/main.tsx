import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DesignStyleProvider } from './contexts/DesignStyleContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DesignStyleProvider>
      <App />
    </DesignStyleProvider>
  </StrictMode>,
)
