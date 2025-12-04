export const screenWidth: number = window.innerWidth;

export const Pagesname: string[] = [
  "Jogos",
  "Suporte",
  "Novidades",
  "KC Bot",
  "Home",
]; //! Buttons Names
export const Pagespath: string[] = [
  "/jogos",
  "/suporte",
  "/novidades",
  "/kcbot",
  "/",
]; //! Pages Names

export const buttonsCL: string =
  "bg-slate-600 p-2 rounded-md text-lg max-[500px]:text-base text-white hover:cursor-pointer hover:bg-slate-500 duration-300";

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