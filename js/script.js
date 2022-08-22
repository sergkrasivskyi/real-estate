const menuIcon = document.querySelector(".menu__icon");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menuList = document.querySelector(".menu__list");
const page = document.querySelector("html");
page.addEventListener(
  "click",
  () => {
    openMenu.classList.remove("closed");
    closeMenu.classList.add("closed");
    menuList.classList.remove("_active");
  },
  { capture: true }
);
const options = { capture: false };
menuIcon.addEventListener(
  "click",
  () => {
    if (
      openMenu.getAttribute("aria-expanded") == "true" &&
      closeMenu.getAttribute("aria-expanded") == "false"
    ) {
      openMenu.setAttribute("aria-expanded", false);
      closeMenu.setAttribute("aria-expanded", true);
      openMenu.classList.add("closed");
      closeMenu.classList.remove("closed");
      menuList.classList.add("_active");
    } else if (
      openMenu.getAttribute("aria-expanded") == "false" &&
      closeMenu.getAttribute("aria-expanded") == "true"
    ) {
      closeMenu.setAttribute("aria-expanded", false);
      openMenu.setAttribute("aria-expanded", true);
      openMenu.classList.remove("closed");
      closeMenu.classList.add("closed");
      menuList.classList.remove("_active");
    }
  },
  { capture: true }
);
