import { useEffect } from "react";
import { useMainPath } from "../../store/useMainStore";
import { imgsDataArts } from "../../api/api-vx";
import { Container } from "./Container";
import { Home } from "../pages/Home";
import { Games } from "../pages/Games";
import { Support } from "../pages/Support";

export const PageWithPath = () => {
  const { path } = useMainPath();

  useEffect(() => {
    const loadApi = async () => {
      try {
        const req = await fetch(imgsDataArts[0].src);
        if (!req) throw new Error("Error to load the API!");
      } catch (error) {
        console.error("Error to fetch this API: ", error);
      }
    };
    loadApi();
  }, []);

  if (path === "/") {
    return (
      <Container>
        <Home />
      </Container>
    );
  } else if (path === "/jogos") {
    return (
      <Container>
        <Games />
      </Container>
    );
  } else if (path === "/suporte") {
    return (
      <Container>
        <Support />
      </Container>
    );
  }
};