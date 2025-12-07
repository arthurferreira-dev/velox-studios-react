import { useState, useEffect } from "react";
import { useMainPath } from "../../store/useMainStore";
import { imgsDataArts } from "../../api/api-vx";
import { Container } from "./Container";
import { Home } from "../pages/Home";
import { Games } from "../pages/Games";

export const PageWithPath = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { path } = useMainPath();

  useEffect(() => {
    const loadApi = async () => {
      try {
        const req = await fetch(imgsDataArts[0].src);
        if (!req) throw new Error("Error to load the API!");

        setLoading(false);
      } catch (error) {
        console.error("Error to fetch this API: ", error);
        setLoading(false);
      }
    };
    loadApi();
  }, []);

  const animated: string = "animate__animated";

  if (loading) {
    return (
      <div className="w-full flexCol min-h-screen">
        <div className={`${animated} delay-75 animate__pulse grow`}>
          <div className="w-full h-[120px] bg-gray-700 rounded-md" />
          <br />
          <div className="w-full h-[150px] bg-gray-700 rounded-none" />
          <div className="mt-4 w-[300px] h-8 bg-gray-700 mx-auto rounded" />
          <div className="mt-3 w-[600px] max-[501px]:w-[350px] h-24 bg-gray-700 mx-auto rounded" />
          <div className="mt-6 w-[120px] h-[120px] bg-gray-700 mx-auto rounded-full" />
        </div>
      </div>
    );
  } else if (path === "/") {
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
  }
};
