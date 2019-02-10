const bludgerGraphic = document.getElementById("bludger")

const bludger = { x: 0, y: 0, height: 244, width: 240, scale: 1 }

const drawBludger = () => {
	bludgerGraphic.style.width = bludger.width * bludger.scale
	bludgerGraphic.style.height = bludger.height * bludger.scale
	bludgerGraphic.style.top = 800 - bludger.y - bludger.height * bludger.scale
	bludgerGraphic.style.left = 200 + bludger.x - (bludger.width * bludger.scale / 2)
}

drawBludger()

let direction = 1
var speed = 0.1
var interval = 16

bludgerGraphic.onmousedown = () => {
	direction *= -1
	//speed += 0.002
	bludger.scale = bludger.scale - 0.1
	if (bludger.scale <= 0.001) {
		alert('YOU WIN!!!!!')
	}
}

setInterval(
	() => {
		bludger.y = bludger.y + direction * (speed * 1000 / interval)
		drawBludger()
	},
	interval
)