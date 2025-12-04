import { createRoot } from "react-dom/client";
import PageNews from "./pages/Pagenews";
import "./tailwind.css";
import "./App.css";
import 'animate.css';

createRoot(document.querySelector("body")!).render(<PageNews />);