import { FooterCopyRight } from "../components/FooterCopyRight";
import { Headers } from "../components/header";
import { NewsSlash } from "../components/novidades/newsSlash";
import { NamesBtn, PathBtn } from "../utils/Variables";

export default function PageNews() {
  return (
    <>
      <Headers pageName={3} Names={NamesBtn(2)} Path={PathBtn(2)}>
        <h1 className="text-center text-white text-xl">Novidades</h1>
      </Headers>
      <main>{NewsSlash(3)}</main>
      <FooterCopyRight/>
    </>
  );
}