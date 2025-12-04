import { CreatorBtn, HandleLinkBtn } from "./utils/Functions";
import 'animate.css';

export default function MainSuporte() {
  const VX_EMAIL: string = "veloxstudios99@gmail.com";
  const Emails: string[] = [
    `mailto:${VX_EMAIL}?subject=Erros ou Bugs [VX Studios]&body=Olá! Gostaria de reportar um erro ou bug no seu site...`,
    `mailto:${VX_EMAIL}?subject=Dúvidas [VX Studios]&body=Olá! Gostaria de tirar uma dúvida sobre o site ou por qualquer outra coisa...`,
  ];
  const titlesCL: string = "text-lg max-[501px]:text-[15px] font-domine";
  const Messages: string[] = ["Reportar um erro ou bug", "Envie sua dúvida"];
  const Home: string = "/";

  return (
    <main className="w-[80%] m-auto bg-neutral-700 p-3.5 border-top-left border-top-right text-white mt-4">
      <div className="flex flex-col flex-wrap justify-center items-center gap-3.5">
        <div className="flex flex-col flex-wrap gap-7.5">
          <div className="flex flex-col flex-wrap justify-center items-center gap-2">
            <h1 className={titlesCL}>
              Quer tirar uma dúvida?{" "}
              <span className="font-sans">&#x1F50D;</span>
            </h1>
            {CreatorBtn(
              Messages[1],
              "mt-3 bg-green-600 p-2 text-white font-alan rounded-lg duration-300 hover:bg-green-700 hover:cursor-pointer",
              HandleLinkBtn(Emails[1])
            )}
          </div>

          <div className="flex flex-col flex-wrap justify-center items-center gap-2 w-[250px]">
            <h1 className={titlesCL}>
              Quer reportar um erro ou bug?{" "}
              <span className="font-sans">&#x2694;</span>
            </h1>
            {CreatorBtn(
              Messages[0],
              "mt-3 bg-green-600 p-2 text-white font-alan rounded-lg duration-300 hover:bg-green-700 hover:cursor-pointer",
              HandleLinkBtn(Emails[0])
            )}
          </div>
        </div>

        {CreatorBtn(
          "Voltar",
          "mt-3 bg-purple-600 p-2 text-white font-alan rounded-lg w-[145px] block m-auto duration-300 hover:bg-purple-700 hover:cursor-pointer",
          HandleLinkBtn(Home)
        )}
      </div>
    </main>
  );
}
