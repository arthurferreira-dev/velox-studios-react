import { createRoot } from 'react-dom/client';
import PageJogos from './pages/Pagejogos';
import './tailwind.css'
import './App.css'

createRoot(document.querySelector('body')!).render(
    <PageJogos/>
);