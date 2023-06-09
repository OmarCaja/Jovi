const headerLinks: NodeListOf<HTMLElement> = document.querySelectorAll('.js-mobile-menu-link')

headerLinks.forEach(button => {
  button.addEventListener('click', () => { closeMobileMenu() })
})

function closeMobileMenu(): void {
  const mobileMenu: HTMLElement = document.getElementById('mobile-menu') as HTMLElement
  mobileMenu.style.display = 'none'
}
