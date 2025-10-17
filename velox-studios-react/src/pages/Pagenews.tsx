import { Headers } from '../components/header';
import { NewsSlash } from '../components/novidades/newsSlash';

export default function PageNews() {
    return (
        <>
            <Headers pageName={3}>
                <h1 className="text-center text-white text-xl">Novidades</h1>
            </Headers>
            <main>
                {NewsSlash(0)}
            </main>
        </>
    );
}