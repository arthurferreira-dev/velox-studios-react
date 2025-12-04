import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import PageUpdate from "./pages/Pageupdate";

createRoot(document.querySelector("body")!).render(
  <StrictMode>
    <PageUpdate/>
  </StrictMode>
);