const headerLinks: NodeListOf<HTMLElement> = document.querySelectorAll('.js-mobile-menu-link')

headerLinks.forEach(button => {
  button.addEventListener('click', () => { closeMobileMenu() })
})

function closeMobileMenu(): void {
  const menuIcon: HTMLElement = document.getElementById('menu-icon-checkbox') as HTMLElement
  const mobileMenu: HTMLElement = document.getElementById('mobile-menu') as HTMLElement
  menuIcon.click()
  mobileMenu.style.display = 'none'
}
