const menuIcon: HTMLElement = document.getElementById('menu-icon')

menuIcon.addEventListener('click', () => {
  const mobileMenu: HTMLElement = document.getElementById('mobile-menu')
  const body: HTMLElement = document.body

  if (mobileMenu.style.display === 'flex') {
    mobileMenu.style.display = 'none'
    body.style.overflow = 'auto'
  } else {
    mobileMenu.style.display = 'flex'
    body.style.overflow = 'hidden'
  }
})
