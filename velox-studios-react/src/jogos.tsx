import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import PageJogos from "./pages/Pagejogos";
import "./tailwind.css";
import "./App.css";
import 'animate.css';

createRoot(document.querySelector("body")!).render(
  <StrictMode>
    <PageJogos />
  </StrictMode>
);