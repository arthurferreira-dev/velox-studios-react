import { useState, useEffect } from "react";
import { Headers } from "../components/header";
import { CreatorBtn, HandleLinkBtn } from "../utils/Functions";
import { NamesBtn, PathBtn } from "../utils/Variables";
import { FooterCopyRight } from "../components/FooterCopyRight";

export default function PageJogos() {
  const Images: string[] = [
    "/assets/descontrario-contamination.png",
    "/assets/aurasr.png",
    "/assets/auras-vx.png",
    "/assets/descontrario-logo-vx.png",
  ];
  const [wdtImg, setWdtImg] = useState(555);
  const [TwdtImg, setTwdtImg] = useState(276);

  useEffect(() => {
    const ResposiveImg = () => {
      const w = window.innerWidth;

      if (w < 501) {
        setWdtImg(266);
        setTwdtImg(188);
      } else {
        setWdtImg(487);
        setTwdtImg(350);
      }
    };

    ResposiveImg();

    window.addEventListener("resize", ResposiveImg);

    return () => window.removeEventListener("resize", ResposiveImg);
  }, []);

  const linkPath: string = "/sons.html";

  return (
    <>
      <Headers pageName={1} Names={NamesBtn(0)} Path={PathBtn(0)}>
        <h1 className="text-center text-white text-xl">Jogos</h1>
      </Headers>
      <main className="w-[100%]">
        <h1 className="font-domine text-white text-center text-2xl max-[501px]:text-[1.35rem] mt-3">
          DESCONTRÁRIO
        </h1>
        <img
          src={Images[3]}
          alt="aurasr.png"
          width={wdtImg}
          loading="lazy"
          className="m-auto block mt-3 rounded-md"
        />
        <p className="m-auto mt-4 text-white text-justify font-alan w-[73%]">
          Há muito tempo atrás, no espaço existia duas Auras que lutavam entre
          si, uma delas se chamava <strong>AuraLU</strong>, ela era responsável
          por ter o conhecimento da bondade, mas não tinha nenhum conhecimento
          da maldade, e o outro que se chamava <strong>AuraSR</strong>, e ele
          era responsável por trazer a maldade, mas ele não tinha o conhecimento
          da bondade, a luta deles duraram por anos ou até séculos, até que um
          dia um ser celestial enviou um ser que batizam de{" "}
          <strong>Good VX</strong>, ele foi responsável por selar os poderes das
          Auras em duas espadas, a espada da bondade e a espada da maldade, e
          após isso ele selou as duas Auras, em dois buracos negros mantendo um
          dos dois quilômetros á quilômetros de distâncias. E após isso antes de
          selar, uma explosão acontece fazendo a criação dos universos, e após
          isso cada espada foi colocada em um lugar escondido em universos
          diferentes, ele deixou em cada universo uma peça dela para que seja
          quase impossível de ser completa, e se algum dia as duas espadas forem
          completas, por duas pessoas e essas duas pessoas se encontrarem, as
          duas Auras seriam libertas.
        </p>
        <img
          src={Images[2]}
          alt="aurasr.png"
          width={TwdtImg}
          loading="lazy"
          className="m-auto block mt-4"
        />
        {CreatorBtn(
          "Efeitos Sonoros",
          "block m-auto mt-4 bg-green-500 p-3 text-white rounded-lg duration-300 hover:bg-green-600 hover:cursor-pointer",
          HandleLinkBtn(linkPath)
        )}
      </main>
      <FooterCopyRight/>
    </>
  );
}
