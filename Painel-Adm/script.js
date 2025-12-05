const formulario = document.getElementById('formulario');
const inputTitulo = document.getElementById('titulo');
const inputImagem = document.getElementById('imagem');
const inputTag = document.getElementById('tag');
const fileLabel = document.querySelector('.file-label');

inputImagem.addEventListener('change', (event) => {
    const arquivo = event.target.files[0];
    if (arquivo) {
        fileLabel.textContent = arquivo.name;
        fileLabel.style.color = 'rgba(168, 85, 247, 0.8)';
    } else {
        fileLabel.textContent = 'Nenhuma imagem selecionada';
        fileLabel.style.color = 'rgba(255, 255, 255, 0.5)';
    }
});

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const titulo = inputTitulo.value.trim();
    const tag = inputTag.value.trim();
    const arquivo = inputImagem.files[0];

    if (!titulo || !arquivo || !tag) {
        alert('Preencha todos os campos antes de enviar!');
        return;
    }

    const urlImagem = URL.createObjectURL(arquivo);

    const obj = {
        titulo: titulo,
        img: urlImagem,
        tag: tag
    };

    console.log(obj);

    /*
    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("tag", tag);
    formData.append("imagem", arquivo);

    fetch("URL-DA-API", {
        method: "POST",
        body: formData
    });
    */
});