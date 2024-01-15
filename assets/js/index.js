class Game {
	players = []
	playerContainer = null
	playersLength = 6
	playerRounds = 4
	playersColors = [
		['bg-yellow-50', 'bg-yellow-100', 'bg-yellow-200', 'bg-yellow-300', 'bg-yellow-400'],
		['bg-orange-50', 'bg-orange-100', 'bg-orange-200', 'bg-orange-300', 'bg-orange-400'],
		['bg-red-50', 'bg-red-100', 'bg-red-200', 'bg-red-300', 'bg-red-400'],
		['bg-pink-50', 'bg-pink-100', 'bg-pink-200', 'bg-pink-300', 'bg-pink-400'],
		['bg-blue-50', 'bg-blue-100', 'bg-blue-200', 'bg-blue-300', 'bg-blue-400'],
		['bg-emerald-50', 'bg-emerald-100', 'bg-emerald-200', 'bg-emerald-300', 'bg-emerald-400'],
		['bg-purple-50', 'bg-purple-100', 'bg-purple-200', 'bg-purple-300', 'bg-purple-400'],
	]
	actualPlayer = null

	spiningForCategory = false

	wheel = null
	card = null

	currentCategory = null

	categories = [
		{
			name: 'História',
			color: 'bg-yellow-400',
			border: 'border-yellow-400',
			data: () => HISTORY
		},
		{
			name: 'Esportes',
			color: 'bg-orange-400',
			border: 'border-orange-400',
			data: () => SPORTS
		},
		{
			name: 'Arte',
			color: 'bg-red-400',
			border: 'border-red-400',
			data: () => ART
		},
		{
			name: 'Pop',
			color: 'bg-pink-400',
			border: 'border-pink-400',
			data: () => POP
		},
		{
			name: 'Geografia',
			color: 'bg-blue-400',
			border: 'border-blue-400',
			data: () => GEOGRAPHY
		},
		{
			name: 'Ciências',
			color: 'bg-emerald-400',
			border: 'border-emerald-400',
			data: () => SCIENCE
		},
		{
			name: '👑',
			color: 'bg-purple-400',
			border: 'border-purple-400'
		}
	]

	constructor(){
		this.playerContainer = Player.getContainer()
		this.wheelContainer = Wheel.getContainer()
		this.card = new Card(this.cardCallback.bind(this))

		this.wheel = new Wheel(this.categories, this.wheelCallback.bind(this))

		for (let idx=0; idx<this.playersLength; idx++) {
			this.players.push(new Player({
				colors: this.playersColors[idx],
				rounds: this.playerRounds,
				round: 3,
				categories: this.categories,
				isCrowned: false,
				hasCategories: [],
				hasSpecials: ['bomb', 'pass', 'spin']
			}))
		}
	}

	drawPlayers() {
		Elements.clear(this.playerContainer)

		for (let i=0; i<this.players.length; i++) {
			const player = this.players[i]
			const playerIdx = this.players.indexOf(this.actualPlayer) === i
			const border = playerIdx
				? this.categories[this.players.indexOf(this.actualPlayer)].border
				: ''

			player.draw(
				this.playerContainer,
				playerIdx,
				border
			)
		}
	}

	drawWheel() {
		Elements.clear(this.wheelContainer)

		this.wheel.draw(this.wheelContainer)
	}

	wheelCallback(index) {
		if (this.spiningForCategory) {
			if (index === this.categories.length - 1) {
				setTimeout(function() { this.wheel.spinWheel() }.bind(this), 400)
				return
			}

			console.log(this.categories[index])
			this.currentCategory = this.categories[index]
			this.card.showModal(this.categories[index], this.actualPlayer)
			this.spiningForCategory = false
			return
		}

		if (index === this.categories.length - 1) {
			if (this.actualPlayer === null || this.actualPlayer === undefined) return

			this.actualPlayer.setRound(3)
			this.spiningForCategory = true
			setTimeout(function(){ this.wheel.spinWheel() }.bind(this), 500)
		} else {
			this.actualPlayer = this.players[index]
			const playerRound = this.players[index].getRound()

			if(playerRound < 3) this.players[index].setRound(playerRound+1)
			else {
				this.spiningForCategory = true
				setTimeout(function(){ this.wheel.spinWheel() }.bind(this), 500)
			}
		}

		console.log(this.actualPlayer.state.hasSpecials, index)
		this.drawPlayers()
	}

	cardCallback(action) {
		if (action === 'correct') {
			this.actualPlayer.state.hasCategories.push(this.currentCategory.name)
			this.drawPlayers()
		} else if (action === 'incorrect') {
			this.actualPlayer.setRound(0)
			this.drawPlayers()
		} else if (action === 'pass') {
			this.actualPlayer.state.hasSpecials = this.actualPlayer.state.hasSpecials.filter(item => item !== 'pass')
			const data = this.currentCategory.data()

			this.card.showModal(
				this.currentCategory,
				this.actualPlayer,
				data[Math.floor(Math.random() * data.length)]
			)
		} else if (action === 'spin') {
			this.actualPlayer.state.hasSpecials = this.actualPlayer.state.hasSpecials.filter(item => item !== 'spin')
			this.spiningForCategory = true
			this.wheel.spinWheel()
		}
	}
}

const game = new Game()
game.drawPlayers()
game.drawWheel()

