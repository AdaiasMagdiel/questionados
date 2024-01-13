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
		['bg-purple-50', 'bg-purple-100', 'bg-purple-200', 'bg-purple-300', 'bg-purple-400'],
		['bg-blue-50', 'bg-blue-100', 'bg-blue-200', 'bg-blue-300', 'bg-blue-400'],
		['bg-emerald-50', 'bg-emerald-100', 'bg-emerald-200', 'bg-emerald-300', 'bg-emerald-400'],
	]

	categories = ['A', 'B', 'C', 'D', 'E', 'F']

	wheel = null
	wheelColors = ['bg-yellow-300', 'bg-orange-300', 'bg-rose-400', 'bg-purple-400', 'bg-blue-400', 'bg-emerald-300']
	wheelTitles = 'ABCDEF'

	constructor(){
		this.playerContainer = Player.getContainer()
		this.wheelContainer = Wheel.getContainer()

		this.wheel = new Wheel(this.wheelColors, this.wheelTitles)

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

	drawWheel() {
		Elements.clear(this.wheelContainer)

		this.wheel.draw(this.wheelContainer)
	}
}

const game = new Game()
game.drawPlayers()
game.drawWheel()

