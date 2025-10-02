import { ButtonsPage } from "../../utils/buttons"
import { useState, useEffect } from 'react'

function HeaderIndex() {
    const [wdt, setWtd] = useState(70);
    useEffect(() => {
        const ResposiveImg = () => {
            if (window.innerWidth < 501) {
                setWtd(61);
            } else {
                setWtd(70);
            }
        }

        window.addEventListener('resize', ResposiveImg);

        return () => {
            window.removeEventListener('resize', ResposiveImg);
        }
            
    }, []);
    const img: { src: string } = { src:"/assets/velox-studios.png" }

    return (
        <header className="bg-gray-700 p-[13.5px] w-[100%] flex justify-between items-center">
            <img src={img.src} width={wdt} />
            <h1 className="text-center text-white text-xl max-[501px]:hidden">VX Studios</h1>
            {ButtonsPage(0)}
        </header>
    )
}

export default HeaderIndex;