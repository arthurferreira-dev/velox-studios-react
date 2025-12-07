import { useState, useEffect } from "react";
import HeaderIndex from "../components/Headerindex";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

register();

// @ts-expect-error: Swiper CSS modules don't have TypeScript definitions
import "swiper/css";
// @ts-expect-error: Swiper CSS modules don't have TypeScript definitions
import "swiper/css/pagination";
// @ts-expect-error: Swiper CSS modules don't have TypeScript definitions
import "swiper/css/navigation";
// @ts-expect-error: Swiper CSS modules don't have TypeScript definitions
import "swiper/css/scrollbar";
import { FooterCopyRight } from "../../components/FooterCopyRight";
import { HandleLinkBtn } from "../../utils/Functions";
import { API } from "../../api/api-vx";
import { imgsDataArts } from "../../api/api-vx";
import { SiDiscord } from "react-icons/si";
import { MainNoGrow } from "../components/Container";

export const Home = () => {
  const [wdtImg, setWdtImg] = useState(82);

  useEffect(() => {
    const ImageRezise = () => {
      if (window.innerWidth < 501) {
        setWdtImg(72);
      } else {
        setWdtImg(82);
      }
    };

    window.addEventListener("resize", ImageRezise);

    return () => window.removeEventListener("resize", ImageRezise);
  }, []);

  const DCPath: string = "https://discord.gg/6aYzCZPdew";

  return (
    <>
      <HeaderIndex />
      <MainNoGrow>
        <div className="mx-auto block">
          <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
            {imgsDataArts.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <img
                    src={item.src}
                    alt="Item do Slider"
                    className="w-[100%] h-[360px] object-cover"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div id="desc-slider-items" className="mt-4 animate-slide-in delay-1">
          <h1 className="text-center text-white font-outfit text-2xl bg-gray-800 w-[300px] m-auto p-1 border-top-right border-top-left">
            Descontrário
          </h1>
          <p className="text-white text-lg max-[500px]:text-base bg-gray-800 p-3 rounded-md m-auto w-[600px] max-[501px]:w-[350px] max-[666px]:w-[465px] font-ubuntu">
            Se algum dia as duas espadas forem completas, por duas pessoas e
            essas duas pessoas se encontrarem, as duas <strong>Auras</strong>{" "}
            serão libertas.
          </p>
        </div>
        <div
          id="gamemaker-div"
          className="w-[100%] mt-3 animate-slide-in delay-4"
        >
          <div className="flexCol gap-9.5">
            <div className="flex-center flex-col">
              <h2 className="text-center italic font-sans text-2xl max-[501px]:text-xl text-slate-300">
                Em desenvolvimento...
              </h2>
              <img
                src={`${API.logos}/gamemaker`}
                alt="GameMaker - Logo"
                width={wdtImg}
              />
              <p className="text-center font-robot-mono text-lg text-white max-[501px]:text-base max-[501px]:w-[65%] max-[501px]:mx-auto">
                Caso queira contribuir acesse o nosso server do{" "}
                <strong className="text-discord">Discord</strong>!
              </p>
            </div>
            <button
              className="btn-discord btn-discord-bg font-gg-sans pulse-fast"
              onClick={() => HandleLinkBtn(DCPath)}
            >
              <SiDiscord size={22} /> Discord
            </button>
          </div>
        </div>
      </MainNoGrow>
      <FooterCopyRight />
    </>
  );
};