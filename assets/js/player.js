class Player {
	constructor(state) {
		this.state = state
	}

	static getContainer() {
		return document.querySelector('.players')
	}

	setRound(round) {
		this.state.round = round % 4
	}

	getRound(){
		return this.state.round
	}
	
	draw(container) {
		const rounds = Array(this.state.rounds).fill(0).map((_, idx) => {
			let text = this.state.round === idx ? '♟️' : ''
			if (idx === this.state.rounds-1 && this.state.round === idx) text = '👑'

			const div = Elements.div(Elements.text(text))
			div.classList.add(this.state.colors[idx], 'md:text-xl', 'player-place')

			return div
		})
		const round = Elements.div(rounds)
		round.classList.add('round', 'flex')

		const categories = Array(this.state.categories.length).fill(0).map((_, idx) => {
			const div = Elements.div(Elements.text(this.state.categories[idx]))
			div.classList.add(this.state.colors[0], 'player-place')

			return div
		})
		const category = Elements.div(categories)
		category.classList.add('categories', 'flex', 'border-2', this.state.colors.at(-1))

		const element = Elements.div([round, category])
		element.classList.add('flex', 'gap-2')

		container.appendChild(element)
	}
}
