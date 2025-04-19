const component1 = document.getElementById("component1");

// O link q categoria
const categoLink = document.getElementsByClassName("frame23830")[0];
// A div dropdown categoria.
const dropDownCategoria = document.getElementsByClassName("dropDownCategoria")[0];

// O link q departamento
const departamentoLinks = document.getElementsByClassName("categoriaDepartamento");
// A div dropdown departamento.
const dropDownDepartamento = document.getElementsByClassName("dropDownDepartamento")[0];

// -------------------Categoria dropDown menu-------------------
categoLink.addEventListener("mouseover", function () {
  dropDownCategoria.style.display = "flex";
  dropDownDepartamento.style.display = "none";
});

// -------------------Departamento dropDown menu-------------------
Array.from(departamentoLinks).forEach((element) => {
  element.addEventListener("mouseover", function () {
    dropDownDepartamento.style.display = "flex";
    dropDownCategoria.style.display = "none";
  });
});

// O menu desaparece quando o mouse sai do mennu ou dropDownCategoria menu-------
component1.addEventListener("mouseleave", function () {
  dropDownCategoria.style.display = "none";
  dropDownDepartamento.style.display = "none";
});
