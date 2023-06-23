const menu = document.querySelector(".hamburger-menu");
const hamburger= document.querySelector(".mobile-menu-switch");
const closeIcon= document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("active");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);