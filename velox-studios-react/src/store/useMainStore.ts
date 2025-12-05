import { create } from "zustand";

interface MainStore {
  path: string;
  setPath: (path: string) => void;
}

export const useMainPath = create<MainStore>((set) => ({
  path: "/",
  setPath: (path: string) => set({ path: path }),
}));