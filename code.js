let pen = document.getElementById("b").getContext("2d");
drawBackground()
// how to repeat the while-body N times
let N = 13
let i = 0
while (i < N) {
    drawSquare(10+i*30, 10+i*30)
    ++i; // i = i + 1; i += 1, i++
}

function drawBackground () {
  pen.fillStyle = "#aaaaaa"
  pen.fillRect(0, 0, 400, 400)  
} 

function drawSquare (x, y) {
    pen.fillStyle = "#0000ffff" // variable for the color
    pen.fillRect(x, y, 20, 20)

}