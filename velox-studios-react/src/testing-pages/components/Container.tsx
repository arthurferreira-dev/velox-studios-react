import type { Props } from "../../utils/Props";

export const Container = ({ children }: Props) => {
  return <div className="flexCol min-h-screen">{children}</div>;
};

export const MainNoGrow = ({ children }: Props) => {
  return <main className="w-[100%] mx-auto grow">{children}</main>;
};