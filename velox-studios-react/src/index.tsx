import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PageIndex } from './Pageindex'
import './tailwind.css'

createRoot(document.querySelector('body')!).render(
  <StrictMode>
    <PageIndex/>
  </StrictMode>
);