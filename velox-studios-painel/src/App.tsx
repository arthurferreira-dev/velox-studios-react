import { useRef, useState } from "react";
import { FormGroup } from "./components/FormGroup";

export default function App() {
  const inputFileRef = useRef<HTMLInputElement | null>(null); // Aqui você consegue acessar todas a propriedades do input file sem o id
  const inputTitleRef = useRef<HTMLInputElement | null>(null);
  const inputTagRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string>(
    "Nenhuma imagem selecionada"
  );

  const handleOnSelectFile = () => {
    const fileInput = inputFileRef.current?.files?.[0];

    if (fileInput) {
      setFileName(fileInput.name);
    } else {
      setFileName("Nenhuma imagem selecionada!");
    }
  };

  const handleSubmitEvent = (e: React.FormEvent) => {
    e.preventDefault();

    const title = inputTitleRef.current?.value;
    const tag = inputTagRef.current?.value;
    const image = inputFileRef.current?.files?.[0];

    const newsData = {
      title,
      tag,
      image
    }

    console.log('Objeto para API com  método POST:', newsData);
  }

  return (
    <div className="w-full max-w-[500px]">
      <div className="dashboard">
        <h1 className="title">&#x1F4DD; Cadastro de Notícias</h1>
        <p className="subtitle">Preencha os campos abaixo</p>

        <form className="form" onSubmit={handleSubmitEvent}>
          <FormGroup>
            <label htmlFor="inputTitle">Título</label>
            <input
              type="text"
              id="inputTitle"
              name="inputTitle"
              ref={inputTitleRef}
              placeholder="Digite um título..."
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="inputImage">Selecionar Imagem</label>
            <input
              type="file"
              id="inputImage"
              name="inputImage"
              accept="image/*"
              onChange={handleOnSelectFile}
              ref={inputFileRef}
              required
            />
            <span className="file-label">{fileName}</span>
          </FormGroup>
          <FormGroup>
            <label htmlFor="inputTag">Tag</label>
            <input
              type="text"
              id="inputTag"
              name="inputTag"
              ref={inputTagRef}
              placeholder="Digite uma tag..."
              required
            />
          </FormGroup>

          <button type="submit" className="btn-send">Enviar</button>
        </form>
      </div>
    </div>
  );
}