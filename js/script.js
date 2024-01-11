const ImgAtiva = document.querySelector(".imgAtiva");
const ImgOpcao = document.querySelectorAll(".opcao");
const IconeCar = document.querySelector(".iconeCar");
const containerHome = document.querySelector(".containerHomer");
const carHomeVazio = document.querySelector(".carHomeVazio");
const carHomeItem = document.querySelector(".carHomeItem");
const VoltHome = document.querySelector(".btnVoltarHome");
const inputLength = document.getElementById("length");
const btnAddCar = document.querySelector(".addCar");
const qntItemCar = document.querySelector(".qntItemCar");
const valorTenis = document.querySelector(".valorTenis");
const ImgCar = document.querySelector(".imgPrincCar");

const descricoes = [
  "Redley Originals Branco.",
  "Redley Originals Marrom.",
  "Redley Originals Preto.",
  "Redley Originals Azul.",
];

let quantidadeItensCarrinho = 0;
let valor = 0;

// Função
function adicionarItemAoCarrinho() {
  const valorInput = inputLength.value;
  quantidadeItensCarrinho += valorInput;
}

function caulcularValor(qnt) {
  if (qnt > 0) {
    return (qnt * 187.9).toString();
  }
}

// Eventos
ImgOpcao.forEach((imagem, index) => {
  imagem.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove a borda de todas as imagens
    ImgOpcao.forEach((img) => {
      img.classList.remove("open");
    });

    // Adiciona a borda apenas à imagem clicada
    imagem.classList.add("open");

    // Atualiza a imagem principal para a imagem clicada
    const imgPrinc = document.querySelector(".imgPrincipal");
    imgPrinc.src = imagem.src;
    imagem.classList.add("Ativa");

    // Atualizando a Descrição do Produto
    const descricaoElemento = document.querySelector(".descricao p");

    descricaoElemento.textContent = descricoes[index];
  });
});

IconeCar.addEventListener("click", (e) => {
  e.preventDefault();

  if (containerHome.style.display !== "none" && inputLength.value < 1) {
    containerHome.style.display = "none";
    carHomeVazio.style.display = "flex";
  } else {
    if (inputLength.value > 0) {
      containerHome.style.display = "none";
      carHomeItem.style.display = "flex";
    }
  }
});

VoltHome.addEventListener("click", (e) => {
  e.preventDefault();

  containerHome.style.display = "flex";
  carHomeVazio.style.display = "none";
});

btnAddCar.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputLength.value > 0) {
    qntItemCar.textContent = inputLength.value;
    valorTenis.textContent = caulcularValor(inputLength.value);
  }
});
