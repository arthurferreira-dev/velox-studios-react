import HeaderIndex from "./components/Headerindex";
import { CreatorBtn, HandleLinkBtn } from "../utils/Functions";
import { useState, useEffect } from "react";
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
import { FooterCopyRight } from "../components/FooterCopyRight";
import { API } from "../api/api-vx";

export function PageIndex() {
  const [wdtImg, setWdtImg] = useState(82);
  const [loading, setLoading] = useState<boolean>(true);

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

  if (loading) {
    return (
      <div className="w-full">
        <div className="animate-pulse">
          <div className="w-full h-[120px] bg-gray-700 rounded-md" />
          <br />
          <div className="w-full h-[150px] bg-gray-700 rounded-none" />
          <div className="mt-4 w-[300px] h-8 bg-gray-700 mx-auto rounded" />
          <div className="mt-3 w-[600px] max-[501px]:w-[350px] h-24 bg-gray-700 mx-auto rounded" />
          <div className="mt-6 w-[120px] h-[120px] bg-gray-700 mx-auto rounded-full" />
        </div>
      </div>
    );
  }

  return (
    <>
      <HeaderIndex />
      <main className="w-[100%]">
        <div className="m-auto block">
          <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
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
          className="mt-4 animate__animated animate__pulse"
        >
          <h1 className="text-center text-white font-outfit text-2xl bg-gray-800 w-[300px] m-auto p-1 border-top-right border-top-left">
            Descontrário
          </h1>
          <p className="text-white text-lg max-[500px]:text-base bg-gray-800 p-3 rounded-md m-auto w-[600px] max-[501px]:w-[350px] font-ubuntu">
            Se algum dia as duas espadas forem completas, por duas pessoas e
            essas duas pessoas se encontrarem, as duas <strong>Auras</strong>{" "}
            serão libertas.
          </p>
        </div>
        <div id="gamemaker-div" className="w-[100%] mt-3">
          <h2 className="text-center font-mono text-2xl max-[501px]:text-xl text-white">
            Em desenvolvimento...
          </h2>
          <img
            src={`${API.logos}/gamemaker`}
            alt="GameMaker - Logo"
            width={wdtImg}
            className="block m-auto"
          />
          <p className="text-center text-lg text-white">
            Caso queira contribuir acesse o nosso server do{" "}
            <strong className="text-[#5865F2]">Discord</strong>!
          </p>
          {CreatorBtn(
            "Discord",
            "bg-[#5865F2] text-white m-auto block mt-4 p-2 w-[175px] rounded-lg duration-300 hover:bg-[#525ee3] hover:cursor-pointer",
            HandleLinkBtn(DCPath)
          )}
        </div>
      </main>
      <FooterCopyRight />
    </>
  );
}
