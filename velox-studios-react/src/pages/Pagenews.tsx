import HeaderNews from '../components/novidades/header';
import { NewsSlash } from '../components/novidades/newsSlash';

export default function PageNews() {
    return (
        <>
            <HeaderNews/>
            <main>
                {NewsSlash(0)}
            </main>
        </>
    );
}