import { create } from "zustand";

interface ClickStore {
  click: boolean;
  setClick: () => void;
}

export const useClickStore = create<ClickStore>((set) => ({
  click: false,
  setClick: () => set((state) => ({ click: !state.click })),
}));