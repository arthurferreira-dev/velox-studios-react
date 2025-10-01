import HeaderIndex from '../components/index/header';
import { CreatorBtn, HandleLinkBtn } from '../utils/buttons';
import { useState, useEffect } from 'react'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

register();
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export function PageIndex() {
    const imgsData = [
        { id: '1', src: "/sprites.png" },
        { id: '2', src: "/sprites-game.png" },
        { id: '3', src: "/esboco-artes.png" }
    ];

    const [wdtImg, setWdtImg] = useState(82);

    useEffect(() => {
        const ImageRezise = () => {
            if (window.innerWidth < 501) {
                setWdtImg(72);
            } else {
                setWdtImg(82);
            }
        }

        window.addEventListener('resize', ImageRezise);

        return () => window.removeEventListener('resize', ImageRezise);
    }, []);

    const Images: string[] = ['/gamemaker.png'];
    const DCPath: string = 'https://discord.gg/6aYzCZPdew'

    return (
        <>
            <HeaderIndex/>
            <main className="w-[100%]">
                <div className="m-auto block">
                    <Swiper
                        slidesPerView={1}
                        pagination={ { clickable: true } }
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
                <div id="desc-slider-items" className="mt-4">
                        <h1 className="text-center text-white font-outfit text-2xl bg-gray-800 w-[300px] m-auto p-1 border-top-right border-top-left">Descontrário</h1>
                        <p className="text-white text-lg max-[500px]:text-base bg-gray-800 p-3 rounded-md m-auto w-[600px] max-[501px]:w-[350px] font-ubuntu">
                            Se algum dia as duas espadas forem completas, por duas pessoas e essas duas pessoas se encontrarem, as duas <strong>Auras</strong> serão libertas.
                        </p>
                </div>
                <div id="gamemaker-div" className="w-[100%] mt-3">
                    <h2 className="text-center font-mono text-2xl max-[501px]:text-xl text-white">Em desenvolvimento...</h2>
                    <img src={Images[Images.length - Images.length]} alt="GameMaker - Logo" width={wdtImg} className="block m-auto" />
                    <p className="text-center text-lg text-white font-ubuntu">
                        Caso queira contribuir acesse o nosso server do <strong className="text-[#5865F2]">Discord</strong>!
                    </p>
                    {CreatorBtn(
                        'Discord',
                        'bg-[#5865F2] text-white font-sans m-auto block mt-4 p-2 w-[125px] rounded-lg duration-300 hover:bg-[#525ee3] hover:cursor-pointer',
                        HandleLinkBtn(DCPath)
                    )}
                </div>
            </main>
        </>
    );
}