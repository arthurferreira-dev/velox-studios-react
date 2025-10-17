import { createRoot } from 'react-dom/client';
import { Headers } from '../components/header';
import MainSuporte from '../suporte';
import '../tailwind.css'
import '../App.css'

createRoot(document.querySelector('body')!).render(
    <>
        <Headers pageName={2}>
            <h1 className="text-center text-white text-xl">Suporte</h1>
        </Headers>
        <MainSuporte/>
    </>
);