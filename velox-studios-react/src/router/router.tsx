import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { PageIndex } from "../testing-pages/Pageindex";

interface routings {
  path: string;
  element: React.ReactNode;
}

const routing: routings[] = [
  {
    path: "/",
    element: <PageIndex />,
  },
];

export const router = createBrowserRouter(routing);