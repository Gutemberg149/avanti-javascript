// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o elemento do slider e os dots de navegação
  const innerSection01 = document.querySelector(".innerSection01");
  const dots = [document.querySelector(".sec01dot01"), document.querySelector(".sec01dot02"), document.querySelector(".sec01dot03")];

  let currentIndex = 0; // Índice do slide
  let slideInterval; // Referência para o intervalo do slider
  const mobileBreakpoint = 390;

  // Inicializa o slider quando a página carrega
  initSlider();

  window.addEventListener("resize", function () {
    clearInterval(slideInterval); // Limpa o intervalo anterior
    initSlider(); // Reinicializa o slider com o novo tamanho
  });

  function initSlider() {
    // Verifica se a janela está no tamanho mobile
    const isMobile = window.innerWidth <= mobileBreakpoint;

    if (isMobile) {
      // Configuração inicial para mobile
      dots[0].style.backgroundColor = "#303030"; // Primeiro dot ativo

      // Intervalo para troca automática de slides
      slideInterval = setInterval(() => {
        showNextItem();
        updateDots();
      }, 2000);
    } else {
      // Reset para desktop
      innerSection01.style.transform = ""; // Remove transformação
    }
  }

  // Função para avançar para o próximo slide
  function showNextItem() {
    // Só executa em mobile
    if (window.innerWidth <= mobileBreakpoint) {
      if (currentIndex <= 1) {
        // Move o slider para a esquerda (próximo slide)
        innerSection01.style.transform = `translateX(-${currentIndex * 390}px)`;
        currentIndex++;
      } else {
        // Volta para o primeiro slide
        currentIndex = 0;
        innerSection01.style.transform = `translateX(390px)`;
      }
    }
  }

  // Atualiza a aparência dos dots de navegação
  function updateDots() {
    dots.forEach((dot, index) => {
      // Dot ativo fica escuro, inativos ficam claros
      dot.style.backgroundColor = index === currentIndex ? "#303030" : "#838383";
    });
  }
});
