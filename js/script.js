const menuIcon = document.querySelector(".icon-menu");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menuList = document.querySelector(".menu__list");
const saleCenter = document.querySelector("#sale-center");
const formRequest = document.querySelector(".form-request");
const page = document.querySelector("html");
page.addEventListener("click", (event) => {
  if (
    // click out of mobile menu
    // AND menu is visible
    !event.target.closest(".header__menu") &&
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
});
menuIcon.addEventListener("click", showMobileMenu);
function showMobileMenu(event) {
  if (
    // click on icon AND menu is HIDDEN
    event.target.closest(".menu__icon") &&
    openMenu.getAttribute("aria-expanded") == "true" &&
    closeMenu.getAttribute("aria-expanded") == "false"
  ) {
    // => show mobile menu
    openMenu.setAttribute("aria-expanded", false);
    closeMenu.setAttribute("aria-expanded", true);
    openMenu.classList.add("closed");
    closeMenu.classList.remove("closed");
    menuList.classList.add("_active");
  } else if (
    // click on icon
    // AND menu is VISIBLE
    event.target.closest(".menu__icon") &&
    openMenu.getAttribute("aria-expanded") == "false" &&
    closeMenu.getAttribute("aria-expanded") == "true"
  ) {
    // => hide mobile menu
    openMenu.classList.remove("closed");
    closeMenu.classList.add("closed");
    menuList.classList.remove("_active");
    closeMenu.setAttribute("aria-expanded", false);
    openMenu.setAttribute("aria-expanded", true);
  }
}
// 
const resizeObserve = new ResizeObserver(() => {
  // hide mobile menu when page is resizing
  openMenu.classList.remove("closed");
  closeMenu.classList.add("closed");
  menuList.classList.remove("_active");
  closeMenu.setAttribute("aria-expanded", false);
  openMenu.setAttribute("aria-expanded", true);
});
resizeObserve.observe(page);

// form-request 
saleCenter.addEventListener("click", () => {
  // close mobile menu
  openMenu.classList.remove("closed");
  closeMenu.classList.add("closed");
  menuList.classList.remove("_active");
  closeMenu.setAttribute("aria-expanded", false);
  openMenu.setAttribute("aria-expanded", true);
  // open modal dialog
  formRequest.classList.add("_open-request");
});
