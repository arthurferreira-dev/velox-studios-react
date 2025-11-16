import { HandleLinkBtn } from "../utils/Functions";
import { buttonsCL } from "../utils/Variables";

interface BtnsMobile {
  click: boolean;
  NamesBtn: string[];
  PathBtn: string[];
}

export const DivBtnsMobile = ({ NamesBtn, PathBtn, click }: BtnsMobile) => {
  return (
    <div
      className={
        click
          ? "bg-gray-700/50 flex justify-center items-center p-3 gap-4"
          : "hidden"
      }
    >
      {NamesBtn.map((name, index) => (
        <button
          key={index}
          className={buttonsCL}
          onClick={HandleLinkBtn(PathBtn[index])}
        >
          {name}
        </button>
      ))}
    </div>
  );
};