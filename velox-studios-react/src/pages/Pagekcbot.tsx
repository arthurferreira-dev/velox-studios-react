import { Headers } from "../components/header";
import { CreatorBtn, HandleLinkBtn } from "../utils/Functions";
import { NamesBtn, PathBtn } from "../utils/Variables";

export default function PageKC() {
  const Images: string[] = ["/assets/kc-bot-lg.png"];
  const Alt: string[] = ["KC BOT Logo 2025"];

  const Creators: string = "KingVX & Alex Cesar";
  const Support: string = "https://discord.gg/RQuAjkYvD6";

  return (
    <>
      <Headers pageName={4} Names={NamesBtn(3)} Path={PathBtn(3)}>
        <h1 className="text-center text-white text-xl">KC Bot</h1>
      </Headers>
      <div id="background-body">
        <main>
          <img
            src={Images[0]}
            alt={Alt[0]}
            className="block m-auto mt-5 subElement"
          />
          <h1 className="text-center text-white font-domine text-2xl mt-4 subElement">
            KC Bot
          </h1>
          <div
            id="text-div"
            className="bg-gray-800 text-white font-alan w-[80%] m-auto mt-4 border-top-left border-bottom-right p-3"
          >
            <p
              id="creators"
              className="text-center text-lg max-[501px]:text-[16.7px]"
            >
              Feito por: {Creators}
            </p>
            <p className="mt-1 text-center text-[16.5px]">
              Um bot ainda em desenvolvimento, mas que foi feito para deixar
              muito mais legal seus servidores!
            </p>
            {CreatorBtn(
              "Suporte do Bot",
              "bg-yellow-500 block m-auto mt-4 duration-300 p-2 text-center rounded-md delay-1 hover:bg-amber-500 hover:cursor-pointer",
              HandleLinkBtn(Support)
            )}
          </div>
        </main>
      </div>
    </>
  );
}