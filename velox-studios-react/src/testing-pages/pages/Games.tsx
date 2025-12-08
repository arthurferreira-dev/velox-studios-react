import { useEffect, useState } from "react";
import HeaderIndex from "../components/Headerindex";
import { CardBodyGames, CardGames } from "../components/Card";
import { MainGrow } from "../components/Container";
import { imgsDataDescontrario, imgsDataAuras } from "../../api/api-vx";
import { FooterCopyRight } from "../../components/FooterCopyRight";

export const Games = () => {
  const [descWdt, setDescWdt] = useState<undefined | number | string>(487);

  useEffect(() => {
    const responsiveImg = () => {
      if (window.innerWidth <= 501) setDescWdt(465);
      else setDescWdt(487);
    };

    window.addEventListener("resize", responsiveImg);

    return () => window.removeEventListener("resize", responsiveImg);
  }, []);

  const aurasImg = imgsDataAuras[0].src;

  return (
    <>
      <HeaderIndex />
      <MainGrow>
        <div className="w-full flex-center flex-col gap-5">
          <CardGames>
            <CardBodyGames>
              <h2 className="card-title font-domine text-white uppercase text-[1.68rem] max-[501px]:text-[1.35rem] mt-3">
                Descontrário
              </h2>
              {imgsDataDescontrario.map((img) => (
                <img
                  key={img.id}
                  src={img.src}
                  width={descWdt}
                  className="rounded-xl"
                  loading="lazy"
                />
              ))}
              <p className="text-white text-justify font-poppins w-[73%] max-[900px]:w-[89%] text-[15.6px]">
                Há muito tempo atrás, no espaço existia duas Auras que lutavam
                entre si, uma delas se chamava <strong>AuraLU</strong>, ela era
                responsável por ter o conhecimento da bondade, mas não tinha
                nenhum conhecimento da maldade, e o outro que se chamava{" "}
                <strong>AuraSR</strong>, e ele era responsável por trazer a
                maldade, mas ele não tinha o conhecimento da bondade, a luta
                deles duraram por anos ou até séculos, até que um dia um ser
                celestial enviou um ser que batizam de <strong>Good VX</strong>,
                ele foi responsável por selar os poderes das Auras em duas
                espadas, a espada da bondade e a espada da maldade, e após isso
                ele selou as duas Auras, em dois buracos negros mantendo um dos
                dois quilômetros á quilômetros de distâncias. E após isso antes
                de selar, uma explosão acontece fazendo a criação dos universos,
                e após isso cada espada foi colocada em um lugar escondido em
                universos diferentes, ele deixou em cada universo uma peça dela
                para que seja quase impossível de ser completa, e se algum dia
                as duas espadas forem completas, por duas pessoas e essas duas
                pessoas se encontrarem, as duas Auras seriam libertas.
              </p>
              <img src={aurasImg} width={325} alt="Auras VX via API" />
            </CardBodyGames>
          </CardGames>
        </div>
      </MainGrow>
      <FooterCopyRight />
    </>
  );
};
