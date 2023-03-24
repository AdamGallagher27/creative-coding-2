

let balls = []
let uuid = 0

class Ball {
	constructor() {
		this.x = random(0, 500)
		this.y = random(0, 500)
		this.uuid = uuid += 1
	}

	render(){
		ellipse(this.x, this.y, 10)
	}
}


function getDistance(i, j) {
	const x = i.x - j.x
	const y = i.y - j.y

	return Math.sqrt((x * x) + (y * y))
}


function setup() {

	let ops  = 0

	for(let i = 0; i < 100; i++) {
		balls.push(new Ball)
	}

	for(let i = 0; i < balls.length; i++){
		ops += 1
		for(let j = i + 1; j < balls.length; j++) {
			ops += 1
			console.log( "ball" + balls[i].uuid)
			console.log("ball" + balls[j].uuid)
			console.log(getDistance(balls[i], balls[j]))
		}

	}

	console.log(ops)
}


function draw() {
	createCanvas(500, 500)
	background(0)

	for(let i = 0; i < balls.length; i++) {
		balls[i].render()
	}


	

}