document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os elementos dos botões "Comprar" (que mostram os controles de quantidade)
  const buttonCompra = document.querySelectorAll(".buttonCompra");

  // Seleciona todos os containers dos controles de quantidade (+/-)
  const buttonAddProduct = document.querySelectorAll(".buttonAddProduct");

  const minus = document.querySelectorAll(".fa-minus");

  const plus = document.querySelectorAll(".fa-plus");

  // Seleciona todos os elementos que exibem a quantidade por produto
  const qtdProd = document.querySelectorAll(".qtdProd");

  // Seleciona o elemento que exibe o total de itens no carrinho
  const qtdItemCart = document.getElementById("qtdItemCart");

  // Variável que armazena o TOTAL de todos os itens no carrinho para ser mostrado nomenu.
  let total = 0;

  // Array que guarda a quantidade individual de CADA produto
  // Inicializado com zeros e com tamanho igual ao número de produtos
  const quantities = Array(buttonCompra.length).fill(0);

  // Mostra todos os botões "Comprar"
  buttonCompra.forEach((btn) => (btn.style.display = "block"));

  // Esconde todos os controles de quantidade
  buttonAddProduct.forEach((btn) => (btn.style.display = "none"));

  buttonCompra.forEach((btnMedium, index) => {
    btnMedium.addEventListener("click", () => {
      // Primeiro, mostra TODOS os botões "Comprar"
      buttonCompra.forEach((btn) => (btn.style.display = "block"));

      // Esconde TODOS os controles de quantidade
      buttonAddProduct.forEach((btn) => (btn.style.display = "none"));

      // Mostra APENAS o controle de quantidade do produto clicado
      buttonAddProduct[index].style.display = "flex";

      // Esconde APENAS o botão "Comprar" que foi clicado
      btnMedium.style.display = "none";
    });

    // Configura o botão de DIMINUIR quantidade para este produto:
    minus[index].addEventListener("click", () => {
      // Só diminui se a quantidade for maior que zero
      if (quantities[index] > 0) {
        quantities[index]--;
        total--;
        qtdProd[index].textContent = quantities[index]; // Atualiza o display referente a cada produto
      }
      qtdItemCart.innerHTML = total; // Atualiza o total no carrinho no carrinho no topo da pagina
    });

    // (com limite máximo de 99 unidades por produto)
    if (quantities[index] < 99) {
      plus[index].addEventListener("click", () => {
        quantities[index]++;
        total++;
        qtdProd[index].textContent = quantities[index]; // Atualiza o display referente a cada produto
        qtdItemCart.textContent = total; // Atualiza o total no carrinho no topo da pagina
      });
    }
  });
});
