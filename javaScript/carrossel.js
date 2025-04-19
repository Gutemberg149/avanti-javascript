const leftArrows = document.getElementsByClassName("group21090");
const rightArrows = document.getElementsByClassName("group18119");
const innerFrames = document.getElementsByClassName("innerFrame12");

const elipsesList = [
  [document.getElementsByClassName("elipse110")[0], document.getElementsByClassName("elipse111")[0], document.getElementsByClassName("elipse53")[0]],
  [document.getElementsByClassName("elipse110")[1], document.getElementsByClassName("elipse111")[1], document.getElementsByClassName("elipse53")[1]],
];

let slideWidth; // Para definir a largura do slide
const maxSlides = [2, 2]; // Especificar o número máximo de slides para cada carrossel
let currentSlides = [0, 0]; // Slide currente do carrossel

// Função para definir a largura do slide com base no tamanho da tela
function setSlideWidth() {
  slideWidth = window.innerWidth <= 390 ? 184 : 1275; // Setar o slideWidth com base na largura da tela
}

// Update ellipses para o carrossel especifico
function updateElipseStyles(carouselIndex) {
  elipsesList[carouselIndex].forEach((elipse, index) => {
    if (elipse) {
      elipse.style.background = index === currentSlides[carouselIndex] ? "#303030" : "#838383";
    }
  });
}

// Update posição do slide para o carrossel especifico
function updateSlidePosition(carouselIndex) {
  const innerFrame = innerFrames[carouselIndex];
  innerFrame.style.transform = `translateX(-${currentSlides[carouselIndex] * slideWidth}px)`;
}

// Definir a função de clique do botão direito
function slideNext(carouselIndex) {
  currentSlides[carouselIndex] = currentSlides[carouselIndex] < maxSlides[carouselIndex] ? currentSlides[carouselIndex] + 1 : 0;
  updateSlidePosition(carouselIndex);
  updateElipseStyles(carouselIndex);
}

// Definir a função de clique do botão esquerdo
function slidePrev(carouselIndex) {
  leftArrows[carouselIndex].style.background = currentSlides[carouselIndex] === 0 ? "rgb(236, 88, 88)" : "white";

  // reverter a cor de fundo após 300ms
  setTimeout(() => {
    leftArrows[carouselIndex].style.background = "white";
  }, 300);

  currentSlides[carouselIndex] = currentSlides[carouselIndex] > 0 ? currentSlides[carouselIndex] - 1 : 0;
  updateSlidePosition(carouselIndex);
  updateElipseStyles(carouselIndex);
}

// Adidcionar evente listener para os botões de navegação
for (let i = 0; i < leftArrows.length; i++) {
  leftArrows[i].addEventListener("click", () => slidePrev(i));
  rightArrows[i].addEventListener("click", () => slideNext(i));
}

// Setar a largura do slide com base no tamanho da tela
setSlideWidth();

// Update innicial
for (let i = 0; i < innerFrames.length; i++) {
  updateElipseStyles(i);
  updateSlidePosition(i);
}

// Event listener para atualizar a largura do slide quando a tela for redimensionada
window.addEventListener("resize", () => {
  setSlideWidth();
  updateSlidePosition(0);
  updateSlidePosition(1);
});
