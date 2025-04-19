const inputText = document.querySelector(".grupo17926 input[type='text']");
const searchButton = document.getElementsByClassName("frameLupa")[0];
const productSearched = document.getElementsByClassName("productSearched")[0];
const resultDisplay = document.querySelector(".resultOfSearch");
const frameLupa = document.querySelector(".frameLupa");

const dropDownCategoria_ = document.getElementsByClassName("dropDownCategoria")[0];
const dropDownDepartamento_ = document.getElementsByClassName("dropDownDepartamento")[0];

searchButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Capturar o valor do input texto
  const inputValor = inputText.value;

  // Verifica se o input está vazio.
  if (inputText.value === "") {
    resultDisplay.innerHTML = `<span class="spanSearch">Campo de busca vazio!</span>`;
  } else {
    // Aplicar ele na mensagem.
    resultDisplay.innerHTML = `<span class="spanSearch">Você buscou por :</span> ${inputValor}`;
  }

  productSearched.style.display = "flex";

  //Os dropdowns ficam inivisíveis quando a busca é feita.
  dropDownCategoria_.style.display = "none";
  dropDownDepartamento_.style.display = "none";

  //Não estar especificado na atividade, mas acho que é interessante a div sumir de alguma forma.
  //Tbm poderia ser através do mouseleave.
  setTimeout(() => {
    productSearched.style.display = "none";
  }, 6000);
});
