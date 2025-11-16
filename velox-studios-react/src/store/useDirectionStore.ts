import { create } from "zustand";

interface DirectionStore {
  direction: string;
  setDirection: (direction: string) => void;
}

export const useDirectionStore = create<DirectionStore>((set) => ({
  direction: "flex-row flex-nowrap",
  setDirection: (direction: string) => set({ direction: direction }),
}));