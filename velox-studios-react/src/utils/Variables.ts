export const screenWidth: number = window.innerWidth;

export const Pagesname: string[] = [
  "Descontrário",
  "Jogos",
  "Suporte",
  "Novidades",
  "KC Bot",
]; //! Buttons Names
export const Pagespath: string[] = [
  "/",
  "/jogos",
  "/suporte",
  "/novidades",
  "/kcbot",
]; //! Pages Names

export const buttonsCL: string =
  "p-2 w-[150px] flex justify-center items-center gap-3 rounded-md text-[1.2rem] max-[500px]:text-base text-white duration-300 hover:-translate-y-1 hover:cursor-pointer hover:bg-slate-500/40 btn-ghost text-center";

export const iconCL: string =
  "text-white bg-slate-600 text-center p-3 rounded-[100%] max-[501px]:block hover:cursor-pointer hover:bg-slate-500 duration-300";

export const getDivBtnsMobile = (click: boolean, direction: string) =>
  click ? `flex ${direction} gap-4` : `flex ${direction} gap-4 hidden`;

export const NamesBtn = (removeIndex: number): string[] => {
  return Pagesname.filter((_, i) => i !== removeIndex);
};

export const PathBtn = (removeIndex: number): string[] => {
  return Pagespath.filter((_, i) => i !== removeIndex);
};

export const VX_EMAIL = import.meta.env.VITE_VX_EMAIL;