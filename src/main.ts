import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [HelloWorldScene],
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.Center.CENTER_BOTH
	},
	render: { pixelArt: true }
}

export default new Phaser.Game(config)
