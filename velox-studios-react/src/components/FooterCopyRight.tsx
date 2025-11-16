export const FooterCopyRight = () => {
  const date: Date = new Date();
  const year: number = date.getFullYear();
  const Onwer: string = "VX Studios";

  return (
    <footer className="bg-slate-700 text-white font-poppins p-3 mt-4 text-center">
      &copy; {year} {Onwer} | Todos os direitos reservados
    </footer>
  );
};