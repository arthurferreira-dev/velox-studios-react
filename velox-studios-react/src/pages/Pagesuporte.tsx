import { createRoot } from 'react-dom/client';
import HeaderSuporte from '../components/suporte/header';
import MainSuporte from '../suporte';
import '../tailwind.css'
import '../App.css'

createRoot(document.querySelector('body')!).render(
    <>
        <HeaderSuporte/>
        <MainSuporte/>
    </>
);