import type { Props } from "../../utils/Props";

export const Container = ({ children }: Props) => {
  return <div className="flexCol min-h-screen">{children}</div>;
};

export const MainGrow = ({ children }: Props) => {
  return <main className="w-full mx-auto grow">{children}</main>;
};