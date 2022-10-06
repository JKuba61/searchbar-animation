const input = document.querySelector(`.nav__searchbar__input`)
const btn = document.querySelector(`.nav__searchbar__icon`)

const handleSearchbar = () => {
	input.classList.toggle(`active`)
}
btn.addEventListener(`click`, handleSearchbar)
