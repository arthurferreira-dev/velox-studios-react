import { createRoot } from "react-dom/client";
import { Headers } from "../components/header";
import MainSuporte from "../suporte";
import { NamesBtn, PathBtn } from "../utils/Variables";
import "../tailwind.css";
import "../App.css";
import { FooterCopyRight } from "../components/FooterCopyRight";

createRoot(document.querySelector("body")!).render(
  <>
    <Headers pageName={2} Names={NamesBtn(1)} Path={PathBtn(1)}>
      <h1 className="text-center text-white text-xl">Suporte</h1>
    </Headers>
    <MainSuporte />
    <FooterCopyRight/>
  </>
);