import { CreatorBtn, HandleLinkBtn } from "./utils/buttons";

export default function MainSuporte() {
    const Emails: string[] = [
        'mailto:veloxstudios99@gmail.com?subject=Erros ou Bugs [VX Studios]&body=Olá! Gostaria de reportar um erro ou bug no seu site...',
        'mailto:veloxstudios99@gmail.com?subject=Dúvidas [VX Studios]&body=Olá! Gostaria de tirar uma dúvida sobre o site ou por qualquer outra coisa...'
    ];
    const titlesCL:string = 'text-lg max-[501px]:text-[15px] font-domine'
    const Messages: string[] = ['Reportar um erro ou bug', 'Envie sua dúvida'];
    const Home:string = '/index.html'

    return (
        <main className="w-[80%] m-auto bg-neutral-700 p-3 border-top-left border-top-right text-white mt-4">
            <h1 className={titlesCL}>Quer tirar uma dúvida? <span className="font-sans">&#x1F50D;</span></h1>
            {CreatorBtn(
                Messages[1],
                'mt-3 bg-green-600 p-2 text-white font-alan rounded-lg duration-300 hover:bg-green-700 hover:cursor-pointer',
                HandleLinkBtn(Emails[1])
            )}

            <br />

            <h1 className={`${titlesCL} mt-5`}>Quer reportar um erro ou bug? <span className="font-sans">&#x2694;</span></h1>
            {CreatorBtn(
                Messages[0],
                'mt-3 bg-green-600 p-2 text-white font-alan rounded-lg duration-300 hover:bg-green-700 hover:cursor-pointer',
                HandleLinkBtn(Emails[0])
            )}

            <br />

            {CreatorBtn(
                'Voltar',
                'mt-3 bg-purple-600 p-2 text-white font-alan rounded-lg w-[145px] block m-auto duration-300 hover:bg-purple-700 hover:cursor-pointer',
                HandleLinkBtn(Home)
            )}
        </main>
    );
}