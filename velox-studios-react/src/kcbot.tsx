import { createRoot } from 'react-dom/client';
import PageKC from './pages/Pagekcbot';
import './tailwind.css'
import './App.css'

createRoot(document.querySelector('body')!).render(
    <>
        <PageKC/>
    </>
);