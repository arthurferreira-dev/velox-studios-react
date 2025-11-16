import { createRoot } from "react-dom/client";
import { Headers } from "../components/header";
import MainSons from "../sons";
import "../tailwind.css";
import "../App.css";
import { NamesBtn, PathBtn } from "../utils/Variables";
import { FooterCopyRight } from "../components/FooterCopyRight";

createRoot(document.querySelector("body")!).render(
  <>
    <Headers pageName={1} Names={NamesBtn(4)} Path={PathBtn(4)}>
      <h1 className="text-center text-white text-xl">Jogos</h1>
    </Headers>
    <MainSons />
    <FooterCopyRight/>
  </>
);