import { useState, useEffect } from "react";
import { VerifyIcon } from "../utils/Functions";
import { useMainPath } from "../store/useMainStore";

interface BtnsMobile {
  click: boolean;
  NamesBtn: string[];
  PathBtn: string[];
}

export const DivBtnsMobile = ({ NamesBtn, PathBtn, click }: BtnsMobile) => {
  const [oppendMenu, setOppendMenu] = useState(false);
  const { setPath } = useMainPath();

  useEffect(() => {
    setOppendMenu(true);
  }, [click]);

  const defaultContainerCL =
    "fixed left-0 top-[60px] w-full bg-slate-600 shadow-lg flex flex-col justify-center items-center p-4 gap-4 mt-2 animate__animated animate__faster rounded-b-xl z-50";

  return (
    <div
      className={
        !oppendMenu
          ? `${defaultContainerCL} opacity-0 pointer-events-none`
          : click
          ? `${defaultContainerCL} animate__slideInLeft`
          : `${defaultContainerCL} animate__slideOutLeft`
      }
    >
      {NamesBtn.map((name, index) => (
        <button
          key={index}
          className="p-2.5 w-full flex justify-center items-center gap-3 rounded-md text-[1.2rem] max-[500px]:text-base text-white duration-200 hover:bg-slate-500/40"
          onClick={() => setPath(PathBtn[index])}
        >
          {VerifyIcon(name)} {name}
        </button>
      ))}
    </div>
  );
};