const menu = document.querySelector("[data-menu]");
const menuToggleBtn = document.querySelector("[data-menu-toggle]");

const toggleMenu = () => {
  menu.classList.toggle("open");
  menuToggleBtn.classList.toggle("open");
};

const closeMenu = (event) => {
  if (event.target.tagName === "A") {
    menu.classList.remove("open");
    menuToggleBtn.classList.remove("open");
  }
};

menuToggleBtn.addEventListener("click", toggleMenu);
menu.addEventListener("click", closeMenu);