import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import { AuthPage } from "../pages/Auth.tsx";
import { PrivateRoute } from "./PrivateRoute.tsx";
import type React from "react";

interface RouteType {
  path: string;
  element: React.ReactNode;
  children?: RouteType[];
}

const routing: RouteType[] = [
  {
    path: "/",
    element: <AuthPage />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute />,
    children: [
      {
        path: "/dashboard",
        element: <App />,
      },
    ],
  },
];

export const router = createBrowserRouter(routing);