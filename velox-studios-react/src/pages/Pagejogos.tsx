import { useState, useEffect } from 'react'
import HeaderJogos from "../components/jogos/header";

export default function PageJogos() {
    const Images: string[] = ['https://i.postimg.cc/T3Mn0YLM/descontrario-contamination.png', 'https://i.postimg.cc/nrjzmBnC/aurasr.png'];
    const [wdtImg, setWdtImg] = useState(235);
    useEffect(() => {
        const ResposiveImg = () => {
            if (window.innerWidth < 501) {
                setWdtImg(176);
            } else {
                setWdtImg(235);
            }
        }

        window.addEventListener('resize', ResposiveImg);

        return () => window.removeEventListener('resize', ResposiveImg);
    });
    return (
        <>
            <HeaderJogos/>
            <main className="w-[100%]">
                <h1 className="font-domine text-white text-center text-2xl max-[501px]:text-[1.35rem] mt-3">DESCONTRÁRIO</h1>
                <img src={Images.at(1)} alt="aurasr.png" width={wdtImg} className='m-auto block mt-3'/>
                <p className='m-auto mt-3 text-white text-justify font-alan w-[73%]'>
                    Há muito tempo atrás, no espaço existia duas Auras que lutavam entre si, uma delas se chamava <strong>AuraLU</strong>, ela era responsável por ter o conhecimento da bondade, mas não tinha nenhum conhecimento da maldade, e o outro que se chamava <strong>AuraSR</strong>, e ele era responsável por trazer a maldade, mas ele não tinha o conhecimento da bondade, a luta deles duraram por anos ou até séculos, até que um dia um ser celestial enviou um ser que batizam de <strong>Good VX</strong>, ele foi responsável por selar os poderes das Auras em duas espadas, a espada da bondade e a espada da maldade, e após isso ele selou as duas Auras, em dois buracos negros mantendo um dos dois quilômetros á quilômetros de distâncias. E após isso antes de selar, uma explosão acontece fazendo a criação dos universos, e após isso cada espada foi colocada em um lugar escondido em universos diferentes, ele deixou em cada universo uma peça dela para que seja quase impossível de ser completa, e se algum dia as duas espadas forem completas, por duas pessoas e essas duas pessoas se encontrarem, as duas Auras seriam libertas.
                </p>
            </main>
        </>
    );
}