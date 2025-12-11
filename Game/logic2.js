let pen = document.getElementById("Game"). getContext("2d")
let x = 200 // left for the player
let y = 100 // top for the player 
let dx = 10 // speed along x 
let dy = 5 //how fast the square moves (speed along y, delta y, increasement of y)
let g = 2 // increasement of dy
let is_left = false // state to indicate if I press down a key a
let is_right = false // state to indicate if I press down a key d
let JUMP_POWER = -20
let LIMIT = 5
let jump_times = LIMIT
document.addEventListener("keydown", onkeydown)
document.addEventListener("keyup", onkeyup)
drawBackground()

function onkeydown (event_object){
    if(event_object.key === "a") {
        is_left = true
    } else if(event_object.key === "d") {
        is_right = true
    } else if (event_object.key === "Enter") {
        setInterval(drawFrame, 50)
    } else if (event_object.key === " ") {
        if (jump_times > 0) {
            dy = JUMP_POWER
            jump_times -= 1
        }
    }
}

function onkeyup (event_object){
    if(event_object.key === "a") {
        is_left = false
    } else if(event_object.key === "d") {
        is_right = false
    }
}


function drawFrame (){
    dy = dy + g 
    y = y + dy
    if (y+20 > 400){
        y = 400 - 20
        dy = 0
        jump_times = LIMIT
    }

    if (is_left){
        x = x - dx
        if (x+20 < 0) {
            x = 400
        }
    }
    if (is_right){
        x = x + dx
        if (x > 400) {
            x = -20
        }
    }
    drawBackground()
    drawPlayer(x, y)

}

function drawBackground() {
    pen.fillStyle = "#ffb8f0ff"
    pen.fillRect(0, 0, 400, 400)
}

function drawPlayer (x, y) {
    pen.fillStyle = "#ff00a6ff"
    pen.fillRect(x, y, 20, 20)
}
