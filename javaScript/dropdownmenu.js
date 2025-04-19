document.addEventListener("DOMContentLoaded", function () {
  const component1 = document.getElementById("component1");
  const categoLink = document.getElementsByClassName("frame23830")[0];
  const dropDownCategoria = document.getElementsByClassName("dropDownCategoria")[0];
  const departamentoLinks = document.getElementsByClassName("categoriaDepartamento");
  const dropDownDepartamentos = document.getElementsByClassName("dropDownDepartamento");

  // Esconder todos os dropdowns no inicio
  dropDownCategoria.style.display = "none";
  Array.from(dropDownDepartamentos).forEach((menu) => {
    menu.style.display = "none";
  });

  // ------------------- Dropdown da Categoria Principal -------------------
  categoLink.addEventListener("mouseover", function () {
    // Mostrar dropdown da categoria principal
    dropDownCategoria.style.display = "flex";
    // Esconder todos os dropdowns de departamentos
    Array.from(dropDownDepartamentos).forEach((menu) => {
      menu.style.display = "none";
    });
  });

  // ------------------- Dropdowns de Departamentos -------------------
  Array.from(departamentoLinks).forEach((element, index) => {
    element.addEventListener("mouseover", function () {
      // Esconder dropdown da categoria principal
      dropDownCategoria.style.display = "none";

      // Esconder todos os dropdowns de departamentos primeiro
      Array.from(dropDownDepartamentos).forEach((menu) => {
        menu.style.display = "none";
      });

      // Mostrar apenas o dropdown de departamento que que o mouse passar por cima
      if (dropDownDepartamentos[index]) {
        dropDownDepartamentos[index].style.display = "flex";
      }
    });
  });

  // ------------------- Esconder Tudo Quando o Mouse Sair do Componente -------------------
  component1.addEventListener("mouseleave", function () {
    dropDownCategoria.style.display = "none";
    Array.from(dropDownDepartamentos).forEach((menu) => {
      menu.style.display = "none";
    });
  });
  // --------------------------------------------------------------------

  const frames = document.querySelectorAll(".frame23832");
  const textDropDown = document.querySelectorAll(".textDropDown");
  const chevronRight = document.querySelectorAll(".fa-chevron-right");
  const containers = document.querySelectorAll(".categoriasShow");

  containers.forEach((container) => {
    container.style.display = "none";
  });

  containers[0].style.display = "flex"; // Mostrar o primeiro container inicialmente

  frames.forEach((frame, index) => {
    frame.addEventListener("mouseover", () => {
      textDropDown.forEach((text) => {
        text.style.color = "#656565"; // Resetar a cor de todos os textos
      });

      chevronRight.forEach((chevron) => {
        chevron.style.color = "#656565"; // Resetar a cor de todos os ícones de chevron
      });

      textDropDown[index].style.color = "#005cff"; // Mudar a cor do texto associado ao frame quando o mouse passar.
      chevronRight[index].style.color = "#005cff"; // Mudar a cor do chevron associado ao frame quando o mouse passar.

      containers.forEach((container) => {
        container.style.display = "none"; // Esconder todos os containers
      });

      // Mostrar o container com base no índice
      if (containers[index]) {
        containers[index].style.display = "flex";
      }
    });
  });
});
