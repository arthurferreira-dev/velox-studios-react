import { createRoot } from 'react-dom/client'
import { PageIndex } from './pages/Pageindex'
import './tailwind.css'
import './App.css'

createRoot(document.querySelector('body')!).render(
    <PageIndex/>
);