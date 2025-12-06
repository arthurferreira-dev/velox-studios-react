import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./tailwind.css"; //? TailwindCSS + DaisyUI
import "./App.scss";

createRoot(document.querySelector("body")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);