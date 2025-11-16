import { useState, useEffect } from "react";
import { iconCL, buttonsCL, NamesBtn, PathBtn } from "../utils/Variables";
import { HandleLinkBtn } from "../utils/Functions";
import { Menu, X } from "lucide-react";
import { useClickStore } from "../store/useClickStore";
import type { Props } from "../utils/Props";
import { DivBtnsMobile } from "./divBtnsMobile";

interface PropsHeader extends Props {
  pageName: number;
  Names: string[];
  Path: string[];
}

export function Headers(props: PropsHeader) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { click, setClick } = useClickStore();

  useEffect(() => {
    const FixScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", FixScreenWidth);

    return () => window.removeEventListener("resize", FixScreenWidth);
  }, []);

  const name = NamesBtn(props.pageName);
  const path = PathBtn(props.pageName);

  return (
    <>
      <header className="bg-gray-700 p-[13.5px] w-[100%] flex justify-between items-center">
        {props.children}
        <div
          className={screenWidth < 501 ? iconCL : "hidden"}
          onClick={() => setClick()}
        >
          {click ? <X size={22} /> : <Menu size={22} />}
        </div>
        <div className={screenWidth < 501 ? "hidden" : "flex gap-4"}>
          {props.Names.map((name, index) => (
            <button
              key={index}
              className={buttonsCL}
              onClick={HandleLinkBtn(props.Path[index])}
            >
              {name}
            </button>
          ))}
        </div>
      </header>
      {screenWidth < 501 && (
        <DivBtnsMobile NamesBtn={name} PathBtn={path} click={click} />
      )}
    </>
  );
}