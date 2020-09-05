const toggleBtn = document.querySelector(".navbar__togleBtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");
//const header = document.querySelector(".header");
//const navbar = document.querySelector(".navbar__icons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
  //header.classList.toggle("active");
  //navbar.classList.toggle("navbar");
});
