document.addEventListener("DOMContentLoaded", function () {
  // Elementos principais
  const component1 = document.getElementById("component1");
  const categoLink = document.getElementsByClassName("frame23830")[0];
  const dropDownCategoria = document.getElementsByClassName("dropDownCategoria")[0];
  const verTodasAsCatgorias = document.getElementsByClassName("verTodasAsCatgorias")[0];
  const departamentoLinks = document.getElementsByClassName("categoriaDepartamento");
  const dropDownDepartamentos = document.getElementsByClassName("dropDownDepartamento");

  // Elementos para os menus de categoria
  const frames = document.querySelectorAll(".frame23832");
  const textDropDown = document.querySelectorAll(".textDropDown");
  const chevronRight = document.querySelectorAll(".fa-chevron-right");
  const containers = document.querySelectorAll(".categoriasShow");

  // Elementos do menu mobile
  const menuBurger = document.querySelector(".menuBurger01");
  const iconMenuClose = document.querySelector(".iconMenuClose");
  const homeMenu = document.getElementById("homeMenu");

  // Funções auxiliares
  function esconderTodosDepartamentos() {
    Array.from(dropDownDepartamentos).forEach((menu) => {
      menu.style.display = "none";
    });
  }

  function esconderTodasCategorias() {
    dropDownCategoria.style.display = "none";
  }

  // Inicialização
  esconderTodosDepartamentos();
  esconderTodasCategorias();
  containers.forEach((container) => {
    container.style.display = "none";
  });
  containers[0].style.display = "flex";

  // Tamno da tela
  const isMobile = window.innerWidth <= 390;

  // Comportamento do dropdown
  if (!isMobile && categoLink) {
    categoLink.addEventListener("mouseover", function () {
      dropDownCategoria.style.display = "flex";
      esconderTodosDepartamentos();
    });
  }

  if (isMobile && verTodasAsCatgorias) {
    verTodasAsCatgorias.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      dropDownCategoria.style.display = dropDownCategoria.style.display === "flex" ? "none" : "flex";
      esconderTodosDepartamentos();
    });
  }

  // Comportamento dos dropdowns de departamento
  Array.from(departamentoLinks).forEach((element, index) => {
    if (!isMobile) {
      element.addEventListener("mouseover", function () {
        dropDownCategoria.style.display = "none";
        esconderTodosDepartamentos();
        if (dropDownDepartamentos[index]) {
          dropDownDepartamentos[index].style.display = "flex";
        }
      });
    } else {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        esconderTodasCategorias();

        const currentDept = dropDownDepartamentos[index];
        if (currentDept) {
          const isVisible =
            currentDept.style.display === "flex" || (currentDept.style.display === "" && window.getComputedStyle(currentDept).display === "flex");

          esconderTodosDepartamentos();
          currentDept.style.display = isVisible ? "none" : "flex";
        }
      });
    }
  });

  // Comportamento ao sair do componente
  component1.addEventListener("mouseleave", function () {
    esconderTodasCategorias();
    esconderTodosDepartamentos();
  });

  // Navegação entre categorias
  frames.forEach((frame, index) => {
    frame.addEventListener("mouseover", () => {
      textDropDown.forEach((text) => (text.style.color = "#656565"));
      chevronRight.forEach((chevron) => (chevron.style.color = "#656565"));

      textDropDown[index].style.color = "#005cff";
      chevronRight[index].style.color = "#005cff";

      containers.forEach((container) => (container.style.display = "none"));
      if (containers[index]) {
        containers[index].style.display = "flex";
      }
    });
  });

  // Controle do menu mobile
  function handleResize() {
    if (window.innerWidth <= 390) {
      homeMenu.style.transform = "translateX(-160px)";
      iconMenuClose.style.display = "none";
      menuBurger.style.display = "block";
    } else {
      homeMenu.style.transform = "none";
      iconMenuClose.style.display = "none";
      menuBurger.style.display = "none";
    }
  }

  handleResize();
  window.addEventListener("resize", handleResize);

  menuBurger.addEventListener("click", () => {
    homeMenu.style.transform = "translateX(0px)";
    menuBurger.style.display = "none";
    iconMenuClose.style.display = "block";
  });

  iconMenuClose.addEventListener("click", () => {
    esconderTodosDepartamentos();
    esconderTodasCategorias();
    homeMenu.style.transform = "translateX(-160px)";
    iconMenuClose.style.display = "none";
    menuBurger.style.display = "block";
  });

  // Tratamento de redimensionamento
  window.addEventListener("resize", function () {
    const nowMobile = window.innerWidth <= 390;
    esconderTodasCategorias();
    esconderTodosDepartamentos();

    if (nowMobile !== isMobile) {
      location.reload();
    }
  });
});
