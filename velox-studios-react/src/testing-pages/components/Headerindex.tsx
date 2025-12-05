import { useState, useEffect } from "react";
import { buttonsCL, iconCL, Pagesname, Pagespath } from "../../utils/Variables";
import { VerifyIcon } from "../../utils/Functions";
import { LuMenu, LuX } from "react-icons/lu";
import { useClickStore } from "../../store/useClickStore";
import { DivBtnsMobile } from "../../components/divBtnsMobile";
import { useMainPath } from "../../store/useMainStore";

function HeaderIndex() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { click, setClick } = useClickStore();
  const { setPath } = useMainPath();

  useEffect(() => {
    const Resposive = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", Resposive);

    return () => {
      window.removeEventListener("resize", Resposive);
    };
  }, []);

  const names = Pagesname;
  const path = Pagespath;

  return (
    <header className="sticky w-[100%] top-0 z-50 shadow-md">
      <div
        className="bg-slate-700 flex items-center justify-between p-3.5 flex-row min-[700px]:flex-col min-[980px]:flex-row"
      >
        <h1 className="font-poppins text-xl font-medium">Velox Studios</h1>
        <div
          className={screenWidth < 700 ? iconCL : "hidden"}
          onClick={() => setClick()}
        >
          {click ? <LuX size={22} /> : <LuMenu size={22} />}
        </div>
        <div className={screenWidth < 820 ? "hidden" : "flex gap-4"}>
          {names.map((name, index) => (
            <button
              key={index}
              className={buttonsCL}
              onClick={() => setPath(path[index])}
            >
              {VerifyIcon(name)} {name}
            </button>
          ))}
        </div>
      </div>
      {screenWidth < 700 && (
        <DivBtnsMobile NamesBtn={names} PathBtn={path} click={click} />
      )}
    </header>
  );
}

export default HeaderIndex;
