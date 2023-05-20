const headerLinks: NodeListOf<HTMLElement> = document.querySelectorAll('.js-mobile-menu-link')

headerLinks.forEach(button => {
  button.addEventListener('click', () => { closeMobileMenu(button) })
})

function closeMobileMenu (button: HTMLElement): void {
  const mobileMenu: HTMLElement = document.getElementById('mobile-menu')
  mobileMenu.style.display = 'none'
}
