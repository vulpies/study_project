import calcScroll from "./calcScroll"

const images = () => {

	const imgPopup = document.createElement('div'),
		workSection = document.querySelector('.works'),
		bidImg = document.createElement('img'),
		scroll = calcScroll()

	imgPopup.classList.add('popup')
	workSection.appendChild(imgPopup)

	imgPopup.style.justifyContent = 'center'
	imgPopup.style.alignItems = 'center'
	imgPopup.style.display = 'none'

	imgPopup.appendChild(bidImg)

	workSection.addEventListener('click', (e) => {
		e.preventDefault()

		let target = e.target

		if (target && target.classList.contains('preview')) {
			imgPopup.style.display = 'flex'
			document.body.style.marginRight = `${scroll}px`;
			document.body.style.overflow = 'hidden'
			const path = target.parentNode.getAttribute('href')
			bidImg.setAttribute('src', path)
		}

		if (target && target.matches('div.popup')) {
			imgPopup.style.display = 'none'
			document.body.style.overflow = ''
			document.body.style.marginRight = `0px`;
		}
	})

}

export default images