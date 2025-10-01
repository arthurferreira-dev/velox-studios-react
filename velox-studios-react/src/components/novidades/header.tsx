import { ButtonsPage } from "../../utils/buttons"

export default function HeaderNews() {
    return (
        <header className="bg-gray-700 p-[13.5px] w-[100%] flex justify-between items-center">
            <h1 className="text-center text-white text-xl">Novidades</h1>
            {ButtonsPage(3)}
        </header>
    );
}