const menuIcon: HTMLElement = document.getElementById('menu-icon') as HTMLElement

menuIcon.addEventListener('click', () => {
  const mobileMenu: HTMLElement = document.getElementById('mobile-menu') as HTMLElement
  const body: HTMLElement = document.body

  if (mobileMenu.style.display === 'flex') {
    mobileMenu.style.display = 'none'
    body.style.overflow = 'visible'
  } else {
    mobileMenu.style.display = 'flex'
    body.style.overflow = 'hidden'
  }
})
