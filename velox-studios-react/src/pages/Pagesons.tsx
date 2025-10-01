import { createRoot } from 'react-dom/client';
import HeaderJogos from '../components/jogos/header';
import MainSons from '../sons';
import '../tailwind.css'
import '../App.css'

createRoot(document.querySelector('body')!).render(
    <>
        <HeaderJogos/>
        <MainSons/>
    </>
);