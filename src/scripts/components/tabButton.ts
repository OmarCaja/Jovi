const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('.js-tab-button')
let displayedSectionId: string

buttons.forEach(button => {
  button.addEventListener('click', () => { bindTab(button) })
})
buttons.item(0).click()

function bindTab (button: HTMLElement): void {
  const displayedSection: HTMLElement = document.getElementById(displayedSectionId) as HTMLElement

  if (displayedSection != null) {
    displayedSection.style.display = 'none'
  }

  const id: string = button.dataset.targetId as string
  displayedSectionId = id

  const section: HTMLElement = document.getElementById(id) as HTMLElement
  section.style.display = 'flex'
}
