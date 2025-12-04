import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./tailwind.css";
import "./App.css";
import "animate.css";

createRoot(document.querySelector("body")!).render(
  <RouterProvider router={router} />
);