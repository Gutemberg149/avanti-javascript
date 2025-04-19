document.querySelectorAll(".accordion-title").forEach((header) => {
  header.addEventListener("click", () => {
    // Toggle as classes active
    header.classList.toggle("active");

    // Para fechar os itens
    document.querySelectorAll(".accordion-title").forEach((item) => {
      if (item !== header) {
        item.classList.remove("active");
      }
    });
  });
});
