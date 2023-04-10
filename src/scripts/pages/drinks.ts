const buttons: NodeListOf<HTMLElement> = document.querySelectorAll(".js-tab-button");
let displayedSectionId: string;

buttons.forEach(button => {
	button.addEventListener('click', () => bindTab(button));
})

function bindTab(button: HTMLElement) {

	const displayedSection: HTMLElement = document.getElementById(displayedSectionId);

	if (displayedSection) {
		displayedSection.style.display = 'none';
	}

	const id: string = button.dataset.targetId;
	displayedSectionId = id;
	const section: HTMLElement = document.getElementById(id);
	section.style.display = 'block';
}
