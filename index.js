const header = document.querySelector("header");
const menuHamburger = document.querySelector("button");
const menuList = document.querySelector("ul");
const links = document.querySelectorAll("a");

menuHamburger.addEventListener("click", () => {
  menuHamburger.classList.toggle("active");
  menuList.classList.toggle("nav__ul--show");
});

links.forEach((links) => {
  links.addEventListener("click", () => {
    menuHamburger.classList.remove("active");
    menuList.classList.remove("nav__ul--show");
  });
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
