const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let timesClicked = 0

loveMe.addEventListener('dblclick', (e) => {
	createHeart(e)
})

const createHeart = (e) => {
	const heart = document.createElement('i')
	heart.classList.add('fas')
	heart.classList.add('fa-heart')

	const x = e.clientX
	const y = e.clientY

	const leftOffset = e.target.offsetLeft
	const topOffset = e.target.offsetTop

	const xInside = x - leftOffset
	const yInside = y - topOffset

	heart.style.left = `${xInside}px`
	heart.style.top = `${yInside}px`

	loveMe.appendChild(heart)
	timesClicked++

	times.innerHTML = `${timesClicked}`

	setTimeout(() => heart.remove(), 10000)
}
