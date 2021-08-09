window.addEventListener('load', () => {
	const showDropdown = (optionElement) => {
		const classes = optionElement.querySelector('.sort-option-dropdown').classList
		classes.add('active-sort-option-dropdown')
	}

	const hideOptionDropdowns = () => 
		document
			.querySelectorAll('.active-sort-option-dropdown')
			.forEach(dropdown => dropdown.classList.remove('active-sort-option-dropdown'))

	document.querySelectorAll('.sort-option')
					.forEach(option => option.addEventListener('click', (e) => {
						e.stopPropagation()
						hideOptionDropdowns()
						showDropdown(option)
					}))
						
	window.addEventListener('click', () => {
			hideOptionDropdowns()
	})
})