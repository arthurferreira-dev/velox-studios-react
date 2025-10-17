import { createRoot } from 'react-dom/client';
import { Headers } from '../components/header';
import MainSons from '../sons';
import '../tailwind.css'
import '../App.css'

createRoot(document.querySelector('body')!).render(
    <>
        <Headers pageName={1}>
            <h1 className="text-center text-white text-xl">Jogos</h1>
        </Headers>
        <MainSons/>
    </>
);