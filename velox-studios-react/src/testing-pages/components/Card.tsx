import type { Props } from "../../utils/Props";

export const CardGames = ({ children }: Props) => {
  return (
    <div className="card media-card shadow-sm bg-slate-800 mt-3.5">
      {children}
    </div>
  );
};

export const CardBodyGames = ({ children }: Props) => {
  return (
    <div className="card-body text-center flex-center flex-col gap-4.5">
      {children}
    </div>
  );
};