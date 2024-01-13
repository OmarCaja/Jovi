const menuIcon: HTMLElement = document.getElementById(
  "menu-icon"
) as HTMLElement;

menuIcon.addEventListener("click", () => {
  const mobileMenu: HTMLElement = document.getElementById(
    "mobile-menu"
  ) as HTMLElement;
  const body: HTMLElement = document.body;

  if (mobileMenu.style.left === "0px") {
    mobileMenu.style.visibility = "hidden";
    mobileMenu.style.left = "-100vw";
    body.style.overflow = "visible";
  } else {
    mobileMenu.style.visibility = "visible";
    mobileMenu.style.left = "0px";
    body.style.overflow = "hidden";
  }
});
