import { useState, useEffect } from 'react'

export function ButtonsPage(pageName: number) {
    const [click, setClick] = useState(false); 
    const [direction, setDirection] = useState("flex-row flex-nowrap");
    const [divDirection, setDivDirection] = useState("flex items-center");

    useEffect(() => {
        const divBtnsDirection = () => {
            if (window.innerWidth < 501) {
                return setDirection("flex-col flex-wrap")
            } else {
                return setDirection("flex-row flex-nowrap")
            }
        }

        const divDirection = () => {
            if (window.innerWidth < 501) {
                return setDivDirection("flex flex-col items-evenly flex-wrap justify-center");
            } else {
                return setDivDirection("flex items-center");
            }
        }

        divBtnsDirection();
        divDirection();

        window.addEventListener('resize', divBtnsDirection);
        window.addEventListener('resize', divDirection);

        return () => {
            window.removeEventListener('resize', divBtnsDirection);
            window.removeEventListener('resize', divDirection);
        }
    }, []);

    const Pagesname: string[] = ['Jogos', 'Lore', 'Suporte', 'Músicas', 'KC Bot', 'Home']; //! Buttons Names
    const Pagespath: string[] = ['/jogos.html'];
    
    const buttonsCL: string = "bg-slate-600 p-2 rounded-md text-lg max-[500px]:text-base text-white hover:cursor-pointer hover:bg-slate-500 duration-300"
    const iconsCL: string = click ? "ri-close-large-line hidden text-white bg-slate-600 w-[50px] text-center p-3 rounded-[100%] max-[501px]:block hover:cursor-pointer hover:bg-slate-500 duration-300 mb-4" : "ri-menu-line hidden text-white bg-slate-600 w-[50px] text-center p-3 rounded-[100%] max-[762px]:block hover:cursor-pointer hover:bg-slate-500 duration-300";
    const divBtnsMobile: string = click ? `grid ${window.innerWidth < 501 ? "grid-cols-2" : direction} gap-4 block` : `flex ${direction} gap-4 hidden`;
    
    const toggleMenu = () => {
        setClick(!click);
    }
    
    if (pageName === 0) {
        Pagesname.splice(Pagesname.length - 1, 1);
        return (
            <div className={divDirection}>
                <i className={iconsCL} onClick={toggleMenu}/>
                <div id="pages-buttons" className={window.innerWidth < 501 ? divBtnsMobile : "flex flex-nowrap gap-4"}>
                    {Pagesname.map((name, index) => (
                        <button key={index} className={buttonsCL} onClick={HandleLinkBtn(Pagespath[index])}>
                            {name}
                        </button>
                    ))}
                </div>
            </div>
        );
    } else if (pageName === 1) {
        Pagesname.splice(Pagesname.length - Pagesname.length, 1);
        return (
            <div className={divDirection}>
                <i className={iconsCL} onClick={toggleMenu}/>
                <div id="pages-buttons" className={window.innerWidth < 501 ? divBtnsMobile : "flex flex-nowrap gap-4"}>
                    {Pagesname.map((name, index) => (
                        <button key={index} className={buttonsCL}>
                            {name}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

export function HandleLinkBtn(pagePath: string) {
    const HandleLink = () => {
        window.location.href = pagePath
    }

    return HandleLink;
}

export function CreatorBtn(content: string, className: string, event: MouseEventHandler) {
    return (
        <button className={className} onClick={event}>
            {content}
        </button>
    );
}