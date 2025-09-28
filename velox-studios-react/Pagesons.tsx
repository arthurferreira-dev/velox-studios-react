import { createRoot } from 'react-dom/client';
import HeaderJogos from './src/components/jogos/header';
import MainSons from './sons';
import './src/tailwind.css'
import './src/App.css'

createRoot(document.querySelector('body')!).render(
    <>
        <HeaderJogos/>
        <MainSons/>
    </>
);