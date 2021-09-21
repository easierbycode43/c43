import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super('hello-world')
	}

	preload()
    {
        this.load.image('sky', 'assets/skies/space3.png')
        this.load.image('logo', 'assets/images/logo-dark43.png')
        this.load.image('green', 'assets/particles/green.png')
    }

    create()
    {
        this.add.image(400, 300, 'sky')

        const particles = this.add.particles('green')

        const emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 0.5, end: 0 },
            blendMode: 'ADD'
        })

        const logo = this.physics.add.image(400, 100, 'logo')

        logo.setVelocity(100, 200)
        logo.setBounce(1, 1)
        logo.setCollideWorldBounds(true)
        logo.setOrigin(0.93)

        emitter.startFollow(logo)
    }
}
