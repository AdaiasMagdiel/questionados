class Card {
	constructor(callback){
		this.callback = callback
	}

	showModal(category, player, newQuestion) {
		const modal = document.querySelector('.question__modal')

		modal.addEventListener('click', function(e) {
			if (e.target === e.currentTarget) this.closeModal()
		}.bind(this))

		modal.classList.add('show')
		this.makeCard(category, player, newQuestion)
	}

	closeModal() {
		const innerCard = document.querySelector('.question__card-inner')
		const closeModalAction = () => {
			const modal = document.querySelector('.question__modal')

			modal.classList.add('hide')
			modal.addEventListener('animationend', function(e) {
				if (e.animationName !== 'hideModal') return
				modal.classList.remove('show', 'hide')
			})

			const cardTriggerBox = document.querySelector('.card__triggerbox')
			cardTriggerBox.classList.remove('opacity-0')

			const bg = document.querySelector('.question__card-back')
			if (bg.dataset.color !== '') bg.classList.remove(bg.dataset.color)
			bg.dataset.color = ''

			const triggers = document.querySelectorAll('.card__triggerbox button')
			triggers.forEach(item => {
				item.disabled = false
				item.classList.remove('scale-75')
			})
		}

		if (!Array.from(innerCard.classList).includes('show')) {
			closeModalAction()
			return
		}

		innerCard.classList.add('hide', 'transition-all', 'opacity-0')

		setTimeout(() => {
			const bg = document.querySelector('.question__card-back')
			bg.style.zIndex = '1'
		}, 300)

		innerCard.addEventListener('animationend', function(e) {
			if (e.animationName !== 'hideCard') return

			closeModalAction()
			innerCard.classList.remove('show', 'hide', 'transition-all', 'opacity-0')
		})
	}

	makeCard(category, player, newQuestion) {
		const innerCard = document.querySelector('.question__card-inner')

		const bg = document.querySelector('.question__card-back')
		bg.classList.add(category.color)
		bg.dataset.color = category.color

		bg.addEventListener('click', (e) => {
			innerCard.classList.add('show')

			setTimeout(() => bg.style.zIndex = '-1', 300)
		})

		this.drawCard(category, player, newQuestion)
	}

	drawCard(category, player, newQuestion) {
		const questionData = this.getRandomQuestion(category.data(), newQuestion)


		const cardQuestion = document.querySelector('.card__question')
		Elements.clear(cardQuestion)
		cardQuestion.appendChild(Elements.text(questionData.question))


		const cardInfoBox = document.querySelector('.card__infobox')
		Elements.clear(cardInfoBox)


		const cardTriggerBox = document.querySelector('.card__triggerbox')


		const cardChoicesBox = document.querySelector('.card__choicesbox')
		const choices = questionData.choices.map((item, idx) => {
			const choice = Elements.new(
				'button',
				Elements.text(`${idx+1}. ${item}`)
			)
			choice.classList.add('border', 'rounded-md', 'px-4', 'py-2', 'text-left', 'disabled:opacity-35', '[&:not(:disabled)]:active:scale-[.98]')
			choice.dataset.correct = 'false'


			if (item === questionData.choices[questionData.answer]) {
				choice.classList.add('border-2', 'border-emerald-500')
				choice.dataset.correct = 'true'
			}

			choice.addEventListener('click', function(e) {
				cardTriggerBox.classList.add('opacity-0')
				cardChoicesBox.querySelectorAll('button').forEach(item => {
					item.disabled = true
				})

				if (idx !== questionData.answer) {
					e.currentTarget.classList.add('border-2', 'border-red-400')
					cardInfoBox.appendChild(Elements.text('Errado!'))
					cardInfoBox.classList.add('text-red-400')

					this.closeModal()
					setTimeout(function(){ this.callback('incorrect') }.bind(this), 1500)
				} else {
					cardInfoBox.appendChild(Elements.text('Correto!'))
					cardInfoBox.classList.add('text-green-400')

					this.closeModal()
					setTimeout(function(){ this.callback('correct') }.bind(this), 1500)
				}
			}.bind(this))

			return choice
		})

		Elements.clear(cardChoicesBox)
		Elements.add(cardChoicesBox, choices)


		const bomb = document.querySelector('.card__trigger-bomb')
		const pass = document.querySelector('.card__trigger-pass')
		const spin = document.querySelector('.card__trigger-spin')

		if (!player.state.hasSpecials.includes('bomb')) {
			bomb.disabled = true
			bomb.classList.add('scale-75')
		}
		if (!player.state.hasSpecials.includes('pass')) {
			pass.disabled = true
			pass.classList.add('scale-75')
		}
		if (!player.state.hasSpecials.includes('spin')) {
			spin.disabled = true
			spin.classList.add('scale-75')
		}

		bomb.addEventListener('click', e => {
			player.state.hasSpecials = player.state.hasSpecials.filter(item => item !== 'bomb')


			e.currentTarget.disabled = true
			e.currentTarget.classList.add('scale-75')

			let buttons = Array.from(cardChoicesBox.querySelectorAll('button'))
							.filter(item => item.dataset.correct === 'false')

			console.log(buttons)

			buttons = this.shuffleArray(buttons)
			buttons[0].disabled = true
			buttons[0].style.opacity = '.25'

			buttons[1].disabled = true
			buttons[1].style.opacity = '.25'
		})

		pass.addEventListener('click', function(e) {
			this.closeModal()
			setTimeout(function(){ this.callback('pass') }.bind(this), 1500)
		}.bind(this))

		spin.addEventListener('click', function(e) {
			this.closeModal()
			setTimeout(function(){ this.callback('spin') }.bind(this), 1500)
		}.bind(this))
	}

	getRandomQuestion(data, questionData) {
		let question = null

		if (questionData === undefined || questionData === null) {
			const index = Math.floor(Math.random() * data.length)
			question = data[index]

			// question = {
			//     question: "Quem pintou a Mona Lisa?",
			//     choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
			//     answer: 0
			// }
		} else {
			question = questionData
		}

		const correctItem = question.choices[question.answer]

		question.choices = this.shuffleArray(question.choices)

		question.answer = question.choices.indexOf(correctItem)

		return question
	}

	shuffleArray(array) {
		return array
			.map(value => ({ value, sort: Math.random() }))
		    .sort((a, b) => a.sort - b.sort)
		    .map(({ value }) => value)
	}
}
