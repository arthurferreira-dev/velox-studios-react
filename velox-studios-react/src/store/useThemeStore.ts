import { create } from "zustand";

interface ThemeStoreProps {
  theme: string;
  set: (theme: string) => void;
}

export const useThemeStore = create<ThemeStoreProps>((set) => ({
  theme: "dark",
  set: (theme: string) => set({ theme: theme }),
}));