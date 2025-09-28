import { createRoot } from 'react-dom/client'
import { PageIndex } from './Pageindex'
import './tailwind.css'
import './App.css'

createRoot(document.querySelector('body')!).render(
    <PageIndex/>
);