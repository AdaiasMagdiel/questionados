class Elements {
	static clear(element) {
		element.innerHTML = ''
	}

	static div(children) {
		const div = document.createElement('div')

		if (children) {
			if (Array.isArray(children)) {
				for (let child of children) div.appendChild(child)
			} else {
				div.appendChild(children)
			}
		}

		return div
	}

	static text(content) {
		return document.createTextNode(content)
	}
}

class Player {
	constructor(state) {
		this.state = state
	}

	setRound(round) {
		this.state.round = round % 4
	}

	getRound(){
		return this.state.round
	}
	
	draw(container) {
		const rounds = Array(this.state.rounds).fill(0).map((_, idx) => {
			let text = this.state.round === idx ? '♟️' : idx+1
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

class Game {
	//colors = ['bg-yellow-400', 'bg-orange-400', 'bg-red-400', 'bg-pink-400', 'bg-blue-400', 'bg-green-400']
	players = []
	playerContainer = null
	playersLength = 6
	playerRounds = 4
	playersColors = [
		['bg-yellow-50', 'bg-yellow-100', 'bg-yellow-200', 'bg-yellow-300', 'bg-yellow-400'],
		['bg-orange-50', 'bg-orange-100', 'bg-orange-200', 'bg-orange-300', 'bg-orange-400'],
		['bg-rose-50', 'bg-rose-100', 'bg-rose-200', 'bg-rose-300', 'bg-rose-400'],
		['bg-pink-50', 'bg-pink-100', 'bg-pink-200', 'bg-pink-300', 'bg-pink-400'],
		['bg-blue-50', 'bg-blue-100', 'bg-blue-200', 'bg-blue-300', 'bg-blue-400'],
		['bg-emerald-50', 'bg-emerald-100', 'bg-emerald-200', 'bg-emerald-300', 'bg-emerald-400'],
	]

	categories = ['A', 'B', 'C', 'D', 'E', 'F']

	constructor(){
		this.playerContainer = document.querySelector('.players')

		for (let idx=0; idx<this.playersLength; idx++) {
			this.players.push(new Player({
				colors: this.playersColors[idx],
				rounds: this.playerRounds,
				round: 0,
				categories: this.categories,
				isCrowned: false
			}))
		}
	}

	drawPlayers() {
		Elements.clear(this.playerContainer)

		for (let player of this.players) {
			player.draw(this.playerContainer)
		}
	}
}

const game = new Game()
game.drawPlayers()

