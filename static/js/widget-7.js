setTimeout(function () {
  const url = window.location.pathname;
  const carrusel = document.querySelectorAll(".slider--small");
  const categorias = document.querySelector(".categories");
  const valores = document.querySelector(".valores-conteiner");

  if (url !== "/") {
    categorias.style.display = "none";
    valores.style.display = "none";
  } else {
    carrusel[0].insertAdjacentElement("afterend", categorias);
  }
}, 200);
