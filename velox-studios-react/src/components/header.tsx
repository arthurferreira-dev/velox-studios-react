import { ButtonsPage } from "../utils/buttons"
import type { Props } from '../utils/Props';

interface PropsHeader extends Props {
    pageName: number
}

export function Headers(props: PropsHeader) {
    return (
        <header className="bg-gray-700 p-[13.5px] w-[100%] flex justify-between items-center">
            {props.children}
            {ButtonsPage(props.pageName)}
        </header>
    );
}