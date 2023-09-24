var menu = document.getElementById("menu");
var navMenu = document.getElementById("nav-menu");

menu.onclick = function () {
  menu.classList.toggle("open-menu");
  navMenu.classList.toggle("active");
};
