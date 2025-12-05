import { useState, useEffect } from "react";
import { useMainPath } from "../../store/useMainStore";
import HeaderIndex from "./Headerindex";
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
import { SiDiscord } from "react-icons/si";

export const PageWithPath = () => {
  const [wdtImg, setWdtImg] = useState(82);
  const [loading, setLoading] = useState<boolean>(true);
  const { path } = useMainPath();

  const imgsData = [
    { id: "1", src: `${API.arts}/sprites-1` },
    { id: "2", src: `${API.arts}/sprites-2` },
    { id: "3", src: `${API.arts}/esboco-artes` },
  ];

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

  useEffect(() => {
    const loadApi = async () => {
      try {
        const req = await fetch(imgsData[0].src);
        if (!req) throw new Error("Error to load the API!");

        setLoading(false);
      } catch (error) {
        console.error("Error to fetch this API: ", error);
        setLoading(false);
      }
    };
    loadApi();
  }, []);

  const DCPath: string = "https://discord.gg/6aYzCZPdew";
  const animated: string = 'animate__animated'

  if (loading) {
    return (
      <div className="w-full">
        <div className="animate__animated delay-75 animate__pulse">
          <div className="w-full h-[120px] bg-gray-700 rounded-md" />
          <br />
          <div className="w-full h-[150px] bg-gray-700 rounded-none" />
          <div className="mt-4 w-[300px] h-8 bg-gray-700 mx-auto rounded" />
          <div className="mt-3 w-[600px] max-[501px]:w-[350px] h-24 bg-gray-700 mx-auto rounded" />
          <div className="mt-6 w-[120px] h-[120px] bg-gray-700 mx-auto rounded-full" />
        </div>
      </div>
    );
  } else if (path === "/") {
    return (
      <>
        <HeaderIndex />
        <main className="w-[100%]">
          <div className={`m-auto block ${animated} animate__fadeIn`}>
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
            >
              {imgsData.map((item) => {
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
          <div
            id="desc-slider-items"
            className={`mt-4 ${animated} animate__backInDown`}
          >
            <h1 className="text-center text-white font-outfit text-2xl bg-gray-800 w-[300px] m-auto p-1 border-top-right border-top-left">
              Descontrário
            </h1>
            <p className="text-white text-lg max-[500px]:text-base bg-gray-800 p-3 rounded-md m-auto w-[600px] max-[501px]:w-[350px] max-[666px]:w-[465px] font-ubuntu">
              Se algum dia as duas espadas forem completas, por duas pessoas e
              essas duas pessoas se encontrarem, as duas <strong>Auras</strong>{" "}
              serão libertas.
            </p>
          </div>
          <div id="gamemaker-div" className="w-[100%] mt-3">
            <h2 className="text-center italic font-sans text-2xl max-[501px]:text-xl text-slate-300">
              Em desenvolvimento...
            </h2>
            <img
              src={`${API.logos}/gamemaker`}
              alt="GameMaker - Logo"
              width={wdtImg}
              className="block m-auto"
            />
            <p className="text-center font-robot-mono text-lg text-white max-[501px]:text-base max-[501px]:w-[65%] max-[501px]:mx-auto">
              Caso queira contribuir acesse o nosso server do{" "}
              <strong className="text-[#5865F2]">Discord</strong>!
            </p>
            <button
              className="bg-[#5865F2] text-white mx-auto flex justify-center items-center gap-3 mt-4 p-2 w-[175px] rounded-lg pulse-fast duration-300 hover:bg-[#525ee3] hover:cursor-pointer"
              
              onClick={() => HandleLinkBtn(DCPath)}
            >
              <SiDiscord size={22} /> Discord
            </button>
          </div>
        </main>
        <FooterCopyRight />
      </>
    );
  }
};
