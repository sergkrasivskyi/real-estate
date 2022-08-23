const menuHeader = document.querySelector(".header__menu");
const menuIcon = document.querySelector(".menu__icon");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menuList = document.querySelector(".menu__list");
const page = document.querySelector("html");
page.addEventListener("click", showMobileMenu);
function showMobileMenu(event) {
  if (
    // click on icon and menu is hidden
    event.target.closest(".menu__icon") &&
    openMenu.getAttribute("aria-expanded") == "true" &&
    closeMenu.getAttribute("aria-expanded") == "false"
  ) {
    // show mobile menu
    openMenu.setAttribute("aria-expanded", false);
    closeMenu.setAttribute("aria-expanded", true);
    openMenu.classList.add("closed");
    closeMenu.classList.remove("closed");
    menuList.classList.add("_active");
  } else if (
    // click on icon
    // OR click out of menu
    // AND menu is visible
    (event.target.closest(".menu__icon") ||
      !event.target.closest(".header__menu")) &&
    openMenu.getAttribute("aria-expanded") == "false" &&
    closeMenu.getAttribute("aria-expanded") == "true"
  ) {
    // hide mobile menu
    openMenu.classList.remove("closed");
    closeMenu.classList.add("closed");
    menuList.classList.remove("_active");
    closeMenu.setAttribute("aria-expanded", false);
    openMenu.setAttribute("aria-expanded", true);
  }
}

const resizeObserve = new ResizeObserver(() => {
  // hide mobile menu when page is resizing
  openMenu.classList.remove("closed");
  closeMenu.classList.add("closed");
  menuList.classList.remove("_active");
  closeMenu.setAttribute("aria-expanded", false);
  openMenu.setAttribute("aria-expanded", true);
});
resizeObserve.observe(page);
