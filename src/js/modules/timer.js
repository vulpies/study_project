const timer = (id, deadline) => {

	const getTimeRemaining = (endTime) => {
		const time = Date.parse(endTime) - Date.parse(new Date()),
			seconds = Math.round((time / 1000) % 60),
			minutes = Math.round((time / 1000 / 60) % 60),
			hours = Math.round((time / (1000 * 60 * 60) % 24)),
			days = Math.round((time / (1000 * 60 * 60 * 24)))

		return {
			'total': time,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		}
	}

	const setClock = (selector, endTime) => {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000)

		updateClock()

		function updateClock() {
			const t = getTimeRemaining(endTime)

			days.textContent = addZero(t.days)
			hours.textContent = addZero(t.hours)
			minutes.textContent = addZero(t.minutes)
			seconds.textContent = addZero(t.seconds)

			if (t.total <= 0) {
				days.textContent = '00'
				hours.textContent = '00'
				minutes.textContent = '00'
				seconds.textContent = '00'

				clearInterval(timeInterval)
			}
		}
	}

	function addZero(num) {
		if (num < 10) return '0' + num
		else return num
	}

	setClock(id, deadline)

}

export default timer