import { useState, useEffect } from "react";
import { buttonsCL, iconCL, NamesBtn, PathBtn } from "../../utils/Variables";
import { HandleLinkBtn } from "../../utils/Functions";
import { Menu, X } from "lucide-react";
import { useClickStore } from "../../store/useClickStore";
import { DivBtnsMobile } from "../../components/divBtnsMobile";
import VX_Logo from '/assets/velox-studios.png';

function HeaderIndex() {
  const [wdtImg, setWtdImg] = useState(70);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { click, setClick } = useClickStore();

  useEffect(() => {
    const ResposiveImg = () => {
      setScreenWidth(window.innerWidth);
      setWtdImg(window.innerWidth < 501 ? 61 : 70);
    };

    window.addEventListener("resize", ResposiveImg);

    return () => {
      window.removeEventListener("resize", ResposiveImg);
    };
  }, []);

  const names = NamesBtn(4);
  const path = PathBtn(4);

  return (
    <>
      <header className="bg-gray-700 p-[13.5px] w-[100%] sticky top-0 z-50 shadow-md flex justify-between items-center">
        <a href="/">
          <img src={VX_Logo} width={wdtImg} />
        </a>
        <div
          className={screenWidth < 501 ? iconCL : "hidden"}
          onClick={() => setClick()}
        >
          {click ? <X size={22} /> : <Menu size={22} />}
        </div>
        <div className={screenWidth < 501 ? "hidden" : "flex gap-4"}>
          {names.map((name, index) => (
            <button
              key={index}
              className={buttonsCL}
              onClick={HandleLinkBtn(path[index])}
            >
              {name}
            </button>
          ))}
        </div>
      </header>
      {screenWidth < 501 && (
        <DivBtnsMobile NamesBtn={names} PathBtn={path} click={click} />
      )}
    </>
  );
}

export default HeaderIndex;
