var menu = document.getElementById("menu");
var navMenu = document.getElementById("nav-menu");
var header = document.getElementById("header");
var main = document.getElementById("main");
var link = document.getElementsByClassName("nav-link");

var footerBurger = document.getElementById("footer-menuopen");
var footerBurgerClose = document.getElementById("footer-menuclose");
var footerLinks = document.getElementById("footer-links");
var footerLink = document.getElementsByClassName("footer-link");
var gradient = document.getElementById("gradient");

menu.onclick = function () {
  menu.classList.toggle("open-menu");
  navMenu.classList.toggle("active");
};

for (var i = 0; i < link.length; i++) {
  link[i].onclick = function () {
    menu.classList.toggle("open-menu");
    navMenu.classList.toggle("active");
  };
}

for (var i = 0; i < footerLink.length; i++) {
  footerLink[i].onclick = function () {
    footerLinks.classList.remove("active");
    gradient.classList.remove("active");
  };
}

footerBurger.onclick = function () {
  footerLinks.classList.add("active");
  gradient.classList.add("active");
};

footerBurgerClose.onclick = function () {
  footerLinks.classList.remove("active");
  gradient.classList.remove("active");
};

gradient.onclick = function () {
  footerLinks.classList.remove("active");
  gradient.classList.remove("active");
};

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 0) {
    header.classList.add("fixed");
    main.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
    main.classList.remove("fixed");
  }
});
