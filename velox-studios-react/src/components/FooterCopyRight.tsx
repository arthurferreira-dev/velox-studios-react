import { CopyrightIcon } from "lucide-react";

export const FooterCopyRight = () => {
  const date: Date = new Date();
  const year: number = date.getFullYear();
  const Onwer: string = "VX Studios";

  return (
    <footer className="font-poppins footer-copyright">
      <div className="flex justify-center items-center gap-2">
        <CopyrightIcon size={22} /> {year} {Onwer} | Todos os direitos reservados
      </div>
    </footer>
  );
};