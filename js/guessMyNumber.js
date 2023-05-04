'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
console.log(secretNumber)
let score = 20
let highScore = 0
document.querySelector('.again').addEventListener('click', function () {
	score = 20
	secretNumber = Math.trunc(Math.random() * 20) + 1
	document.querySelector('.message').textContent = 'Start guessing...'
	document.querySelector('.number').textContent = '?'
	document.querySelector('.score').textContent = score
	document.querySelector('.guess').value = ''
	document.querySelector('body').style.backgroundColor = '#222'
	document.querySelector('.number').style.width = '15rem'
})
document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value)
	const deisplayMessage = function (message) {
		document.querySelector('.message').textContent = message
	}
	if (!guess) {
		deisplayMessage ('🛑 No number!')
		//guess is corect
	} else if (guess === secretNumber) {
		deisplayMessage ('You Win 🏆 🎉✨🎊')
		document.querySelector('body').style.backgroundColor = '#60b347'
		document.querySelector('.number').style.width = '30rem'
		document.querySelector('.number').textContent = secretNumber
		if (score > highScore) {
			highScore = score
			document.querySelector('.highscore').textContent = highScore
		}
		//guess is wrong
	} else if (guess !== secretNumber) {
		if (score > 1) {
			deisplayMessage (guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉')
			score--
			document.querySelector('.score').textContent = score
		} else {
			deisplayMessage ('Game Over 🎮🛑')
			document.querySelector('body').style.backgroundColor = '#D4212A'
			document.querySelector('.score').textContent = 0
		}
	}
	//guess is to high

	// else if (guess > secretNumber) {
	// 	if (score > 1) {
	// 		document.querySelector('.message').textContent = 'Too high! 📈'
	// 		score--
	// 		document.querySelector('.score').textContent = score
	// 	} else {
	// 		document.querySelector('.message').textContent = 'Game Over 🎮🛑'
	// 		document.querySelector('body').style.backgroundColor = '#D4212A'
	// 		document.querySelector('.score').textContent = 0
	// 	}

	// 	//guess is to low

	// } else if (guess < secretNumber) {
	// 	if (score > 1) {
	// 		document.querySelector('.message').textContent = 'Too low! 📉'
	// 		score--
	// 		document.querySelector('.score').textContent = score
	// 	} else {
	// 		document.querySelector('.message').textContent = 'Game Over 🎮🛑'
	// 		document.querySelector('body').style.backgroundColor = '#D4212A'
	// 		document.querySelector('.score').textContent = 0
	// 	}
	// }
})

console.log(secretNumber)
