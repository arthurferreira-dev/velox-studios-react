import { ButtonsPage } from "../../utils/buttons"

export default function HeaderJogos() {
    return (
        <header className="bg-gray-700 p-[13.5px] w-[100%] flex justify-between items-center">
            <h1 className="text-center text-white text-xl">Jogos</h1>
            {ButtonsPage(1)}
        </header>
    );
}