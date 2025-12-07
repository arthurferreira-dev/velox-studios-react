import { v4 } from "uuid";
import type { ApiListImgs } from "../utils/Props";

export const API_VX: string = "https://vx-api.onrender.com";

export const API = {
  arts: `${API_VX}/imgs/arts`,
  auras: `${API_VX}/imgs/auras`,
  audios: `${API_VX}/audios`,
  backgrounds: `${API_VX}/imgs/backgrounds`,
  descontrario: `${API_VX}/imgs/descontrario`,
  logos: `${API_VX}/imgs/logos`,
  persons: `${API_VX}/imgs/persons`,
};

export const imgsDataArts: ApiListImgs[] = [
  { id: v4(), src: `${API.arts}/sprites-1` },
  { id: v4(), src: `${API.arts}/sprites-2` },
  { id: v4(), src: `${API.arts}/esboco-artes` },
];

export const imgsDataDescontrario: ApiListImgs[] = [
  { id: v4(), src: `${API.descontrario}/logo-vx` },
];

export const imgsDataAuras: ApiListImgs[] = [
  { id: v4(), src: `${API.auras}/1` },
  { id: v4(), src: `${API.auras}/2` },
];