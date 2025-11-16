import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CreatorBtn, HandleLinkBtn } from "../../utils/Functions";
import { register } from "swiper/element/bundle";
register();
// @ts-expect-error: Swiper CSS modules don't have TypeScript definitions
import "swiper/css";
// @ts-expect-error: Swiper CSS modules don't have TypeScript definitions
import "swiper/css/pagination";
// @ts-expect-error: Swiper CSS modules don't have TypeScript definitions
import "swiper/css/navigation";
// @ts-expect-error: Swiper CSS modules don't have TypeScript definitions
import "swiper/css/scrollbar";
import { type Props } from "../../utils/Props";

export function NewsSlash(notices: number) {
  const Images: string[] = [
    "/assets/backgroundVX-black.png",
    "/assets/backgroundVX-white.png",
    "/assets/kc-bot.png",
    "/assets/new-person-descontrario.png",
  ];
  const Banners: { id: number; src: string; alt: string }[] = [
    { id: 1, src: Images[0], alt: "backgroundVX-black" },
    { id: 2, src: Images[1], alt: "backgroundVX-white" },
  ];
  const SwiperAttributes: [number, { clickable: boolean }] = [
    1,
    { clickable: true },
  ];
  const TAGS: string[] = ["[NOVO]", "[RECENTE]", "[Fresquinho~]"];

  const titleCL: string =
    "mt-4 mb-4 text-center text-lg text-white bg-gray-700 p-2 rounded-lg max-[501px]:w-[100%] max-[501px]:rounded-[0px] font-poppins";
  const [wdtImgKC, setWdtImgKC] = useState<string>("300");

  useEffect(() => {
    const ResponsiveImgKC = () => {
      if (window.innerWidth < 501) setWdtImgKC("222");
      else setWdtImgKC("300");
    };

    window.addEventListener("resize", ResponsiveImgKC);

    return () => {
      window.removeEventListener("resize", ResponsiveImgKC);
    };
  }, []);

  const NewsBanners = () => {
    return (
      <div id="News-Banners">
        <h1 className={titleCL}>{`${TAGS[0]} Banners da VX!`}</h1>

        <Swiper
          slidesPerView={SwiperAttributes[0]}
          pagination={SwiperAttributes[1]}
          navigation
        >
          {Banners.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-[100%] h-[360px] object-cover"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  };

  const CardNews = ({ children }: Props) => {
    return (
      <div className="w-full flex flex-col flex-wrap gap-4 justify-center items-center">
        <div className="w-[350px]">{children}</div>
      </div>
    );
  };

  const KCBOT = () => {
    return (
      <CardNews>
        <h1 className={titleCL}>Nova Logo do KC BOT</h1>
        <img
          src={Images[2]}
          alt="KCBOT.png"
          className="block mx-auto"
          width={wdtImgKC}
        />
      </CardNews>
    );
  };

  const Person1 = () => {
    return (
      <CardNews>
        <h1 className={titleCL}>{`${TAGS[1]} Nova personagem`}</h1>
        <img
          src={Images[3]}
          alt="News-Person1"
          className="block mx-auto rounded-lg"
          width="278"
        />
      </CardNews>
    );
  };

  const NEWS = [NewsBanners, KCBOT, Person1];
  NEWS.splice(NEWS.length - notices, 1);

  const Home: string = "/";

  return (
    <>
      {NEWS.map((Component, index) => (
        <Component key={index} />
      ))}
      {CreatorBtn(
        "Voltar",
        "block m-auto mt-4 bg-green-500 p-2 text-center text-white w-[150px] duration-300 rounded-lg hover:bg-green-600 hover:cursor-pointer",
        HandleLinkBtn(Home)
      )}
    </>
  );
}
