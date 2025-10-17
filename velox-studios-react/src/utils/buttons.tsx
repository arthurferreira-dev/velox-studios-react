import { useState, useEffect } from 'react'
import type { MouseEventHandler } from 'react';

export function ButtonsPage(pageName: number) {
    const [click, setClick] = useState<boolean>(false); 
    const [direction, setDirection] = useState<string>("flex-row flex-nowrap");
    const [divDirection, setDivDirection] = useState<string>("flex items-center");

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
                return setDivDirection("flex flex-col items-center flex-wrap justify-center");
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

    const Pagesname: string[] = ['Jogos', 'Suporte', 'Novidades', 'KC Bot', 'Home']; //! Buttons Names
    const Pagespath: string[] = ['https://velox-studios.vercel.app/jogos.html', 'https://velox-studios.vercel.app/suporte.html', 'https://velox-studios.vercel.app/novidades.html', 'https://velox-studios.vercel.app/kcbot.html', 'https://velox-studios.vercel.app/index.html']; //! Pages Names
    
    const buttonsCL: string = "bg-slate-600 p-2 rounded-md text-lg max-[500px]:text-base text-white hover:cursor-pointer hover:bg-slate-500 duration-300"
    const iconsCL: string = click ? "ri-close-large-line hidden text-white bg-slate-600 w-[50px] text-center p-3 rounded-[100%] max-[501px]:block hover:cursor-pointer hover:bg-slate-500 duration-300 mb-4 grid-rows-subgrid" : "ri-menu-line hidden text-white bg-slate-600 w-[50px] text-center p-3 rounded-[100%] max-[762px]:block hover:cursor-pointer hover:bg-slate-500 duration-300 grid-rows-subgrid";
    const divBtnsMobile: string = click ? `grid ${window.innerWidth < 501 ? "grid-cols-2" : direction} gap-4 block` : `flex ${direction} gap-4 hidden`;
    
    const toggleMenu = () => {
        setClick(!click);
    }
    
    if (pageName === 0) {
        Pagesname.splice(Pagesname.length - 1, 1);
        Pagespath.splice(Pagespath.length - 1, 1);
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
        Pagespath.splice(Pagespath.length - Pagespath.length, 1);
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
    } else if (pageName === 2) {
        Pagesname.splice(Pagesname.length - 4, 1);
        Pagespath.splice(Pagespath.length - 4, 1);
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
    } else if (pageName === 3) {
        Pagesname.splice(Pagesname.length - 3, 1);
        Pagespath.splice(Pagespath.length - 3, 1);
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
    } else if (pageName === 4) {
        Pagesname.splice(Pagesname.length - 2, 1);
        Pagespath.splice(Pagespath.length - 2, 1);
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