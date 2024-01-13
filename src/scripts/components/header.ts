const headerLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(
  ".js-mobile-menu-link"
);

headerLinks.forEach((button) => {
  button.addEventListener("click", () => {
    closeMobileMenu();
  });
});

function closeMobileMenu(): void {
  const menuIcon: HTMLInputElement = document.getElementById(
    "menu-icon-checkbox"
  ) as HTMLInputElement;

  const mobileMenu: HTMLElement = document.getElementById(
    "mobile-menu"
  ) as HTMLElement;

  menuIcon.click();
  mobileMenu.style.display = "none";
}

const parentNodes: NodeListOf<HTMLAnchorElement> =
  document.querySelectorAll(".parent-node");

parentNodes.forEach((parentNode) => {
  parentNode.addEventListener("click", () => {
    const childrenNavBar: HTMLDivElement = document.getElementById(
      "children-nav-bar"
    ) as HTMLDivElement;
    const childrenNode: HTMLUListElement = document.getElementById(
      "childrenNode-" + parentNode.id
    ) as HTMLUListElement;
    openSubNode(childrenNavBar, childrenNode);
  });
});

function openSubNode(
  childrenNavBar: HTMLDivElement,
  childrenNode: HTMLUListElement
): void {
  if (childrenNode.children.length > 0) {
    if (childrenNavBar.style.visibility === "hidden") {
      childrenNavBar.style.visibility = "visible";
      childrenNavBar.style.opacity = "1";
      childrenNode.style.visibility = "visible";
    } else {
      childrenNavBar.style.visibility = "hidden";
      childrenNavBar.style.opacity = "0";
      childrenNode.style.visibility = "hidden";
    }
  } else {
    childrenNavBar.style.visibility = "hidden";
    childrenNavBar.style.opacity = "0";
    hideAllChildrenNodes();
  }
}

function hideAllChildrenNodes(): void {
  const childrenNodes: NodeListOf<HTMLUListElement> = document.querySelectorAll(
    ".children-node"
  ) as NodeListOf<HTMLUListElement>;

  childrenNodes.forEach((childrenNode) => {
    childrenNode.style.visibility = "hidden";
  });
}
