const yearEl = document.querySelector(".anoAtual");
const datacao = new Date().getFullYear();

yearEl.textContent = datacao;

const cards = document.querySelectorAll(".card");
const cards2 = document.querySelectorAll(".card2");

cards.forEach(function (item) {
  item.addEventListener("click", function () {
    removeActiveClasses();
    item.classList.add("active");
  });
});

function removeActiveClasses() {
  cards.forEach(function (item) {
    item.classList.remove("active");
  });
}

cards2.forEach(function (item) {
  item.addEventListener("click", function () {
    removeActiveClasses2();
    item.classList.add("active2");
  });
});

function removeActiveClasses2() {
  cards2.forEach(function (item) {
    item.classList.remove("active2");
  });
}

const cabecalho = document.querySelectorAll(".btn-nav");
const headerToggle = document.querySelector("header");
const links = document.querySelectorAll(".nav-link");

cabecalho.forEach(function (item) {
  item.addEventListener("click", function () {
    headerToggle.classList.toggle("open");
  });
});

links.forEach(function (item) {
  item.addEventListener("click", function () {
    headerToggle.classList.toggle("open");
  });
});
