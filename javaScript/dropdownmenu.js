// Get all elements
const component1 = document.getElementById("component1");
const categoLink = document.getElementsByClassName("frame23830")[0];
const dropDownCategoria = document.getElementsByClassName("dropDownCategoria")[0];
const departamentoLinks = document.getElementsByClassName("categoriaDepartamento");
const dropDownDepartamentos = document.getElementsByClassName("dropDownDepartamento");

// Hide all dropdowns initially
dropDownCategoria.style.display = "none";
Array.from(dropDownDepartamentos).forEach((menu) => {
  menu.style.display = "none";
});

// ------------------- Main Category Dropdown -------------------
categoLink.addEventListener("mouseover", function () {
  // Show main category dropdown
  dropDownCategoria.style.display = "flex";
  // Hide all department dropdowns
  Array.from(dropDownDepartamentos).forEach((menu) => {
    menu.style.display = "none";
  });
});

// ------------------- Department Dropdowns -------------------
Array.from(departamentoLinks).forEach((element, index) => {
  element.addEventListener("mouseover", function () {
    // Hide main category dropdown
    dropDownCategoria.style.display = "none";
    // Hide all department dropdowns first
    Array.from(dropDownDepartamentos).forEach((menu) => {
      menu.style.display = "none";
    });
    // Show only the hovered department dropdown
    if (dropDownDepartamentos[index]) {
      dropDownDepartamentos[index].style.display = "flex";
    }
  });
});

// ------------------- Hide All When Leaving Component -------------------
component1.addEventListener("mouseleave", function () {
  dropDownCategoria.style.display = "none";
  Array.from(dropDownDepartamentos).forEach((menu) => {
    menu.style.display = "none";
  });
});
