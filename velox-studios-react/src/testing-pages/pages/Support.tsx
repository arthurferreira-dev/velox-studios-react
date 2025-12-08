import { useRef, useState, useEffect } from "react";
import HeaderIndex from "../components/Headerindex";
import { MainGrow } from "../components/Container";
import { FooterCopyRight } from "../../components/FooterCopyRight";
import type { Props } from "../../utils/Props";
import { MessageSquare, Bug } from "lucide-react";
import { useNavigator } from "../hooks/useNavigator";
import { VX_EMAIL } from "../../utils/Variables";

export const Support = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formTitle, setFormTitle] = useState<string>("");
  const [inputName, setInputName] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [textAreaMsg, setTextAreaMsg] = useState<string>("");
  const formRef = useRef<HTMLFormElement | null>(null);
  const divFormRef = useRef<HTMLDivElement | null>(null);
  const navigateTo = useNavigator().navigateTo;

  useEffect(() => {
    if (showForm && divFormRef.current) {
      const y =
        divFormRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        80;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }, [showForm]);

  const DivSupport = ({ children }: Props) => {
    return <div className="flex-center flex-col gap-5.5">{children}</div>;
  };

  const onSubmitForm = () => {
    if (!inputEmail && !textAreaMsg) {
      alert("Porfavor preencha o formulário do email e da mensagem!");
      formRef.current?.clear();
    }

    navigateTo(
      `mailto:${VX_EMAIL}?subject=${encodeURIComponent(
        formTitle
      )}&body=Nome:%20${encodeURIComponent(
        inputName ? inputName : "Anônimo"
      )}%0AEmail:%20${encodeURIComponent(
        inputEmail
      )}%0AMensagem:%20${encodeURIComponent(textAreaMsg)}`
    );
  };

  return (
    <>
      <HeaderIndex />
      <MainGrow>
        <div className="w-full flex-center flex-col gap-5 font-poppins">
          <div id="support-btns">
            <h1 className="text-2xl font-bold">Suporte</h1>
            <div className="flex-center flex-col gap-5">
              <DivSupport>
                <h2 className="font-[400] text-lg">Quer tirar uma dúvida?</h2>
                <button
                  className="button gap-3 btn-sup-question duration-300 font-semibold rounded-full"
                  onClick={() => {
                    setFormTitle("Tirar dúvida");
                    setShowForm(true);
                    formRef.current?.reset();
                  }}
                >
                  <MessageSquare /> Tirar dúvida
                </button>
              </DivSupport>
              <DivSupport>
                <h2 className="font-[400] text-lg">
                  Quer reportar um erro ou bug?
                </h2>
                <button
                  className="button btn-support btn-sup-bug"
                  onClick={() => {
                    setFormTitle("Reportar bug");
                    setShowForm(true);
                    formRef.current?.reset();
                  }}
                >
                  <Bug /> Reportar Bug
                </button>
              </DivSupport>
            </div>
          </div>
          <div
            id="content-send-email"
            className={showForm ? "glass-card" : "hidden"}
            ref={divFormRef}
          >
            <h1 className="text-center mb-4 text-2xl font-semibold">
              {formTitle}
            </h1>
            <form
              id="supForm"
              autoComplete="on"
              ref={formRef}
              onSubmit={onSubmitForm}
            >
              <input
                type="text"
                placeholder="Digite seu nome..."
                autoComplete="name"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Digite seu email..."
                autoComplete="email"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$" // Verificador de Email com Regex
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                required
              />
              <textarea
                rows={5}
                placeholder="Coloque sua mensagem..."
                value={textAreaMsg}
                onChange={(e) => setTextAreaMsg(e.target.value)}
                required
              />
              <div className="flex justify-center items-center gap-4.5 mt-4">
                <button
                  type="submit"
                  className="button button-see rounded-full w-[140px]"
                >
                  Enviar
                </button>
                <button
                  type="button"
                  className="button btn-cancel rounded-full w-[140px]"
                  onClick={() => {
                    setShowForm(false);
                  }}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </MainGrow>
      <FooterCopyRight />
    </>
  );
};
